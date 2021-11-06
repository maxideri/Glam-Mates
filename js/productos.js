// ===== ARRAYS PRODUCTOS ===== //

const MATES = { // Formato --> ["Modelo", precio, ref-fotos]
    "calabaza": [
        ["Madera", "$2400", "img/l360/l360-1.jpg","img/l360/l360-2.jpg","img/l360/l360-3.jpg","img/l360/l360-4.jpg"],
        ["Resplandor","$1300", "img/resplandor/resplandor-1.jpg", "img/resplandor/resplandor-2.jpg","img/resplandor/resplandor-3.jpg","img/resplandor/resplandor-4.jpg","img/resplandor/resplandor-5.jpg","img/resplandor/resplandor-6.jpg","img/resplandor/resplandor-7.jpg","img/resplandor/resplandor-8.jpg","img/resplandor/resplandor-9.jpg","img/resplandor/resplandor-10.jpg"],
        ["Laqueado", "$1300","img/lq/lq-1.jpg", "img/lq/lq-2.jpg"],
        ["Campero","$1950","img/campero/campero-1.jpg", "img/campero/campero-2.jpg","img/campero/campero-3.jpg","img/campero/campero-4.jpg","img/campero/campero-5.jpg"],
        ["Eco","$1300","img/eco/eco-1.jpg", "img/eco/eco-2.jpg","img/eco/eco-3.jpg","img/eco/eco-4.jpg","img/eco/eco-5.jpg","img/eco/eco-6.jpg","img/eco/eco-7.jpg"],
        ["Textil","$1300","img/textil/textil-1.jpg", "img/textil/textil-2.jpg", "img/textil/textil-3.jpg","img/textil/textil-4.jpg","img/textil/textil-5.jpg","img/textil/textil-6.jpg","img/textil/textil-7.jpg","img/textil/textil-8.jpg","img/textil/textil-9.jpg","img/textil/textil-10.jpg","img/textil/textil-11.jpg"],
        ["Perla","$2980","img/perla/perla-1.jpg","img/perla/perla-2.jpg"],
        ["Yerra","$1500", "img/yerra/yerra-1.jpg", "img/yerra/yerra-2.jpg","img/yerra/yerra-3.jpg","img/yerra/yerra-4.jpg"]
    ],
    "aluminio" : [
        ["Perla","$2700","img/aluperla/aluperla-1.jpg","img/aluperla/aluperla-2.jpg","img/aluperla/aluperla-3.jpg","img/aluperla/aluperla-4.jpg","img/aluperla/aluperla-5.jpg"]
    ],
    "acero_inoxidable" : [
        ["Resplandor", "$1300","img/aoresplandor/respl-1.jpg", "img/aoresplandor/respl-2.jpg"],
        ["Opaco","$1300", "img/aoopc/opc-1.jpg", "img/aoopc/opc-2.jpg"],
        ["de_diseño","$1500", "img/aodis/dis-1.jpg"]
    ],
    "madera_imbuia" : [
        ["Imbuia", "$2600", "img/mdi/mdi-1.jpg", "img/mdi/mdi-2.jpg", "img/mdi/mdi-3.jpg"]
    ]
};
const BOMBILLAS = {
    "acero_inoxidable" : [
        ["Preciosa", "$1700 (19cm) / $1900 (23cm)", "img/bombiprec/prec-1.jpg","img/bombiprec/prec-2.jpg" ]
    ]
}

const filter = document.getElementById("filter");
filter.addEventListener("click", filtro);

// Obtento el tipo de boton en formato str para poder ejecutar la funcion mostrarProductos con el str "MATES" al cargar la pag.
function filtro (e){
    let f = e.target.innerHTML
    mostrarProductos(f)
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
            modalButton.className = "producto col-12 col-sm-6 col-md-4 col-xl-3 mb-3 mx-2 d-flex justify-content-end";
            modalButton.setAttribute("type","button");
            modalButton.setAttribute("data-bs-toggle","modal")
            modalButton.setAttribute("data-bs-target",`#${tipo}${producto[0]}`) 
            modalButton.setAttribute("style",`background-image: url(../../${producto[2]}`)
            modalButton.innerHTML = `<img class="multiphoto" src="img/multiphoto.svg" height="20px">`
            products.appendChild(modalButton)

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
                                    <h5><strong>Mate de ${Object.keys(p)[j].replace("_"," ")}</strong></h5>
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
                }
                foto.setAttribute("style",`background-image: url(../${producto[c]})`)
                carousel.appendChild(foto)
            }
            i++;
        })
    }
}

mostrarProductos("MATES")