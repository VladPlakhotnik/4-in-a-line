import styled from "styled-components";
import { ArrowBackIcon } from "@chakra-ui/icons";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(3, 16, 3, 0.6);
`;

export const Arrow = styled(ArrowBackIcon)`
  position: relative;
  width: 5rem;
`;
