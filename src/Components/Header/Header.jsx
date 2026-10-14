import axios from 'axios';
import React, { useEffect, useState } from 'react'   

const Header = () => {
    const [data, setData] = useState ([]);

    useEffect (() => {
        const getUser = async() => {
            try{
                const res = await axios.get ("https://mockapi.io/projects/6ace2b34f338359cf1c338f3");
                setData(res);
                console.log(data);
                
            }
            catch{
                alert("Xatolik yuz berdi")
            }
        }
        getUser();
    }, [])



  return (
    <div>Header</div>
  )
}

export default Header