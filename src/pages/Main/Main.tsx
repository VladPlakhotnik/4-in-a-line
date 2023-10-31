import React from "react";
import { NavLink } from "react-router-dom";

import { Button, Container } from "./Main.styles";
import { Flex } from "@chakra-ui/react";

export const Main: React.FC = () => {
  return (
    <Flex justify="center" alignItems="center" height="100vh">
      <Container>
        <NavLink to="/game_1vs1">
          <Button>PLAY WITH FRIENDS</Button>
        </NavLink>
        <NavLink to="/game_1vscpu">
          <Button>PLAY WITH CPU</Button>
        </NavLink>
        <NavLink to="/rules">
          <Button>GAME RULES</Button>
        </NavLink>
      </Container>
    </Flex>
  );
};
