import Text from '../../components/Text'
import Input from '../../components/forms/Input'
import React from 'react'
import Button from '../../components/Button'
import EditIcon from '../../assets/EditIcon'
import Box from '../../components/Box'
import Flex from '../../components/Flex'
import CheckIcon from '../../assets/CheckIcon'
import CloseIcon from '../../assets/CloseIcon'
import Controller from './components/Controller'

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
        <Controller
          icon={<EditIcon />}
          onClick={() => {
            setState('edit')
            // @ts-ignore
            setTimeout(() => inputRef.current.focus(), 10)
          }}
        >
          Edit
        </Controller>
      )}
      {state === 'edit' && (
        <Flex>
          <Box mr="32px">
            <Controller icon={<CheckIcon />} onClick={init}>
              Save
            </Controller>
          </Box>
          <Controller orange icon={<CloseIcon />} onClick={init}>
            Cancel
          </Controller>
        </Flex>
      )}
    </>
  )
}
