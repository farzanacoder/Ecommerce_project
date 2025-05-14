import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Title from '../components/Title'
import PagiHead from '../components/PagiHead'
import PagiBody from '../components/PagiBody'
import Carts from '../components/Carts'
import Image from '../components/Image'
import Cart_7 from '../assets/cart_7.png'
import Cart_11 from '../assets/cart_11.png'
import Image_4 from '../assets/Image_4.png'
import Image_2 from '../assets/Image_2.png'
import Image_1 from '../assets/Image_1.png'
import Cart_9 from '../assets/Cart_9.png'
import Cart_13 from '../assets/Cart_13.png'
import Cart_8 from '../assets/Cart_8.png'
import Cart_1 from '../assets/Cart_1.png'
import Grid_1 from '../assets/Grid_1.png'
import Grid_2 from '../assets/Grid_2.png'
import Cart_12 from '../assets/Cart_12.png'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { HiMiniPlus } from 'react-icons/hi2'

const Account = () => {
  return (
    <section>
      <Container>
        <h1 className='pt-[120px] font-bold font-dm text-4xl text-secondary'>Products</h1>
        <Title className='mt-6' t_text='Products' />
        <Flex className='pt-[120px] pb-[140px]'>
          <div className='w-[373px] h-[1743px] mr-5'>
            <PagiHead text='Shop by Category' />
            <Flex className='flex-row items-center justify-between border-b border-[#F0F0F0]'>
              <PagiBody text='Category 1' /> <HiMiniPlus />
            </Flex>
            <PagiBody text='Category 2' />
            <Flex className='flex-row items-center justify-between border-b border-[#F0F0F0]'>
              <PagiBody text='Category 3' /> <HiMiniPlus />
            </Flex>
            <PagiBody text='Category 4' />
            <PagiBody text='Category 5' />

            <Flex className='flex-row items-center justify-between pointer-events-none  border-b border-[#F0F0F0]'>
            <PagiHead className='mt-[53px]' text='Shop by Color' />  <TiArrowSortedUp />
            </Flex>
            <Flex className='border-b border-[#F0F0F0] items-center'>
              <div className='mr-2.5 bg-black rounded-full w-[11px] h-[11px]'>
              </div>
            <PagiBody text='Color 1' />
            </Flex>
            <Flex className='border-b border-[#F0F0F0] items-center'>
              <div className='mr-2.5 bg-[#FF8686] rounded-full w-[11px] h-[11px]'>
              </div>
            <PagiBody text='Color 2' />
            </Flex>
            <Flex className='border-b border-[#F0F0F0] items-center'>
              <div className='mr-2.5 bg-[#7ED321] rounded-full w-[11px] h-[11px]'>
              </div>
            <PagiBody text='Color 3' />
            </Flex>
            <Flex className='border-b border-[#F0F0F0] items-center'>
              <div className='mr-2.5 bg-[#B6B6B6] rounded-full w-[11px] h-[11px]'>
              </div>
            <PagiBody text='Color 4' />
            </Flex>
            <Flex className='border-b border-[#F0F0F0] items-center'>
              <div className='mr-2.5 bg-[#15CBA5] rounded-full w-[11px] h-[11px]'>
              </div>
            <PagiBody text='Color 5' />
            </Flex>

            <Flex className='flex-row items-center justify-between pointer-events-none  border-b border-[#F0F0F0]'>
            <PagiHead className='mt-[53px]' text='Shop by Brand' />  <TiArrowSortedUp />
            </Flex>
            <PagiBody text='Brand 1' />
            <PagiBody text='Brand 2' />
            <PagiBody text='Brand 3' />
            <PagiBody text='Brand 4' />
            <PagiBody text='Brand 5' />

            <PagiHead className='mt-[53px]' text='Shop by Price' />
            <PagiBody text='$0.00 - $9.99' />
            <PagiBody text='$10.00 - $19.99' />
            <PagiBody text='$20.00 - $29.99' />
            <PagiBody text='$30.00 - $39.99' />
            <PagiBody text='$40.00 - $69.99' />
          </div>
          <div className='w-[800px] h-[2010px]'>
            <Container className=' pb-[118px]'>
              <Flex className='justify-between'>
                <Flex className='gap-x-2.5'>
                  <Image src={Grid_1} />
                  <Image src={Grid_2} />
                </Flex>

                <Flex>
                  <div className="relative font-dm text-base font-normal text-primary mr-10">Sort by:
                    <select className='ml-4 border border-[#F0F0F0] w-[239px] h-[36px] pl-4 appearance-none' id="size" defaultValue="">
                      <option value="Featured">Featured</option>
                    </select>

                    <div className="pointer-events-none absolute top-2.5 right-1 flex items-center pr-1">
                      <TiArrowSortedDown className="text-secondary w-4 h-4" />
                    </div>
                  </div>

                  <div className="relative font-dm text-base font-normal text-primary">Show:
                    <select className='ml-4 border border-[#F0F0F0] w-[139px] h-[36px] pl-4 appearance-none' id="size" defaultValue="">
                      <option value="36">36</option>
                    </select>

                    <div className="pointer-events-none absolute top-2.5 right-1 flex items-center pr-1">
                      <TiArrowSortedDown className="text-secondary w-4 h-4" />
                    </div>
                  </div>

                  {/* <label htmlFor="text" className='font-dm text-base font-normal text-primary mr-10'>Sort by:
              <input type="text" placeholder='Featured' className='ml-4 border border-[#F0F0F0] w-[239px] h-[36px] pl-4'/><TiArrowSortedDown />
              </label>
             <label htmlFor="text" className='font-dm text-base font-normal text-primary'>Show:
              <select name="" id="text" className='ml-4 border border-[#F0F0F0] w-[139px] h-[36px] pl-4'>36</select>
              </label> */}
                </Flex>

              </Flex>
              <Flex className='gap-x-10 mb-[50px] mt-[60px]'>
                <Carts price='$44.00' img={Cart_7} />
                <Carts price='$44.00' img={Cart_11} />
                <Carts price='$44.00' img={Image_4} />
              </Flex>
              <Flex className='gap-x-10 mb-[50px]'>
                <Carts price='$44.00' img={Cart_9} />
                <Carts price='$44.00' img={Cart_13} />
                <Carts price='$44.00' img={Cart_8} />
              </Flex>
              <Flex className='gap-x-10 mb-[50px]'>
                <Carts price='$44.00' img={Image_2} />
                <Carts price='$44.00' img={Image_4} />
                <Carts price='$44.00' img={Cart_9} />
              </Flex>
              <Flex className='gap-x-10 mb-[50px]'>
                <Carts price='$44.00' img={Image_1} />
                <Carts price='$44.00' img={Cart_1} />
                <Carts price='$44.00' img={Cart_12} />
              </Flex>

              <Flex className='justify-between items-center'>
                <Flex className='w-[285px] h-[40px] gap-x-4 cursor-pointer'>
                  <div className='border border-[#F0F0F0] w-[40px] h-full font-dm font-normal text-sm text-primary duration-300 active:bg-black hover:bg-black hover:text-white'><a href="#">1</a></div>
                  <div className='border border-[#F0F0F0] w-[40px] h-full font-dm font-normal text-sm text-primary duration-300  hover:bg-black hover:text-white'><a href="#">2</a></div>
                  <div className='border border-[#F0F0F0] w-[40px] h-full font-dm font-normal text-sm text-primary duration-300  hover:bg-black hover:text-white'><a href="#">3</a></div>
                  <div className='border border-[#F0F0F0] w-[40px] h-full font-dm font-normal text-sm text-primary duration-300  hover:bg-black hover:text-white'><a href="#">4</a></div>
                  <div className='border border-[#F0F0F0] w-[40px] h-full font-dm font-normal text-sm text-primary duration-300  hover:bg-black hover:text-white'><a href="#">...</a></div>
                  <div className='border border-[#F0F0F0] w-[40px] h-full font-dm font-normal text-sm text-primary duration-300  hover:bg-black hover:text-white'><a href="#">10</a></div>
                </Flex>
                <p className='font-dm text-sm font-normal text-primary'>Products from 1 to 12 of 80</p>
              </Flex>
            </Container>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Account