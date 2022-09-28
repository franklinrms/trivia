import styled from 'styled-components';
import theme from '../../style/theme';

import { PlayButton } from '../Home/style';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${(props) => props.bg});
    background-color: ${({ minAssertions }) => (minAssertions ? theme.colors.brand_secondary : theme.colors.brand)};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    div {
        position: relative;
        background-color: ${theme.colors.background};
        display: flex;
        flex-direction: column;
        border-radius: 30px;
        width: 60%;
        height: 70%;
        justify-content: center;
        align-items: center;
        /* gap: 15px; */
    }
    img {
        width: 200px;
        border: 10px solid ${theme.colors.background};
        border-radius: 50%;
        position: absolute;
        top: -100px;
    }
    h2 {
        color: ${({ minAssertions }) => (minAssertions ? theme.colors.brand_secondary : theme.colors.brand)};
        font-size: 56px;
        padding: 10px;
    }
    h3 {
        font-size: 36px;
        font-weight: 400;
        padding: 10px;
    }
    span {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 20px;
        gap: 15px;
    }

    @media (max-width: 850px) {
        padding: 15px;
        gap: 10px;

        div {
            width: 90%;
        }
        img {
            width: 150px;
            top: -70px;
        }
        h2 {
            font-size: 36px;
            text-align: center;
        }
        h3 {
            font-size: 20px;
            text-align: center;
        }
        span {
            flex-direction: column;
            padding: 0;
        }
    }

`;

export default Container;

export const Button = styled(PlayButton)`
  width: 50%;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  font-size: 30px;
  @media (max-width: 850px) {
    width: 90%;
    font-size: 20px;
  }
`;
