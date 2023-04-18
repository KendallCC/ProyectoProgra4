window.onload = extraerdatos;

let datos;

async function extraerdatos() {
  await fetch(
    "https://raw.githubusercontent.com/KendallCC/repositorioImagenes/main/jsonJuegos.json"
  )
    .then((res) => res.json())
    .then((Juegos) => {
      datos = Juegos;
      console.log(datos);
      insertarJuegos();
    })
    .catch((err) => console.log(err));
}

function insertarJuegos() {
  $("#contenedor-juegos").fadeOut(1000);
  let contenedor = document.getElementById("CatalogoJuegos");
  let catalogo = document.createElement("h1");

  catalogo.setAttribute("class", "col-sm-12 col-md-12 text-center");
  catalogo.innerHTML = "Catálogo Completo de Juegos";
  contenedor.appendChild(catalogo);

  datos.results.forEach((element) => {
    ContenedorJuego = document.createElement("div");
    ContenedorJuego.setAttribute("class", "col-sm-6 col-md-3");

    let imagen = document.createElement("img");
    imagen.setAttribute("class","img-fluid rounded");
    imagen.setAttribute("src", element.imagen);

    let parrafo=document.createElement('p');
    parrafo.setAttribute("class","text-center");
    parrafo.innerHTML=element.nombre;


    ContenedorJuego.appendChild(imagen);
    ContenedorJuego.appendChild(parrafo);
    contenedor.appendChild(ContenedorJuego);

  });

  setTimeout(function(){
    var loader= document.getElementById("loader");
    loader.remove();
    document.body.setAttribute("class","overfloNothidden");
  },1000);

  $("#contenedor-juegos").fadeIn(1000);

}
