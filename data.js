//CREAR ELEMENTOS
export function creator(father,typeElement,classes= null,id= null,name= null,value = null,type= null,label= null) {
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

export const productos = [
    {
        productos : "Ejemplo demo",
        piezas : "",
        talla : "",
        precio : "$10.00",
        img : "img/ropa.jpg",
    },
];

export const informacion = {
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

export const plantilla = {
    header : (data)=>{
        if(data.father){
            data.father.innerHTML = 
            `
                <div class="contenedor contenido-header">
                    <div class="titulo">
                        <h2> Tienda&Local</h2>
                    </div>
                    <nav class="navegacion">
                        <a href="index.html">Inicio</a>
                        <a href="nosotros.html">Nosotros</a>
                        <a href="#domicilio">Envio <i class="fas fa-shipping-fast"></i></a>
                    </nav>
                </div>
            `
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
            var  div_all = creator(data.father,'div',`seccion-producto${data.identfier}`)
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
    }   
}