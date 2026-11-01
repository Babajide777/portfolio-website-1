"use client";

import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{ display: "flex", alignItems: "center", color: "white" }}
      >
        <DiCssdeck size="3rem" /> <span>Babajide Oyafemi</span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" passHref>
          <NavLink as="span">Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" passHref>
          <NavLink as="span">Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" passHref>
          <NavLink as="span">About</NavLink>
        </Link>
      </li>
      <li>
        <a href="mailto:j.oyafemi@gmail.com">
          <NavLink as="span">Contact</NavLink>
        </a>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Babajide777">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/babajide-oyafemi/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="http://twitter.com/jid_BOSS">
        <AiOutlineTwitter size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
