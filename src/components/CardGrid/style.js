import styled from 'styled-components';

export const CardGrid = styled.div`
    padding: 20px;
    margin: 0px auto;
    justify-content: flex-start;
    display: flex;
    flex-flow: row wrap;
    box-sizing: border-box;
    width: 1500px;
    @media screen and (max-width: 1500px) {
        width:1135px;
    }
    @media screen and (max-width: 1200px) {
        width:770px;
    }
    @media screen and (max-width: 800px) {
        width:100%;
        -moz-box-pack: center;
        justify-content: center;
    }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  font-size: 24px;
  color: #965108;
  width: 100%;
`;