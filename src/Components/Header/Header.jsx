import React, { useEffect, useState } from 'react';
import "./Header.css";
import axios from 'axios';

const Header = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get('https://6ace2b34f338359cf1c338f2.mockapi.io/users');
                setData(res.data);
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        };

        getUser();
    }, []);

    return (
        <div>
            <h2>Foydalanuvchilar ro'yxati</h2>
            <div style={{ display: 'grid', gap: '10px' }}>
                {data.map((user) => (
                    <div key={user.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                        <img src={user.avatar} alt={user.name} width="50" style={{ borderRadius: '50%' }} />
                        <h3>{user.name}</h3>
                        <p>ID: {user.id}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Header;