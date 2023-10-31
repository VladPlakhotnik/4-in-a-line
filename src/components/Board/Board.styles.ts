import styled from "styled-components";
import { Button } from "@chakra-ui/react";

export const Container = styled.div`
  cursor: pointer;
  height: 36rem;
  width: 40rem;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 21px;
  justify-content: center;
`;

export const GameButton = styled(Button)`
  z-index: 9;
  width: 67px;
  font-size: 40px;
  background-color: rgba(255, 255, 255, 0);
  border: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 2rem;
  }
`;

export const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Marker = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 15%;
  z-index: 10;
`;

export const Box = styled.div``;

export const H1 = styled.div`
  position: absolute;
  font-size: 2rem;
  bottom: 7%;
`;

export const ButtonAgain = styled.button`
  padding: 1rem;
  color: #fff;
  background-color: rgb(0, 74, 121);
  border-radius: 2rem;
  font-size: 2rem;
  &:hover {
    transition: ease 1s;
    background-color: rgba(0, 74, 121, 0.6);
  }
`;
