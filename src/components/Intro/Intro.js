import IntroCSS from "./Intro.module.css";
import logo from "../../assets/logo.png";

const Intro = () => {
    return (
        <div className={IntroCSS.introduction}>
            <div className={IntroCSS.content}>
                <img src={logo} alt="logo" />
                <h1>Breaking Bad</h1>
                <p className={IntroCSS.ratings}>2008 | 18+ | 5 Seasons | US TV Shows</p>
                <p className={IntroCSS.subtitle}>A high school chemistry teacher dying of cancer teams with a former student to secure his family's future by manufacturing and selling crystal meth.</p>
                <p className={`${IntroCSS.extraInfo} ${IntroCSS.starring}`}>Starring:Bryan Cranston, Aaron Paul, Anna Gunn</p>
                <p className={IntroCSS.extraInfo}>Creators:Vince Gilligan</p>
            </div>
        </div>
    );
}
 
export default Intro;