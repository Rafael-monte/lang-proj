import { Dataset } from '../../types/ArrayTypes/Dataset';
import {ArrayHomogeneity} from '../ArrayTypes/ArrayHomogeneity';
export type List<T extends any> = Dataset<T> & {
};