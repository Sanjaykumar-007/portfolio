import { Link } from "react-scroll";
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className="topContent">
      <div className="topContent_container" style={{ alignItems: "center" }}>
        <h1 style={{ textAlign: "center" }}>Sanjay Kumar.S</h1>
        <p>
          I'm a computer science student studied at Dr.Ngp Institute of
          Technology, Coimbatore. An aspiring Web Developer. I enjoy learn and
          explore technoligies with finidng new software solution
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'6px'}}>
            <a href="https://drive.google.com/file/d/1CEDiResuI-EasWDUf5G9f4qizj-GLdnx/view?usp=sharing">
                <button style={{
                    color: 'white',
                    backgroundColor: 'orangered',
                    fontSize: '14px',
                    padding: '10px 30px',
                    fontFamily: "'Montserrat', serif",
                    fontWeight: 300,
                    cursor: 'pointer',
                    marginRight: '20px',
                    borderRadius: '13px'
                }}>
                    Download Cv
                </button>
            </a>
            <Link to='projects' smooth={true} duration={500}>
                <button style={{
                    color: 'white',
                    border: '1px solid white',
                    backgroundColor: 'transparent',
                    fontSize: '14px',
                    padding: '10px 30px',
                    fontFamily: "'Montserrat', serif",
                    fontWeight: 300,
                    cursor: 'pointer',
                    borderRadius: '13px'
                }}>
                    My Projects
                </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default TopContent;
