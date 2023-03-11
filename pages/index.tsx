import { Box, Icon, Flex, Heading, Text, Table, TableContainer, Tbody, Tr, Td, Image, FormControl, FormLabel, Input, Textarea, Card, CardBody, Stack } from "@chakra-ui/react";
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { FaStar, FaStarHalf } from "react-icons/fa"
import { SiQiita } from "react-icons/si"


export default function Home() {
  return (
    <>
      <Flex
        backgroundImage="url('/top-view.jpg')" 
        backgroundPosition={"center"} 
        backgroundSize={"cover"}
        backgroundColor={"rgba(255, 255, 255, 0.65)"}
        backgroundBlendMode={"lighten"}
        height={{base: "100vh", xl: "30vw"}} 
        alignItems={"center"}  
        justifyContent={"center"}
      >
        <Box>
          <Heading width={"100%"} as={"h1"} fontSize={"34px"} fontWeight={"normal"}>SHUHEI NARA</Heading>
          <Flex justifyContent={"center"}>
            <Text color={"#aaaaaa"}>web aplication engineer</Text>
          </Flex>
        </Box>
      </Flex>

      {/* topics */}
      <Flex height={"150px"} backgroundColor={"#f9f9f9"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} pt={"25px"} pb={"25px"}>
        <TableContainer width={{base: "100%", xl: 1096}}>
          <Table size={"sm"}>
            <Tbody>
                <Tr>
                  <Td width={"10%"}>2022/01/01</Td>
                  <Td>サイトを公開しました</Td>
                </Tr>
                <Tr>
                  <Td width={"10%"}>2022/01/01</Td>
                  <Td>サイトを公開しました</Td>
                </Tr>
                <Tr>
                  <Td width={"10%"}>2022/01/01</Td>
                  <Td>サイトを公開しました</Td>
                </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>

      {/* about */}
      <Flex height={"80vh"} flexDirection={"column"} justifyContent={"space-around"} alignItems={"center"} pt={"25px"} pb={"25px"}>
        <Box width={{base: "100%", xl: 1096}}>
          <Text fontSize={"14px"}>
            「あなたの仕事をより便利に快適に」それが私のエンジニアを志した原点です。<br/>
          大企業での実務経験や本業のシステム構築の経験を活かし、クライアント様の日々の業務をより便利にできたら本望です。
          目先の便利さだけでなく、設計・制作後の運用まで考慮してより使いやすい成果物をご提供できるよう努力いたします。
          </Text>
        </Box>
        <Box width={{base: "100%", xl: 1096}}>
            <Card maxW={'sm'}>
              <a href="https://www.google.com/" target={"_blank"} rel={"noopener noreferrer"}>
                <CardBody>
                  <Image src="ruby-gold.png" alt="Ruby Certified Ruby Examination Gold icon"></Image>
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>Portfolio</Heading>
                    <Text>
                      This sofa is perfect for modern tropical spaces, baroque inspired
                      spaces, earthy toned spaces and for people who love a chic design with a
                      sprinkle of vintage design.
                    </Text>
                  </Stack>
                </CardBody>
              </a>
            </Card>
          
        </Box>
      </Flex>

      {/* skills */}
      <Flex height={"500px"} backgroundColor={"#f9f9f9"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} pt={"25px"} pb={"25px"}>
        <Flex height={"400px"} width={{base: "100%", xl: 1096}} justifyContent={"space-between"}>
          <Box>
            FrontEnd
            <Flex>
              <Box>
                Javascript
              </Box>
              <Box>
                <Icon as={FaStar} color={"#fc7c2c"} />
                <Icon as={FaStarHalf} color={"#fc7c2c"} />
              </Box>
            </Flex>
          </Box>
          <Box>
            BackEnd
            <Flex>
              <Box>
                Rails
              </Box>
              <Box>
                <Icon as={FaStar} color={"#fc7c2c"} />
                <Icon as={FaStarHalf} color={"#fc7c2c"} />
              </Box>
            </Flex>
          </Box>
          <Box>
            Other
            <Flex>
              <Box>
                Docker
              </Box>
              <Box>
                <Icon as={FaStar} />
                <Icon as={FaStarHalf} />
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Box height={"75px"}>
          <Text fontSize={"14px"}>
            取得資格
          </Text>
          <Flex>
            <Flex>
              <Image boxSize={'30px'} src="ruby-silver.png" alt="Ruby Certified Ruby Examination Silver icon"></Image>
              <Text fontSize={"14px"}>
              Ruby Certified Ruby Examination Silver 2.1
              </Text>
            </Flex>
            <Flex>
              <Image boxSize={'30px'} src="ruby-gold.png" alt="Ruby Certified Ruby Examination Gold icon"></Image>
              <Text fontSize={"14px"}>
              Ruby Certified Ruby Examination Gold 2.1
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box>
          <Text fontSize={"14px"}>
            職務経歴書はこちら
          </Text>
        </Box>
      </Flex>

      {/* contact */}
      <Flex flexDirection={"column"} alignItems={"center"} pt={"25px"} pb={"25px"}>
        <FormControl width={{base: "100%", xl: 1096}}>
          <FormLabel>Name</FormLabel>
          <Input type={'text'} />
          <FormLabel>Email</FormLabel>
          <Input type={'email'} />
          <FormLabel>Comment</FormLabel>
          <Textarea />
        </FormControl>
      </Flex>
      
      {/* fotter */}
      <Flex backgroundColor={"#f9f9f9"} flexDirection={"column"} alignItems={"center"} pt={"25px"} pb={"25px"}>
        <Box width={{base: "auto", xl: 1096}}>
          <Flex>
            <Box>
              <Text>SHUHEI NARA (@besumero628)</Text>
              <Icon as={AiFillGithub} />
              <Icon as={AiFillTwitterCircle} />
              <Icon as={AiFillLinkedin} />
              <Icon as={SiQiita} />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  )
}