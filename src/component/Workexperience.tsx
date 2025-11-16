import '../component/styles/styles.css';
import Javascript from '../assets/Language/Javascript.svg'
import Reactic from '../assets/Language/React.svg';
import Htmlic from '../assets/Language/Html.svg'
import Cssic from '../assets/Language/css.svg'

function Projects() {
    return (
        <div className="exp-container">
            <h1 className="exp-title">Language Experience</h1>

            <div className="exp-grid">
                <div className="exp-card">
                    <img src={Javascript} alt="" className="exp-icon" />
                    <div>
                        <h3>JavaScript</h3>
                        
                    </div>
                </div>

                <div className="exp-card">
                    <img src={Reactic} alt="" className="exp-icon" />
                    <div>
                        <h3>React.js</h3>
                    </div>
                </div>

                <div className="exp-card">
                    <img src={Htmlic} alt="" className="exp-icon" />
                    <div>
                        <h3>HTML</h3>
                    </div>
                </div>

                <div className="exp-card">
                    <img src={Cssic} alt="" className="exp-icon" />
                    <div>
                        <h3>CSS</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
