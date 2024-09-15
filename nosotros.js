import { plantilla,informacion } from "/index.js"

///ETIQUETAS///
const headers = document.querySelector(".header")
if(headers){
    plantilla.header({
        father : headers,
    })
}
const footer = document.querySelector('.footer')
if(footer){
    plantilla.footer_contenido({
        father : footer,
        tel_movil : informacion.contacto.tel_movil,
        ubicacion : informacion.contacto.ubicacion,
        servicio_domicilio : informacion.contacto.servicio_domicilio,
    })
}