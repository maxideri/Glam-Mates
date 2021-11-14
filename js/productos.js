// ===== ARRAYS PRODUCTOS ===== //

const MATES = { // Formato --> ["Modelo", precio, ref-fotos]
    "calabaza": [
        ["Madera", "$2400", "img/productos/calabaza/l360/l360-1-min.jpg","img/productos/calabaza/l360/l360-2-min.jpg","img/productos/calabaza/l360/l360-3-min.jpg","img/productos/calabaza/l360/l360-4-min.jpg"],
        ["Resplandor","$1300", "img/productos/calabaza/resplandor/resplandor-1-min.jpg", "img/productos/calabaza/resplandor/resplandor-2-min.jpg","img/productos/calabaza/resplandor/resplandor-3-min.jpg","img/productos/calabaza/resplandor/resplandor-4-min.jpg","img/productos/calabaza/resplandor/resplandor-5-min.jpg","img/productos/calabaza/resplandor/resplandor-6-min.jpg","img/productos/calabaza/resplandor/resplandor-7-min.jpg","img/productos/calabaza/resplandor/resplandor-8-min.jpg","img/productos/calabaza/resplandor/resplandor-9-min.jpg","img/productos/calabaza/resplandor/resplandor-10-min.jpg"],
        ["Laqueado", "$1300","img/productos/calabaza/lq/lq-1-min.jpg", "img/productos/calabaza/lq/lq-2-min.jpg"],
        ["Campero","$1950","img/productos/calabaza/campero/campero-1-min.jpg", "img/productos/calabaza/campero/campero-2-min.jpg","img/productos/calabaza/campero/campero-3-min.jpg","img/productos/calabaza/campero/campero-4-min.jpg","img/productos/calabaza/campero/campero-5-min.jpg"],
        ["Eco","$1300","img/productos/calabaza/eco/eco-1-min.jpg", "img/productos/calabaza/eco/eco-2-min.jpg","img/productos/calabaza/eco/eco-3-min.jpg","img/productos/calabaza/eco/eco-4-min.jpg","img/productos/calabaza/eco/eco-5-min.jpg","img/productos/calabaza/eco/eco-6-min.jpg","img/productos/calabaza/eco/eco-7-min.jpg"],
        ["Textil","$1300","img/productos/calabaza/textil/textil-1-min.jpg", "img/productos/calabaza/textil/textil-2-min.jpg", "img/productos/calabaza/textil/textil-3-min.jpg","img/productos/calabaza/textil/textil-4-min.jpg","img/productos/calabaza/textil/textil-5-min.jpg","img/productos/calabaza/textil/textil-6-min.jpg","img/productos/calabaza/textil/textil-7-min.jpg","img/productos/calabaza/textil/textil-8-min.jpg","img/productos/calabaza/textil/textil-9-min.jpg","img/productos/calabaza/textil/textil-10-min.jpg","img/productos/calabaza/textil/textil-11-min.jpg"],
        ["Perla","$2980","img/productos/calabaza/perla/perla-1-min.jpg","img/productos/calabaza/perla/perla-2-min.jpg"],
        ["Yerra","$1500", "img/productos/calabaza/yerra/yerra-1-min.jpg", "img/productos/calabaza/yerra/yerra-2-min.jpg","img/productos/calabaza/yerra/yerra-3-min.jpg","img/productos/calabaza/yerra/yerra-4-min.jpg"]
    ],
    "aluminio" : [
        ["Perla","$2700","img/productos/aluminio/aluperla/aluperla-1-min.jpg","img/productos/aluminio/aluperla/aluperla-2-min.jpg","img/productos/aluminio/aluperla/aluperla-3-min.jpg","img/productos/aluminio/aluperla/aluperla-4-min.jpg","img/productos/aluminio/aluperla/aluperla-5-min.jpg", "img/productos/aluminio/aluperla/aluperla-6-min.jpg"]
    ],
    "acero_inoxidable" : [
        ["Resplandor", "$1300","img/productos/acero/resplandor/respl_1-min.jpg", "img/productos/acero/resplandor/respl_2-min.jpg","img/productos/acero/resplandor/respl_3-min.jpg","img/productos/acero/resplandor/respl_4-min.jpg","img/productos/acero/resplandor/respl_5-min.jpg","img/productos/acero/resplandor/respl_6-min.jpg"],
        ["Opaco","$1300", "img/productos/acero/opc/opc-1-min.jpg", "img/productos/acero/opc/opc-2-min.jpg"],
        ["de_diseño","$1500", "img/productos/acero/disenio/dis-1-min.jpg"]
    ],
    "madera_imbuia" : [
        ["Imbuia", "$2600", "img/productos/madera/imbuia/mdi-1-min.jpg", "img/productos/madera/imbuia/mdi-2-min.jpg", "img/productos/madera/imbuia/mdi-3-min.jpg"]
    ]
};
const BOMBILLAS = {
    "acero_inoxidable" : [
        ["Preciosa", "$1700 (19cm) / $1900 (23cm)", "img/productos/bombillas/preciosa/prec-1-min.jpg","img/productos/bombillas/preciosa/prec-2-min.jpg" ],
        ["Lechuza", "$1500", "img/productos/bombillas/lechuza/lech_1-min.jpg"],
        ["Diadema", "$1500", "img/productos/bombillas/diadema/dia_1-min.jpg"],
        ["Color", "$1100 (23cm)", "img/productos/bombillas/color/color_1-min.jpg"]
    ]
}

