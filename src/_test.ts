import { expect, test } from "bun:test";
import { Scraping } from "./scraping";
import { Tienda } from "./tienda";
import * as tipo from "./tipo_componente";
import { file } from "bun";



const test_componentes = await file('./docs/test_componentes.txt').text();
let test_array = test_componentes.split(/\r?\n/);
let scraping = new Scraping(new Tienda("https://www.pccomponentes.com",["/procesadores","/tarjetas-graficas"]));

let offset = 0;
test("PcComponentes", () => {
  for (let i=0; i<scraping.numComponentes(); i++) {
    expect(scraping.getComponente(i).getNombre()).toBe(test_array[i+offset++]);
    expect(scraping.getComponente(i).getModelo().toString()).toBe(test_array[i+offset++]);
    expect(scraping.getComponente(i).getPrecio().toString()).toBe(test_array[i+offset]);
  }
});

const test_baratas = await file('./docs/test_baratas.txt').text();
let test_price= test_baratas.split(/\r?\n/);

let i = 0;
test("RTX 3060 más barata", () => {
  expect(scraping.gpuMasBarata(tipo.Modelos.RTX3060)[0].getPrecio().toString()).toBe(test_price[i++]);
});

test("RTX 4070 más barata", () => {
  expect(scraping.gpuMasBarata(tipo.Modelos.RTX4070)[0].getPrecio().toString()).toBe(test_price[i++]);
});

test("RTX 4070 ti más barata", () => {
  expect(scraping.gpuMasBarata(tipo.Modelos.RTX4070TI)[0].getPrecio().toString()).toBe(test_price[i++]);
});

test("RX 6600 más barata", () => {
  expect(scraping.gpuMasBarata(tipo.Modelos.RX6600)[0].getPrecio().toString()).toBe(test_price[i++]);
});

test("RX 7900 XTX más barata", () => {
  expect(scraping.gpuMasBarata(tipo.Modelos.RX7900XTX)[0].getPrecio().toString()).toBe(test_price[i++]);
});
