import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Oyafemi Babajide's Portfolio
        </SectionTitle>
        <SectionText>
          I am a fullstack web developer and technical writer who builds
          top-notch scalable Web Applications.
        </SectionText>
        <Button
          onClick={() =>
            (window.location =
              "https://www.upwork.com/freelancers/~01efcad1f672850cd8")
          }
        >
          Learn More
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
