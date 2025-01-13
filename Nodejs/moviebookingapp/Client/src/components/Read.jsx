import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Read(props) {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/getallmovie")
            .then((result) => {
                setData(result.data.data);
                // console.log(result.data.data);
            })
            .catch(erorr => console.log(erorr));


    },[])    
    const handleImageClick = (item)=>{
        props.info(item)
        navigate("/movie/single")
        
    }
    return (
        <>
    
            <div className='flex flex-wrap justify-center mt-5'>
                {
                    data.map((item) => {
                        return <div key={item._id}>
                            <img src={item.image_url} alt=""  className='w-50 h-80 mb-3 cursor-pointer' onClick={()=>handleImageClick(item)}/>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Read