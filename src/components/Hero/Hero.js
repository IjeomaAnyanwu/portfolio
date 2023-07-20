import React from "react";
import Link from 'next/link';


import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello <br />
          I am Ijeoma Anyanwu,
          <br /> a Full-Stack Software/Product Developer
        </SectionTitle>
        <SectionText>
          As a passionate Software Developer, I have a proven track record of
          implementing solutions using diverse technologies and programming
          languages. I take great delight in exploring and applying new tech
          advancements. In my leisure, I enjoy reading, conducting research,
          watching movies, and cherishing memorable moments. I believe my
          enthusiasm for learning and adapting makes me an asset to any
          development team.
        </SectionText>
        <Link legacyBehaviour href="http://www.linkedin.com/in/anyanwu-ijeoma">
          <Button onClick={props.handleClick}>Learn More</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
