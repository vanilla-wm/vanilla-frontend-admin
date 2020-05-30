import Controller from '../Controller'
import EditIcon from '../../../../assets/EditIcon'
import Flex from '../../../../components/Flex'
import Box from '../../../../components/Box'
import CheckIcon from '../../../../assets/CheckIcon'
import CloseIcon from '../../../../assets/CloseIcon'
import React from 'react'
import UserContext from '../../../../config/UserContext'
import updatePaymentPointer from '../../actions/updatePaymentPointer'

export default ({
  state,
  setState,
  paymentPointer,
  setPaymentPointer,
  inputRef,
}) => {
  const init = () => setState('init')
  const {
    paymentPointer: currentPaymentPointer,
    setPaymentPointer: setCurrentPaymentPointer,
  } = React.useContext(UserContext)

  const save = () => {
    //callApi
    updatePaymentPointer({ paymentPointer, setCurrentPaymentPointer })
    init()
  }

  const cancel = () => {
    setPaymentPointer(currentPaymentPointer)
    init()
  }

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
          Edit
        </Controller>
      )}
      {state === 'edit' && (
        <Flex>
          <Box mr="32px">
            <Controller icon={<CheckIcon />} onClick={save}>
              Save
            </Controller>
          </Box>
          <Controller orange icon={<CloseIcon />} onClick={cancel}>
            Cancel
          </Controller>
        </Flex>
      )}
    </>
  )
}
