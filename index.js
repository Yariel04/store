//CREAR ELEMENTOS
function creator(father,typeElement,classes= null,id= null,name= null,value = null,type= null,label= null) {
    if (typeElement != null) {
      
      var element = document.createElement(`${typeElement}`);
        if(type != null){element.setAttribute("type", type);}
        if(classes != null){element.setAttribute("class", classes);}
        if(id != null){element.setAttribute("id", id);}
        if(value != null){element.setAttribute("value", value);}
        if(name != null){element.setAttribute("name", name);}
        father.appendChild(element);
      }
      if(label != null){
        var element_label = document.createElement('label')
            element_label.setAttribute('for',id)
            element_label.innerHTML = `${label}`
            father.appendChild(element_label)
      }

    return element;
}

//BUSCADOR
const search_products = ()=>{
    if(document.querySelector(`.search-all`)){
        document.querySelector(`.search-all`).addEventListener("keyup",function(e){
            var tables_lines = document.querySelectorAll('.search-lines');
            if(this.value !== ""){
                if(tables_lines){
                    Object.keys(tables_lines).forEach(each_line=>{
                        let res_lines = tables_lines[each_line];
                        if(res_lines.textContent.toUpperCase().trim().search(this.value.toUpperCase().trim()) > -1){
                            res_lines.classList.remove("d-none")
                        }else{
                            res_lines.classList.add("d-none")
                        }
                    });
                }
            }else{
                Object.keys(tables_lines).forEach(each_line=>{
                    let res_lines = tables_lines[each_line];
                    res_lines.classList.remove("d-none")
                });
            }
        })
    }else{
        alert("Error al buscar");
    }
}

const categorias = {
    pantalones : "Pantalones",
    blusas : "Blusas",
    sudaderas : "Sudaderas",
    chaquetas : "Chaquetas",
    accesorios : "Accesorios",
}

const productos = {
    pantalones : [
        {
            productos : "Ejemplo demo",
            piezas : "",
            talla : "",
            precio : "$10.00",
            img : "img/ropa.jpg",
            identfier : "",
        },
        {
            productos : "Ejemplo demo",
            piezas : "",
            talla : "",
            precio : "$10.00",
            img : "img/ropa.jpg",
            identfier : "",
        },
        {
            productos : "Ejemplo demo",
            piezas : "",
            talla : "",
            precio : "$10.00",
            img : "img/ropa.jpg",
            identfier : "",
        },
        {
            productos : "Ejemplo demo",
            piezas : "",
            talla : "",
            precio : "$10.00",
            img : "img/ropa.jpg",
            identfier : "",
        },
    ],
    blusas : [
        {
            productos : "Ejemplo demo",
            piezas : "",
            talla : "",
            precio : "$10.00",
            img : "img/ropa.jpg",
            identfier : "",
        },
    ],
};

const informacion = {
    contacto : {
        nombre : "",
        tel_movil : "5356107072",
        tel_fijo : "",
        servicio_domicilio : "...",
        ubicacion : "...",
    },
    tabs : {

    }
}

