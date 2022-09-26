import styled from 'styled-components';
import theme from '../../style/theme';

const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100px;
    background-color: ${theme.colors.brand};
    background-image: url(${({ bg }) => bg});
    font-size: 24px;

    span {
        display: flex;
        align-items: center;
        img {
            width: 50px;
            border-radius: 50%;
            margin-right: 10px;
        }
    }
`;

export default Container;
