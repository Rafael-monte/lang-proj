import { List } from "../types/ArrayTypes/List";
import {ArrayHomogeneity} from '../types/ArrayTypes/ArrayHomogeneity';
export class ListHandler {

    static AddElement(list: List, element:any) {
        if (list.__type === ArrayHomogeneity.SAME_TYPE) {
            if (list.__elements.length > 0 && typeof list.__elements[0] !== typeof element) {
                throw new Error(`Tipos incompativeis (${typeof list.__elements[0]} | ${typeof element}),
                se deseja alterar adicionar tipos diferentes, por favor, converta o tipo da lista para MIXED_TYPE
                `)
            }
        }
        list.__elements.push(element);
    }

    static Reverse(list:List): void {
        list.__elements = list.__elements.reverse();
    }

    static RemoveFirstElement(list: List, element:any) {
        let index = this.__findIndex(list, element);
        if (index !== -1) {
            list.__elements.splice(index);
        }
    }

    static GenerateInstance(homogeneity: ArrayHomogeneity): List {
        let list: List = {
            __elements: [],
            __type: homogeneity
        }
        return list;
    }

    static ShowElements(list: List): void {
        console.log(list.__elements);
    }

    private static __findIndex(list: List, element:any): number {
        for (let i = 0; i < list.__elements.length; i++) {
            if (element === list.__elements[i]) {
                return i;
            }
        }
        return -1;
    }

    static ConvertListType(list: List, type: ArrayHomogeneity) {
        list.__type = type;
    }
}