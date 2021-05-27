import { Dto } from "./base.dto";
import { Category } from "./category.dto";

export interface Product extends Dto {
    name: string
    category: Category
    price: number
    deleted: boolean
}