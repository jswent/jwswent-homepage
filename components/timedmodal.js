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

  const handleOpen = () => {
    const timer = setTimeout(() => {
      onOpen()
      setSessionDisplayed(true)
    }, 4000)
    return () => clearTimeout(timer)
  }

  useEffect(() => {
    const registered = getRegistered()
    const session = getSessionDisplayed()
    !(registered || session) && handleOpen()
  }, [])

  return <NewsModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
}

export default TimedModal
