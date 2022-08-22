import { ArrayHomogeneity } from "./ArrayHomogeneity"

export type Dataset<T extends any> = {
    __elements: T[],
    __homogeneity: ArrayHomogeneity
}