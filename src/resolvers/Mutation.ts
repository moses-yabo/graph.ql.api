import { v4 as uuid } from "uuid";
export const Mutation = {
   Mutation:{
    addCategory:(parent:any,args:any,context:any)=>{
        const {input} = args;
        const {categories} = context;
        const newCategory = {
            id: uuid(),
            name:input.name
        }
        categories.push(newCategory);
        return newCategory
    },
    addProduct:(parent:any,args:any,context:any)=>{
        const {input} = args;
        const {products} = context;
        const newProduct = {
            id: uuid(),
            name:input.name
        }
        products.push(newProduct);
        return newProduct;
    }
   }
}