import { ChakraProvider, Box } from "@chakra-ui/react";

import "../styles/globals.css";
import NavBar from "../components/NavBar/NavBar";
import TopNavBar from "../components/NavBar/TopNavBar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Box w="full" position="fixed" zIndex={999}>
        {/* <TopNavBar /> */}
        <NavBar />
      </Box>

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
