console.log("JS cargado OK");

function calcularTotal() {
  const cantidades = document.querySelectorAll(".cantidad");
  let productos = [];
  let totalSinDescuento = 0;

  cantidades.forEach(input => {
    const precio = parseInt(input.dataset.precio);
    const cantidad = parseInt(input.value);
    for (let i = 0; i < cantidad; i++) productos.push(precio);
    totalSinDescuento += precio * cantidad;
  });

  let descuento = 0;
  let detalle = "";

  // Promo 3x2
  if (productos.length >= 3) {
    productos.sort((a, b) => b - a);
    descuento = productos[2];
    detalle = "Promo 3x2 aplicada.";
  }

  // 15% descuento si supera 30.000
  if (totalSinDescuento >= 30000 && descuento < totalSinDescuento * 0.15) {
    descuento = totalSinDescuento * 0.15;
    detalle = "15% de descuento por compra superior a $30.000.";
  }

  // Combo de 2 o 4 cafés diferentes
  let tiposSeleccionados = 0;
  cantidades.forEach(i => { if (parseInt(i.value) > 0) tiposSeleccionados++; });

  if (tiposSeleccionados === 2 && totalSinDescuento * 0.10 > descuento) {
    descuento = totalSinDescuento * 0.10;
    detalle = "Combo de 2 cafés diferentes: 10% de descuento.";
  } else if (tiposSeleccionados === 4 && totalSinDescuento * 0.20 > descuento) {
    descuento = totalSinDescuento * 0.20;
    detalle = "Combo de 4 cafés diferentes: 20% de descuento.";
  }

  const totalFinal = totalSinDescuento - descuento;

  document.getElementById("totalSinDescuento").textContent = "$" + totalSinDescuento.toLocaleString();
  document.getElementById("descuento").textContent = "-$" + descuento.toLocaleString();
  document.getElementById("totalFinal").textContent = "$" + totalFinal.toLocaleString();
  document.getElementById("detalleDescuento").textContent = detalle;
}

const btnCalcular = document.getElementById("calcularTotal");
if (btnCalcular) {
  btnCalcular.addEventListener("click", function(e) {
    e.preventDefault();
    calcularTotal();

    document.getElementById("resultado").scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburgerBtn");
    const nav = document.querySelector(".site-nav");

    hamburger.addEventListener("click", function () {
        nav.classList.toggle("open");
    });
});



