import Link from 'next/link'
import Button from '../Button'
import React from 'react'
import AuthContext from '../../config/AuthContext'

export default () => {
  const { logout } = React.useContext(AuthContext)

  return (
    <Link href="/">
      <Button as="a" onClick={logout}>
        Logout
      </Button>
    </Link>
  )
}
