import {colors} from '../../globalStyle';
import styled from 'styled-components';

export const VideoContainer = styled.div`
  color: ${({darkMode}) => darkMode ? colors.backgroundLight : colors.dimBlack};
  width: 80%;
  height: 80vh;
  h2, p{
    padding: 10px 30px 0 30px;
    margin: 0;
  }
    
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 100%;
    margin-bottom: 64px;
  }
`

export const FavoriteButton = styled.button`
  margin-left: 18px;  
  height: 28px;
  color: ${colors.backgroundLight};
  background: ${({darkMode}) => darkMode ? colors.navBarDark : colors.navBarLight};
  border: solid 2px ${({darkMode}) => darkMode ? colors.navBarLight : colors.navBarDark};
  box-sizing: border-box;
  :hover{
    opacity: 0.8;
    cursor: pointer;
  }
`