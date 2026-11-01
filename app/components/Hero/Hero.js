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
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            alignItems: "flex-start",
          }}
        >
          <Button
            onClick={() => {
              const a = document.createElement("a");
              a.href = "/Babajide_Oyafemi_CV.pdf";
              a.download = "Babajide_Oyafemi_CV.pdf";
              document.body.appendChild(a);
              a.click();
              a.remove();
            }}
          >
            Download CV
          </Button>
          <Button
            onClick={() =>
              (window.location =
                "mailto:j.oyafemi@gmail.com?subject=Hello%20Babajide")
            }
          >
            Contact Me
          </Button>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
