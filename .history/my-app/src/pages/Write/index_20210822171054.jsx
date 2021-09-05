import React from 'react'

import '../Write/write.css'

export default function Write() {
    return (
        <div className="write">
            <form className="write__form">
                <div className="write__formGroup">
                    <label htmlFor="file__input">
                          <i className="write__icon fas fa-plus"></i>
                    </label>
                    <input type="file" id="file__input" style={{display: 'none'}}/>
                    <input type="text" placeholder="Tiêu đề bài viết" className="write__input" autoFocus={ true}/>
                </div>
                <div className="write__formGroup">
                    <textarea
                        placeholder="Nhập nội dụng bạn muốn viết...."
                        id=""
                        type="text"
                        className="write__text"
                    >
                    </textarea>
                </div>
                <button className="write__submit">
                    Đăng
                </button>
           </form>
        </div>
    )
}
