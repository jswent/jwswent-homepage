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

  const handleOpen = (shouldDisplay) => {
    const timer = setTimeout(() => {
      if (shouldDisplay) {
        onOpen()
        setSessionDisplayed(true)
      }
    }, 4000)
    return () => clearTimeout(timer)
  }

  useEffect(() => {
    const registered = getRegistered()
    const session = getSessionDisplayed()
    const shouldDisplay = registered || session
    !shouldDisplay && handleOpen(shouldDisplay)
  }, [])

  return <NewsModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
}

export default TimedModal
