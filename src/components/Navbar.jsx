import { Box, Stack, Flex, Image, Button, AbsoluteCenter, useToast } from "@chakra-ui/react"
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const toast = useToast()
  function clicked(){
    return toast({
      title: "Account's Created",
      position: "top",
      status: "success",
      isClosable: true
    })
  }


  return (
    <Box bg="white" h="100%" borderTop={"2px"} borderColor={"#ECECEC"}>
      <Flex alignItems={"center"} boxSize={"100%"} justify={"space-around"}>
        <Box>
          <Button bg="white" border="0" sx={{':focus': { outline: 'none'}}}>
            <FiChevronsLeft size={35}/>
          </Button>
        </Box>
        <Box position={"relative"}>
          <AbsoluteCenter top={-3}>
            <Button py={7} px={3} bg="#D69C48" borderRadius={"25px"} 
              borderTopRightRadius={0} borderBottomLeftRadius={0} boxShadow={"dark-lg"}
              border={"1px"} borderColor={"#5A5A5A"} colorScheme="teal" color={"black"}
              onClick={clicked}>
              <FaHome size={25}/>
            </Button>
          </AbsoluteCenter>
        </Box>
        <Box>
          <Button bg="white" border="0" sx={{':focus': { outline: 'none'}}}>
            <FiChevronsRight size={35}/>
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default Navbar