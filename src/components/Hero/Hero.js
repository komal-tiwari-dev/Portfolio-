import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Komal Tiwari</h1>
            <h5>Full Stack Web Developer</h5>
            <p>
              I design and code beautifully simple things, and I love what I do.
            </p>
          </HeroLeft>
          <HeroRight>
            <Image
              src="https://raw.githubusercontent.com/komal-tiwari-dev/Portfolio-/master/src/Assets/Materials/Profile.png"
              alt="man-svgrepo"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src="https://raw.githubusercontent.com/komal-tiwari-dev/Portfolio-/ece7d79bb98b498961733332ab791fb96e9aa8ce/src/Assets/Materials/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
