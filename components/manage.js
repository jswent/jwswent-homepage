import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  Input,
  useColorModeValue,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Spinner,
  Link,
  Skeleton,
} from '@chakra-ui/react'
import Paragraph from './paragraph'
import { useEffect, useRef, useState } from 'react'
import { auth } from './firebase'
import { signInWithCustomToken } from 'firebase/auth'
import { AnimatePresence, motion } from 'framer-motion'

const ManageUnlogged = () => {
  const [email, setEmail] = useState('')
  const [formState, setFormState] = useState(0)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleSubmit = async event => {
    event.preventDefault()
    setFormState(1)

    console.log(email)
    try {
      await fetch('/api/requestVerification', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
        body: JSON.stringify({
          email: email
        })
      })
        .then(res => res.json())
        .then(res => {
          setFormState(2)
          onOpen()
        })
    } catch (err) {
      console.log(err)
      setFormState(3)
    }
  }

  return (
    <div>
      <Paragraph className='mb-4'>
        To manage your subscription status, please first verify your email.
      </Paragraph>
      <form onSubmit={handleSubmit}>
        <FormControl className='sm:flex sm:space-x-2 px-2'>
          <Input
            type='email'
            placeholder='Email'
            borderColor={useColorModeValue('gray.300', 'gray.700')}
            aria-label='Email'
            isRequired
            onChange={e => setEmail(e.target.value)}
          />
          <Button
            type='submit'
            colorScheme={formState == 3 ? 'red' : 'teal'}
            variant='solid'
            disabled={formState == 1}
            className='mt-4 w-full sm:mt-0 sm:w-24'
          >
            {formState == 1 ? (
              <svg
                className='animate-spin h-6 w-6 text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle
                  className='opacity-50'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                ></circle>
                <path
                  className='opacity-100'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                ></path>
              </svg>
            ) : (
              'Submit'
            )}
          </Button>
        </FormControl>
      </form>
      {formState == 3 && (
        <div className='absolute mt-6 ml-6 text-red-500'>
          An error occurred. Please try again.
        </div>
      )}
      {formState == 1 && (
        <div className='loading absolute mt-6 ml-6 text-orange-600'>
          Processing your request ...
        </div>
      )}
      <VerificationModal
        modalDisclosure={{ isOpen, onOpen, onClose }}
        email={email}
      />
    </div>
  )
}

const VerificationModal = ({ modalDisclosure, email }) => {
  const { isOpen, onOpen, onClose } = modalDisclosure
  const [code, setCode] = useState('')
  const [formState, setFormState] = useState(0)

  const openRef = useRef(null)

  const handleSubmit = async event => {
    event.preventDefault()
    console.log(code)
    setFormState(1)
    try {
      await fetch('/api/registerEmailOtp', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
        body: JSON.stringify({
          email: email,
          otp: code
        })
      })
        .then(res => res.json())
        .then(res => {
          if (res.status == 400) {
            setFormState(3)
            throw new Error('Invalid code')
          }

          signInWithCustomToken(auth, res.customToken)
            .then(userCredential => {
              console.log(userCredential)
              onClose()
            })
            .catch(error => {
              setFormState(3)
              console.log(error)
            })
        })
    } catch (err) {
      setFormState(3)
      console.log(err)
    }
  }

  return (
    <Modal initialFocusRef={openRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize='4xl'>Verify your email</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <p className='mb-5'>
              We&apos;ve sent a verification code to your email. Please enter it
              below.
            </p>
            <FormControl>
              <Input
                placeholder='Verification code'
                type='text'
                isRequired
                ref={openRef}
                onChange={event => setCode(event.currentTarget.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter className='mb-2'>
            <Button
              mr='auto'
              mb={5}
              colorScheme='teal'
              type='submit'
              disabled={formState == 1}
              className='w-24'
            >
              {formState == 1 ? <Spinner /> : 'Submit'}
            </Button>
            {formState == 3 && (
              <div className='-mt-5 text-red-500'>
                Something went wrong. Please try again.
              </div>
            )}
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

const variants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.6
    }
  },
  hide: {
    y: -20,
    opacity: 0
  }
}

const ManageLogged = ({ user }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [subscribed, setSubscribed] = useState(true)
  const [alertState, setAlertState] = useState(0)
  const [subscribeState, setSubscribeState] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef(null)

  function logout() {
    auth
      .signOut()
      .then(() => {
        console.log('Signed out')
      })
      .catch(error => {
        console.log(error)
      })
  }

  async function unsubscribe() {
    try {
      setAlertState(1)
      await fetch('/api/unregisterEmailFromNewsletter', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
        body: JSON.stringify({
          email: user.email,
          uid: user.uid
        })
      })
        .then(res => res.json())
        .then(res => {
          if (res.status == 400) {
            setAlertState(3)
            throw new Error('Could not unsubscribe')
          } else {
            setSubscribed(false)
            setAlertState(2)
            onClose()
          }
        })
        .catch(err => {
          throw new Error(err)
        })
    } catch (err) {
      console.error(err)
    }
  }

  async function subscribe() {
    try {
      setSubscribeState(1)
      await fetch('/api/newsletterRegistration', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
        body: JSON.stringify({
          email: user.email
        })
      })
        .then(res => res.json())
        .then(res => {
          if (res.status == 400) {
            throw new Error('Could not subscribe to newsletter')
          } else {
            setSubscribeState(2)
            setSubscribed(true)
          }
        })
        .catch(err => {
          throw new Error(err)
        })
    } catch (err) {
      setSubscribeState(3)
      console.error(err)
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        await fetch('/api/requestSubscriptionStatus', {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: { 'Content-Type': 'application/json' },
          redirect: 'follow',
          body: JSON.stringify({
            email: user.email,
            uid: user.uid
          })
        })
          .then(res => res.json())
          .then(res => {
            if (res.status == 400) {
              throw new Error('Invalid code')
            }
            setSubscribed(res.subscribed)
            setIsLoading(false)
          })
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [user])

  return (
    <>
      <div>
        <AnimatePresence>
          {isLoading && (
            <motion.div variants={variants} animate={'show'} initial='hide'>
              <Skeleton height='80px' />
            </motion.div>
          )}
          {!isLoading && (
            <motion.div variants={variants} animate={'show'} initial='hide'>
              <div className='mb-2 flex'>
                Welcome, <Link className='ml-2'>{user.displayName}</Link>!
              </div>
              <div className='flex'>
                Your current status &nbsp;{' '}
                {subscribed ? (
                  <p className='text-green-500'>subscribed</p>
                ) : (
                  <p className='text-red-500'>unsubscribed</p>
                )}
              </div>
              {subscribed && (
                <Button
                  colorScheme='red'
                  color='white'
                  backgroundColor={'rgb(239 68 68)'}
                  className='mt-4'
                  onClick={onOpen}
                >
                  Unsubscribe
                </Button>
              )}
              {!subscribed && (
                <Button
                  colorScheme='green'
                  color='white'
                  backgroundColor={'rgb(34 197 94)'}
                  className='mt-4'
                  onClick={subscribe}
                >
                  Subscribe
                </Button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        <p className='mt-4'>
          Need to change your email? <Link onClick={logout}>Click here</Link>
        </p>
      </div>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='3xl' fontWeight='bold'>
              We&apos;re sorry to see you go!
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can always subscribe again at a later time.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme='red'
                onClick={unsubscribe}
                ml={3}
                backgroundColor={'rgb(239 68 68)'}
                color={'white'}
              >
                {alertState == 1 ? <Spinner /> : 'Unsubscribe'}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export { ManageUnlogged, ManageLogged }
