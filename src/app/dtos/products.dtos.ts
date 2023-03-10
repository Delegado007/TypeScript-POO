import { Product } from "../models/products.models";
import { Category } from "../models/category.model";

export interface CreateProductDto extends Omit<Product, 'id' | 'category'> {
  categoryId: Category['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto> { }
