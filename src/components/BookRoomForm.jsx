import React, { useEffect } from 'react'
import { useState } from 'react'
export default function BookRoomForm() {
    const [bookingData, setBookingData] = useState({
        startDate: '',
        endDate: '',
        paymentMethod: '',
        cardNumber: '',
        fullName: '',
        expiryDate: '',
        cvc: ''
    })

    const validate = () => {
        if (!bookingData.startDate.length > 0) {
            return false
        }
        if (!bookingData.endDate.length > 0) {
            return false
        }
        if (!bookingData.cardNumber.length > 8) {
            return false
        }
        if (!bookingData.paymentMethod.length > 0) {
            return false
        }
        if (!bookingData.fullName.length > 0) {
            return false
        }
        if (!bookingData.expiryDate.length > 0) {
            return false
        }
        if (!bookingData.cvc.length > 0) {
            return false
        }
        return true
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        validate()
        console.log('submit')
        console.log(validate())

    }
    useEffect(() => {
        console.log(bookingData)
        console.log('test')
    }, [bookingData])
    return (
        <form onSubmit={handleSubmit} className='flex flex-col justify-center  text-left'>
            <h1 className='text-primary font-medium text-3xl text-center mb-8'>Book The Room</h1>
            <div>
                <h3 className='text-[#8E8E8E] text-lg my-2'>Enter The Duration</h3>
                <div className='flex flex-wrap gap-4 w-[90%] justify-center mx-auto'>
                    <input type="date" className='w-2/5 border-2 bg-[#E9E9E9] ' onChange={(e) => setBookingData({ ...bookingData, startDate: e.target.value })} value={bookingData.startDate} />
                    <input type="date" className='w-2/5 border-2 bg-[#E9E9E9] ' onChange={(e) => setBookingData({ ...bookingData, endDate: e.target.value })} value={bookingData.endDate} />
                </div>
            </div>
            <div>
                <h3 className='text-[#8E8E8E] text-lg my-2'>Payment Methods</h3>
                <div className='flex flex-wrap gap-4 w-[90%] justify-start mx-auto'>
                    <input type="radio" onChange={(e) => setBookingData({ ...bookingData, paymentMethod: 'Edahabia' })} name="paymentMethod" id="Edahabia" />
                    <label htmlFor="Edahabia">Edahabia</label>
                    <input type="radio" onChange={(e) => setBookingData({ ...bookingData, paymentMethod: 'Cash' })} name="paymentMethod" id="Cash" />
                    <label htmlFor="Cash">Cash</label>
                </div>
            </div>
            <div className='mb-8'>
                <h3 className='text-[#8E8E8E] text-lg my-2'>Card Information</h3>
                <div className='flex flex-wrap gap-4 w-[90%] justify-center mx-auto'>
                    <input className='w-2/5 border-2 bg-[#E9E9E9]' onChange={(e) => setBookingData({ ...bookingData, cardNumber: e.target.value })} type="number" placeholder='Card Number' />
                    <input className='w-2/5 border-2 bg-[#E9E9E9]' type="text" onChange={(e) => setBookingData({ ...bookingData, fullName: e.target.value })} placeholder='Full Name' />
                    <input className='w-2/5 border-2 bg-[#E9E9E9]' type="date" onChange={(e) => setBookingData({ ...bookingData, expiryDate: e.target.value })} />
                    <input className='w-2/5 border-2 bg-[#E9E9E9]' type="number" placeholder='CVC' onChange={(e) => setBookingData({ ...bookingData, cvc: e.target.value })} />
                </div>
            </div>
            <div>
                <button  className='px-12 py-2 rounded bg-primary text-white'>submit</button>
            </div>
        </form>
    )
}
