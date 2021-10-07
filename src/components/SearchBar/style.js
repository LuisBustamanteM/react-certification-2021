import styled from 'styled-components';


export const SearchBarContainer = styled.div`
  color: ${props => props.primary ? "white" : "white"};
  font-size: 0.9em;
  border: white;
  background: rgba(255 ,255,255, 0.2);
  border-radius: 4px;
  max-height:100%
  width: 100%;
  padding: 8px 10px;
  ;`

export const IconContainer = styled.div`
  margin-right: 8px;
  display: inline;
  position: relative;
  ;`

export const InputText = styled.input`
  color: ${props => props.primary ? "white" : "white"};
  font-weight: bold;
  border: none;
  maxHeight:100%;
  width: 200px;
  background: none;
  ;`