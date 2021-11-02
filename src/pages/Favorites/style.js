import styled from "styled-components";
import {colors} from "../../globalStyle";

export const FavoritesContainer = styled.div`
  margin-top: 80px;
  min-height: 100vh;
  background: ${({darkMode}) => darkMode ? colors.backgroundDark : colors.backgroundLight};
  color: ${({darkMode}) => darkMode ? colors.backgroundLight : colors.backgroundDark};
`