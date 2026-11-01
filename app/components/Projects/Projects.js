"use client";

import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} alt={p.title} />
            <TitleContent>
              <HeaderThree title={p.title}>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            {(p.live || p.code) && (
              <UtilityList>
                {p.live && (
                  <ExternalLinks
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live site
                  </ExternalLinks>
                )}
                {p.code && (
                  <ExternalLinks
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </ExternalLinks>
                )}
              </UtilityList>
            )}
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
