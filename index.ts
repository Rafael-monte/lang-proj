import {ListHandler} from './core/handlers/ListHandler';
import { ArrayHomogeneity } from './core/types/ArrayTypes/ArrayHomogeneity';

let list = ListHandler.GenerateInstance(ArrayHomogeneity.SAME_TYPE);

ListHandler.AddElement(list, 2);
ListHandler.ShowElements(list);
ListHandler.AddElement(list, "String aleatoria");
ListHandler.ShowElements(list);


