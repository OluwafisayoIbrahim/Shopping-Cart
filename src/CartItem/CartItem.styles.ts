import styled from "styled-components";

export const Wrapper = styled.div`
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

 display: flex;
 justify-content: space-between;
 font-family: "Poppins" sans-serif;
 border-bottom: 1px solid lightblue;
 padding-bottom: 20px;

 div{
    flex: 1;
 }

 .information, .buttons{
    display: flex;
    justify-content: space-between;
 }

 img{
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
 }
`;