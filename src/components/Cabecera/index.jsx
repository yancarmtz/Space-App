import styled from "styled-components"

// SE IMPORTA EL CAMPOTEXTO EL CUAL TENDRA EL INPUT PARA LA BUSQUEDA 
// DONDE TIENE DENTRO UNA IMG DE UNA LUPA
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0; //60px arriba y abajo 0 a los lados
    display: flex;
    justify-content: space-between;
    img{
        width: 212px;
    }
`

const Cabecera = () => {
    return <HeaderEstilizado>
        <img src="img/logo.png" alt="Logo de Space App" />
        <CampoTexto/>
    </HeaderEstilizado>
}

export default Cabecera