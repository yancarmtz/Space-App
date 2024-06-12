/* import styled from "styled-components"; es una línea de código en JavaScript
 que importa la biblioteca styled-components en un proyecto de React. 
 Esta biblioteca permite a los desarrolladores escribir estilos CSS 
 en sus componentes de React usando una técnica llamada CSS-in-JS. */
import styled from "styled-components"

//SE INGRESA LA CARPETA GLOBALSTYLES QUE SERVIRA PARA RESETEAR 
//LOS CSS DEL NAVEGADOR POR DEFAULT
import GlobalStyles from "./components/GlobalStyles"

//  SE IMPORTA LA CABECERA LA CUAL TIENE LOS ESTILOS Y LA IMAGEN
import Cabecera from "./components/Cabecera"
// SE IMPORTA LA BARRALATERAL QUE APARECE DE EL LADO IZQUIERDO DE LA PAGINA WEB
import BarraLateral from "./components/BarraLateral"
//SE IMPORTAN LAS CARACTERISTICAS DEL BANNER
import Banner from "./components/Banner"
//SE IMPORTA LA IMAGEN BANNER
import banner from "./assets/banner.png"
//SE IMPORTA EL ARCHIVO GALERIA 
import Galeria from "./components/Galeria"
// SE IMPORTA EL ARCHIVO FOTOS.JSON
import fotos from "./fotos.json"
//
import { useEffect, useState } from "react"
//Para el zoom de las imagenes
import ModalZoom from "./components/ModalZoom"
//SE MOSTRARAN LAS IMAGENES EN POPULARES DE UN TAMAÑO MAS PEQUEÑO
import Populares from "./components/Galeria/Populares"
//PIE DE PAGINA
import Pie from "./components/Pie"


//SE CREA UN COMPONENTE ESTILIZADO ATRAVEZ DE STYLED.DIV SE LE DA VARIOS ESTILOS
//FondoGradiente AUTOMATICAMENTE SE CONVIERTE EN UN DIV
const FondoGradiente = styled.div`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  gap: 54px;
`

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1; /*La propiedad flex-grow es una parte del modelo de diseño flexbox en CSS. 
                  Se utiliza para especificar cuánto crecerá un elemento flex en relación 
                  con los otros elementos flexibles dentro de su contenedor. 
                  
                  Explicación de flex-grow: 1;
                   - flex-grow: Define la capacidad de un elemento para crecer si es necesario. 
                                Un valor numérico es asignado para determinar cuánto debería crecer en proporción
                                a los otros elementos dentro del mismo contenedor flexible.

                   - 1: Este valor indica que el elemento puede crecer para llenar el espacio 
                        disponible en el contenedor. Si todos los elementos en el contenedor tienen un 
                        valor de flex-grow igual a 1, todos crecerán de manera uniforme 
                        y compartirán el espacio extra por igual.
                  */
`


const App = () => {
  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos)
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null)


  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosDeGaleria(fotosFiltradas)
  }), [filtro, tag]


  const alAlternarFavorito = (foto) => {

    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !fotoSeleccionada.favorita
      })
    }



    setFotosDeGaleria(fotosDeGaleria.map(fotoDeGaleria => {
      return {
        ...fotoDeGaleria,
        /*SI ES VERDADERO QUE SON IGUALES SE PONDRA EN FALSE 
          !FOTO.FAVORITA DE LO CONTRARIO SE PONE EN VERDADERO */
        favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : fotosDeGaleria.favorita
      }
    }))
  }

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabecera
            filtro={filtro}
            setFiltro={setFiltro}
          />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner
                texto="La galeria mas completa del espacio" 
                backgroundImage={banner}
              />
              <Galeria
                fotoSeleccionada={foto => setFotoSeleccionada(foto)}
                fotos={fotosDeGaleria}
                alAlternarFavorito={alAlternarFavorito}
                setTag={setTag}
              />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        {/*SE AGREGA UNA FUNCION ()=>setFotoSeleccionada(null) 
           NULL SIRVE PARA QUE LA FOTO SE CIERRE CON LA X SE SETIE EN NULO 
           COMO SI SE CERRARA PERO SE REGRESA AUN ESTADO ANTERIOR*/}
        <ModalZoom
          foto={fotoSeleccionada}
          close={() => setFotoSeleccionada(null)}
          alAlternarFavorito={alAlternarFavorito}
        />
        <Pie/>
      </FondoGradiente>
    </>
  )
}

export default App


/*
EXPLICACION DE min-height: 100vh;
---------------------------------
La propiedad min-height: 100vh; en CSS se usa para asegurar que
un elemento tenga al menos la altura completa de la ventana 
del navegador (viewport). Aquí tienes una explicación más detallada:

Significado de min-height: 100vh;

- min-height: Establece la altura mínima de un elemento. 
  Esto significa que el elemento nunca será más bajo que 
  el valor especificado,  pero puede ser más alto 
  si su contenido lo requiere.

- 100vh: vh es una unidad relativa a la altura del viewport 
  (ventana del navegador). 100vh significa el 100% de la 
  altura del viewport. Por ejemplo, si la altura del 
  viewport es de 800 píxeles, 100vh equivaldrá a 800 píxeles.

  */