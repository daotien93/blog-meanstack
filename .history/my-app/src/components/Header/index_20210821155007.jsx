import React from 'react'

import Banner1 from '../../assets/img/header.jpg'


export default function Header() {
    return (
        <div className="header">
            <div className="header__titles">
                <span className="header__titles-heading">KIRA</span>
                <span className="header__titles-heading">Blog</span>
            </div>
            <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt=""></img>
        </div>
    )
}

