import ProfileCard from "../ReusableComponents/ProfileCards/ProfileCard"
import { useEffect } from 'react'
import { axiosPrivate } from '../../Apis/Axios'
import { useState } from "react"

const CommunityList = ({ src, source, isButton = false }) => {

    const [data, setData] = useState([])
    const [join, setJoin] = useState(false)

    const getAllCommunities = () => {
        axiosPrivate.get(source).then((res) => {
            console.log(res)
            if (res.data.success) {
                if (res.data.data !== null) {
                    setData(res.data.data)
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
                data.map((item) => {
                    return <ProfileCard
                        width='100%'
                        height='10vh'
                        mainName={item.name}
                        subName={item.privacy}
                        id={item._id}
                        src={src}
                        key={item._id}
                        isButton={isButton}
                        setJoin={setJoin}
                    >
                    </ProfileCard>
                })
            }
        </div>
    )
}

export default CommunityList 