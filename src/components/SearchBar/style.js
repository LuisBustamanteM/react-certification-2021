import {colors} from '../../globalStyle';
import styled from 'styled-components';

export const SearchBar = styled.div`
    margin: 0;
    display: flex;
    max-height: 100%;
    height: 35px;
`;

export const SearchBarContainer = styled.div`
  font-size: 0.9em;
  border: white;
  background: ${colors.dimWhite};
  border-radius: 4px;
  max-height:100%
  width: 100%;
  padding: 8px 10px;
  @media (max-width: 600px) {
    width:340px;
  }
;`

export const IconContainer = styled.div`
  margin-right: 8px;
  display: inline;
  position: relative;
;`

export const InputText = styled.input`
  color: white;
  font-weight: bold;
  border: none;
  maxHeight:100%;
  background: none;
;`