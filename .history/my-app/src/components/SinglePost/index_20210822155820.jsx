import React from 'react'

import '../SinglePost/singlepost.css'

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePost__Wrapper">
                 <h1 className="singlePost__title">NHẬT KÝ MỘT TUẦN LÀM CONTENT</h1>
            </div>
            <img className="singlePost__images" src="https://thehanoichamomile.files.wordpress.com/2021/08/img_9461.jpg?w=1024" alt="" />
            <div className="singlePost__edit">
                <i className="singlePost__icon fas fa-edit"></i>
                <i className="singlePost__icon fas fa-trash"></i>
            </div>
            <div className="singlePost__info">
                <span className="singlePost__Author">
                    Nguoi viet: <b>Kara</b>
                </span>
                <span className="singlePost__date">1 hour ago</span>
            </div>
            <p className="singlePost__description"></p>
        </div>
    ) 
}
