import Link from 'next/link'
import Button from '../../../../components/Button'
import React from 'react'

export const PageLinksComponent = ({ asPath, paths }) => (
  <>
    {paths.map(({ href, label }) => (
      <Link href={href} key={href}>
        <Button as="a" tertiary isActive={asPath === href}>
          {label}
        </Button>
      </Link>
    ))}
  </>
)

export default ({ asPath }) => (
  <PageLinksComponent
    asPath={asPath}
    paths={[
      {
        href: '/transactions',
        label: 'Transactions',
      },
      {
        href: '/analytics',
        label: 'Analytics',
      },
    ]}
  />
)
