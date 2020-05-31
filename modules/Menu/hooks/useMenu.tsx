import React from 'react'

export const useMenu = (closeOnResize) => {
  const [isOpened, setOpened] = React.useState(false)

  const toggle = () => {
    if (isOpened) {
      closeAction()
    } else {
      openAction()
    }
  }

  const openAction = () => {
    if (!isOpened) {
      setOpened(true)
      document.body.style.top = `-${window.scrollY}px`
      document.body.style['overflow-y'] = 'hidden'
      document.body.style.height = '100vh'
      document.body.style.width = '100%'
      document.body.style.position = 'fixed'
    }
  }

  const closeAction = () => {
    if (isOpened) {
      setOpened(false)
      document.body.style.overflow = ''
      document.body.style.height = ''
      document.body.style.width = ''
      const top = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      window.scrollTo(0, parseInt(top || '0', 10) * -1)
    }
  }

  React.useEffect(() => {
    const resize = () => {
      if (closeOnResize) {
        closeAction()
      }
    }

    window.addEventListener('resize', resize, false)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return {
    isOpened,
    toggle,
  }
}
