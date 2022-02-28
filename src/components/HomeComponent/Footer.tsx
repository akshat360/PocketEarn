import iconLocation from "../../assets/images/icon-location.svg";
import iconPhone from "../../assets/images/icon-phone.svg";
import iconEmail from "../../assets/images/icon-email.svg";

export default function Footer(){
    return (
        <footer className="footer">
            <div className="footer__content">
                <a href="#" className="footer__link" title="Go to the homepage" role="link">
                    <img src="https://en.bitcoinwiki.org/upload/en/images/thumb/f/f0/Bitcoinwallet.png/300px-Bitcoinwallet.png" className="icon footer__icon" />
                </a>
                <div className="footer__flex-outer">
                    <ul className="contact-list">
                        <li className="contact-list__item">
                            <div className="contact-list__flex-container">
                                <img
                                    src={iconLocation}
                                    alt="White location icon"
                                    title="Check our location"
                                    className="contact-list__image"
                                />
                                <p className="contact-list__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>
                            </div>
                        </li>
                        <div className="contact-list__flex-inner">
                            <li className="contact-list__item">
                                <div className="contact-list__flex-container">
                                    <img
                                        src={iconPhone}
                                        alt="White phone ringing"
                                        title="Contact us by phone"
                                        className="contact-list__image"
                                    />
                                    <p className="contact-list__text">+1-543-123-4567</p>
                                </div>
                            </li>
                            <li className="contact-list__item">
                                <div className="contact-list__flex-container">
                                    <img
                                        src={iconEmail}
                                        alt="White Gmail logo"
                                        title="Contact us by email"
                                        className="contact-list__image"
                                    />
                                    <p className="contact-list__text">example@fylo.com</p>
                                </div>
                            </li>
                        </div>
                    </ul>
                    <div className="footer__flex-intermediate">
                        <div className="footer__flex-inner">
                            <nav className="footer-menu" role="navigation">
                                <ul className="footer-menu__list" role="list">
                                    <li className="footer-menu__list-item" role="list-item">
                                        <a className="link link--secondary" href="#" role="link">About us</a>

                                    </li>
                                    <li className="footer-menu__list-item" role="list-item">
                                        <a className="link link--secondary" href="#" role="link">Jobs</a>

                                    </li>
                                    <li className="footer-menu__list-item" role="list-item">
                                        <a className="link link--secondary" href="#" role="link">Press</a>
                                    </li>
                                    <li className="footer-menu__list-item" role="list-item">
                                        <a className="link link--secondary" href="#" role="link">Blog</a>

                                    </li>
                                </ul>
                            </nav>

                            <nav className="footer-menu" role="navigation">
                                <ul className="footer-menu__list" role="list">
                                    <li className="footer-menu__list-item" role="list-item">
                                        <a className="link link--secondary" href="#" role="link">Contact us</a>

                                    </li>
                                    <li className="footer-menu__list-item" role="list-item">
                                        <a className="link link--secondary" href="#" role="link">Terms</a>
                                    </li>
                                    <li className="footer-menu__list-item" role="list-item">
                                        <a className="link link--secondary" href="#" role="link">Privacy</a>

                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <nav className="footer-menu--flex" role="navigation">
                            <ul className="footer-menu--flex__list" role="list">
                                <li className="footer-menu--flex__list-item" role="list-item">
                                    <a href="#" className="footer-menu--flex__link" role="link">
                                        <i className="fab fa-facebook-f footer-menu--flex__icon" role="image" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="footer-menu--flex__list-item" role="list-item">
                                    <a href="#" className="footer-menu--flex__link" role="link" >
                                        <i className="fab fa-twitter footer-menu--flex__icon" role="image" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="footer-menu--flex__list-item" role="list-item">
                                    <a href="#" className="footer-menu--flex__link" role="link">
                                        <i className="fab fa-instagram footer-menu--flex__icon" role="image" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>

    )
}
