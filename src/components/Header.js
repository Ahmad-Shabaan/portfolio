// import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faFacebook,
    url: "https://www.facebook.com/profile.php?id=100009373676830",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }; 

  const ref = useRef(null);
  const [prevScroll ,setPrevScroll] = useState(window.scrollY)

 useEffect(()=>{
  const handleScroll = () => {
    const currentScroll = window.scrollY;
    if(currentScroll > prevScroll){
      ref.current.style.transform = "translateY(-200px)"
    }else{
      ref.current.style.transform = "translateY(0)"
    }
    setPrevScroll(currentScroll)
  }
  window.addEventListener("scroll",handleScroll);
  return ()=>{
    window.removeEventListener("scroll",handleScroll)
  }
 },[prevScroll]);

  return (
    <Box
      ref={ref}
      position="fixed"
      zIndex={10000}
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {/* if you want to open your link in new tap by using target and rel attributes */}
              {socials.map((child) => {
                return(<a href={child.url} key={child.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon size="2x" icon={child.icon} />
              </a>)
              })}
            </HStack>

          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              {/* you can pass the 'projects' string as the parameter by using bind() method */}
              <a href="#projects" onClick={handleClick.bind(this,"projects")} >Projects</a>

              {/* you can pass the 'contactme' string as the parameter by arrow function */}
              <a href="#contactme" onClick={() => handleClick("contactme")}>Contact ME</a>

            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;