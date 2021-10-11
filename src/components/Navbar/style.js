import {colors} from '../../globalStyle';
import styled from 'styled-components';

export const NavBar = styled.div`
    margin: 0;
    text-align: left;
    color: ${colors.black};
    display:inline-flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    position: relative;
    padding: 10px 24px 0 24px;
    background: ${colors.navBarBlue};
    min-height: 64px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.6);
`;