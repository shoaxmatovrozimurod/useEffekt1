import React, {useEffect, useState} from 'react'
import "./Header.css"
import axios from 'axios';

const Header = () => {
    const [data, setData] = useState ([]);
    
    useEffect ( => {()
        const getUser = async () => {
            try{
                const res = await axios.get( https:/6ace2b34f338359cf1c338f2.mockapi.io/users )
            }
        }
    })



  return (
    <div>Header</div>
  )
}

export default Header