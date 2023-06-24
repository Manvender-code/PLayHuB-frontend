import { Container, Heading, VStack, Input, Button , Text, Avatar } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
    <form>
       <VStack alignItems={'stretch'} w={['full',96]} spacing={'8'} m={'auto'} my={'16'} >
              <Heading>PLayHuB</Heading>
              <Avatar alignSelf={'center'} boxSize={'32'}/>
              <Input placeholder='Name' type={'text'} required focusBorderColor='purple'/>
              <Input placeholder='Email' type={'email'} required focusBorderColor='purple'/>
              <Input placeholder='Password' type={'password'} required focusBorderColor='purple'/>
              <Button colorScheme='purple' type='submit'> Sign up</Button>
              <Text textAlign={'right'}>Already Signed Up?{''} <Button variant={'link'} alignSelf={'flex-end'}><Link to={'/login'}>Log In</Link></Button></Text>



       </VStack>


    </form>
    </Container>
  )
}

export default Signup;