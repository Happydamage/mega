import React from "react";
import "./Crystal.scss";
import Tilt from 'react-parallax-tilt';

// обертка Tilt добавляет анимацию
const CrystalCC = () => {
    return (
        <div className="CrystalCC">
            <div className="container">
                <Tilt>
                    <div className="card bg1">
                        <div className="content">
                            <h2>01</h2>
                            <h3>Card One</h3>
                            <p>
                                Блочные кнопки имеют высокий акцент, отличаются использованием возвышения и заполнения.
                                Они содержат действия, которые являются основными для вашего приложения.
                            </p>
                            <a href="#">Read More</a>
                        </div>

                    </div>
                </Tilt>
                <Tilt>
                    <div className="card bg2">
                        <div className="content">
                            <h2>02</h2>
                            <h3>Card Two</h3>
                            <p>
                                Блочные кнопки имеют высокий акцент, отличаются использованием возвышения и заполнения.
                                Они содержат действия, которые являются основными для вашего приложения.
                            </p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </Tilt>
                <Tilt>
                    <div className="card bg3">
                        <div className="content">
                            <h2>03</h2>
                            <h3>Card Three</h3>
                            <p>
                                Блочные кнопки имеют высокий акцент, отличаются использованием возвышения и заполнения.
                                Они содержат действия, которые являются основными для вашего приложения.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </Tilt>
            </div>
        </div>
    )
}

export default CrystalCC;