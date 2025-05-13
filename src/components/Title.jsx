import React from 'react'
import Flex from '../components/Flex'
import { LiaAngleRightSolid } from 'react-icons/lia'


const Title = ({t_text,className}) => {
    return (
        <Flex className={`font-dm font-normal text-[12px] text-[#6D6D60] items-center gap-x-2 ${className}`}>
            <h6>Home</h6>
            <LiaAngleRightSolid />
            <h6>{t_text}</h6>
        </Flex>
    )
}

export default Title