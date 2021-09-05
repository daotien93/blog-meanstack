import React from 'react'

import { Link } from 'react-router-dom'

// css
import '../Header/header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="header__titles">
                <h1 className="header__titles-heading">
                    <Link to=""></Link>
                </h1>
                <span className="header__titles-heading">Blog</span>
            </div>

        </div>
    )
}

