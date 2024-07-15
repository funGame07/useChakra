import {Grid, GridItem } from "@chakra-ui/react"
import { useColorMode, useColorModeValue } from "@chakra-ui/react"
import { createContext, useState } from "react"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import { FullScreen, useFullScreenHandle } from "react-full-screen";


export const colorContext = createContext()

function Home(){
    const {toggleColorMode} = useColorMode()
    const bg = useColorModeValue("gray.200", "gray.800")
    const cardBg = useColorModeValue("gray.100", "gray.700")
    const handle = useFullScreenHandle()
    const [fs, setFs] = useState(false)

    const colorMode={
        toggleColorMode,
        bg,
        cardBg,
        handle,
        setFs,
        fs
    }
    
  return (
    <colorContext.Provider value={colorMode}>
      <FullScreen handle={handle}>
        <Grid minW="303px" h="100vh" templateRows={["86% 7% 7%" ,"93% 7%"]} bg={bg} overflow="hidden" id="fs">
            <GridItem h="100%" overflow="scroll"><Main /></GridItem>
            <GridItem h="100%"><Navbar/></GridItem>
        </Grid>
      </FullScreen>
    </colorContext.Provider>

  )
}

export default Home