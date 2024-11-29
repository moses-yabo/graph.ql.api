import { reviews } from "../data/db";
import { Category, ProductArgs,Product } from "../types";
export const Query = {
    Query:{
     
        products:(parent:any,args:any,context:any) => {
            const {products} = context;
            let filteredProducts = products;
            const {filter} = args
            if (filter) {
                const {onSale,avgRating}= filter;

                if (filter.onSale) {
                    filteredProducts = filteredProducts.filter((product:Product)=>{
                        return product.onSale;
                    })
                }
                if ([1,2,3,4,5].includes(avgRating)) {
                 
                    
                    filteredProducts = filteredProducts.filter((product:Product)=>{
                        let sumRating = 0;
                        let numberOfReviews = 0;
                        reviews.forEach(review =>{
                            if (review.productId === product.id){
                                sumRating += review.rating;
                                numberOfReviews++;

                            };

                        });
                        const avgProductRating = sumRating/numberOfReviews
                       return avgProductRating >= avgRating
                        
                    })
                }
            }
            return filteredProducts;
        },
        product:(parent:any,args:ProductArgs,context:any) =>{
          const {id} = args;
            const {products} = context;
          return products.find((p:Product)=> p.id === id)
        },
        categories:(parent:any,args:any,context:any)=>{
            const {categories} = context;

          return categories;
        },
        category:(parent:any,args:ProductArgs,context:any) =>{
          const {id} = args;
          const {categories} = context;
          return categories.find((c:Category)=> c.id === id);
        }
      }
} 