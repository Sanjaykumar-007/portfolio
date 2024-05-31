import { Link } from "react-scroll";
import './TopContent.css';

const TopContent = () => {
  return (
    <div className='topContent'>
      <div className='topContent_container'>
        <h1>Sanjay Kumar.S</h1>
        <p>An aspiring Web Developer</p>
        <a href='https://drive.google.com/file/d/109AqGAHf5vdms6gfmHToaIwNfrGMrPOo/view?usp=sharing.google.com'>
            <button className="topContent_downloadButton">
                Download Cv
            </button>
        </a>
        <Link to='projects' smooth={true} duration={500}>
            <button className="topContent_projectButton">
               My Projects  
            </button>
        </Link>
      </div>
    </div>
  )
}

export default TopContent
