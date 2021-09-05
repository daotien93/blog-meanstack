import React from 'react'
import SideBar from '../../components/SideBar'

import '../Settings/setting.css'

export default function Settings() {
    return (
        <div className='setting'>
            <div className='setting__wrapper'>
                <span className='settings__title-update'>Update account</span>
            </div>
            <SideBar/>
        </div>
    )
}
