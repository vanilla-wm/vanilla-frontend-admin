import Link from 'next/link'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import Button from '../Button'
import AuthContext from '../../config/AuthContext'
import messages from './index.messages'

export default () => {
  const { logout } = React.useContext(AuthContext)

  return (
    <Link href="/">
      <Button as="a" onClick={logout}>
        <FormattedMessage {...messages.logoutButton} />
      </Button>
    </Link>
  )
}
