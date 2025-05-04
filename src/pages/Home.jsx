import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Banner from '../assets/banner.jpg'

const Home = () => {
  return (
    <nav>
      <Container>
        <Flex>
          <Image src={Banner}/>
        </Flex>
      </Container>
    </nav>
  )
}

export default Home