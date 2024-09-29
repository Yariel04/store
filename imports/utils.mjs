//CREAR ELEMENTOS
export function creator(
    father,
    typeElement,
    classes = null,
    id = null,
    name = null,
    value = null,
    type = null,
    label = null
  ) {
    if (typeElement != null) {
      var element = document.createElement(`${typeElement}`);
      if (type != null) {
        element.setAttribute("type", type);
      }
      if (classes != null) {
        element.setAttribute("class", classes);
      }
      if (id != null) {
        element.setAttribute("id", id);
      }
      if (value != null) {
        element.setAttribute("value", value);
      }
      if (name != null) {
        element.setAttribute("name", name);
      }
      father.appendChild(element);
    }
    if (label != null) {
      var element_label = document.createElement("label");
      element_label.setAttribute("for", id);
      element_label.innerHTML = `${label}`;
      father.appendChild(element_label);
    }
  
    return element;
  }
  
//BUSCADOR
export const search_products = () => {
if (document.querySelector(`.search-all`)) {
    document
    .querySelector(`.search-all`)
    .addEventListener("keyup", function (e) {
        var tables_lines = document.querySelectorAll(".search-lines");
        if (this.value !== "") {
        if (tables_lines) {
            Object.keys(tables_lines).forEach((each_line) => {
            let res_lines = tables_lines[each_line];
            if (
                res_lines.textContent
                .toUpperCase()
                .trim()
                .search(this.value.toUpperCase().trim()) > -1
            ) {
                res_lines.classList.remove("d-none");
            } else {
                res_lines.classList.add("d-none");
            }
            });
        }
        } else {
        Object.keys(tables_lines).forEach((each_line) => {
            let res_lines = tables_lines[each_line];
            res_lines.classList.remove("d-none");
        });
        }
    });
} else {
    alert("Error al buscar");
}
};
  
//CARRUSEL
export const carrousel = (json) => {
if (json.father) {
    if (Array.isArray(json.array_img)) {
        let max_img = json.array_img.length;
        var count = 0;
        var last_value = 0;
        if (max_img > 1) {
            setInterval(() => {
                count++;
                //console.log(count)
                if (count < max_img) {
                    last_value = count;
                    json.father.innerHTML = `<img class="animate__animated animate__fadeIn" src="${json.array_img[count]}"/>`;
                } else {
                    last_value--;
                    console.log(last_value);
                    if (last_value === 0) {
                    count = 0;
                    }
                    json.father.innerHTML = `<img class="animate__animated animate__fadeIn" src="${json.array_img[last_value]}"/>`;
                }
            }, 10000);
        }
    }
}
};
  
export const categorias = {
    Todos : {
        Todos : "Todos"
    },
    Mujer: {
        pantalones: "Pantalones",
        blusas: "Blusas",
        sudaderas: "Sudaderas",
        chaquetas: "Chaquetas",
        accesorios: "Accesorios",
        comidades: "Comidades",
        trajes: "Trajes",
        calzados: "Calzados",
    },
};
  
export const productos = {
    pantalones: [
        {
          "identifier": 1,
          "productos": "Manzana Roja",
          "precio": 0.99,
          "categoria": "Frutas",
          "descripcion": "Manzana roja, jugosa y dulce.",
          "stock": 20,
          "img": ["img/chicle.jpg"]
        },
        {
          "identifier": 2,
          "productos": "Banana Platano",
          "precio": 0.59,
          "categoria": "Frutas",
          "descripcion": "Banana madura, ideal para consumir sola o en batidos.",
          "stock": 50,
          "img": ["img/micro1.webp"]
        },
        {
          "identifier": 3,
          "productos": "Naranja Navel",
          "precio": 0.79,
          "categoria": "Frutas",
          "descripcion": "Naranja Navel, sin semillas y muy sabrosa.",
          "stock": 30,
          "img": ["img/ropa.jpg"]
        },
        {
            "identifier": 1,
            "productos": "Manzana Roja",
            "precio": 0.99,
            "categoria": "Frutas",
            "descripcion": "Manzana roja, jugosa y dulce.",
            "stock": 20,
            "img": ["img/chicle.jpg"]
          },
          {
            "identifier": 2,
            "productos": "Banana Platano",
            "precio": 0.59,
            "categoria": "Frutas",
            "descripcion": "Banana madura, ideal para consumir sola o en batidos.",
            "stock": 50,
            "img": ["img/micro1.webp"]
          },
          {
            "identifier": 3,
            "productos": "Naranja Navel",
            "precio": 0.79,
            "categoria": "Frutas",
            "descripcion": "Naranja Navel, sin semillas y muy sabrosa.",
            "stock": 30,
            "img": ["img/ropa.jpg"]
          }
    ],
};
  
export const informacion = {
contacto: {
    nombre: "",
    tel_movil: "5356107072",
    tel_fijo: "",
    servicio_domicilio: "...",
    ubicacion: "...",
},
tabs: {},
};
  
