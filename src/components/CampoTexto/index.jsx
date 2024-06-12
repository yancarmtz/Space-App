import { styled } from "styled-components"
import search from './search.png'

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`;

const IconoLupa = styled.img`
    position: absolute; //LA LUPA QUEDA DENTRO DEL INPUT
    top: 10px;
    right: 10px;
    width: 38px !important; /* La propiedad width: 38px !important en un archivo CSS 
                               (como puede ser un archivo CSS importado en index.jsx 
                               o directamente dentro de un archivo JSX utilizando una 
                               biblioteca de estilos en línea) se utiliza para definir
                                y asegurar que un elemento tenga una anchura fija de 
                                38 píxeles, sobrescribiendo cualquier otra regla CSS 
                                que pudiera estar aplicándose a ese mismo elemento.    */
    height: 38px;
`;

const CampoTexto = ({ setFiltro }) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado onChange={(evento) => { setFiltro(evento.target.value) }} type="text" placeholder="¿Qué estás buscando?"/>
            <IconoLupa src={search} alt="ícono de lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto