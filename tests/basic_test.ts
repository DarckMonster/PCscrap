import { expect, test } from "bun:test";
import { Scraping } from "../src/scraping"
import { Tienda } from "../src/tienda";
import { file } from "bun";


const scraping = new Scraping(new Tienda("https://www.pccomponentes.com",["/procesadores","/tarjetas-graficas"]));
const test_baratas = await file('./test_baratas.txt').text();
const test_price = test_baratas.split(/\r?\n/);

let i = 0;
test("RTX 3060 más barata", () => {
  expect(scraping.gpuMasBarata().precioEur.toString()).toBe(test_price[i++]);
});

test("RTX 4070 más barata", () => {
  expect(scraping.gpuMasBarata().precioEur.toString()).toBe(test_price[i++]);
});

test("RTX 4070 ti más barata", () => {
  expect(scraping.gpuMasBarata().precioEur.toString()).toBe(test_price[i++]);
});

test("RX 6600 más barata", () => {
  expect(scraping.gpuMasBarata().precioEur.toString()).toBe(test_price[i++]);
});

test("RX 7900 XTX más barata", () => {
  expect(scraping.gpuMasBarata().precioEur.toString()).toBe(test_price[i++]);
});
