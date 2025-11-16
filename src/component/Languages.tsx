import '../component/styles/styles.css'
import nodejsic from '../assets/Language/Language-section/nodejsStackedLight.svg'
import jsic from '../assets/Language/Language-section/Javscript.svg'
import figmaic from '../assets/Language/Language-section/Figma.svg'
import reactic from '../assets/Language/Language-section/React.svg'
import css from '../assets/Language/Language-section/Css.svg'
import Nextic from '../assets/Language/Language-section/Nextjs.svg'
import Expressjs from '../assets/Language/Language-section/Express.svg'
function Languages() {
    return (
        <div className="language-container">
            <div className="language-flex">
                <div className="Language-circle">
                    <img src={nodejsic} alt="" width="38" height="38" />
                </div>
                <div className="Language-circle">
                    <img src={jsic} alt="" width="28" height="28" />
                </div>
                <div className="Language-circle">
                    <img src={figmaic} alt="" width="28" height="28" />
                </div>
                <div className="Language-circle">
                    <img src={css} alt="" width="38" height="38" />
                </div>
                <div className="Language-circle">
                    <img src={Nextic} alt="" width="48" height="48" />

                </div>
                <div className="Language-circle">
                    <img src={reactic} alt="" width="28" height="28" />

                </div>
                <div className="Language-circle">
                    <img src={Expressjs} alt="" width="48" height="48" />

                </div>
            </div>
        </div>

    )
}
export default Languages;