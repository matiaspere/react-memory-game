export function barajarTarjetas(tarjetas) {
  const res = tarjetas.sort(function () {
    return 0.5 - Math.random();
  });
  return res;
}

