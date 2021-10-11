import {colors} from '../../globalStyle';
import styled from 'styled-components';

export const VideoCardContainer = styled.div`
    width: 345px;
    height: 345px;
    border: solid 0.8px #ffff;
    border-radius: 4px;
    box-shadow: 0px 1px 1px black;
    overflow: hidden;
    margin: 9px;
`;

export const Thumbnail = styled.div`
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${props => props.highImage});
    height: 140px;
    @media screen and (max-width: 1200px) {
        background-image: url(${props => props.mediumImage});
    }
    @media screen and (max-width: 800px) {
        background-image: url(${props => props.defaultImage});
    }
`;

export const Content = styled.div`
    padding: 15px
`;

export const Title = styled.h2`
    font-size: 1em;
`;

export const Paragraph = styled.p`
    font-size: 0.8em;
    color: ${colors.dimText};
`;