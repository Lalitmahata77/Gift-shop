import { CONTACT_URL } from "../contraints";
import apiSlice from "./apiSlice";

const contactApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        contact : builder.mutation({
            query : (formdata)=>({
                url : `${CONTACT_URL}/send-email`,
                method : "POST",
                body : formdata
            })
        })
    })
})

export const {useContactMutation} = contactApiSlice