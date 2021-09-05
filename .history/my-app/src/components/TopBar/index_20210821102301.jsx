import React from 'react'

import '../TopBar/topbar.css'
import { Link } from 'react-router-dom'

export default function TopBar() {
    return (
        <div className="top">
            <div className="top__left">
                <li>HOME</li>
                
            </div>
            <div className="top__right">
                Right
            </div>
       </div>
    )
}
