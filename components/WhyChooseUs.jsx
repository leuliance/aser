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
} from "@chakra-ui/react";

function WhyChooseUs() {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")}>
      <Container maxW={"7xl"} py={8} as={Stack} spacing={12}>
        <Stack spacing={0} align={"flex-start"}>
          <Heading as="u" textDecorationColor="green.300" textDecoration="underline">Why Choose Us</Heading>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Accordion border allowToggle defaultIndex={[0]} w="80%">
            <AccordionItem mb={2} border="1px solid gray">
              <AccordionButton _expanded={{ bg: "gray.800", color: "white" }}>
                <Box flex="1" textAlign="left">
                  <Text  fontSize="xl">We Are Creative</Text>
                </Box>
                <AccordionIcon  />
              </AccordionButton>

              <AccordionPanel pb={4} >
                As a leader in the industry, we always strive to apply advanced
                technology and innovative techniques.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mb={2} border="1px solid gray">
              <AccordionButton _expanded={{ bg: "gray.800", color: "white" }}>
                <Box flex="1" textAlign="left">
                  <Text fontSize="xl">Honest And Dependable </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>
                Our expert teams are composed of highly trained professionals
                who have the acumen to calculate engineering precision; thereby
                meeting the best of our clients’ approval.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mb={2} border="1px solid gray">
              <AccordionButton _expanded={{ bg: "gray.800", color: "white" }}>
                <Box flex="1" textAlign="left">
                  <Text fontSize="xl">Quality Commitment</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>
                We stoutly believe in ensuring quality in our undertakings to
                excel the ceiling of client’s satisfaction
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem mb={2} border="1px solid gray">
              <AccordionButton _expanded={{ bg: "gray.800", color: "white" }}>
                <Box flex="1" textAlign="left">
                  <Text fontSize="xl">We Are Always Improving </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>
                We always attempt to convene with the needs of the world today;
                without jeopardizing the needs of the world tomorrow
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
      </Container>
    </Box>
  );
}

export default WhyChooseUs;
