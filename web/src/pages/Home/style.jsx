import styled from 'styled-components';
import theme from '../../style/theme';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 20px;
    background-color: ${theme.colors.brand};
    background-image: url(${({ bg }) => bg});
    justify-content: space-around;
    align-items: center;

    img {
        width: 30%;
    }
`;

export const Form = styled.form`
    background-color: ${theme.colors.background};
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    width: 30%;
    height: 70%;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 46px;
        margin-bottom: 30px;
    }
    input {
        width: 80%;
        padding: 15px;
        border: 4px solid ${theme.colors.brand};
        border-radius: 20px;
        font-size: 24px;
        margin-bottom: 20px;
    }
    span {
        width: 80%;
        display: flex;
        justify-content: space-evenly;
    }

    @media (max-width: 850px) {
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 85%;
    }
`;

export const PlayButton = styled.button`
    width: 80%;
    padding: 10px;
    font-size: 30px;
    font-weight: bold;
    border: 4px solid ${theme.colors.brand};
    border-radius: 20px;
    background: ${theme.colors.brand};
    color: ${theme.colors.text_on_brand_color};
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    z-index: 1;
    margin-bottom: 20px;
    margin-top: 20px;
    letter-spacing: 1px;

    &::after{
        position: absolute;
        content: "";
        width: 0;
        height: 100%;
        top: 0;
        right: 0;
        z-index: -1;
        background: ${theme.colors.background};
        border-radius: 20px;
        transition: all 0.3s ease;
    }
    &:hover::after {
        left: 0;
        width: 100%;
    }
    &:hover {
        color: ${theme.colors.brand};
    }
    &:active{
        top: 2px;
    }
`;

export const Buttons = styled.button`
    background: transparent;
    margin-top: 30px;
    padding: 10px;
    letter-spacing: 1px;
    font-size: 24px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: ${theme.colors.text_secondary};

    &:active{
        top: 2px;
    }
    i {
        color: ${theme.colors.text_secondary};
    }
`;