const SETS = {
    "ecocuero" : [
        ["Latas", "$1400", "img/productos/sets/ecocuero/latas/ecol_1-min.jpg", "img/productos/sets/ecocuero/latas/ecol_2-min.jpg", "img/productos/sets/ecocuero/latas/ecol_3-min.jpg", "img/productos/sets/ecocuero/latas/ecol_4-min.jpg", "img/productos/sets/ecocuero/latas/ecol_5-min.jpg", "img/productos/sets/ecocuero/latas/ecol_6-min.jpg", "img/productos/sets/ecocuero/latas/ecol_7-min.jpg"],
        ["Set", "$4000", "img/productos/sets/ecocuero/tyl/eco_1-min.jpg","img/productos/sets/ecocuero/tyl/eco_2-min.jpg", "img/productos/sets/ecocuero/tyl/eco_3-min.jpg", "img/productos/sets/ecocuero/tyl/eco_4-min.jpg", "img/productos/sets/ecocuero/tyl/eco_5-min.jpg", "img/productos/sets/ecocuero/tyl/eco_6-min.jpg", "img/productos/sets/ecocuero/tyl/eco_7-min.jpg", "img/productos/sets/ecocuero/tyl/eco_8-min.jpg", "img/productos/sets/ecocuero/tyl/eco_9-min.jpg", "img/productos/sets/ecocuero/tyl/eco_10-min.jpg", "img/productos/sets/ecocuero/tyl/eco_11-min.jpg", "img/productos/sets/ecocuero/tyl/eco_12-min.jpg", "img/productos/sets/ecocuero/tyl/eco_13-min.jpg", "img/productos/sets/ecocuero/tyl/eco_14-min.jpg"]
    ],
    "engomado" : [
        ["Termo", "$3200", "img/productos/sets/engomado/engo_1-min.jpg"]
    ],
    "tela" : [
        ["Set", "$4000 (set) - $1400 (latas)", "img/productos/sets/tela/tela_1-min.jpg", "img/productos/sets/tela/tela_2-min.jpg", "img/productos/sets/tela/tela_3-min.jpg", "img/productos/sets/tela/tela_4-min.jpg", "img/productos/sets/tela/tela_5-min.jpg", "img/productos/sets/tela/tela_6-min.jpg"]
    ]        
}

const ACCESORIOS = {
    "mate" : [
        ["Cadenita", "$500", "img/productos/accesorios/cadena/cad_1-min.jpg", "img/productos/accesorios/cadena/cad_2-min.jpg", "img/productos/accesorios/cadena/cad_3-min.jpg"],
        ["Flor", "$500", "img/productos/accesorios/flor_p/flor_1-min.jpg" ]
    ]
}


