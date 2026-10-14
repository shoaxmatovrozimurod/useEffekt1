import axios from 'axios';
import React, { useEffect, useState } from 'react'   

const Header = () => {
    const [data, setData] = useState ([]);

    useEffect (() => {
        const getUser = async() => {
            try{
                const res = await axios.get('https://6ace2b34f338359cf1c338f2.mockapi.io/users');
                setData(res.data);
                console.log(res.data);
                
            }
            catch{
                alert("Xatolik yuz berdi")
            }
        }
        getUser();
    }, [])



  return (
    <div className='flex'>
        {
            data.map(el =>(
                <div key={el.id}>
                    <img className='key__img' src= {el.avatar} alt="" />
                    <h1 className='key__title'> {el.name} </h1>

                </div>
            ))
        }


    </div>
  )
}

export default Header