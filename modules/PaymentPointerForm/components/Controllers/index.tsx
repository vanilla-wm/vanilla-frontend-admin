import Controller from '../Controller'
import EditIcon from '../../../../assets/EditIcon'
import Flex from '../../../../components/Flex'
import Box from '../../../../components/Box'
import CheckIcon from '../../../../assets/CheckIcon'
import CloseIcon from '../../../../assets/CloseIcon'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import messages from './index.messages'

export default ({ state, setState, save, cancel, inputRef }) => {
  return (
    <>
      {state === 'init' && (
        <Controller
          icon={<EditIcon />}
          onClick={() => {
            setState('edit')
            // @ts-ignore
            setTimeout(() => inputRef.current.focus(), 10)
          }}
        >
          <FormattedMessage {...messages.editButton} />
        </Controller>
      )}
      {state === 'edit' && (
        <Flex>
          <Box mr="32px">
            <Controller icon={<CheckIcon />} onClick={save}>
              <FormattedMessage {...messages.saveButton} />
            </Controller>
          </Box>
          <Controller orange icon={<CloseIcon />} onClick={cancel}>
            <FormattedMessage {...messages.cancelButton} />
          </Controller>
        </Flex>
      )}
    </>
  )
}
