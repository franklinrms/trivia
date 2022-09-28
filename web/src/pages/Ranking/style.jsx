import styled from 'styled-components';
import theme from '../../style/theme';
import { PlayButton } from '../Home/style';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.brand};
    background-image: url(${({ bg }) => bg});
    justify-content: center;
    align-items: center;
`;

export const ContainerRanking = styled.section`
    background-color: ${theme.colors.background};
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    padding: 20px 0;
    width: 40%;
    height: 80%;
    align-items: center;

    h1 {
        font-size: 2rem;
        margin-bottom: 20px;
        margin-top: 20px;
    }

    @media (max-width: 850px) {
        width: 95%;
    }
`;

export const List = styled.div`
    padding: 20px;
    width: 99%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;

    span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border-radius: 30px;
        background-color: ${theme.colors.surface_primary};
        filter: drop-shadow(5px 4px 3px ${theme.colors.stroke});
    }

    h2 {
        display: flex;
        gap: 10px;
        font-size: 1.5rem;
        align-items: center;
        justify-content: space-around;
        border-radius: 30px;
        padding: 20px 40px;
        width: 40%;
        background-color: ${theme.colors.background};

        i {
            font-size: 2rem;
            color: ${theme.colors.brand};
        }

        p {
            font-size: 20px;
            font-weight: 400;
        }

        @media (max-width: 850px) {
            font-size: 1rem;

            i {
                font-size: 1rem;
            }
            p {
                font-size: 0.8rem;
            }
        }
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    div {
        display: flex;
        align-items: center;
        padding: 10px 30px;
        gap: 20px;

        p {
            font-size: 1.5rem;
        }

        @media (max-width: 850px) {
            padding: 5px;
            p {
                font-size: 1rem;
            }
        }
    }

`;

export const Button = styled(PlayButton)`
  width: 60%;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  font-size: 30px;
`;
