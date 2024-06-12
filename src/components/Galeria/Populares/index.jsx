import Titulo from "../../Titulo"
import { styled } from "styled-components"
import fotos from "../Populares/fotos-populares.json"

const ColumnaFotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Imagen = styled.img`
    max-width: 212px;
    border-radius: 20px;
`

const Boton = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;

const Populares = () => {
    return (
        <section>
            <Titulo $align='center'>Populares</Titulo> 
            <ColumnaFotos>
                {fotos.map(foto => <Imagen key={foto.id} src={foto.path} alt={foto.alt}/>)}
            </ColumnaFotos>
            <Boton>Ver más</Boton>
        </section>
    )
}

export default Populares


/* 
¿Qué Significa $align='center'?
    $align: El prefijo $ no tiene un significado especial en JavaScript o React, 
    pero es una convención común en Styled Components para indicar que una 
    prop se usa exclusivamente para estilos.
    center: Es el valor que se asigna a la prop $align,
    indicando que el texto debe estar centrado.
*/