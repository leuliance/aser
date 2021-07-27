import {
  Box,
  Button,
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

import React from "react";

export default function AserBranches() {
  return (
    <Flex
      bg={useColorModeValue("gray.600", "gray.600")}
      p={8}
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        shadow="xl"
        bg={useColorModeValue("gray.800", "gray.800")}
        px={8}
        py={20}
        mx="auto"
      >
        <Box textAlign={{ lg: "center" }}>
          <chakra.p
            mb={8}
            fontSize={{ base: "3xl", sm: "5xl" }}
            lineHeight="8"
            fontWeight="bold"
            color={useColorModeValue("green.600")}
          >
            ASER BRANCHES
          </chakra.p>
        </Box>
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color={useColorModeValue("gray.200", "gray.400")}
              lineHeight={{ md: "shorter" }}
              textShadow="2px 0 currentcolor"
            >
              ASER Concrete Batching plant
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.400", "gray.400")}
              fontSize={{ md: "lg" }}
            >
              We are well known for great involvement in the construction
              sector,we have now managed to expand even more by installing two
              modern Concrete Batching Plants.
            </chakra.p>
            <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg={useColorModeValue("gray.700", "gray.700")}
              _hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
              color={useColorModeValue("gray.200", "gray.200")}
              as="a"
            >
              Learn More
            </Button>
          </Box>
          <Box
            w="full"
            h="full"
            rounded={10}
            bg={useColorModeValue("gray.700", "gray.700")}
          >
            <Image
              alt="Concrete Image"
              h="350px"
              w="300px"
              rounded={10}
              backgroundSize="cover" 
              boxSize="full" 
              src="https://aserplc.com/wp-content/uploads/2015/03/BATCHING-350x150.jpg"
            />
          </Box>
        </SimpleGrid>
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box order={{ base: "none", md: 2 }}>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color={useColorModeValue("gray.200", "gray.400")}
              lineHeight={{ md: "shorter" }}
              textShadow="2px 0 currentcolor"
            >
              ASER Asphalt mixing plant
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.400", "gray.400")}
              fontSize={{ md: "lg" }}
            >
              ASER Construction plc has installed a Marini Asphalt Plant,
              dedicated to the production of different grade and type of asphalt
              products.
            </chakra.p>
            <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg={useColorModeValue("gray.900", "gray.700")}
              _hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
              color={useColorModeValue("gray.100", "gray.200")}
              as="a"
            >
              Learn More
            </Button>
          </Box>
          <Image
              alt="Concrete Image"
              h="350px"
              w="full"
              rounded={10}
              backgroundSize="auto" 
              boxSize="full" 
              src="https://aserplc.com/wp-content/uploads/2015/03/ASPHALT-350x150.jpg"
            />
        </SimpleGrid>
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color={useColorModeValue("gray.200", "gray.400")}
              lineHeight={{ md: "shorter" }}
              textShadow="2px 0 currentcolor"
            >
              ASER Concrete Pipe plant
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.400", "gray.400")}
              fontSize={{ md: "lg" }}
            >
              ASER Concrete Pipe Plant is a leading manufacturer of Reinforced
              Concrete Pipe (RCP) products for underground utilities and road
              building industry.
            </chakra.p>
            <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg={useColorModeValue("gray.700", "gray.700")}
              _hover={{ bg: useColorModeValue("gray.600", "gray.600") }}
              color={useColorModeValue("gray.200", "gray.200")}
              as="a"
            >
              Learn More
            </Button>
          </Box>
          <Box
            w="full"
            h="full"
            rounded={10}
            bg={useColorModeValue("gray.700", "gray.700")}
          >
            <Image
              alt="Concrete Image"
              h="350px"
              w="full"
              rounded={10}
              backgroundSize="cover" 
              boxSize="full" 
              src="https://aserplc.com/wp-content/uploads/2015/03/pipe-1-350x150.jpg"
            />
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
