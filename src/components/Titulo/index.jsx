import styled from "styled-components";

const Titulo = styled.h2`
   font-size: 32px;
   color: #7B78E5;
   //            SI SE RECIBE ALGUNA ALINEACION SE APLICA props.$align SI NO SE ALINEA COMO LEFT(IZQUIERDA)
   text-align: ${props => props.$align ? props.$align : "left" }; // $ { } SE LLAMA PROPS

`

export default Titulo