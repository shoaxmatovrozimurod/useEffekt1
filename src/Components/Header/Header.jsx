import React, { useEffect, useState } from 'react';
import "./Header.css";
import axios from 'axios';

const Header = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get('https://6ace2b34f338359cf1c338f2.mockapi.io/users');
                setData(res.data); // Ma'lumotni state'ga saqlaymiz
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        };

        getUser(); // Funksiyani chaqiramiz
    }, []); // Bo'sh massiv faqat 1 marta ishga tushishini ta'minlaydi

  return (
    <div>Header</div>
  );
}

export default Header;