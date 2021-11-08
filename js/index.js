// ===== ARRAYS PRODUCTOS ===== //
const MAS_VENDIDOS = { // Formato --> ["Modelo", precio, ref-fotos]
    "calabaza": [
        ["Madera", "$2400", "img/productos/l360/l360-1.jpg","img/productos/l360/l360-2.jpg","img/productos/l360/l360-3.jpg","img/productos/l360/l360-4.jpg"],
        ["Resplandor","$1300", "img/productos/resplandor/resplandor-1.jpg", "img/productos/resplandor/resplandor-2.jpg","img/productos/resplandor/resplandor-3.jpg","img/productos/resplandor/resplandor-4.jpg","img/productos/resplandor/resplandor-5.jpg","img/productos/resplandor/resplandor-6.jpg","img/productos/resplandor/resplandor-7.jpg","img/productos/resplandor/resplandor-8.jpg","img/productos/resplandor/resplandor-9.jpg","img/productos/resplandor/resplandor-10.jpg"],
        ["Laqueado", "$1300","img/productos/lq/lq-1.jpg", "img/productos/lq/lq-2.jpg"],
        ["Campero","$1950","img/productos/campero/campero-1.jpg", "img/productos/campero/campero-2.jpg","img/productos/campero/campero-3.jpg","img/productos/campero/campero-4.jpg","img/productos/campero/campero-5.jpg"],
        ["Eco","$1300","img/productos/eco/eco-1.jpg", "img/productos/eco/eco-2.jpg","img/productos/eco/eco-3.jpg","img/productos/eco/eco-4.jpg","img/productos/eco/eco-5.jpg","img/productos/eco/eco-6.jpg","img/productos/eco/eco-7.jpg"],
        ["Textil","$1300","img/productos/textil/textil-1.jpg", "img/productos/textil/textil-2.jpg", "img/productos/textil/textil-3.jpg","img/productos/textil/textil-4.jpg","img/productos/textil/textil-5.jpg","img/productos/textil/textil-6.jpg","img/productos/textil/textil-7.jpg","img/productos/textil/textil-8.jpg","img/productos/textil/textil-9.jpg","img/productos/textil/textil-10.jpg","img/productos/textil/textil-11.jpg"],
        ["Perla","$2980","img/productos/perla/perla-1.jpg","img/productos/perla/perla-2.jpg"],
        ["Yerra","$1500", "img/productos/yerra/yerra-1.jpg", "img/productos/yerra/yerra-2.jpg","img/productos/yerra/yerra-3.jpg","img/productos/yerra/yerra-4.jpg"]
    ]
}

function mostrarProductos(){
    let products = document.getElementById("productsIndex");
    let i = 0
    let p = MAS_VENDIDOS
    
    products.innerHTML = "";

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
                };
                foto.setAttribute("style",`background-image: url('../${producto[c]}')`);
                carousel.appendChild(foto);
            }
            i++;
        })
    }
}

mostrarProductos()