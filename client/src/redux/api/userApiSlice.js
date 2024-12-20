import { USER_URL } from "../contraints";
import apiSlice from "./apiSlice";

const userApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        regisetr : builder.mutation({
            query:(data)=>({
                url : `${USER_URL}`,
                method : "POST",
                body : data
            })
        }),
        login : builder.mutation({
            query : (data)=>({
                url : `${USER_URL}/login`,
                method : "POST",
                body : data
            })
        }),
        logout : builder.mutation({
            query:()=>({
                url : `${USER_URL}/logout`,
                method : "DELETE"
            })
        }),
        getAllUsers : builder.query({
            query:()=>({
                url : `${USER_URL}`
            })
        }),
        getUserProfile : builder.query({
            query : (id)=>({
                url : `${USER_URL}/${id}`
            })
        }),

        updateUser : builder.mutation({
            query:(data)=>({
                url : `${USER_URL}/profile`,
                method : "PUT",
                body : data
            })
        }),
        deleteUser : builder.mutation({
            query : (userId)=>({
                url : `${USER_URL}/${userId}`,
                method : "DELETE"
            })
        }),
        updateUserByAdmin : builder.mutation({
            query : (data)=>({
                url : `${USER_URL}/${data.userId}`
            })
        }),
    })
})

export const {useRegisetrMutation,useLoginMutation,useGetAllUsersQuery,useUpdateUserMutation,useDeleteUserMutation,useGetUserProfileQuery,useLogoutMutation,useUpdateUserByAdminMutation

} = userApiSlice