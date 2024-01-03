import { expect, test } from "bun:test";
import { Scraping } from "../src/scraping"
import { Tienda } from "../src/tienda";
import { file } from "bun";

const tienda: Tienda = {
  url: "https://www.pccomponentes.com",
  path: ["/procesadores","/tarjetas-graficas"]
}
const scraping = new Scraping(tienda);
const test_baratas = await file('./tests/test_baratas.txt').text();
const test_price = test_baratas.split(/\r?\n/);

let i = 0;
test("RTX 3060 más barata", () => {
  expect(scraping.gpuMasBarata("RTX3060").precioEur.toString()).toBe(test_price[i++]);
});

test("RTX 4070 más barata", () => {
  expect(scraping.gpuMasBarata("RTX4070").precioEur.toString()).toBe(test_price[i++]);
});

test("RTX 4070 ti más barata", () => {
  expect(scraping.gpuMasBarata("RTX4070TI").precioEur.toString()).toBe(test_price[i++]);
});

test("RX 6600 más barata", () => {
  expect(scraping.gpuMasBarata("RX6600").precioEur.toString()).toBe(test_price[i++]);
});

test("RX 7900 XTX más barata", () => {
  expect(scraping.gpuMasBarata("RX7900XTX").precioEur.toString()).toBe(test_price[i++]);
});
