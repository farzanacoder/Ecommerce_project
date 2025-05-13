import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Flex from '../components/Flex'
import Title from '../components/Title'

const Login = () => {
  return (
    <section>
      <Container>
      <h1 className='pt-[120px] font-bold font-dm text-4xl text-secondary'>Login</h1>
      <Title className='mt-10' t_text='Login'/>
      <div className='pt-[120px] w-full border-b border-[#F0F0F0]'>
      <p className='font-dm w-[55%] mb-15 font-normal text-base text-primary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
      </div>
      <h1 className='py-[120px] font-bold font-dm text-3xl text-secondary'>Returning Customer</h1>
      <Flex className='gap-x-10'>
      <label className='text-base font-dm font-bold w-[35%] text-secondary' htmlFor="name">Email address <br />
        <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-full' type="email" name="" id="" placeholder='company@domain.com' />
      </label> <br />
      <label className='text-base font-dm w-[35%] font-bold text-secondary' htmlFor="name">Password <br />
        <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-full' type="password" name="" id="" placeholder='.......' />
      </label> <br />
      </Flex>
      <Button className='!bg-transparent mb-[70px] !text-black !border-secondary hover:!text-white hover:!bg-black' text='Log in'/>

      <h1 className='w-full border-t border-[#F0F0F0] pt-[58px] pb-[38px] font-bold font-dm text-3xl text-secondary'>New Customer</h1>
      <p className='font-dm w-[55%] mb-15 font-normal text-base text-primary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
      <Button className=' mb-[140px]' text='Continue' />


      </Container>
    </section>
  )
}

export default Login