import styled from 'styled-components';
import theme from '../../style/theme';

const Container = styled.div`
    border-radius: 20px;   
    padding: 40px;
    width: 60%;
    background-color: ${theme.colors.surface_primary};
    background-image: url(${({ bg }) => bg});
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 2px 10px 0px ${theme.colors.stroke};
    margin: 0 auto;
    margin-top: 40px;

    h2 {
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 40px;
    }

    p {
        font-size: 30px;
        margin-bottom: 20px;
    }

    @media (max-width: 850px) {
        width: 95%;
        height: max-content;

        h2 {
            font-size: 30px;
            margin-bottom: 20px;
        }
        p {
            font-size: 20px;
            margin-bottom: 10px;
        }
    }
`;

export default Container;
