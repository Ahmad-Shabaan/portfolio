import React from "react";
import { Avatar ,Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSec";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSec = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar size='2xl'  bg='red.500' src=' https://i.pravatar.cc/150?img=7' />
      <Heading as="h4" size="2x">{greeting}</Heading>
      <Heading as="h2" size="3xl">{bio1}</Heading>
      <Heading as="h2" size="3xl">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSec;