import { FC, useRef, useEffect, useState } from 'react'
import { Icon, Text, VStack, Box, Flex, Image, ComponentWithAs } from '@chakra-ui/react'
import { GoLocation } from 'react-icons/go'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { PlacesQueryProps } from '@/apollo/quaries/places'

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

interface PlaceCardProps {
    place: PlacesQueryProps
}

const PlaceCard: FC<PlaceCardProps> = ({ place }) => {

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
        bg='white'
        overflow={'hidden'}
        borderRadius={'md'}
        spacing={0}
        boxShadow='lg'>
        {currentImage !== 0 && place.photos.length > 1 && (
            <IndicatorIcon onClick={toLeft} imageHeight={imageHeight} icon={AiOutlineLeft} position={{ left: 2 }} />
        )}
        {currentImage < 2 && place.photos.length > 1 && (
            <IndicatorIcon onClick={toRight} imageHeight={imageHeight} icon={AiOutlineRight} position={{ right: 2 }} />
        )}
        <Flex ref={sliderRef} className='hide-scrollbar' width='100%' height={imageHeight} bg='red' overflowY={'hidden'} overflowX={'auto'} scrollSnapType='x mandatory'>
            {place.photos.map((photo, index) => {
                return <Box key={index} width={'100%'} height='inherit' bg='blue' flexShrink={0} scrollSnapAlign='start'>
                    <Image display={'block'} width={'100%'} height='100%' objectFit={'cover'} alt='resim' src={photo} />
                </Box>
            })}
        </Flex>
        <Box p={2} marginTop='0 !important' textTransform={'capitalize'}>
            <Text fontWeight={'bold'} color='dark'>{place.name}</Text>
            <Text color='muted' fontWeight={'semibold'} as='small'>{place.category}  - <Text as='span'> <Icon as={GoLocation} />  {place.province}</Text> </Text>
        </Box>
    </VStack>
}

export default PlaceCard