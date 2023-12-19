import { expect, test } from "bun:test";
import { Scraping } from "../src/scraping"
import { Tienda } from "../src/tienda";
import { file } from "bun";
import { Modelos } from "../src/tipo_componente";


const scraping = new Scraping(new Tienda("https://www.pccomponentes.com",["/procesadores","/tarjetas-graficas"]));
const test_baratas = await file('./tests/test_baratas.txt').text();
const test_price = test_baratas.split(/\r?\n/);

let i = 0;
test("RTX 3060 más barata", () => {
  expect(scraping.gpuMasBarata(Modelos.RTX3060).precioEur.toString()).toBe(test_price[i++]);
});

test("RTX 4070 más barata", () => {
  expect(scraping.gpuMasBarata(Modelos.RTX4070).precioEur.toString()).toBe(test_price[i++]);
});

test("RTX 4070 ti más barata", () => {
  expect(scraping.gpuMasBarata(Modelos.RTX4070TI).precioEur.toString()).toBe(test_price[i++]);
});

test("RX 6600 más barata", () => {
  expect(scraping.gpuMasBarata(Modelos.RX6600).precioEur.toString()).toBe(test_price[i++]);
});

test("RX 7900 XTX más barata", () => {
  expect(scraping.gpuMasBarata(Modelos.RX7900XTX).precioEur.toString()).toBe(test_price[i++]);
});
