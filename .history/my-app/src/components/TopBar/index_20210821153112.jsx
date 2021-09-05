import React from 'react'

import '../TopBar/topbar.css'


export default function TopBar() {
    return (
    
        <div className="top">
            <div className="top__left">
                <li className="top__left-item  item-active">HOME</li>
                <li className="top__left-item">BLOG</li>
                <li className="top__left-item">Viết bài</li>
                <li className="top__left-item">ỦNG HỘ</li>
                <li className="top__left-item">ABOUT ME</li>
            </div>

            <div className="top__right">
                <li className="top__right-item"><i className="fab fa-facebook-square"></i></li>               
                <li className="top__right-item"><i className="fab fa-instagram"></i></li>
                <li className="top__right-item"><i className="fab fa-youtube"></i></li>
                <img className="top__right-img" src="https://media.thieunien.vn/thumb//uploads/2021/08/09/jisoo-blackpink-di-dong-phim-nhung-co-thanh-vien-nay-lai-duoc-khen-ve-dien-xuat-nhieu-hon_24560.jpg" alt="" />
                <li className="top__right-item top__search-icon"><i class="fas fa-search"></i></li>
            </div>   
            </div>
    )
}
