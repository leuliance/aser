import {
  chakra,
  Box,
  SimpleGrid,
  Flex,
  useColorModeValue,
  Icon,
  Image
} from "@chakra-ui/react";

import React from "react";

const imgData =[
    {
        key:"1",
        img:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        key:"2",
        img:"https://images.unsplash.com/photo-1503708928676-1cb796a0891e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        key:"3",
        img:"https://images.unsplash.com/photo-1562957982-b1f25317aebd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        key:"4",
        img:"https://images.unsplash.com/photo-1504964670878-71b73cec0ce1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        key:"5",
        img:"https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        key:"6",
        img:"https://images.unsplash.com/photo-1593012671976-1422185230fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        key:"7",
        img:"https://images.unsplash.com/photo-1585110587043-36d457f3e803?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        key:"8",
        img:"https://images.unsplash.com/photo-1517089152318-42ec560349c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        key:"9",
        img:"https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        key:"10",
        img:"https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        key:"11",
        img:"https://images.unsplash.com/photo-1504964670878-71b73cec0ce1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        key:"12",
        img:"https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        key:"13",
        img:"https://images.unsplash.com/photo-1593012671976-1422185230fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        key:"14",
        img:"https://images.unsplash.com/photo-1585110587043-36d457f3e803?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      key:"15",
      img:"https://images.unsplash.com/photo-1593012671976-1422185230fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
      key:"16",
      img:"https://images.unsplash.com/photo-1591588582259-e675bd2e6088?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uc3RydWN0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
      key:"17",
      img:"https://images.unsplash.com/photo-1517089152318-42ec560349c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
      key:"18",
      img:"https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
      key:"19",
      img:"https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
];

export default function LatestProjects() {
  const Feature = (props) => {
    return (
      <Box>
        <Flex
          alignItems="center"
          justifyContent="center"
          w={8}
          h={8}
          mb={4}
          rounded="full"
          color={useColorModeValue(`${props.color}.600`, `${props.color}.100`)}
          bg={useColorModeValue(`${props.color}.100`, `${props.color}.600`)}
        >
          <Icon
            boxSize={5}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            {props.icon}
          </Icon>
        </Flex>
        <chakra.h3
          mb={2}
          fontWeight="semibold"
          lineHeight="shorter"
          color={useColorModeValue("gray.900")}
        >
          {props.title}
        </chakra.h3>
        <chakra.p
          fontSize="sm"
          color={useColorModeValue("gray.500", "gray.400")}
        >
          {props.children}
        </chakra.p>
      </Box>
    );
  };
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={6}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        px={8}
        py={10}
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="xl"
      >
        <Box textAlign={{ lg: "center" }}>
          <chakra.p
            mt={2}
            fontSize={{ base: "3xl", sm: "4xl" }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            color={useColorModeValue("gray.900")}
          >
            Latest Projects
          </chakra.p>
          <chakra.p
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx={{ lg: "auto" }}
            color={useColorModeValue("gray.500", "gray.400")}
          >
            Get insights to dig down into what is powering your growth the most.
          </chakra.p>
        </Box>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacingX={{ base: 4, lg: 8 }}
          spacingY={6}
          mt={6}
        >
        {imgData.map(data => 
        <Box key={data.key} shadow="md" 
        cursor="pointer"
        _hover={{shadow:"xl"}}
        rounded={6} p={2}>
        <Image 
              
              alt={"image" + data.key}
              src={data.img} 
              boxSize="full" 
              rounded={6}
              height="230px"
              width="300px"
              alignSelf="center"
              backgroundSize="cover" />
        </Box>
        )}
        
          
        </SimpleGrid>
      </Box>
    </Flex>
  );
}