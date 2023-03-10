export const setRegistered = value => {
  localStorage.setItem('RegisteredNewsletter', value)
}

export const getRegistered = () => {
  const isRegistered = localStorage.getItem('RegisteredNewsletter')
  return isRegistered
}

export const setNewsletterClosed = value => {
  localStorage.setItem('NewsletterClosed', value)
}

export const getNewsletterClosed = () => {
  const isClosed = localStorage.getItem('NewsletterClosed')
  return isClosed
}

export const setSessionDisplayed = value => {
  sessionStorage.setItem('NewsletterModalDisplayed', value)
}

export const getSessionDisplayed = () => {
  const displayed = sessionStorage.getItem('NewsletterModalDisplayed')
  return displayed
}
