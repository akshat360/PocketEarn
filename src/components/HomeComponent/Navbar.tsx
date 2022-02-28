import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar(){

    const navigate = useNavigate();


    return (
        <header className="header" role="heading">
            <div className="header__content" role="banner">
                <h1 className="header__title">
                    <a href="#" className="header__link" title="Go to the homepage" role="link">
                        <img src="https://en.bitcoinwiki.org/upload/en/images/thumb/f/f0/Bitcoinwallet.png/300px-Bitcoinwallet.png" className="icon @@iconClass" />
                    </a>
                </h1>
                <nav className="header-menu" role="navigation">
                    <ul className="header-menu__list" role="list">
                        <li className="header-menu__list-item link" role="list-item" onClick={()=>navigate('/login')}>
                            Features
                        </li>
                        <li className="header-menu__list-item link" role="list-item" onClick={()=>navigate('/login')}>
                            Team
                        </li>
                        <li className="header-menu__list-item link" role="list-item" onClick={()=>navigate('/login')}>
                            Login
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
