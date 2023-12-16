import styled from "styled-components";
import IconButton from "@mui/material/IconButton";

export const Wrapper = styled.div`
  margin: 40px;

  h1{
    text-align: center;
    font-size: 45px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const StyledButton = styled(IconButton)`
 position: fixed;
 z-index: 100;
 right: 20px;
 top: 20px;
`;