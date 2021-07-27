import {
  Box,
  chakra,
  Link,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

import { FaHistory, FaTeamspeak } from "react-icons/fa";

import { Section } from "./Section";

export const AboutUsFeatures = (props) => {
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
          title="Company History"
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
          title="Who we are"
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

        <Section
          title="Strategic foundation"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          }
        >
          {/* Your customers&#039; data will be safe and secure. */}
        </Section>

        <Section
          title="Equipments and plants"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          }
        >
          {/* Connect with third-party tools that you&#039;re already using. */}
        </Section>

        <Section title="Our team" icon={<FaTeamspeak size={24} />}>
          {/* Build strategic funnels that will drive your customers to convert */}
        </Section>
        <Section
          title="Social responsibility"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          }
        >
          {/* We have a social Responsibility as a company */}
        </Section>
      </SimpleGrid>
    </>
  );
};