const plantilla = {
    header : (data)=>{
        if(data.father){
            data.father.innerHTML = 
            `
                <div class="contenedor-header contenido-header">
                    <div class="titulo">
                        <h2> Tienda&Local</h2>
                    </div>
                    <nav class="navegacion">
                        <a href="index.html">Inicio</a>
                        <a href="nosotros.html">Nosotros</a>
                        <a href="#domicilio">Envio <i class="fas fa-shipping-fast"></i></a>
                    </nav>
                </div>
                <div class="seccion-categorias"></div>
                <div class="seccion-search"></div>
            `
        }
    },
    titles : (data)=>{
        if(data.father){
            data.father.innerHTML = `<input type="search" class="search-all" placeholder="Ej: pantalon..."/>`
        }
    },
    footer : (data)=>{
        if(data.father){
            data.father.innerHTML = 
            `
                <div class="contenedor footer-contenido">
                    <!--<div class="footer-contacto">  
                        <h3>Contacto</h3>
                        <p class="texto"><b>Nombre:</b>Yenifer Alonso</p>
                        <p class="texto"><b>Telefono Movil:</b>+5356107072 <i class="fab fa-whatsapp"></i></p>
                        <p class="texto"><b>Telefono Fijo:</b>45286845</p>
                        <p class="redes">Siguenos en <i class="fab fa-facebook"></i></p>
                    </div>-->
                    
                    <div class="footer-domicilio" id="domicilio">
                        <h3>Servicio a domicilio <i class="fas fa-taxi"></i></h3>
                        <p>${data.servicio_domicilio}</p>
                    </div>
                
                    <div class="footer-ubicacion" id="ubicacion">
                        <h3>Ubicación <i class="fas fa-map-marked-alt"></i></h3>
                        <p>${data.ubicacion}</p>
                    </div>
                    <div class="container-icon-WhatsApp">
                        <a href="https://api.whatsapp.com/send?phone=${data.tel_movil}" target="blank" class="icon-whatsapp"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            `
        }
    },
    productos : (data)=>{
        if(data.father){
            var  div_all = creator(data.father,'div',`seccion-producto${data.identfier} search-lines`)
            div_all.setAttribute('style','margin-bottom:10px;')
            var seccion = creator(div_all,'div','seccion-incluida')
            var div_img = creator(seccion,'div','imagen-incluida')
            var img = creator(div_img,'img')
                img.setAttribute("src",`${data.img}`)
            var div_lista = creator(div_img,'div','lista-incluida')
            div_lista.innerHTML = 
            `
                <ul>
                    <li class="li-name">${data.productos}</li>
                    <li class="li-precio">${data.precio}</li>
                </ul>
            `
        }
    },
    categorias : (data)=>{
        if(data.father){
            var  div_all = creator(data.father,'div')
            div_all.innerHTML = `<button type="button" class="btn-categorias click-to-select-categorias" code="${data.code}">${data.nombre}</button>`
        }
    }   
}


///ETIQUETAS///
const headers = document.querySelector(".header")
if(headers){
    plantilla.header({
        father : headers,
    })
}

const contenido_categorias = document.querySelector(".seccion-categorias")
const contenido_producto = document.querySelector(".contenido-producto")
const titles = document.querySelector(".seccion-search")
const footer = document.querySelector('.footer')

if(titles){
    plantilla.titles({
        father : titles,
    })
}

if(contenido_categorias){
    Object.keys(categorias).forEach((each_cat)=>{
        let res_cat = categorias[each_cat];
        plantilla.categorias({
            father : contenido_categorias,
            code : each_cat,
            nombre : res_cat,
        })
    })
    var clickselectcategorias = document.querySelectorAll(".click-to-select-categorias")
    if(clickselectcategorias){
        clickselectcategorias.forEach(each_click=>{
            each_click.addEventListener('click',function(){
                document.querySelectorAll(".click-to-select-categorias").forEach(each_selected=>{
                    each_selected.classList.remove('btn-categorias-selected')
                })
                this.classList.add('btn-categorias-selected')
                build_productos({
                    father : contenido_producto,
                    prod : this.getAttribute('code'),
                })
            })
        })
    }
}

if(contenido_producto){
    build_productos({
        father : contenido_producto,
        prod : "pantalones",
    })
}

if(footer){
    plantilla.footer({
        father : footer,
        tel_movil : informacion.contacto.tel_movil,
        ubicacion : informacion.contacto.ubicacion,
        servicio_domicilio : informacion.contacto.servicio_domicilio,
    })
}

function build_productos(json){
    json.father.innerHTML = ``
    if(json.father && json.prod){
        Object.keys(productos[`${json.prod}`]).forEach((each_prod,index)=>{
            let res_prod = productos[`${json.prod}`][each_prod];
            plantilla.productos({
                father : json.father,
                productos : res_prod.productos,
                piezas : res_prod.piezas,
                talla : res_prod.talla,
                precio : res_prod.precio,
                img : res_prod.img,
                identfier : index,
            })
        })
        search_products();
    }
}