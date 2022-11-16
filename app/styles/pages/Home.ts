'use client';

import styled from "styled-components";

export const Container = styled.div`
  padding: 0 3.2rem;
`;

export const Main = styled.main`
  min-height: 100vh;
  padding: 6.4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 6.4rem;
  font-style: normal;
  font-weight: 800;
  letter-spacing: -0.025em;
  a {
    text-decoration: none;
    color: #0070f3;
  }
  a:is(:hover, :focus, :active) {
    text-decoration: underline;
  }
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(180deg, #ffffff 0%, #aaaaaa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    a {
      background: linear-gradient(180deg, #0070f3 0%, #0153af 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
`;

export const Description = styled.p`
  margin: 6.4rem 0;
  line-height: 1.5;
  font-size: 2.4rem;
`;

export const Code = styled.code`
  background: #fafafa;
  border-radius: 5px;
  padding: 1.2rem;
  font-size: 1.8rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
  @media (prefers-color-scheme: dark) {
    background: #111;
  }
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;
