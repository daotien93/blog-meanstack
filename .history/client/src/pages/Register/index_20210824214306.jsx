import React, { useState } from 'react'

import '../Register/register.css'
import { BrowserRouter, Link } from 'react-router-dom'

export default function Register() {
	const [username, setUserName] = useState("")
	const [email, setUserName] = useState("")
	const [password, setPassword] = useStatesetUserName] = useState("")
    return (
        <BrowserRouter>
        <div className="container" id="container">
		<div className="form-container log-in-container">
			<form action="#">
				<h2>Đăng ký</h2>
				<div className="social-container">
					<Link href="#" className="social"><i className="fab fa-facebook"></i></Link>
					<Link href="#" className="social"><i className="fab fa-google"></i></Link>
                        </div>
                 <input type="email" placeholder="Tên người dùng" />
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Mật khẩu" />
				<button>Đăng ký</button>
			</form>
		</div>
		<div className="overlay-container">
			<div className="overlay">
				<div className="overlay-panel overlay-right">
					<h1>Blog của KiRa</h1>
					<p>Chào mừng đến với Blog của Kira</p>
				</div>
			</div>
		</div>
            </div>
            </BrowserRouter>
    )
}
