import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Image from '../components/Image'
import Map from '../assets/image 1.png'
import { BiPlus } from 'react-icons/bi'

const Contact = () => {
  return (
    <Container>
      <h1 className='py-[120px] font-bold font-dm text-4xl text-secondary'>Contacts</h1>
      <h1 className='py-[120px] font-bold font-dm text-3xl text-secondary'>Fill Up a Form</h1>
      <label className='text-base font-dm font-bold text-secondary' htmlFor="name">Name <br />
        <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-w49' type="text" name="" id="" placeholder='Your name here' />
      </label> <br />
      <label className='text-base font-dm font-bold text-secondary' htmlFor="name">Email <br />
        <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-w49' type="text" name="" id="" placeholder='Your email here' />
      </label> <br />
      <label className='text-base font-dm font-bold text-secondary' htmlFor="name">Message <br />
        <textarea className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-w49' type="text" name="" id="" placeholder='Your message here' />
      </label> <br />
      <Button className=' mb-[140px]' text='Post' />

      <div className='relative'>
        <Image className=' pb-[140px]' src={Map} />
        <div className='ml-5 w-[310px] flex flex-col absolute top-14 left-14 h-[280px] bg-white'>
          <div className='flex gap-x-35 items-center py-[10px]  border-b border-[#F0F0F0] w-full'>
            <h4 className='ml-5 text-base font-dm font-bold text-secondary'>Germany Office</h4>
            <BiPlus />
          </div>
          <div className='flex gap-x-35 items-center py-[10px]  border-b border-[#F0F0F0] w-full'>
            <h4 className='ml-5 text-base font-dm font-bold text-secondary'>Slovakia Office</h4>
            <BiPlus />
          </div>
          <div className='ml-5'>
            <h4 className='text-base font-dm my-5 font-bold text-secondary'>Lithuania Office</h4>
            <p className='font-dm text-sm mb-2.5 text-primary font-normal'>575 Crescent Ave. Quakertown, PA 18951</p>
            <p className='font-dm text-sm mb-2.5 text-primary font-normal'>+432 533 12 523</p>
            <p className='font-dm text-sm mb-2.5 text-primary font-normal'>info@domain.com</p>
            <p className='font-dm text-sm mb-2.5 text-primary font-normal'>Mon - Fri: 9am - 6pm</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Contact