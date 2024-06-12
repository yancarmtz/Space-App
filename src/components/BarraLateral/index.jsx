import styled from "styled-components"
import ItemNavegacion from "../ItemNavegacion"

const ListaEstilizada = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none; //PARA QUE NO APAREZCAN LO PUNTITOS DE EL LADO IZQUIERDO
                      //EJEMPLO OPCION puntito que no aparecera => O INICIO 

`

const BarraLateral = () => {
    return (
    <aside> {/*EL ASIDE SIRVE PARA LA BARRALATERAL */}
        <nav>
            <ListaEstilizada>
                <ItemNavegacion iconoActivo="iconos/home-activo.png" iconoInactivo="iconos/home-inactivo.png" activo>
                    inicio
                </ItemNavegacion>
                <ItemNavegacion iconoActivo="iconos/mas-vistas-activo.png" iconoInactivo="iconos/mas-vistas-inactivo.png">
                    Mas visitados
                </ItemNavegacion>
                <ItemNavegacion iconoActivo="iconos/me-gusta-activo.png" iconoInactivo="iconos/me-gusta-inactivo.png">
                    Mas Me gusta
                </ItemNavegacion>
                <ItemNavegacion iconoActivo="iconos/nuevas-activo.png" iconoInactivo="iconos/nuevas-inactivo.png">
                    Nuevas
                </ItemNavegacion>
                <ItemNavegacion iconoActivo="iconos/sorprendeme-activo.png" iconoInactivo="iconos/sorprendeme-inactivo.png">
                    Sorprendame
                </ItemNavegacion>
            </ListaEstilizada>
        </nav>
        
    </aside>)
}

export default BarraLateral

/* 
DEFINICION BREVE DE ASIDE:
--------------------------

En JSX (y HTML en general), el elemento <aside> se utiliza para definir contenido
que está relacionado tangencialmente con el contenido principal del documento. 
Este contenido suele ser una sección que contiene información adicional o de apoyo, 
como barras laterales, bloques de anuncios, enlaces a contenido relacionado, etc.


DEFINICION BREBE DE NAV:
------------------------

En React (y en HTML en general), la etiqueta <nav> se utiliza para definir una sección
de navegación en una página web. Esta etiqueta se usa para agrupar enlaces de navegación
u otros elementos que faciliten la navegación dentro de la página o sitio web. 
En el contexto de React, <nav> mantiene su propósito semántico y se utiliza 
de la misma manera que en HTML estándar.


*/