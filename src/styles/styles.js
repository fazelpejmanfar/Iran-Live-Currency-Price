import styled from "styled-components";

export const Screen = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
    align-items: center;
    justify-content: space-around;
    align-content: center;
    flex-direction: column;
background: linear-gradient(121deg, #FF0000 0%, #ff0000 100%), linear-gradient(140deg, #ff5454 27%, #223DCB 100%), linear-gradient(140deg, #4E9C51 0%, #001AFF 72%), linear-gradient(64deg, #6e00ff 0%, #0038FF 100%), radial-gradient(52% 101.79% at 50% 50%, #707300 0%, #ff0000 100%), radial-gradient(100% 100% at 70% 0%, #7A3B00 0%, #1DAC92 100%);
background-blend-mode: overlay, overlay, difference, difference, color-burn, exclusion;
`;

export const Main = styled.div`
width: 80%;
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    gap: 20px;
    padding: 20px;
    margin-bottom: 50px;
background: rgba(255, 255, 255, 0.35);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(6.9px);
-webkit-backdrop-filter: blur(6.9px);
border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const Tablediv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 100%;
    gap: 20px;
    @media (max-width: 800px) {
        flex-direction: column;
    }
}
`;