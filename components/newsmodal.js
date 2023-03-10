import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  Button,
  CircularProgress
} from '@chakra-ui/react'
import React, { useRef, useState } from 'react'

import { setRegistered } from './persistent'

const NewsModal = ({ isOpen, onOpen, onClose }) => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)

  const openRef = useRef(null)

  const handleSubmit = async event => {
    event.preventDefault()
    setIsLoading(true)

    console.log(email)
    try {
      await fetch('/api/newsletterRegistration', {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
        body: JSON.stringify({
          email: email
        })
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          // handle firebase response here
        })
      setIsLoading(false)
      setIsRegistered(true)
      setRegistered(true)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Modal initialFocusRef={openRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {isRegistered ? (
          <ModalContent>
            <ModalHeader mb={-2} fontSize='4xl'>
              You&apos;re all set!
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              You&apos;re registered to receive emails for my posts. Look for an
              email within the next couple of days!
            </ModalBody>
            <ModalFooter>
              <Button mr='auto' onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        ) : (
          <ModalContent>
            <ModalHeader fontSize='4xl'>
              Receive these posts by email like 1000+ other tech enthusiasts!
            </ModalHeader>
            <ModalCloseButton />
            <form onSubmit={handleSubmit}>
              <ModalBody>
                <FormControl>
                  <Input
                    placeholder='Email'
                    type='email'
                    isRequired
                    ref={openRef}
                    onChange={event => setEmail(event.currentTarget.value)}
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button mr='auto' mb={5} colorScheme='teal' type='submit'>
                  {isLoading ? (
                    <CircularProgress
                      isIndeterminate
                      size='24px'
                      color='teal'
                    />
                  ) : (
                    'Sign up'
                  )}
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        )}
      </Modal>
    </>
  )
}

export default NewsModal
