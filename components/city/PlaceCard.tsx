import { FC, useRef, useEffect, useState } from 'react'
import { Icon, Text, VStack, Box, Flex, Image, ComponentWithAs } from '@chakra-ui/react'
import { GoLocation } from 'react-icons/go'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const IndicatorIcon: FC<{
    onClick: () => void
    imageHeight: string,
    icon: ComponentWithAs<'svg'>,
    position: { left?: number, right?: number }
}> = ({ imageHeight, icon, position, onClick }) => {
    return <Icon
        onClick={onClick}
        cursor={'pointer'} width={'20px'} height='20px' bg='white' shadow='lg' {...position} borderRadius={'50%'} p={.5} position={'absolute'} top={`calc(${imageHeight}/2)`} as={icon} />
}

const PlaceCard: FC = () => {

    const imageHeight = '200px'

    const sliderRef = useRef<HTMLDivElement>(null)
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        if (!sliderRef.current === null) return
    }, [])

    const toLeft = () => {
        if (currentImage !== 0) {
            setCurrentImage(prev => prev -= 1)
            sliderRef.current!.scrollTo({
                left: sliderRef.current!.scrollLeft - sliderRef.current!.clientWidth,
                behavior: 'smooth'
            })
        }
    }
    const toRight = () => {
        if (currentImage < 2) {
            setCurrentImage(prev => prev += 1)
            sliderRef.current!.scrollTo({
                left: sliderRef.current!.scrollLeft + sliderRef.current!.clientWidth,
                behavior: 'smooth'
            })
        }
    }

    return <VStack
        position={'relative'}
        alignItems={'flex-start'}
        width={'200px'}
        bg='white'
        overflow={'hidden'}
        borderRadius={'md'}
        spacing={0}
        boxShadow='lg'>
        {currentImage !== 0 && (
            <IndicatorIcon onClick={toLeft} imageHeight={imageHeight} icon={AiOutlineLeft} position={{ left: 2 }} />
        )}
        {currentImage < 2 && (
            <IndicatorIcon onClick={toRight} imageHeight={imageHeight} icon={AiOutlineRight} position={{ right: 2 }} />
        )}
        <Flex ref={sliderRef} className='hide-scrollbar' width='100%' height={imageHeight} bg='red' overflowY={'hidden'} overflowX={'auto'} scrollSnapType='x mandatory'>
            <Box width={'100%'} height='inherit' bg='blue' flexShrink={0} scrollSnapAlign='start'>
                <Image display={'block'} width={'100%'} height='100%' objectFit={'cover'} alt='resim' src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170' />
            </Box>
            <Box width={'100%'} height='inherit' bg='brown' flexShrink={0} scrollSnapAlign='start'>
                <Image display={'block'} width={'100%'} height='100%' objectFit={'cover'} alt='resim' src='https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074' />
            </Box>
            <Box width={'100%'} height='inherit' bg='orange' flexShrink={0} scrollSnapAlign='start'>
                <Image width={'100%'} height='100%' objectFit={'cover'} alt='resim' src='https://images.unsplash.com/photo-1552566626-52f8b828add9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500' />
            </Box>
        </Flex>
        <Box p={2} marginTop='0 !important'>
            <Text fontWeight={'bold'} color='dark'>İsim</Text>
            <Text color='muted' fontWeight={'semibold'} as='small'>Restoran  - <Text as='span'> <Icon as={GoLocation} />  İzmir</Text> </Text>
        </Box>
    </VStack>
}

export default PlaceCard