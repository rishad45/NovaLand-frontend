import { useEffect } from "react"
import Posts from "../../components/Posts/Posts"
import Stories from "../../components/stories/Stories"
import {setTab} from '../../Redux/Slices/tabSlice'
import "./home.scss"
import { useDispatch } from "react-redux"
const Home = () => {
  const dispatch = useDispatch() 
  useEffect(()=>{
    dispatch(setTab(0)) 

    return ()=>{
      setTab(null) 
    }
  },[])

  return (
    <div className="home">
      <Stories />
      <Posts/> 
    </div>
  )
}

export default Home