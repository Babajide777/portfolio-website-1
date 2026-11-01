"use client";

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
          Babajide Oyafemi <br />
          Backend, Full-Stack &amp; AI Engineer
        </SectionTitle>
        <SectionText>
          I build production SaaS platforms and bring large language models
          into live business workflows. 7+ years across Node.js, TypeScript,
          Python and React, currently leading development of healthcare
          platforms serving 5,000+ users. MSc Applied Artificial Intelligence,
          University of Chester.
        </SectionText>
        <Button
          onClick={() =>
            (window.location =
              "https://www.linkedin.com/in/babajide-oyafemi/")
          }
        >
          View LinkedIn
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
