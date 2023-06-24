import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import {Box,Image,Heading, Container, Stack, } from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img6 from '../assets/img6.png';


   
   


const Home = () => {
  return (
   <Box bgColor={'blackAlpha.200'}>
      <Carousel infiniteLoop autoPlay interval={1500} showArrows={false} showStatus={false}  showThumbs={false} >
      
         <Box w="full" h={'90vh'}>
          <Image  h='full' w={'full'} objectFit={'cover'}src={img1} />
          <Heading pos={'absolute'} left={'10%'} top={'10%'} textTransform={'uppercase'} p={'4'} bgColor={'blackAlpha.600'} color={'white'}>
          Future Is Focused.
          </Heading>
         </Box>
   
         <Box w='full' h={'90vh'}>
          <Image h='full' w={'full'} objectFit={'cover'} src={img2}/>
          <Heading pos={'absolute'} left={'10%'} top={'10%'} textTransform={'uppercase'} p={'4'} bgColor={'blackAlpha.600'} color={'white'}>
           This is my WorkSpace.
          </Heading>
         </Box>
   
         <Box w='full' h={'90vh'}>
          <Image h='full' w={'full'} objectFit={'cover'} src={img3}/>
          <Heading pos={'absolute'} left={'10%'} top={'10%'} textTransform={'uppercase'} p={'4'} bgColor={'blackAlpha.600'} color={'white'}>
             Coffee is Love.
          </Heading>
         </Box>
   
         <Box w='full' h={'90vh'}>
          <Image h='full' w={'full'} objectFit={'cover'} src={img4}/>
          <Heading pos={'absolute'} left={'10%'} top={'10%'} textTransform={'uppercase'} p={'4'} bgColor={'blackAlpha.600'} color={'white'}>
          TeamWork is Important.
          </Heading>
         </Box>
      </Carousel>

      <Container  w={'100%'} h={'100vh'} p={'3'}>
         <Heading textDecoration={'underline'} m={'auto'} pos={'relative'} top={'2'} left={'6'}>SERVICES</Heading>

         <Stack  p={'4'} 
         direction={['column']['row']}> 
            <Image src={img6}  w={'100%'}/>
            <hr/>

            <text>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32</text>
         </Stack>
 

      </Container>





   </Box>

  )
}



export default Home;