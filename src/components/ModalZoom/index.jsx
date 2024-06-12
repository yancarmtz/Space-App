import BotonIcono from "../BotonIcono"
import Imagen from "../Galeria/Imagen"
import styled from "styled-components"

const Overlay = styled.div`
                      /*la a de rgba es para la opacacidad*/
                           /*r g b a color negro medio opaco */
    background-color: rgba(0,0,0,.7);
    position: fixed; //PARA QUE SE SALGA DEL FLUJO NORMAL DEL DOCUMENTO
                     /*La propiedad position: fixed en CSS se utiliza para posicionar 
                       un elemento de manera fija en relación con la ventana 
                       del navegador (viewport), sin importar el desplazamiento 
                       de la página (scroll). Esto significa que el elemento 
                       permanecerá en la misma posición en la ventana, 
                       incluso si el usuario desplaza el contenido de la página 
                       hacia arriba o hacia abajo. */ 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`

                /*LO QUE ESTA DENTRO DE 
                  LAS LLAVES SON METODOS */
const ModalZoom = ({ foto, close, alAlternarFavorito}) => {
    return <>
        {/*SI SE RECIBE UNA FOTOGRAFIA IDICADA EN FOTO SE MOSTRARA LO QUE VIENE DESPUES DEL && */}
        {foto && <>
            <Overlay/>
            <DialogEstilizado open={!!foto} onClose={close}> {/* EL PRIMER ! ES PARA FALSO, EL SEGUNDO ! PARA VERDADERO, 
                                            SE REQUIERE PASAR UN VALOR BOLEANO POR ESO LAS 2 !! */}
                <Imagen foto={foto} expandida={true} alAlternarFavorito={alAlternarFavorito}/>
                <form method="dialog">
                    <BotonIcono formMethod="dialog">
                        <img src="/iconos/cerrar.png" alt="Ícono de cerrar" />
                    </BotonIcono>
                </form>
            </DialogEstilizado>
        </>}
    </>
}

export default ModalZoom