import { useContext } from "react";
import { getFeedPosts } from "../services/post.api";
import { PostContext } from "../post.context";

export const usePost =()=>{

   const context =  useContext(PostContext)
   const {loading,setFeed,setLoading,setPost,post,feed} = context;

   const handleGetFeed=async()=>{
try{

    setLoading(true)
    const data = await getFeedPosts();
    setFeed(data)
    setLoading(false)
}catch(err){
    console.log(err)
}finally{
    setLoading(false)
}
    
   }

   return {loading,feed,post,handleGetFeed}
}