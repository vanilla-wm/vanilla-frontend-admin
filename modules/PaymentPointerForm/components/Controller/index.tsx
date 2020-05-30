import Button from '../../../../components/Button'
import { FormAction } from './index.styled'
import Text from '../../../../components/Text'
import React from 'react'

export default ({ icon, children, ...restProps }) => (
  <Button secondary {...restProps}>
    <FormAction>
      {icon}
      <Text ml="6px" color="inherit" bold isMono>
        {children}
      </Text>
    </FormAction>
  </Button>
)
