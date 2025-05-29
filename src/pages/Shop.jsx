import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Carts from '../components/Carts'
import Image from '../components/Image'

import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { HiMiniPlus } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Pagination from '../components/Pagination'

const Account = () => {
  let data = useSelector((state)=>state.bread.prevvalue)
  return (
    <section className='py-20'>
      <Container>
        <h1 className='pt-[120px] font-bold font-dm text-4xl text-secondary'>Shop</h1>
        <p className='pb-[100px]'><Link to={data=="Home" ? "/" : `/${data}`}>{data==null ? '' :`${data} >` }</Link>  Shop </p>
        <Flex>
          <div className='w-3/12'>catagories</div>
          <div className='w-9/12'>
            <Pagination itemsPerPage={12} />
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Account