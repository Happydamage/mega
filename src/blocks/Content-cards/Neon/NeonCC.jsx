import React from "react";
import "./NeonCC.scss";
import Tilt from "react-parallax-tilt";


const NeonCC = () => {
    return (
        <div className="NeonCC">
            <Tilt>
                <div className="box">
                    <span></span>
                    <div className="content">
                        <h2>Card One</h2>
                        <p>
                            Википе́дия — общедоступная многоязычная универсальная интернет-энциклопедия со свободным
                            контентом,
                            реализованная на принципах вики. Расположена по адресу wikipedia.org.
                            Владелец сайта — американская некоммерческая организация «Фонд Викимедиа»,
                            имеющая 37 региональных представительств.
                        </p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </Tilt>
            <div className="box">
                <span></span>
                <div className="content">
                    <h2>Card Two</h2>
                    <p>
                        Википе́дия — общедоступная многоязычная универсальная интернет-энциклопедия со свободным
                        контентом,
                        реализованная на принципах вики. Расположена по адресу wikipedia.org.
                        Владелец сайта — американская некоммерческая организация «Фонд Викимедиа»,
                        имеющая 37 региональных представительств.
                    </p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div className="box">
                <span></span>
                <div className="content">
                    <h2>Card Three</h2>
                    <p>
                        Википе́дия — общедоступная многоязычная универсальная интернет-энциклопедия со свободным
                        контентом,
                        реализованная на принципах вики. Расположена по адресу wikipedia.org.
                        Владелец сайта — американская некоммерческая организация «Фонд Викимедиа»,
                        имеющая 37 региональных представительств.
                    </p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    );
}

export default NeonCC;

