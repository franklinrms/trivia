import styled, { keyframes } from 'styled-components';
import theme from '../../style/theme';

const timerBeat = keyframes`
    40%, 80% {
        transform: none
    }
    50%{
        transform: scale(1.125)
    }
`;
const timerIndicator = keyframes`
    100%{
        transform: translateY(100%)
    }
`;

const ContainerTimer = styled.span`
    font-size: 50px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    padding: 30px;
    font-weight: bold;
    filter: drop-shadow(5px 4px 3px ${theme.colors.stroke});
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 auto;
    margin-top: 50px;
    overflow: hidden;

    p {
        animation: ${timerBeat} 1s infinite forwards .5s;
        filter: drop-shadow(5px 4px 3px ${theme.colors.stroke});
   }
   &::after {
            content: '';
            position: absolute;
            z-index: -99;
            width: 90%;
            height: 90%;
            background-color: ${theme.colors.background};
            border-radius: 50%;
    }
   &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            z-index: -100;
            width: 110%;
            height: 110%;
            background-color: ${theme.colors.brand_secondary};
            animation: ${timerIndicator} 32s linear 1s forwards;
    }


`;

export default ContainerTimer;
