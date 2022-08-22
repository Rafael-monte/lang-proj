import {ArrayHomogeneity} from '../types/ArrayTypes/ArrayHomogeneity';
import {BasicDatasetHandleOperations} from '../handlers/interfaces/BasicDatasetHandleOperations.interface'
import { Dataset } from "../types/ArrayTypes/Dataset";
import { List } from "../types/ArrayTypes/List";
import { DatasetConvertable } from './DatasetConvertable';
export class ListHandler extends DatasetConvertable<List<any>> implements BasicDatasetHandleOperations<List<any>> {
    private static instance: ListHandler;

    public static getInstance(): ListHandler {
        if (!ListHandler.instance) {
            ListHandler.instance = new ListHandler();
        }
        return ListHandler.instance;
    }

    public Create(homogeneity: ArrayHomogeneity): List<any> {
        let l : List<any> = {
            __elements: [],
            __homogeneity: homogeneity
        }
        return l;
    }
    public DropDataset(dataset: Dataset<any>): void {
       dataset.__elements = undefined;
       dataset.__homogeneity = undefined;
       dataset = null;
       return;
    }
    public Select(condition: (param: any) => boolean, dataset: List<any>): Array<any> {
        const result = [];
        dataset.__elements.forEach(el => {
            if (condition(el)) {
                result.push(el);
            }
        })
        return result;
    }
    public Update(operation: (param: any) => void, condition: (param: any) => boolean, dataset: List<any>): void {
        let elements = this.Select(condition, dataset);
        operation(elements);
        dataset.__elements = elements;
    }
    public Delete(condition: (param: any) => boolean, dataset: List<any>): void {
        let elements = this.Select(condition, dataset);
        elements.forEach(el => {
            dataset.__elements.splice(dataset.__elements.findIndex(element => element === el));
        })
    }


    public Insert(dataset: List<any>, ...elements: any) {
        elements.forEach(element => {
            super.CheckTypesInDataset(dataset, element);
        });
        dataset.__elements.push(...elements);
    }


}