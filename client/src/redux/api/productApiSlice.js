import { PRODUCT_URL, UPLOAD_URL } from "../contraints.js";
import apiSlice from "./apiSlice.js";

const productApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        createProduct : builder.mutation({
            query : (productData)=>({
                url : `${PRODUCT_URL}`,
                method : "POST",
                body : productData
            })
        }),
        updateProduct : builder.mutation({
            query :({formData,productId})=>({
                    url : `${PRODUCT_URL}/${productId}`,
                method : "PUT",
                body : formData
            })
        }),
        deleteProduct : builder.mutation({
            query : (productId)=>({
                url : `${PRODUCT_URL}/${productId}`,
                method : "DELETE"
            })
        }),
        fetchProduct : builder.query({
            query : ()=>({
                url : `${PRODUCT_URL}`
            })
        }),
        topproduct : builder.query({
            query : ()=>({
                url : `${PRODUCT_URL}/topproduct`
            })
        }),
        newProduct : builder.query({
            query : ()=>({
                url : `${PRODUCT_URL}/newproduct`
            })
        }),
        filterProducts : builder.query({
            query: ({ checked, radio }) => ({
                url: `${PRODUCT_URL}/filtered-products`,
                method: "POST",
                body: { checked, radio },
              }),
        }),
        allProducts : builder.query({
            query : ()=>({
                url : `${PRODUCT_URL}/all`
            })
        }),
        readProduct : builder.query({
            query : (productId)=>({
                url : `${PRODUCT_URL}/${productId}`
            })
        }),
        addReview : builder.mutation({
            query: (data) => ({
                url: `${PRODUCT_URL}/${data.productId}/addreview`,
                method: "POST",
                body: data,
              }),
        }),
        uploadProductImage: builder.mutation({
            query: (data) => ({
              url: `${UPLOAD_URL}`,
              method: "POST",
              body: data,
            }),
          }),
    })
})

export const {useAddReviewMutation,useAllProductsQuery,useCreateProductMutation,useDeleteProductMutation,useFetchProductQuery,useFilterProductsQuery,useNewProductQuery,useReadProductQuery,useTopproductQuery,useUpdateProductMutation,useUploadProductImageMutation} = productApiSlice
