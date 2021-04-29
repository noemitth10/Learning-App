import "../styles/About_us.css"
import aboutUsNoemi from "../styles/images/about_us_noemi.jpeg";
import aboutUsGyozo from "../styles/images/about_us_gyozo.jpg";

const About = () => { 
    return (
        <>
            <div className="title-container">
                    <h1>Rólunk</h1>
            </div>
                <div className="left">
                    <img
                        src={aboutUsNoemi}
                        alt="avatar"
                    />
                    <h3>Tóth Noémi Evelin</h3>
                    <h4>Egyetemi hallgató</h4>
                    <hr/>
                    <h5>Munkahely</h5>
                    <h6>MTA-PPKE Magyar Nyelvtechnológiai Kutatócsoport</h6>
                    <p>
                        Az Eszterházy Károly Egyetem Informatika Karának
                        Számítástudományi Tanszékén programtervező informatikus
                        alapképzésen résztvevő, végzős hallgató. Az MTA-PPKE Magyar
                        nyelvtechnológiai Kutatócsoport gyakornoka. Kutatási területei:
                        magyar nyelvtani szabályok, egyszerű és összetett mondatok
                        felépítésének elemzése nyelvtechnológiai eszközökkel.
                    
                    </p>
                </div>
                <div className="right">
                    <img
                        src={aboutUsGyozo}
                        alt="avatar"
                    />
                    <h3>Dr. Yang Zijian Győző</h3>
                    <h4>Szakdolgozati konzulens</h4>
                    <hr/>
                    <h5>Munkahely</h5>
                    <h6>MTA-PPKE Magyar Nyelvtechnológiai Kutatócsoport</h6>
                    <p>
                        Adjunktus (Eszterházy Károly Egyetem), tudományos munkatárs
                        (MTA-PPKE Nyelvtechnológiai Kutatócsoport). A Pázmány Péter
                        Katolikus Egyetem Információs Technológiai és Bionikai Karán
                        szerzett PhD fokozatot humán nyelvtechnológia tudományterületen
                        summa cum laude minősítéssel. Kutatási területei: gépi fordítás
                        és kiértékelése, összefoglaló generálás, szövegek szemantikai
                        kategorizálása, szövegek hibáinak detektálása és helyreállítása.{" "}
                    </p>
                </div>
        </>
    )
}

export default About;