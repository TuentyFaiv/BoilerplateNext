'use client';

import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex: 1;
  padding: 3.2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  @media (prefers-color-scheme: dark) {
    border-color: #222;
  }
`;

export const Logo = styled.span`
  height: 1em;
  margin-left: 0.8rem;
  @media (prefers-color-scheme: dark) {
    img {
      filter: invert(1);
    }
  }
`;
