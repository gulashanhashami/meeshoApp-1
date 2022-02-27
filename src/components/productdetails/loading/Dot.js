import { BounceAnimation } from './BounceAnimation'
import styled from 'styled-components'
export const Dot = styled.div`
background-color: black;
border-radius: 50%;
width: 0.75rem;
height: 0.75rem;
margin: 0 0.25rem;

animation: ${BounceAnimation} 0.5s linear infinite;
animation-delay: ${(props) => props.delay};
`