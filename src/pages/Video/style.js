import styled from 'styled-components'
import {colors} from "../../globalStyle";

export const VideoPageContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 80px;
 
  @media screen and (max-width: 1200px) {
    display: block;
  }
`

export const Container = styled.div`
  min-height: 100vh;
  background: ${({darkMode}) => darkMode ? colors.backgroundDark : colors.backgroundLight};
  color: ${({darkMode}) => darkMode ? colors.backgroundLight : colors.backgroundDark};
`