import { useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react'
import NewsModal from './newsmodal'
import {
  getRegistered,
  getSessionDisplayed,
  setSessionDisplayed
} from './persistent'

const TimedModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const shouldDisplayAfterTime = new Promise(resolve => {
    setTimeout(() => {
      const registered = getRegistered()
      const session = getSessionDisplayed()
      const shouldDisplay = registered || session
      resolve(shouldDisplay)
    }, 4000)
  })

  useEffect(() => {
    shouldDisplayAfterTime.then(shouldDisplay => {
      if (!shouldDisplay) {
        onOpen()
        setSessionDisplayed(true)
      }
    })
  }, [])

  return <NewsModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
}

export default TimedModal
