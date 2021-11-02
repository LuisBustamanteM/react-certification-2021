import {colors} from '../../globalStyle';
import styled from 'styled-components';

export const NavBar = styled.div`
    position: fixed;
    top: 0;
    text-align: left;
    color: ${colors.dimBlack};
    display:inline-flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    padding: 10px 24px 0 24px;
    background: ${props => props.darkMode ?  colors.navBarDark : colors.navBarLight };
    min-height: 64px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.6);
`;