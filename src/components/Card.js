import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  // const more = "See more"
  return(
    <VStack backgroundColor="white"  borderRadius={10} color="black" spacing="0px">
      <Image src={imageSrc} boxSize="full" height="400px" borderRadius={10}/>
      <VStack padding="10px"display="flex" alignItems="flex-start">
        <Heading as="h1" fontSize="20px">{title}</Heading>
        <Text  color="blackAlpha.600">{description}</Text>
        <HStack>
        <Text fontSize="xs" as="b" >See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="10px"/>
        </HStack>
      </VStack>
    </VStack>)

};

export default Card;