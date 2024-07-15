import { Container, Stack, Box, Heading, Flex, AbsoluteCenter, Image, StackDivider, Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import React from 'react'

const Main = () => {
  return (
    <div>
      <Stack>
      <Container w="100%" h="100vh" p={3}>
        <Box mt={["20%" ,"10%"]} mb="10%">
          <Card>
            <Flex h={["50px" ,"70px"]} justify={"space-around"} px="2" alignItems={"center"}>
              <CardHeader>
                <Heading size={["xl","xl"]} ml={1}>XII</Heading>
              </CardHeader>
              
              <CardBody>
                <AbsoluteCenter>
                  <Image src="class.png" borderRadius={"full"} w={100} h={100} border={"1px"}/>
                </AbsoluteCenter>
              </CardBody>
              
              <CardFooter>
                <Heading size={["lg", "xl"]}>IPS I</Heading>
              </CardFooter>
              
            </Flex>
          </Card>
        </Box>

        <Card mt="10%">
          <CardHeader>
            <Heading size="md">Activities</Heading>
          </CardHeader>
          
          <CardBody>
            <Stack divider={<StackDivider/>} gap={[2,4]}>
              <Box>
                <Card overflow={"hidden"} bg="gray.100" border={"1px"}>
                  <Flex h={["65px" ,"80px"]}>
                    <Image src="absent.png" w={["40%", "30%", "30%", "30%"]} />
                    <CardBody p={[4,5]}>
                      <Heading size="sm" mt={0}>Class Absence</Heading>
                      <p>by secretary</p>
                    </CardBody>
                  </Flex>
                </Card>
              </Box>

              <Box>
                <Card overflow={"hidden"} bg="gray.100" border={"1px"}>
                  <Flex h={["65px" ,"80px"]}>
                    <Image src="money.png" w={["40%", "30%", "30%", "30%"]} />
                    <CardBody p={[4,5]}>
                      <Heading size="sm" mt={0}>Class Treasure</Heading>
                      <p>by treasurer</p>
                    </CardBody>
                  </Flex>
                </Card>
              </Box>

              <Box>
                <Card overflow={"hidden"} bg="gray.100" border={"1px"}>
                  <Flex h={["65px" ,"80px"]}>
                    <Image src="law.png" w={["40%", "30%", "30%", "30%"]}/>
                    <CardBody p={[4,5]}>
                      <Heading size="sm" mt={0}>Class Violation</Heading>
                      <p>by secretary</p>
                    </CardBody>
                  </Flex>
                </Card>
              </Box>
            </Stack>
          </CardBody>
        </Card>





        <Card mt="10%" mb="50%">
          <CardHeader>
            <Heading size="md">Daily</Heading>
          </CardHeader>
          
          <CardBody>
            <Stack divider={<StackDivider/>} gap={[2,4]}>
              <Box>
                <Card overflow={"hidden"} bg="gray.100" border={"1px"}>
                  <Flex h={["65px" ,"80px"]}>
                    <Image src="piket.webp" w={["40%", "30%", "30%", "30%"]} />
                    <CardBody p={[4,5]}>
                      <Heading size="sm" mt={0}>Class Cleanliness</Heading>
                    </CardBody>
                  </Flex>
                </Card>
              </Box>

              <Box>
                <Card overflow={"hidden"} bg="gray.100" border={"1px"}>
                  <Flex h={["65px" ,"80px"]}>
                    <Image src="caste.jpeg" w={["40%", "30%", "30%", "30%"]} />
                    <CardBody p={[4,5]}>
                      <Heading size="sm" mt={0}>Class Organization</Heading>
                    </CardBody>
                  </Flex>
                </Card>
              </Box>

              <Box>
                <Card overflow={"hidden"} bg="gray.100" border={"1px"}>
                  <Flex h={["65px" ,"80px"]}>
                    <Image src="schedule.jpeg" w={["40%", "30%", "30%", "30%"]}/>
                    <CardBody p={[4,5]}>
                      <Heading size="sm" mt={0}>Class Schedule</Heading>
                    </CardBody>
                  </Flex>
                </Card>
              </Box>
            </Stack>
          </CardBody>
        </Card>

      </Container>
    </Stack>
    </div>
    
  )
}

export default Main