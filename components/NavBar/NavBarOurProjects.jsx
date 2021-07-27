import {
    Box,
    chakra,
    Link,
    useColorModeValue,
    SimpleGrid,
  } from "@chakra-ui/react";

  import { FaHistory,FaTeamspeak } from "react-icons/fa";
  import {Section} from './Section'

 
  export const OurProjectsFeatures = (props) => {
    const hbg = useColorModeValue("gray.50", "brand.400");
    const hbgh = useColorModeValue("gray.100", "brand.500");
    const tcl = useColorModeValue("gray.900", "gray.50");
    return (
      <>
        <SimpleGrid
          columns={props.h ? { base: 1, md: 3, lg: 5 } : 1}
          pos="relative"
          gap={{ base: 8, sm: 10 }}
          px={5}
          py={6}
          p={{ sm: 8 }}
        >
          <Section
            title="On Going Projects"
            icon={
                
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            }
          >
            {/* Get a better understanding of where your traffic is coming from. */}
          </Section>

          <Section
            title="Completed projects"
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              />
            }
          >
            {/* Speak directly to your customers in a more meaningful way. */}
          </Section>

          
        </SimpleGrid>
       
      </>
    );
  };