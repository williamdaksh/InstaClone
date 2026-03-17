import React, { useEffect } from "react";
import Post from "../componenets/Post";
import { usePost } from "../hooks/usePost";

const Feed = () => {
    const { loading, feed, handleGetFeed } = usePost();

    useEffect(() => {

         handleGetFeed();
    }, []);

    useEffect(()=>{
        console.log(feed)
    },[feed])

    if (loading || !feed) {
        return <h1>Feed is loading...</h1>;
    }

    return (
        <main>
            {feed.map(post=>
                
                    <Post key={post._id}  user={post.user} post={post} />
                
            )}
        </main>
    );
};

export default Feed;
