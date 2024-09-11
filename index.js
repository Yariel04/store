const productos = [
    {
        productos : "",
        piezas : "",
        talla : "",
        precio : "",
        img : "data:image/jpeg;base64,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",
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

/* <div class="seccion-producto1">
    <div class="seccion-incluida">
        <div class="imagen-incluida">
            <img src="img/ropa.jpg">
        </div>
        <div class="lista-incluida">
            
        </div>    
        
    </div>
</div> */