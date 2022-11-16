'use client';

import styled from "styled-components";

export const Container = styled.a`
  margin: 1.6rem;
  padding: 2.4rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
  &:is(:hover, :focus, :active) {
    color: #0070f3;
    border-color: #0070f3;
  }
  @media (prefers-color-scheme: dark) {
    border-color: #222;
  }
`;

export const Title = styled.h2`
  margin: 0 0 1.6rem 0;
  font-size: 2.4rem;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 2rem;
  line-height: 1.5;
`;