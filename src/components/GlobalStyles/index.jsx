import { createGlobalStyle } from "styled-components";
import GandhiSansRegular from "./fonts/GandhiSans-Regular.otf"
import GandhiSansBold from "./fonts/GandhiSans-Bold.otf"

//createGlobalStyle nos va ayudar a crear estilos globales
//las comillas invertidas `` la primera no debe tener espacio a la
//izquierda ejemplo createGlobalStyle` <= se muestra la comilla invertida 
//sin espacio a la izquierda

/*
EXPLICACION DE @font-face:
--------------------------

1.-@font-face: Esta es una regla CSS que permite cargar fuentes personalizadas en una página web. 
   En lugar de depender de las fuentes instaladas en el usuario, puedes usar fuentes específicas 
   que se cargarán con tu sitio web.

2.-font-family: "GandhiSansRegular";: Aquí defines un nombre para la fuente que estás añadiendo. 
   En este caso, la fuente se llama "GandhiSansRegular". Este es el nombre que usarás en 
   tu CSS para aplicar esta fuente a tus elementos.

3.-src: Esta propiedad define las fuentes que se cargarán. 
   Se puede especificar de varias maneras:

   - local("Gandhi Sans Regular"): Intenta usar una fuente instalada localmente en el dispositivo del usuario llamada "Gandhi Sans Regular".

   - local("GandhiSansRegular"): También intenta usar una fuente localmente instalada con el nombre "GandhiSansRegular".

   - url(${GandhiSansRegular}): Si la fuente no está instalada localmente, la carga desde una URL especificada. 
     Aquí, ${GandhiSansRegular} probablemente es una variable en un archivo de preprocesador de CSS 
     (como SASS o LESS) que contiene la ruta a la fuente.
*/

const GlobalStyles = createGlobalStyle`
//Agregue @font-face Carlos Yañez
  @font-face {
    font-family: "GandhiSansRegular";
    /*EL SISTEMA VA A BUSCAR LA FUENTE CON ESPACIOS Gandhi Sans Regular, 
      SI NO ESTA BUSCARA LA FUENTE SIN ESPACIOS GandhiSansRegular,
      SI NO ESTA CON O SIN ESPACIOS LA BUSCARA EN LA URL QUE ES DONDE ESTA EL PROYECTO
      DENTRO DE LA CARPETA FONTS DE LA CARPETA GLOBALSTYLES */
    src: local("Gandhi Sans Regular"), local("GandhiSansRegular"), url(${GandhiSansRegular});

  }
  @font-face {
    font-family: "GandhiSansBold";
    src: local("Gandhi Sans Bold"), local("GandhiSansBold"), url(${GandhiSansBold});

  }
  html {
    line-height: 1.15; 
    -webkit-text-size-adjust: 100%; 
    font-family: GandhiSansRegular; //<= SE AGREGA ESTE FONT QUE AGREGO EL INSTRUCTOR
  }
  body {
    margin: 0;
    min-height: 100vh;
  }
  main {
    display: block;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  hr {
    box-sizing: content-box; 
    height: 0; 
    overflow: visible; 
  }
  a {
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none; 
    text-decoration: underline; 
    text-decoration: underline dotted; 
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace; 
    font-size: 1em; 
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; 
    font-size: 100%; 
    line-height: 1.15; 
    margin: 0; 
  }
  button,
  input { 
    overflow: visible;
  }
  button,
  select { 
    text-transform: none;
  }
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box; 
    color: inherit; 
    display: table; 
    max-width: 100%; 
    padding: 0; 
    white-space: normal; 
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; 
    padding: 0; 
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield; 
    outline-offset: -2px; 
  }
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button; 
    font: inherit; 
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }

`

export default GlobalStyles