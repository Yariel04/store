import {productos,informacion,plantilla} from "/data.js"

const headers = document.querySelector(".header")
if(headers){
    plantilla.header({
        father : headers,
    })
}
const contenido_producto = document.querySelector(".contenido-producto")
if(contenido_producto){
    Object.keys(productos).forEach((each_prod,index)=>{
        let res_prod = productos[each_prod];
        plantilla.productos({
            father : contenido_producto,
            productos : res_prod.productos,
            piezas : res_prod.piezas,
            talla : res_prod.talla,
            precio : res_prod.precio,
            img : res_prod.img,
            identfier : index,
        })
    })
}

const footer = document.querySelector('.footer')
if(footer){
    plantilla.footer({
        father : footer,
        tel_movil : informacion.contacto.tel_movil,
        ubicacion : informacion.contacto.ubicacion,
        servicio_domicilio : informacion.contacto.servicio_domicilio,
    })
}