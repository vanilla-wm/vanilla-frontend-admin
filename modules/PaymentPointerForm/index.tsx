import Text from '../../components/Text'
import Input from '../../components/forms/Input'
import React from 'react'
import Button from '../../components/Button'
import EditIcon from '../../assets/EditIcon'
import { FormAction } from './index.styled'
import Box from '../../components/Box'
import Flex from '../../components/Flex'
import CheckIcon from '../../assets/CheckIcon'
import CloseIcon from '../../assets/CloseIcon'

export default () => {
  const [state, setState] = React.useState('init')
  const init = () => setState('init')
  const inputRef = React.useRef()

  return (
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
        ref={inputRef}
        mt={24}
        mb="8px"
        hasCopy={false}
        isDisabled={state === 'init'}
        label="Your Payment pointer"
        placeholder="Add payment pointer"
      />
      {state === 'init' && (
        <Button
          secondary
          onClick={() => {
            setState('edit')
            // @ts-ignore
            setTimeout(() => inputRef.current.focus(), 10)
          }}
        >
          <FormAction>
            <EditIcon />
            <Box ml="6px">Edit</Box>
          </FormAction>
        </Button>
      )}
      {state === 'edit' && (
        <Flex>
          <Box mr="32px">
            <Button secondary onClick={init}>
              <FormAction>
                <CheckIcon />
                <Box ml="6px">Save</Box>
              </FormAction>
            </Button>
          </Box>
          <Button secondary orange onClick={init}>
            <FormAction>
              <CloseIcon />
              <Box ml="6px">Cancel</Box>
            </FormAction>
          </Button>
        </Flex>
      )}
    </>
  )
}
