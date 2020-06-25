import React from 'react'
import Prism from 'prismjs'
import { Container } from './index.styled'

type Props = {
  code: string
  plugins?: string[]
  language: string
}

export default ({ code, plugins, language }: Props) => {
  const ref = React.useRef()
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
    highlight()
  }, [isMounted])

  const highlight = () => {
    if (ref.current) {
      Prism.highlightElement(ref.current)
    }
  }

  if (!isMounted) {
    return null
  }

  return (
    <Container as="pre" className={!plugins ? '' : plugins.join(' ')}>
      <code ref={ref} className={`language-${language}`}>
        {code.trim()}
      </code>
    </Container>
  )
}
