import styled from "styled-components";

export const Head = styled.div`
flex-direction: column;
align-items: center;
justify-content: center;
height: 150px;
width: 80%;
display: flex;
padding: 15px;
margin-bottom: 51px;
 margin-top: 20px;
background: rgba(255, 255, 255, 0.24);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.3px);
-webkit-backdrop-filter: blur(5.3px);
border: 1px solid rgba(255, 255, 255, 0.3);
@media (max-width: 900px) {
    width: 100%;
}
`;

export const H1 = styled.h1`
font-weight: bold;
font-size: 2rem;
color: white;
@media (max-width: 565px) {
    font-size: 1rem;
    text-align: center;
}
`;

export const BTN = styled.button`
width: 150px;
height: 80px;
font-size: 1.5rem;
font-weight: bold;
color: white;
background-color: black;
border-radius: 20px;
@media (max-width: 565px) {
width: 150px;
height: 50px;
font-size: 1rem;
}
:hover {
    background-color: #940000;
    transition: 1s cubic-bezier(0.3, 1, 0.8, 1);
}
`;

export const BXWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
width: 100%;
`;

export const BX = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 200px;
height: 80px;
color: white;
border: 2px solid yellow;
border-radius: 5px;
`;
