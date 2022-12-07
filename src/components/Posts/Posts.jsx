import React from 'react'
import Post from '../Post/Post';
import './posts.scss'
const Posts = () => {

    // temporary data
    const allPosts = [
        {
            id: 1,
            name: "John Doe",
            userId: 1,
            profilePic:
                "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 2,
            name: "Jane Doe",
            userId: 2,
            profilePic:
                "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
        },
        {
            id: 3,
            name: "John Doe",
            userId: 3,
            profilePic:
                "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: "https://images.pexels.com/photos/5581790/pexels-photo-5581790.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 4,
            name: "John Doe",
            userId: 4,
            profilePic:
                "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: "https://i.pinimg.com/736x/47/b0/a3/47b0a342924cfd165bb75452e82b6eaf.jpg",
        },
        {
            id: 5,
            name: "John Doe",
            userId: 5,
            profilePic:
                "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: "https://images.pexels.com/photos/9969181/pexels-photo-9969181.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ];

    return (
        <div className='posts'> 
            {
                allPosts.map((post)=>{
                    return <Post post={post} key={post.id}/> 
                })
            }
        </div>
    )
}

export default Posts