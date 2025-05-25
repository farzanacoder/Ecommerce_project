import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import List from '../components/List'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { breadbutton } from '../slice/breadcrum'

const Navber = () => {
   let dispatch = useDispatch()

    let handleClick=(item)=>{
        dispatch(breadbutton(item))
    }
    return (
        <nav className='py-[32px]'>
            <Container>
                <Flex>
                    <div className='w-5/12'>
                        <Link to='/'><Image src={Logo} /></Link>
                    </div>
                    <div className='w-7/12'>
                        <ul className='flex gap-x-10'>
                            <Link onClick={()=>handleClick("Home")} to='/'><List text='Home'/></Link>
                            <Link onClick={()=>handleClick("Shop")} to='/shop'><List text='Shop'/></Link>
                            <Link onClick={()=>handleClick("About")} to='/about'><List text='About'/></Link>
                            <Link onClick={()=>handleClick("Contacts")} to='/contacts'><List text='Contacts'/></Link>
                            <Link onClick={()=>handleClick("Journal")} to='/checkout'><List text='Journal'/></Link>
                        </ul>
                    </div>
                </Flex>
            </Container>
        </nav>

    )
}

export default Navber