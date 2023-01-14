import { useEffect } from "react";
import { useState } from "react"
import { axiosPrivate } from "../Apis/Axios"

const useTable = (url) => {
    console.log('jj');
    const [rows, setRows] = useState([]);
    const getResult = () => {
        axiosPrivate.post(url)
            .then((res) => {
                setRows(res.data?.data);
            })
            .catch((err) => {

            }) 
    }
    useEffect(() => {
        getResult();
    }, [])

    return { rows }
}

export default useTable;