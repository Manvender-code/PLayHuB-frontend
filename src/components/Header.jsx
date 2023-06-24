import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack
  } from '@chakra-ui/react'
import {Link} from 'react-router-dom';
import {BiMenuAltLeft} from 'react-icons/bi';

const Header = () => {
    const {isOpen,onOpen,onClose} = useDisclosure();
  return (
<>
    <Button  zIndex={'overlay'} pos={'fixed'} top={'4'} left={'4'} colorScheme='purple' p={'0'} w={'10'} h={'10'} borderRadius={'full'} onClick={onOpen} >
        <BiMenuAltLeft size={"50"}/>
    </Button>

    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay/>
         <DrawerContent>
             <DrawerCloseButton/>
             <DrawerHeader>My videos</DrawerHeader>
             <DrawerBody>
                <VStack>

                    <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                        <Link to='/'>Home</Link>
                    </Button>

                    <Button  onClick={onClose} variant={'ghost'} colorScheme='purple'>
                        <Link to='/videos'>Video</Link>    
                    </Button>

                    <Button  onClick={onClose} variant={'ghost'} colorScheme='purple'>
                        <Link to='/videos?category=free'>Free video</Link>
                    </Button>

                    <Button  onClick={onClose} variant={'ghost'} colorScheme='purple'>
                        <Link to='/upload'>Upload</Link>
                    </Button>

                </VStack>

                <HStack
                justifyContent={'space-evenly'}
                pos={"absolute"}
                bottom={'10'}
                left={2}
                w={'full'}>

                    <Button  onClick={onClose} colorScheme='purple'>
                        <Link to={'login'}>Log In</Link>
                    </Button>

                    <Button  onClick={onClose} variant={'outline'} colorScheme='purple'>
                        <Link to={'signup'}>Sign Up</Link>
                    </Button>

                </HStack>
             </DrawerBody>
           
         </DrawerContent>
    </Drawer>
</>
  )
}
export default Header;