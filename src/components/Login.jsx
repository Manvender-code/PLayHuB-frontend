import { Container, Heading, VStack, Input, Button , Text } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
    <form>
       <VStack alignItems={'stretch'} w={['full',96]} spacing={'8'} m={'auto'} my={'16'} >
              <Heading>Welcome Back</Heading>
              <Input placeholder='Email' type={'email'} required focusBorderColor='purple'/>
              <Input placeholder='Password' type={'password'} required focusBorderColor='purple'/>
              <Button variant={'link'} alignSelf={'flex-end'}>
                <Link to={'./forgotpassword'}>forgot password ?</Link>
              </Button>
              <Button colorScheme='purple' type='submit'> Log In</Button>
              <Text textAlign={'right'}>New User?{''} 
              <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/signup'}>Sign Up</Link>
              </Button></Text>



       </VStack>


    </form>
    </Container>
  )
}

export default Login;