const filter = document.getElementById("filter");
filter.addEventListener("click", filtro);


function filtro (e){
    let nodo = e.target;
    if(nodo.id != "filter"){
        for (let i = 0; i < filter.children.length; i++) {
            filter.children[i].className = "filter col-3 btn btn-outline-dark";        
        };
        nodo.classList.add("bg-dark", "text-white")
        // Obtento el tipo de boton en formato str para poder ejecutar la funcion mostrarProductos con el str "MATES" al cargar la pag.
        let f = e.target.innerHTML
        mostrarProductos(f)
    }
};

function mostrarProductos(x){
    let products = document.getElementById("products");
    let i = 0
    let p = x
    
    products.innerHTML = "";
    switch (p) {
        case "SETS": p = SETS; break;
        case "MATES": p = MATES; break;
        case "BOMBILLAS": p = BOMBILLAS; break;
        case "ACCESORIOS": p = ACCESORIOS; break;
    }
    //console.log(p)

     // recorro todos los tipos de MATES/BOMBILLAS/SETS/ACC
    for (let j = 0; j < Object.keys(p).length; j++){
        let tipo = Object.keys(p)[j]

        //recorro todos los tipos de modelos de un producto
        p[tipo].forEach (function(producto) {

            // Creo el boton para el modal segun bootstrap
            let modalButton = document.createElement("div");
            modalButton.className = "producto col-12 col-sm-6 col-md-4 col-lg-3 my-3 mx-3 d-flex justify-content-end";
            modalButton.setAttribute("type","button");
            modalButton.setAttribute("data-bs-toggle","modal");
            modalButton.setAttribute("data-bs-target",`#${tipo}${producto[0]}`);
            modalButton.setAttribute("style",`background-image: url('${producto[2]}')`);
            modalButton.innerHTML = `<img class="multiphoto" src="img/productos/multiphoto.svg" height="20px">`;
            products.appendChild(modalButton);

            // Creo el modal segun bootstrap
            let modal = document.createElement("div");
            modal.className = "modal fade"
            modal.id = `${tipo}${producto[0]}`;
            modal.role = "dialog";
            modal.setAttribute("tabindex","-1");
            modal.setAttribute("aria-labelledby","exampleModalLabel");
            modal.setAttribute("arida-hidden","true");
            modal.innerHTML = 
            `
                <div class="modal-dialog modal-lg modal-xl modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header d-lg-none">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body p-0">
                            <div class="row align-items-stretch">
                                <!--- Carrousel --->
                                <div class="col-lg-7">
                                    <div class="carousel slide carousel-fade" id="carouselExampleControls${tipo}${i}" data-bs-ride="carousel">
                                        <div id = "carousel${tipo}${i}" class="carousel-inner">
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls${tipo}${i}" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls${tipo}${i}" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="col-lg-5 pe-modal pt-lg-3">
                                    <div class="d-none d-lg-flex justify-content-end">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="producto-modal-footer">
                                    <h5><strong>${x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()} de ${Object.keys(p)[j].replace("_"," ")}</strong></h5>
                                    <p>Modelo: ${producto[0].replace("_"," ")}</p>
                                    <h5>${producto[1]}</h5>
                                    <a href="https://www.instagram.com/glam.mates" target="_blank"class="p contactar btn btn-dark"><i class="fab fa-instagram fa-lg"></i>CONTACTAR</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
            products.appendChild(modal)
            
            // Seteo la cantidad de fotos de cada carrousel del modal
            let carousel = document.getElementById(`carousel${tipo}${i}`)
            for (var c = 2; c < producto.length; c++) {
                let foto = document.createElement("div")
                if (c == 2) {
                    foto.className = "producto-modal carousel-item active"
                }
                else {
                    foto.className = "producto-modal carousel-item"
                };
                foto.setAttribute("style",`background-image: url('${producto[c]}')`);
                carousel.appendChild(foto);
            }
            i++;
        })
    }
}

mostrarProductos("MATES")