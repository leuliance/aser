import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';



const BlogTags= (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};



export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
     <BlogTags tags={['PR Admin']} />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const NewsCard = (props) => {
  return (
    <HStack 
    shadow="md"
    w={'xl'} p="4" flexDir="row" >
    <Image
        height="120px"
        width="120px"
        rounded={4}
        mr={2}
        src={props.img}
        alt={`Avatar of ${props.title}`}
      />
      <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          {/* <BlogTags tags={['Engineering', 'Product']} /> */}
          {/* <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              {props.title}
            </Link>
          </Heading> */}
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="md">
            {props.description}</Text>
          <BlogAuthor name={props.author} date={new Date('2021-04-06T19:01:27Z')} />
        </Box>
     
    </HStack>
  );
};

export default NewsCard;