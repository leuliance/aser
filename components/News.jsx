import {
    Box,
    Accordion,
    AccordionItem,
    AccordionIcon,
    AccordionButton,
    AccordionPanel,
    Container,
    Stack,
    Heading,
    Text,
    useColorModeValue,
    VStack,
  } from "@chakra-ui/react";
  import NewsCard from './NewsCard'
  
  function News() {
    return (
      <Box bg={useColorModeValue("white", "black.500")}>
        <Container maxW={"7xl"} py={8} as={Stack} spacing={12}>
          <Stack spacing={0} align={"flex-start"}>
            <Heading as="u" textDecorationColor="green.300" textDecoration="underline">Latest News</Heading>
          </Stack>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 10, md: 4, lg: 10 }}
          >
          <VStack alignItems="flex-start">
          <NewsCard 
               description="SANSUSI TATEK KELA‘SROAD PROJECT MAIN WORKS ARE DONE"  
               img="https://aserplc.com/wp-content/uploads/2021/07/sansusi-tatek-kela-road-project-848x450.jpg"
           />
           <NewsCard 
               description="Sponsorship for bole sub city traffic police"  
               img="https://aserplc.com/wp-content/uploads/2021/06/sponsor-ship-for-bole-sub-city-trafic-police-848x450.jpg"
           />
           <NewsCard 
               description="AFARE REGIONAL STATE GAVE CERTIFICATE OF RECOGNITION FOR ASER CONSTRUCTION"  
               img="https://aserplc.com/wp-content/uploads/2021/06/AFARE-REGIONAL-STATE-GAVE-CERTIFICATE-OF-RECOGNITION-FOR-ASER-CONSTRUCTION-848x450.jpg"
           />
          </VStack>
           
          </Stack>
        </Container>
      </Box>
    );
  }
  
  export default News;
  