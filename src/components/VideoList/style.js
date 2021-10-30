import {colors} from '../../globalStyle';
import styled from 'styled-components';

export const VideoListContainer = styled.div`
  width: 30%;
  overflow: auto;
  max-height: 100vh;
  
  @media screen and (max-width: 1200px) {
    width:100%;
    justify-content: center;
  }  
`

export const VideoList = styled.ul`
  margin: 0;
  padding: 0;
`

export const Thumbnail = styled.li`
  color: ${({darkMode}) => darkMode ? colors.backgroundLight : colors.dimBlack};
  list-style: none;
  display: flex;
  border-bottom: solid 1px black;
  font-weight: 300;
  a {
      color: ${({darkMode}) => darkMode ? colors.backgroundLight : colors.dimBlack};
      flex-grow:1;
      display: flex;
  }
  :hover {
    box-shadow: 2px 2px 2px black;
    cursor: pointer;
    transition: 0.2s;
  }
  
  img{
    margin-right: 15px;
    height: 100px;
  }
`