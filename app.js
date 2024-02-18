/* 


frgament- template - 




*/

const carrito = document.querySelector("#carrito");
const template = document.querySelector("#templateid");
const fragment = document.createDocumentFragment();
const btnesBotones = document.querySelectorAll(".card .btn");

const CarritoObjeto = [];

const AgregaralCarrito = (e) => {
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };

  const indice = CarritoObjeto.findIndex((item) => item.id === producto.id);

  if (indice === -1) {
    CarritoObjeto.push(producto);
  } else {
    CarritoObjeto[indice].cantidad += 1;
  }

  console.log(CarritoObjeto);
  PintarCarrito(CarritoObjeto);
};

const PintarCarrito = (Array) => {
  carrito.textContent = " ";
  Array.forEach((item) => {
    const clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".badge").textContent = item.cantidad;

    fragment.appendChild(clone);
  });

  carrito.appendChild(fragment);
};

btnesBotones.forEach((btn) => {
  return btn.addEventListener("click", AgregaralCarrito);
});

/*

espacio


*/

// let h1 = document.getElementById("title-h1");
// let botton = document.querySelector(".btn-primary");

// console.log(h1);
// console.log(botton);

// botton.addEventListener("click", () => {
//   h1.textContent = "Cambiando desde js";
//   h1.style.color = "#ff0000";
// });

// <h1 id="practica-fragment">

// {/* const lista = document.querySelector("#lista");
// const li_template = document.querySelector("#li-template");
// const fragment = document.createDocumentFragment();

// const ArrayPaises = ["Perú", "Colombia", "Argentina"];

// const clickpaises = (e) => console.log("diste click", e.target);

// ArrayPaises.forEach((pais) => {
//   const clone = li_template.content.firstElementChild.cloneNode(true);
//   clone.querySelector("span").textContent = pais;
//   clone.addEventListener("click", clickpaises);
//   fragment.appendChild(clone);
// }); */}

// </h1>

/*


const cajas = document.querySelector(".container ");

document.addEventListener("click", (e) => {
  if (e.target.id === "padre") {
    console.log(e.target.dataset.div);
  }
  if (e.target.id === "hijo") {
    console.log(e.target.dataset.div);
  }
  if (e.target.id === "nieto") {
    console.log(e.target.dataset.div);
  }
});

*/
