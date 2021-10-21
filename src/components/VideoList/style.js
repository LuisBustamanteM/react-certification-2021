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

export const VideoPreview = styled.li`
  color: black;
  list-style: none;
  display: flex;
  border-bottom: solid 1px black;
  
  a {
      color: black;
      list-style: none;
      display: flex;
      border-bottom: solid 1px black;
      font-weight: 300;
      flex-grow:1;
      img {
        margin-right: 10px
      }
  }
`