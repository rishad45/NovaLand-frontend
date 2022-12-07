import { useContext } from "react";
import "./stories.scss"

const Stories = () => {


  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://i.pinimg.com/564x/86/bb/74/86bb74bb410fae9d6b785897102fb4f2.jpg",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://i.pinimg.com/564x/3a/01/d2/3a01d28c44aac97227adaf08f1e48b5e.jpg",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://i.pinimg.com/564x/98/d7/41/98d7413db6c4bf3e5a899bf1ee29d6db.jpg",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://i.pinimg.com/564x/0a/2a/19/0a2a19940ac5ec2da0f89787b4aed41f.jpg",
    },
  ];


  return (
    <div className="stories">
      <div className="story">
          <img src="https://images.pexels.com/photos/10464701/pexels-photo-10464701.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
          <span>whois_rishad</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories