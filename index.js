const productos = [
    {
        productos : "",
        piezas : "",
        talla : "",
        precio : "",
        img : "",
    }
];

const contenido_producto = document.querySelector(".contenido-producto")
if(contenido_producto){
    Object.keys(productos).forEach((each_prod,index)=>{
        let res_prod = productos[each_prod];
        var div = document.createElement('div')
            div.setAttribute("class",`seccion-producto${index}`)

        var seccion = document.createElement("div")
            seccion.setAttribute("class",`seccion-incluida`)
            div.appendChild(seccion);

        var div_img = document.createElement("div")
            div_img.setAttribute("class",`imagen-incluida`)
            seccion.appendChild(div_img)
        var img = document.createElement("img")
            img.setAttribute("src",`${res_prod.img}`)
            div_img.appendChild(img)
        
        var div_lista = document.createElement('div')
            div_lista.setAttribute("class","lista-incluida")
            div_lista.innerHTML = 
            `
                <ul>
                    <li><b>Producto:</b>${res_prod.productos}</li>
                    <!--<li><b>Pieza:</b>${res_prod.piezas}</li>
                    <li><b>Talla:</b>${res_prod.talla}</li>-->
                    <li><b>Precio:</b>${res_prod.precio}</li>
                </ul>
            `
        seccion.appendChild(div_lista)
        contenido_producto.appendChild(div)
    })
}