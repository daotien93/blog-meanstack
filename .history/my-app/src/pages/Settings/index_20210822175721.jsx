import React from 'react'
import SideBar from '../../components/SideBar'

import '../Settings/setting.css'

export default function Settings() {
    return (
        <div className='setting'>
            <div className='setting__wrapper'>
                <span className='settings__title-update'>Update account</span>
                <span className='settings__title-update'>Delete account</span>
            <form className='settings__form'>
                <label>Setting Account</label>
                <div className='settings__account'>
                    <img src="https://thehanoichamomile.files.wordpress.com/2021/06/dscf6894.jpg?w=1024" alt=""/>
                </div>
                <label htmlFor='file__input'>
                    <i className='settings__account-icon far fa-user-circle'></i>{" "}
                </label>
                <input
                    id='file__input'
                    type='file'
                    style={{ display: 'none' }}
                    className='settings__input'
                >    
                </input>
            </form>
            </div>
            <SideBar/>
        </div>
    )
}
