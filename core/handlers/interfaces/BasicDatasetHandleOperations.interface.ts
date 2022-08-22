import { ArrayHomogeneity } from "../../types/ArrayTypes/ArrayHomogeneity";
import { Dataset } from "../../types/ArrayTypes/Dataset";

export interface BasicDatasetHandleOperations<T extends Dataset<any>> {
    Create(homogeneity: ArrayHomogeneity): T;
    DropDataset(dataset: T): void;
    Select(condition: (param) => boolean, dataset: T): Array<any>;
    Update(operation: (param:any) => void, condition: (param: any) => boolean | null, dataset: T): void
    Delete(condition: (param:any) => boolean, dataset: T): void;
    Insert(dataset: T, ...elements:any);
}