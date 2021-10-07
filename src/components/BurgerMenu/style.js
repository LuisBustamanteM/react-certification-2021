import styled from 'styled-components';

export const BarsContainer = styled.div`
  /* Adapt the colors based on primary prop */
  color: ${props => props.primary ? "white" : "white"};
  font-size: 1.2em;
  margin-right: 2em;
  padding: 0.25em;
  border: none;
  ;`
