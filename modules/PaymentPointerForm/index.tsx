import Text from '../../components/Text'
import Input from '../../components/forms/Input'
import React from 'react'
import Button from '../../components/Button'
import EditIcon from '../../assets/EditIcon'
import { EditLink } from './index.styled'
import Box from '../../components/Box'

export default () => (
  <>
    <Text primary mt={24}>
      Payment pointer
    </Text>
    <Text mt={12} mb={1} isMuted>
      Payment Pointers are a standardized identifier for payment accounts. In
      the same way that an email address provides.
    </Text>
    <Button secondary>More Info</Button>

    <Input
      mt={24}
      mb="8px"
      label="Your Payment pointer"
      placeholder="Add payment pointer"
    />
    <Button secondary>
      <EditLink>
        <EditIcon />
        <Box ml="6px">Edit</Box>
      </EditLink>
    </Button>
  </>
)
