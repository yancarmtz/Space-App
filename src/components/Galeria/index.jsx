import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import styled from "styled-components";
import Imagen from "./Imagen";

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`

const SeccionFluida = styled.section`
    flex-grow: 1; //La propiedad flex-grow es una parte del modelo de diseño flexbox en CSS. 
                  //Se utiliza para especificar cuánto crecerá un elemento flex en relación 
                  //con los otros elementos flexibles dentro de su contenedor. 
                  //
                  //Explicación de flex-grow: 1;
                  // - flex-grow: Define la capacidad de un elemento para crecer si es necesario. 
                  //              Un valor numérico es asignado para determinar cuánto debería crecer en proporción
                  //              a los otros elementos dentro del mismo contenedor flexible.
                  //
                  // - 1: Este valor indica que el elemento puede crecer para llenar el espacio 
                  //      disponible en el contenedor. Si todos los elementos en el contenedor tienen un 
                  //      valor de flex-grow igual a 1, todos crecerán de manera uniforme 
                  //      y compartirán el espacio extra por igual.
`

const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({ fotos = [], setTag, fotoSeleccionada, alAlternarFavorito }) => {
    return (
        <>
            <Tags setTag={setTag} />
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>Navegue por la galeria</Titulo>
                    <ImagenesContainer>
                        {fotos.map(foto => <Imagen
                            alAlternarFavorito={alAlternarFavorito}
                            alSolicitarZoom={fotoSeleccionada}
                            key={foto.id}
                            foto={foto} />)
                        }
                    </ImagenesContainer>
                </SeccionFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria