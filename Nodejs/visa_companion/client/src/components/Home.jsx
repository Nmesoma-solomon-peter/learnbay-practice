import React, { useState } from 'react'
import Makepost from './Makepost'
import Post from './Post'
import { useEffect } from 'react';
import Axios from 'axios'

// const samplePost = {
//     posterName: "John Doe",
//     posterAvatar: "https://cdn-icons-png.flaticon.com/512/12225/12225935.png",
//     postDate: "Jan 25, 2025",
//     text: "This is a sample post to demonstrate how the component works. It's expandable and supports dynamic image layouts.",
//     images: [
//         "https://police.gov.rw/fileadmin/news_importold/KCC-4_01.jpg",
//         "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/de/ed/27/getlstd-property-photo.jpg?w=900&h=500&s=1",
//         "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/b3/1d/29/caption.jpg?w=900&h=500&s=1",
//         "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/b3/1d/24/caption.jpg?w=900&h=500&s=1",
//         "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/b3/1d/28/caption.jpg?w=900&h=500&s=1",
//     ],
// };

function Home() {

    Axios.defaults.withCredentials = true
    const [allPosts, setAllPosts] = useState([])
    useEffect(() => {
        Axios.get("http://192.168.1.65:5000/verified/users/readallposts", {}, {
            withCredentials: true, // This ensures cookies are sent
        })
            .then((output) => {
                setAllPosts(output.data.posts);
            })
    }, [])

    return (
        <>
            <Makepost />


            {/* // Render the Post component */}
            {allPosts.map((post) => {
                return <div className='mt-14 shadow-2xl' key={post._id}>
                    <Post post={post} />
                </div>
            })}
        </>
    )
}

export default Home