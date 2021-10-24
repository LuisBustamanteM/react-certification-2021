import {colors} from '../../globalStyle';
import styled from 'styled-components';

export const VideoContainer = styled.div`
  color: ${colors.dimBlack};
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