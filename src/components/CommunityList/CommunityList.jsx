import ProfileCard from "../ReusableComponents/ProfileCards/ProfileCard"
import { useEffect } from 'react'
import { axiosPrivate } from '../../Apis/Axios'
import { useState } from "react"
import Spinner from "../ReusableComponents/Spinner/Spinner"

const CommunityList = ({ src, source, isButton = false }) => {

    const [data, setData] = useState([])
    const [join, setJoin] = useState(false)
    const[loading, setLoading] = useState(false)

    const getAllCommunities = () => {
        setLoading(true);
        axiosPrivate.get(source).then((res) => {
            console.log(res)
            if (res.data.success) {
                if (res.data.data !== null) {
                    setData(res.data.data)
                    setLoading(false);
                }
            }
        })
    }

    useEffect(() => {
        console.log("loaded") 
        getAllCommunities()
    }, [source,join]) 


    console.log("state", data)

    return (
        <div className='yourCommunities' style={{ width: '100%', height: '100%' }}>
            {
                loading && <Spinner/>
            }
            {
                data.map((item) => {
                    return <ProfileCard
                        width='100%'
                        height='10vh'
                        mainName={item.name}
                        subName={item.privacy}
                        id={item._id}
                        src={item.image}
                        key={item._id}
                        isButton={isButton}
                        setJoin={setJoin}
                        admin={item.admin} 
                    >
                    </ProfileCard>
                })
            }
        </div>
    )
}

export default CommunityList 