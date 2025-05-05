import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Icon from '../assets/icon.png'
import { IoSearchSharp } from 'react-icons/io5'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'

const Sideber = () => {
  return (
    <div className='bg-[#F5F5F3] py-6'>
        <Container>
            <Flex className='items-center'>
                <div className='w-4/12 '>
                <Flex className='gap-2.5 items-center'>
                <Image src={Icon}/>
                <p className='text-sm font-dm font-normal text-secondary'>Shop by Category</p>
                </Flex>
                </div>
                <div className='w-6/12 relative'>
                    <input placeholder='Search Products' type="text" className='py-4 pl-6 pr-16 bg-white w-full placeholder:text-sm placeholder:font-normal placeholder:text-[#C4C4C4]'/>
                    <IoSearchSharp className='absolute top-1/2 -translate-y-1/2 right-6'/>
                </div>
                <div className='w-2/12 '>
                    <Flex className='justify-end'>
                        <FaUser/>
                        <IoMdArrowDropdown className='mr-6 ml-2.5'/>
                        <FaShoppingCart/>
                    </Flex>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Sideber