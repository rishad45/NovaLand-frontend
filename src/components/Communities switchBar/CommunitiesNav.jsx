import './communityNav.scss'
import CommunityList from '../CommunityList/CommunityList'
import { useState, useEffect } from 'react'

const CommunitiesNav = () => {
  let src1 = "https://images.pexels.com/photos/14598135/pexels-photo-14598135.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
  let src2 = "https://images.pexels.com/photos/8562333/pexels-photo-8562333.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";

  let source1 = '/get-recommended-communities'  
  let source2 = '/get-user-communities' 
  const [menuItem, setMenu] = useState(1) 
  useEffect(() => {
    console.log(menuItem) 
  }, [menuItem]) 


  return (
    <div className='community-page'>
      <div className='community-switch-navbar'>
        <div className= {`my-communs ${menuItem === 1 && 'commun-borderBottom'}`} onClick={() => setMenu(1)}>
          <p>My Communities</p>
        </div>
        <div className={`suggested-communs ${menuItem === 2 && 'commun-borderBottom'}`} onClick={() => setMenu(2)}> 
          <p>Suggested Communities</p>
        </div>
      </div>
      {
        menuItem === 1 ? <CommunityList src={src1} source = {source2} /> : <CommunityList source = {source1} src={src2} isButton = {true} />   
      }
    </div>
  )
}

export default CommunitiesNav