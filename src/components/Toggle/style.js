import {colors} from '../../globalStyle';
import styled from 'styled-components';

export const ToggleContainer = styled.div`
    margin-right: 1em;
    display: flex;
    align-items: center;
`;

export const Switch = styled.label`
  font-size: 1em;
  margin-right: 0.8em;
  color: ${colors.backgroundLight};
;`

export const Mode =  styled.span`
    color: ${colors.backgroundLight};
`;

/* The switch - the box around the slider */
export const ToggleSwitch = styled.div`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
    margin-right: 20px;
    
    /* Hide default HTML checkbox */
    input {
        opacity: 1;
        width: 0;
        height: 0;
    }
    
    input:checked + .slider{
      background-color: #19857b;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #19857b;
    }
        
    input:checked + .slider:before {
      transform: translateX(26px);
    }
   
`

/* The slider */
export const ToggleSlider = styled.div`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #b8bb21;
    transition: .4s;
    border-radius: 34px;
    
    :before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 4px;
        bottom: 4px;
        background-color: #093633;
        box-shadow: 2px 2px 2px black;
        transition: .4s;
        border-radius: 50%;
    }
`

