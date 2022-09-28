import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 40px;

  @media (max-width: 850px) {
        width: 95%;
    }
`;

export default Container;
