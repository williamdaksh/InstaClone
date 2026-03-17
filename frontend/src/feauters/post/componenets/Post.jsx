import React from "react";

const Post = ({user,post}) => {
 
    return (
  <main className="bg-black min-h-screen">
    <div className="max-w-[470px] mx-auto">

      {/* Post Card */}
      <div className="border-b border-[#262626]">

        {/* Header */}
        <div className="flex items-center px-3 py-2.5 gap-2.5">
          {/* Avatar with story ring */}
          <div className="w-8 h-8 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex-shrink-0 cursor-pointer">
            <div className="w-full h-full rounded-full border-2 border-black overflow-hidden">
              <img src={user?.user_Image} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex-1">
            <span className="font-semibold text-[13px] text-white block cursor-pointer hover:underline">
              {user?.username||"anonymus"}
            </span>
            <span className="text-[11px] text-[#737373]">2 hours ago</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[12px] text-[#0095f6] font-semibold cursor-pointer">Follow</span>
            <span className="text-[#737373]">·</span>
            <button className="text-white p-1 flex items-center">
              {/* three dots icon */}
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full aspect-square bg-[#111] overflow-hidden">
          <img src={post?.imgUrl} className="w-full h-full object-scale-down block" />
        </div>

        {/* Action Buttons */}
        <div className="px-3 pt-2">
          <div className="flex items-center gap-0.5">
            <div className="flex gap-0.5 flex-1">
              {/* Like */}
              <button className="text-white p-2 rounded-full hover:bg-white/5 transition-all active:scale-90">
                {/* heart icon */}
              </button>
              {/* Comment */}
              <button className="text-white p-2 rounded-full hover:bg-white/5 transition-all active:scale-90">
                {/* comment icon */}
              </button>
              {/* Share */}
              <button className="text-white p-2 rounded-full hover:bg-white/5 transition-all active:scale-90">
                {/* share icon */}
              </button>
            </div>
            {/* Bookmark */}
            <button className="text-white p-2 rounded-full hover:bg-white/5 transition-all">
              {/* bookmark icon */}
            </button>
          </div>
        </div>

        {/* Likes */}
        {/* <div className="px-3 pb-1">
          <span className="font-semibold text-[13px] text-white cursor-pointer">1,247 likes</span>
        </div> */}

        {/* Caption */}
        <div className="px-3 pb-1.5 text-[13px] text-white leading-relaxed">
          <span className="font-semibold mr-1.5 cursor-pointer hover:underline">username</span>
          <span>{post.caption} ✨</span>
          <span className="text-[#a8a8a8] cursor-pointer ml-1">...more</span>
        </div>

        {/* Comments */}
        {/* <div className="px-3 pb-1">
          <span className="text-[13px] text-[#737373] cursor-pointer">View all 89 comments</span>
        </div> */}

        {/* Timestamp */}
        {/* <div className="px-3 pb-2">
          <span className="text-[10px] text-[#737373] uppercase tracking-wider">2 hours ago</span>
        </div> */}

        {/* Add Comment */}
        {/* <div className="flex items-center px-3 py-2 border-t border-[#262626] gap-2.5">
          <div className="w-6 h-6 rounded-full p-[1.5px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex-shrink-0">
            <div className="w-full h-full rounded-full border-[1.5px] border-black overflow-hidden">
              <img src="..." className="w-full h-full object-cover" />
            </div>
          </div>
          <input
            placeholder="Add a comment..."
            className="flex-1 bg-transparent border-none outline-none text-white text-[13px] placeholder:text-[#737373]"
          />
          <span className="text-[16px] cursor-pointer">😊</span>
          <span className="text-[13px] font-semibold text-[#0095f6] opacity-40 cursor-pointer">Post</span>
        </div> */}
      </div>

    </div>
  </main>
    )
};

export default Post;
