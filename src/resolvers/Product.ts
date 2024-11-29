import { Category, Product ,ProductArgs, Review} from "../types";
export const product = {
    Product:{
        categories: (parent:Product,args:ProductArgs,context:any) =>{
          const {categoryId} = parent;
          const {categories} = context;
          
          return categories.filter((category:Category)=> category.id === categoryId)
        },
        reviews: (parent:Product,args:ProductArgs,context:any) =>{
            const {id} = parent;
            const {reviews} = context;
            
            return reviews.filter((review:Review)=> review.productId === id)
          }
      },
    
}