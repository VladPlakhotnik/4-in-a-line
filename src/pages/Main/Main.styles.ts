import styled from "styled-components";

export const Container = styled.div`
  display: inherit;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 700px;
  background-color: rgba(3, 16, 3, 0.7);
  border-radius: 3rem;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 80px;
  padding: 2rem;
  font-size: 1.7rem;
  margin: 1rem 0;
  background-color: rgb(0, 74, 121);
  border: 0.2rem solid #fff;
  border-radius: 3rem;
  &:hover {
    transition: ease 1s;
    font-size: 2rem;
  }
`;
