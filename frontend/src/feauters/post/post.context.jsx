import { createContext, useState } from "react";

export const PostContext = createContext()

export const PostContextProvider = ({children}) =>{

    const [loading,setLoading] = useState(false)
    const [post,setPost] = useState(null)
    const [feed,setFeed] = useState(null)

    return(
        <PostContext.Provider value={{loading,setFeed,setLoading,setPost,post,feed}}>
            {children}
        </PostContext.Provider>
    )
}
