import {colors} from '../../globalStyle';
import styled from 'styled-components';

export const StyledApp = styled.div`
    min-height: 100vh;
    background: ${({darkMode}) => darkMode ? colors.backgroundDark : colors.backgroundLight};
    color: ${({darkMode}) => darkMode ? colors.backgroundLight : colors.backgroundDark};
`;