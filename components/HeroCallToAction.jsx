import {
  chakra,
  Box,
  Stack,
  Flex,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

import React from "react";

export default function HeroCallToAction() {
  return (
    <Flex
      bg={useColorModeValue("gray.800", "gray.700")}
      mt={2}
      p={2}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
     
        <SimpleGrid
          w="full"
          alignItems="center"
          columns={{ base: 1, lg: 2, xl: 3 }}
          spacing={4}
          mx="auto"
          py={{ base: 12, lg: 16 }}
          px={{ base: 4, lg: 8 }}
          display={{ lg: "flex" }}
        >
          <Box>
            <chakra.h2
              fontSize={{ base: "3xl", sm: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="shorter"
              color="white"
              mb={6}
            >
              <chakra.span display="block">We take challenges head-on</chakra.span>
              <chakra.span
                display="block"
                fontSize="18px"
                fontWeight="normal"
                color="white"
                maxW="75%"
                letterSpacing={2}
              >
                with each new commission, we are reaching higher in our pursuit of construction excellence.The skill and experience that we deploy through our construction teams on the ground equals the best in the industry. Our goal is always to deliver unparalleled quality in line with each project’s unique vision.
              </chakra.span>
            </chakra.h2>
            {/* <Stack direction={{ base: "column", sm: "row" }} spacing={2}>
              <Box display="inline-flex" rounded="md" shadow="md">
                <chakra.a
                  
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  w="full"
                  rounded="md"
                  color={useColorModeValue("white")}
                  bg={useColorModeValue("green.600", "brand.500")}
                  _hover={{
                    bg: useColorModeValue("brand.700", "brand.600"),
                  }}
                >
                  Get started
                </chakra.a>
              </Box>
              <Box ml={3} display="inline-flex" rounded="md" shadow="md">
                <chakra.a
                  w="full"
                  
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  color="brand.600"
                  bg="white"
                  _hover={{
                    bg: "brand.50",
                  }}
                >
                  Learn more
                </chakra.a>
              </Box>
            </Stack> */}
          </Box>
        </SimpleGrid>
    </Flex>
  );
}