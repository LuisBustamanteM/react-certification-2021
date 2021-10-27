import {colors, mainTitle} from '../../globalStyle';
import styled from 'styled-components';

export const Title = styled.h1`
    text-align: center;
    color: ${({darkMode}) => darkMode ? colors.backgroundLight : colors.backgroundDark};
    font-size: ${mainTitle.fontSize};
    font-weight: ${mainTitle.fontSize};
    line-height: ${mainTitle.lineHeight};
    letter-spacing: ${mainTitle.letterSpacing};
`;