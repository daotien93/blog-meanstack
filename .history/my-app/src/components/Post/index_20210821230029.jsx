import React from 'react'

import '../Post/post.css'

export default function Post() {
    return (
        <div className="post">
            <div className="post__image-info">
                <span className="post__title">
                THU ÂM LỜI NÓI (VOICEOVER) CHO VLOG LIỆU CÓ DỄ?
                </span>
                <img className="post__image" src="https://thehanoichamomile.files.wordpress.com/2021/08/img_9461.jpg?w=1024" alt="" />
                <div className="post__cats">
                    <span className="post__cat">Life</span>
                </div>
                <span className="post__Date">1 hours ago</span>
            </div>
            <p className="post__description">
            Voiceover là một hình thức thu âm lồng tiếng được thực hiện trước hoặc sau khi đã quay vlog. Đối với mình, voiceover là việc mình ngồi đọc đoạn dàn ý (script) đã viết trước về một nội dung sẽ được đề cập trong video. Vậy, làm voiceover có dễ? “Chỉ là đọc script thôi […]
            </p>
            <Link className="post__btn"></Link>
        </div>
    )
}
