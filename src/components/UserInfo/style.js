import {colors} from '../../globalStyle';
import styled from 'styled-components';

export const UserInfoContainer = styled.div`
    padding: 10px;
`;

export const UserInfoCircle = styled.label`
  display: inline-block;
  width: 40px;
  height: 40px;
  background: ${({darkMode}) => darkMode ? colors.backgroundDark  : colors.gray};
  position: relative;
  text-align: center;
  font-size: 2em;
  border-radius: 50%;
;`

export const Avatar = styled.img`
    width: 100%;
    border-radius: 50%;
`