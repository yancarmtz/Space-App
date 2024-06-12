import styled from "styled-components"

//styled.li para que el comportamiento de los elementos sea la de una lista (li)
const ItemListaEstilizado = styled.li`
    font-size: 24px;
    margin-bottom: 30px;
    line-height: 28px;
    display: flex; //PARA QUE LOS ICONOS QUEDEN ALINEADOS AL TEXTO
    align-items: center; //PARA QUE QUEDEN CENTROS LOS ICONOS
    gap: 16px; //DA ESPACIO ENTRE LOS OBJETOS EN ESTE CASO DE ARRIBA Y ABAJO
    color: ${props => props.$activo ? "#7B78E5" : "#D9D9D9"}; /* SI PROPS.$ACTIVO ES VERDADERO EL COLOR DEL TEXTO SERA EL #7B78E5 
                                                                      Y SI ES FALSO EL COLOR DEL TEXTO SERA EL #D9D9D9  */
    font-family: ${props => props.$activo ? "GandhiSansBold" : "GandhiSansRegular"}; /*SI ESTA ACTIVO VA CARGAR LA FUENTE 
                                                                                       GandhiSansBold Y SI NO ESTA ACTIVO CARGARA 
                                                                                       LA FUENTE GandhiSansRegular  */
`

const ItemNavegacion = ({children, iconoActivo, iconoInactivo, activo=false}) => {
                                {/*El signo de dolar $activo quiere decir que es una variable */}
    return <ItemListaEstilizado $activo = {activo}>
             {/* SI ACTIVO ES VERDADERO VA HACER ICONOACTIVO Y SI ES FALSO VA HACER ICONOINACTIVO   */}
    <img src={activo ? iconoActivo : iconoInactivo} alt="Icono" />
    {children}
    </ItemListaEstilizado>
}

export default ItemNavegacion


/*
EXPLICACION DE <img src={activo ? iconoActivo : iconoInactivo} alt="Icono" />
------------------------------------------------------------------------------
 
1.-Etiqueta <img>: Esta es una etiqueta HTML usada para mostrar imágenes en una página web.

2.-Propiedad src: Especifica la URL de la imagen que se va a mostrar.

3.-Expresión ternaria: {activo ? iconoActivo : iconoInactivo} es una forma compacta de decidir 
   qué imagen mostrar basada en una condición:

    - activo: Es una variable booleana (puede ser true o false).
    - ? y :: Esta es una expresión ternaria.
        Si activo es true, se usará iconoActivo como la fuente (src) de la imagen.
        Si activo es false, se usará iconoInactivo como la fuente (src) de la imagen.

4.-Propiedad alt: Proporciona un texto alternativo para la imagen, en este caso, "Icono".

Resumen
-------
Propósito: Muestra una imagen diferente dependiendo del valor de la variable activo.

Uso práctico: Puede ser útil para mostrar un icono diferente cuando algo está 
activo o inactivo, como un botón de encendido/apagado o un estado de usuario (online/offline).

En resumen, esta línea de código cambia la imagen que se muestra según si algo está activo o inactivo.

---------------------------------------------------------------------------------------------------------------------
EXPLICACION DE LINE-HEIGHT:
---------------------------

El line-height es una propiedad de CSS que se utiliza para especificar la altura 
de la línea en un bloque de texto. A continuación, te explico sus funciones 
y cómo se puede utilizar:

Funciones del line-height

1.-Espaciado entre líneas: Controla el espacio vertical entre líneas de texto dentro de un elemento. 
   Aumentar el line-height incrementa el espacio entre las líneas, mientras que disminuirlo 
   reduce el espacio.

2.-Legibilidad: Mejora la legibilidad del texto ajustando el espacio entre líneas. 
   Un line-height adecuado puede hacer que el texto sea más fácil de leer.

2.-Alineación vertical: Ayuda a alinear el texto verticalmente dentro de su contenedor.
   Esto es útil para centrado vertical y otros ajustes de diseño.

Resumen:
--------
- Propósito: Ajusta el espacio entre las líneas de texto para mejorar la legibilidad y el diseño.
- Valores comunes: Números (multiplicadores), unidades de longitud (px, em), porcentajes, y palabras clave como normal.

El line-height es una herramienta importante en el diseño web para controlar 
cómo se presenta el texto y asegurarse de que sea fácil de leer y visualmente atractivo.

*/