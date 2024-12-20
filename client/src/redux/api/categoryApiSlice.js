import { CATEGORY_URL } from "../contraints";
import apiSlice from "./apiSlice";

const categoryApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        createCategory : builder.mutation({
            query :(data)=>({
                url : `${CATEGORY_URL}`,
                method : "POST",
                body : data
            })
        }),
        getAllCategory : builder.query({
            query : ()=>({
                url : `${CATEGORY_URL}`
            })
        }),
        getCategoryDetails : builder.query({
            query : (id)=>({
                url : `${CATEGORY_URL}/${id}`
            })
        }),
        updateCategory : builder.mutation({
            query : ({updatedCategory,id})=>({
                url : `${CATEGORY_URL}/update/${id}`,
                method : "PUT",
                body : updatedCategory
            })
        }),
        deleteCategory : builder.mutation({
            query : (id)=>({
                url : `${CATEGORY_URL}/delete/${id}`,
                method : "DELETE"
            })
        })
    })
})

export const {useCreateCategoryMutation,useDeleteCategoryMutation,useGetAllCategoryQuery,useGetCategoryDetailsQuery,useUpdateCategoryMutation} = categoryApiSlice