export const plantilla = {
    header: (data) => {
        if (data.father) {
        data.father.innerHTML = `
                    <div class="contenedor-header contenido-header">
                        <div class="titulo">
                            <h2>Tienda&Local</h2>
                        </div>
                        <nav class="navegacion">
                            <a href="index.html">Inicio</a>
                            <a href="nosotros.html">Nosotros</a>
                        </nav>
                    </div>
                    <div class="container-categories" style="margin: 10px;">
                        <div class="seccion-categorias-globales"></div>
                        <div>
                            <div class="seccion-categorias seccion-categorias-view"></div>
                            <details style="padding: 5px 0px; width: 100%;margin: 0px 10px;">
                                <summary>Más categorias...</summary>
                                <div class="seccion-categorias seccion-categorias-sumary"></div>
                            </details>
                        </div>
                        <div class="seccion-search"></div>
                    </div>
                `;
        }
    },
    titles: (data) => {
        if (data.father) {
        data.father.innerHTML = `<input type="search" class="search-all" placeholder="Ej: pantalon..."/>`;
        }
    },
    footer_contenido: (data) => {
        if (data.father) {
        data.father.innerHTML = `
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
                    </div>
                `;
        }
    },
    footer_whatsapp: (data) => {
        if (data.father) {
        data.father.innerHTML = `
                    <div class="container-icon-WhatsApp">
                        <a href="https://api.whatsapp.com/send?phone=${data.tel_movil}" target="blank" class="icon-whatsapp"><i class="fab fa-whatsapp"></i></a>
                    </div>
                `;
        }
    },
    productos: (data) => {
        if (data.father) {
        var div_all = creator(data.father,"div",`seccion-producto${data.identifier} search-lines`);
        div_all.setAttribute("style", "margin-bottom:10px;");
        var seccion = creator(div_all, "div", "seccion-incluida");

        var div_img = creator(seccion, "div", `imagen-incluida${data.identifier}`);
        var img = creator(div_img, "img");
        img.setAttribute("src", `${data.img}`);
        var div_lista = creator(seccion, "div", "lista-incluida");
        div_lista.innerHTML = `
                    <ul>
                        <li class="li-name">${data.productos}</li>
                        <li class="li-precio">${data.precio}</li>
                    </ul>
                `;
        }
    },
    categorias: (data) => {
        if (data.father) {
            var div_all = creator(data.father, "div");
            div_all.innerHTML = `<button type="button" class="btn-categorias click-to-select-categorias click-to-select-categorias${data.code}" code_global="${data.code_global}" code="${data.code}">${data.nombre}</button>`;

            var clickselectcategorias = document.querySelector(`.click-to-select-categorias${data.code}`);
            if (clickselectcategorias) {
                clickselectcategorias.addEventListener("click", function () {
                    document.querySelectorAll(".click-to-select-categorias").forEach((each_selected) => {
                        each_selected.classList.remove("btn-categorias-selected");
                    });
                    this.classList.add("btn-categorias-selected");
                    actions.build_productos({
                        father: data.father_producto,
                        prod: this.getAttribute("code"),
                        prod_global: this.getAttribute("code_global"),
                    });
                });
            }
            
            if(data.code_global === "Todos"){
                actions.build_productos({
                    father: data.father_producto,
                    prod: "Todos",
                    prod_global: "Todos",
                });
            }
        }
    },
    categorias_globales: (data) => {
        if (data.father) {
        var div_all = creator(data.father, "div");
        div_all.innerHTML = `<button type="button" class="btn-categorias click-to-select-categorias-globales ${data.code === "Todos" ? 'btn-categorias-selected' : ''}" code="${data.code}">${data.nombre}</button>`;
        }
    },
};

export const actions = {
    build_productos : (json)=>{
        json.father.innerHTML = ``;
        if (json.father && json.prod) {
            switch(json.prod){
                case'Todos':
                    Object.keys(productos).forEach((each_prod, index) => {
                        Object.keys(productos[each_prod]).forEach((each_all,idx)=>{
                            let res_prod = productos[each_prod][each_all];
                            plantilla.productos({
                                father: json.father,
                                productos: res_prod.productos,
                                piezas: res_prod.piezas,
                                talla: res_prod.talla,
                                precio: res_prod.precio,
                                img: res_prod.img[0],
                                identifier: index,
                            });
            
                            // carrousel({
                            //     father: document.querySelector(`.imagen-incluida${index}`),
                            //     array_img: res_prod.img,
                            // });
                        })
                    });
                break;
                default:
                    if(productos[`${json.prod}`]){
                        Object.keys(productos[`${json.prod}`]).forEach((each_prod, index) => {
                            let res_prod = productos[`${json.prod}`][each_prod];
                            plantilla.productos({
                                father: json.father,
                                productos: res_prod.productos,
                                piezas: res_prod.piezas,
                                talla: res_prod.talla,
                                precio: res_prod.precio,
                                img: res_prod.img[0],
                                identifier: index,
                            });
            
                            // carrousel({
                            //     father: document.querySelector(`.imagen-incluida${index}`),
                            //     array_img: res_prod.img,
                            // });
                        });
                    }else{
                        json.father.innerHTML = `<div style="display:flex; align-items:center;">No se encontraron resultados <img style="width:20px;" src="img/notfound.png"></img></div>`
                    }
                break;
            }
            search_products();
        }
    }
}