import { Box, Stack, Flex, Image, Button, AbsoluteCenter, useToast } from "@chakra-ui/react"
import { FiChevronsLeft, FiMoon, FiSun } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { colorContext } from "../Home";
import { useContext } from "react";

const Navbar = () => {
  const {toggleColorMode, bg} = useContext(colorContext)
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
    <Box h="100%" borderTop={"2px"} borderColor={"#ECECEC"}>
      <Flex alignItems={"center"} boxSize={"100%"} justify={"space-around"}>
        <Box>
          <Button border="0" sx={{':focus': { outline: 'none'}}} bg={bg}>
            <FiChevronsLeft size={30}/>
          </Button>
        </Box>
        <Box position={"relative"}>
          <AbsoluteCenter top={-2}>
            <Button py={7} px={3} bg={bg == "gray.200" ? "#D69C48":"#1A2434"} borderRadius={"25px"} 
              borderTopRightRadius={0} borderBottomLeftRadius={0} boxShadow={"dark-lg"}
              border={"1px"} colorScheme="teal" color={bg == "gray.200" ? "black":"white"}
              onClick={clicked}>
              <FaHome size={20}/>
            </Button>
          </AbsoluteCenter>
        </Box>
        <Box>
          <Button border="0" sx={{':focus': { outline: 'none'}}} onClick={toggleColorMode} bg={bg}>
            {bg != "gray.200" ? <FiMoon size={30}/> : <FiSun size={30}/>}
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default Navbar