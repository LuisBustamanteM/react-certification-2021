import {colors} from '../../globalStyle';
import styled from 'styled-components';

export const RightNav = styled.div`
    margin: 0;
    color: ${colors.backgroundLight};
    display:flex;
    float: right;
    @media (max-width: 600px) {
        display: none;
    }
`;