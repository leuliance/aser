import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

const Logo = (props) => {
  return (
    <Image
      alt="footer image"
      src="https://aserplc.com/wp-content/uploads/2016/07/footer-aser.png"
      backgroundSize="cover"
      boxSize="full"
    />
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue("gray.900", "gray.900")}
      color={useColorModeValue("gray.200", "gray.200")}
    >
      <Container as={Stack} maxW={"7xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 3fr 1fr 1fr" }}
          spacing={10}
        >
          <Stack spacing={4}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"sm"}>
              Clients choose ASER when their main focus is quality of services
              and timely delivery of projects through an innovative approach. ©
              2021 ASER PLC. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack maxW="700px" align={"flex-start"}>
            <ListHeader>Our Location</ListHeader>
            <Text>
              Gerji Imperial; Bob Marley Square, on the road to Megenagna, next
              to Mega Paint Factory.
            </Text>
            <Text>Tel : +251 11 662 0357</Text>
            <Text>E-mail : info@aserplc.com</Text>
            <Text>Working Hour : Mon. – Fri. 8:00-5:00 Sat. 8:00 - 12:00</Text>


          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}> UsAbout</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Concrete Batching Plant</Link>
            <Link href={"#"}>Press Release</Link>
            <Link href={"#"}>Asphalt Mixing Plant</Link>
          </Stack>
          <Stack mt={10} align={"flex-start"}>
            <Link href={"#"}>Useful Links</Link>
            <Link href={"#"}>Concrete pipe plant</Link>
            <Link href={"#"}>Gallery</Link>
            <Link href={"#"}>Crusher Plant</Link>
            <Link href={"#"}>Video</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
