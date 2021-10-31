import {colors, mainTitle} from '../../globalStyle';
import styled from 'styled-components';

export const HomeContainer = styled.div`
  min-height: 100vh;
  background: ${({darkMode}) => darkMode ? colors.backgroundDark : colors.backgroundLight};
  color: ${({darkMode}) => darkMode ? colors.backgroundLight : colors.backgroundDark};
`
export const Title = styled.h1`
    text-align: center;
    color: ${({darkMode}) => darkMode ? colors.backgroundLight : colors.backgroundDark};
    font-size: ${mainTitle.fontSize};
    font-weight: ${mainTitle.fontSize};
    line-height: ${mainTitle.lineHeight};
    letter-spacing: ${mainTitle.letterSpacing};
    margin: 0;
    padding-top: 35px;
    box-sizing: border-box;

`;