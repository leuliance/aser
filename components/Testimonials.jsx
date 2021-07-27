import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }) => {
  return <Box alignSelf="center">{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      maxW={'540px'}
      h='200px'
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      alignSelf="center"
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      {/* <Avatar src={src} alt={name} mb={2} /> */}
      <Stack spacing={-1} align={"center"}>
        <Text fontSize="2xl" fontWeight={600} color="green.600">
          {name}
        </Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box 
    alignItems="center"
    justifyContent="center"
    bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the Country</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Meskel Square- Bole Road</TestimonialHeading>
              <TestimonialText>
                This certificate of merit is awarded with thanks to your
                contribution as a sub contractor&nbsp;for the successful
                completion of Meskel Square- Bole Road which is financed by
                Addis&nbsp;Ababa City Government.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Engineer Fikadu Haile"}
              title={"Addis Ababa City Roads Authority general Manager"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                Green Development programme
              </TestimonialHeading>
              <TestimonialText>
                This certificate of recognitions has given to ASER Construction
                for remarkable&nbsp;contribution on sanitation beautification
                and Green Development programme.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Nuraddis Ahmed"}
              title={"Bole sub city General Manager"}
            />
          </Testimonial>
         
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                Highly appreciated performance
              </TestimonialHeading>
              <TestimonialText>
                This certificate of merit is awarded with thanks to ASER
                Construction PLC for your&nbsp;contribution as a contractor to
                the highly appreciated performance of the Addis Ababa&nbsp;City
                Roads Authority in 2014/2015 Road Construction.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Engineer Fikadu Haile"}
              title={"Addis Ababa City Roads Authority general Manager"}
            />
          </Testimonial>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Abune Petros Statue</TestimonialHeading>
              <TestimonialText>
                This honorary certificate is awarded to ASER Construction PLC in
                commemoration to&nbsp;the successful restoration work of the
                Patriot His Holiness Abune Petros Statue, which&nbsp;was
                previously relocated for due to the light rail project.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Engineer Ayisha Mohhamed"}
              title={"Minister of Culture and Tourism"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                Bole –Summit Condominium road
              </TestimonialHeading>
              <TestimonialText>
                This certificate of merit is awarded with thanks to your
                contribution as a contractor for&nbsp;the successful completion
                of Bole –Summit Condominium asphalt road which is&nbsp;financed
                by Addis Ababa City Government. Government
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Engineer Fikadu Haile"}
              title={"Addis Ababa City Roads Authority general Manager"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Dejach Wube-Abunepetros</TestimonialHeading>
              <TestimonialText>
                This Certificate of merit is awarded with thanks to your
                Contribution as a Contractor for the successful completion of
                Dejach Wube-Abunepetros square-Atikilt Tera-Autobus Tera Road
                which is financed by Addis Ababa City Government.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Ato Deriba Kuma"}
              title={"Mayor of Addis Ababa City "}
            />
          </Testimonial>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                Mia- Dangur and Golagul Harasate
              </TestimonialHeading>
              <TestimonialText>
                We hereby confirm that ASER Construction plc has accomplished
                irrigation schemes of Mia- Dangur and Golagul Harasate dams,
                located in Hawzen Wereda, as part of the contract agreement
                signed it has entered with Millennium Villages Project. It is
                with pleasure to inform you that we are satisfied with the
                progress of the work to date.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Ato Alem Hadera"}
              title={"Director, Millennium Development Ethiopia"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>‘Diamond’ sponsor</TestimonialHeading>
              <TestimonialText>
                This certificate is awarded to ASER Construction plc for its
                contributions as a ‘Diamond’ sponsor at the ECOTMPA National
                Workshop-2016 entitled Construction industry transformation:
                from where to where .
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Engineer Fikadu Haile"}
              title={"Addis Ababa City Roads Authority general Manager"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
