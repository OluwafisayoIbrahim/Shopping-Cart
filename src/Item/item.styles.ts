import styled from 'styled-components'

export const Wrapper = styled.div`
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;

  button {
    border-radius: 0 0 20px 20px;
  }

  img{
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: "Poppins" sans-serif;
    padding: 1rem;
    height: 100%
  }
`;