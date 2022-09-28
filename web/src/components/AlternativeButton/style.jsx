import styled from 'styled-components';
import theme from '../../style/theme';

const Alternative = styled.button`
    box-shadow: 2px 2px 10px 0px ${theme.colors.stroke};
    background-image: url(${({ bg }) => bg});
    border: none;
    border-radius: 20px;
    padding: 25px;
    font-size: 25px;
    background-color: ${theme.colors.surface_primary};
    transition: 0.5s;
    width: 48%;

    ${(props) => props.selected && `
        border: 5px solid ${props.isCorrect ? theme.colors.brand : theme.colors.brand_secondary};
    `}

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 850px) {
        width: 100%;
        padding: 15px;
        font-size: 20px;
    }
`;
export default Alternative;
