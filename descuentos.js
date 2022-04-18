const precioFinal = (precio, porcentaje) => precio * (1 - porcentaje / 100);

const cupones = [
  { name: "juank", value: 12.5 },
  { name: "cami", value: 10 },
  { name: "moneda", value: 2.5 },
];

function caculaPrecioFinal() {
  debugger;
  const precio = parseFloat(document.getElementById("precio").value);
  const porcentaje = parseFloat(document.getElementById("porcentaje").value);
  const cupon = document.getElementById("cupon").value;
  const resultBoxPrice = document.getElementById("price-result");
  const resultBoxCoupon = document.getElementById("coupon-result");

  const userCoupon = cupones.find((cp) => cupon === cp.name);

  let resultTextPrice = "";
  let resultTextCoupon = "";

  if (porcentaje > 0) {
    resultTextPrice =
      "El precio final con descuento es $" + precioFinal(precio, porcentaje);
  }

  if (userCoupon) {
    resultTextCoupon = "El precio final con el cupon " + userCoupon.name + " que es de " + userCoupon.value + "% es de $" + precioFinal(precio, userCoupon.value);
  } else {
    resultTextCoupon = "El cupon no existe, o no digitó cupon"
  }

  resultBoxPrice.innerText = resultTextPrice;
  resultBoxCoupon.innerText = resultTextCoupon;
}
