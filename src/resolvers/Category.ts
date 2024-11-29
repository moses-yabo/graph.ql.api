import {ProductArgs,Category, Product} from '../types';

export const category = {
    Category:{
        products: (parent:Category,args:any,context:any) =>{
          const {id} = parent;
          const {products} = context
          const {filter} = args
          const categoryProducts = products.filter((product:Product)=> product.categoryId === id)
          let filteredCategoryProducts = categoryProducts;
          if (filter) {
            if (filter.onSale === true) {
                filteredCategoryProducts = filteredCategoryProducts.filter((product:Product)=>{
                    return product.onSale;
                })
            }
        }
        return filteredCategoryProducts;
        }
}}