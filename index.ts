import {ListHandler} from './core/handlers/ListHandler';
import { ArrayHomogeneity } from './core/types/ArrayTypes/ArrayHomogeneity';


var handlerLista = ListHandler.getInstance();
var lista = handlerLista.Create(ArrayHomogeneity.MIXED);

console.log(handlerLista.Select(el => el, lista));


console.log("Inserindo elementos...");
handlerLista.Insert(lista, 4, 5, "olá", {obj: "oi"});
console.log(handlerLista.Select(el => el, lista));

console.log("Listando os elementos selecionados...");

console.log(handlerLista.Select(el => el.obj === "oi", lista));

console.log("Removendo elementos...");

handlerLista.Delete(el => el.obj === "oi", lista);

console.log(handlerLista.Select(el => el, lista));


console.log("Deletando a lista da memória");

handlerLista.DropDataset(lista);

console.log("A lista não existe mais ->", lista);







