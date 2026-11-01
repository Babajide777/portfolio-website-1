"use client";

import React from "react";
import { DiNodejsSmall, DiPython, DiReact } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I work across TypeScript, JavaScript, Python and PHP, with hands-on
      ownership of infrastructure and CI/CD on AWS, Digital Ocean and Docker,
      using GitHub Actions pipelines.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiNodejsSmall size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js, NestJS, Express, Django, Laravel; REST, GraphQL,
            WebSockets; PostgreSQL, MySQL, MongoDB, Redis
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React, Next.js, Vue, React Native; Redux Toolkit, TanStack Query,
            TailwindCSS, Material UI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>AI</ListTitle>
          <ListParagraph>
            LLM integration into production workflows, OpenAI APIs, HuggingFace
            Transformers, PyTorch, reinforcement learning
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
