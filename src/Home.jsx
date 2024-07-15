import {Grid, GridItem } from "@chakra-ui/react"
import { useColorMode, useColorModeValue } from "@chakra-ui/react"
import { createContext } from "react"
import List from "./components/List"
import Main from "./components/Main"
import Navbar from "./components/Navbar"

export const colorContext = createContext()

function Home(){
    const {toggleColorMode} = useColorMode()

    const bg = useColorModeValue("gray.200", "gray.800")

    const colorMode={
        bg
    }
    
  return (
    <colorContext.Provider value={colorMode}>
        <Grid minW="303px" h="100vh" templateRows="92% 8%" bg={bg} overflow="hidden">
            <GridItem h="100%" overflow="scroll"><Main /></GridItem>
            <GridItem h="100%"><Navbar/></GridItem>
        </Grid>
    </colorContext.Provider>

  )
}

export default Home