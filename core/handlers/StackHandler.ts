import { ArrayHomogeneity } from '../types/ArrayTypes/ArrayHomogeneity';
import {Stack} from '../types/ArrayTypes/Stack';
export class StackHandler {

    static StackUp(stack: Stack, element: any) {
        if (stack.__type === ArrayHomogeneity.SAME_TYPE) {
            if (stack.__elements.length > 0 && typeof stack.__elements[0] !== typeof element) {
                throw new Error(`Tipos incompativeis (${typeof stack.__elements[0]} | ${typeof element}),
                se deseja alterar adicionar tipos diferentes, por favor, converta o tipo da pilha para MIXED_TYPE
                `)
            }
        }
        stack.__elements.push(element);
    }

    static Unstack(stack: Stack): void {
        stack.__elements.pop();
    }

    static GetTopElement(stack: Stack): any {
        return stack.__elements[stack.__elements.length - 1];
    }

    static GetStackSize(stack: Stack): number {
        return stack.__elements.length;
    }

    static ConvertListType(stack: Stack, type: ArrayHomogeneity) {
        stack.__type = type;
    }

}