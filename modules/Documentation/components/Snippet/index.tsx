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
  React.useEffect(() => {
    highlight()
  })

  const highlight = () => {
    if (ref.current) {
      Prism.highlightElement(ref.current)
    }
  }

  return (
    <Container as="pre" className={!plugins ? '' : plugins.join(' ')}>
      <code ref={ref} className={`language-${language}`}>
        {code.trim()}
      </code>
    </Container>
  )
}
