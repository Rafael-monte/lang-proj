import { ArrayHomogeneity } from "../types/ArrayTypes/ArrayHomogeneity";
import { Dataset } from "../types/ArrayTypes/Dataset";

export abstract class DatasetConvertable<T extends Dataset<any>> {
    protected CheckTypesInDataset(dataset:T, element: any): void {
        if (dataset.__homogeneity === ArrayHomogeneity.MIXED) {
            return;
        }
        if (dataset !== undefined && dataset[0] === undefined && typeof dataset[0] !== typeof element) {
            throw new Error(`Tipos incompatíveis ${typeof dataset[0]} | ${typeof element}. Caso queira adicionar um elemento de um tipo diferente, altere o tipo da estrutura de dados para ${ArrayHomogeneity.MIXED.toString()}`);
        }
    }

    public ConvertDatasetHomogeneity(dataset: T, homogeneity: ArrayHomogeneity) {
        dataset.__homogeneity = homogeneity;
    }
}