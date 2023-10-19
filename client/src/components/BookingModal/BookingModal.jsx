import React from 'react'
import { Modal } from '@mantine/core'

const BookingModal = (opened,setOpened,email,propertyId) => {
  return (
    <Modal
    opened = {opened}
    setOpened = {setOpened}
    propertyId={propertyId}
    title="Select your date of visit"
    centered
    >
        <div>
            <span>
                this is a booking modal
            </span>
            </div>   
    </Modal>
  )
}

export default BookingModal
