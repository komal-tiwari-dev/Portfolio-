import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://raw.githubusercontent.com/komal-tiwari-dev/Portfolio-/master/src/Assets/Materials/profile-img.png"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Komal Tiwari</strong> I enjoy creating
            things that live on the internet. Love to learn new skills and
            implement them by building interactive real-life projects. My tech
            life started when I was in 8th standard that time we have very less
            access to computers. I only get to use it in my school and there
            also only for 20 min so I was very curious to use the computer and
            fast forward to today I almost use a computer more than 10 hours in
            the day great yay. Currently, I develop cool projects by Using MERN
            Tech Stack and looking forward to explore more Tech Stack.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
