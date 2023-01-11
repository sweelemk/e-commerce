import styled, {keyframes} from 'styled-components';
import {AiOutlineLoading} from 'react-icons/ai';

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`

export const LoaderStyled = styled(AiOutlineLoading)`
  animation: ${spinAnimation} 1.3s infinite linear;
`
