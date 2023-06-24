import React from 'react'
import { Box, HStack, Heading, Stack, VStack, Input, Button, } from '@chakra-ui/react';
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.800'} minH={'30vh'} pt={'8'} pr={'2'}color={'white'}> 
        <Stack direction={['column']['row']}>
          <HStack>
            <VStack    w={'50%'}>
              <VStack >
                 <Heading size={'md'} > PLayHUB </Heading>
                 <div size={'xs'} textAlign={'center'}>All rights @received </div>
              </VStack>
                            <hr/>
             
            </VStack>


               <VStack w={'70%'}>
                <Heading size='md' textTransform={'uppercase'} textAlign={'center'}>Subscribe to get updates</Heading>
        
                <HStack>
                <Input placeholder='Email' borderBottom={'2px solid purple'} />

                <Button colorScheme='purple'><AiOutlineSend size={'20'}/></Button>
                </HStack>
               </VStack>
           </HStack>
        </Stack>

        <Stack pt={'8'} pb={'8'}>
             <VStack>
                   <Heading size={'sm'}>Social Media</Heading>
                   <Button><a href='https://www.instagram.com/manvender_024/'>Instagram</a></Button>
                   <Button><a href='https://www.linkedin.com/in/manvender-meena-24548b277/'>LinkedIn</a></Button>
                   <Button>nothing</Button>
              </VStack>
        </Stack>
    </Box>
  )
}

export default Footer;