import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typical from "react-typical";
import "../styles/Home.css";
import { Link } from "react-router-dom";
function Home() {

    const file = " http://localhost:3000/Nidhiresume.pdf ";
    const download = (url) => {
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };
    return (
        <div className="home">
            <div className="about">
                <span className="primary_text">
                    {""}
                    <h2>
                        Hi, I'M  Nidhi</h2>
                    <h3 className="type">

                        {''}
                        <Typical
                            steps={['Enthusiastic', 2000, 'React Developer', 3000, 'Frontend Developer', 3000]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </h3>
                </span>

                <div className="prompt">
                    <p>Knack of building Applications with Front and Back-end Operations.</p>

                    <div className="options">
                        <button className="btn btn-info" onClick={() => {
                            download(file);
                        }}>Get resume</button>
                    </div>
                    <Link to="https://www.linkedin.com/in/nidhi-gupta-3b4120166/">
                        <LinkedInIcon />
                    </Link>
                    <Link to="https://mail.google.com/">
                        <EmailIcon />
                    </Link>
                    <Link to="https://github.com/Nidhi9804">
                        <GitHubIcon />

                    </Link>
                </div>

            </div>
            <div className="skills container">
                <div className="center" style={{ textAlign: "center" }} >

                    <h1> About me</h1>
                    <p className="choose">Why Choose Me ?</p>
                </div>
                <div className="about_me">
                    <div className="row  box">
                        <div className="col-md-6">
                            <img className="graduated" src="graduated.jpg" />

                        </div>
                        <div className=" para col-md-6">
                            <p className="para">Web Developer with Background Knowledge of React js  ,along with a knack of building
                                applications with utmost efficiency .
                            </p>

                            <p className="highlight">Here are Few Highlights</p>
                            <ul>
                                <li>Employed in variety of languages such as Reactjs , Javascript , HTML, CSS</li>
                                <li>Interactive Front end as per the Design</li>
                                <li>API Integrations </li>
                                <li>Redux for state management</li>
                            </ul>
                        </div>
                    </div>
                </div>
                

            </div>
            <div className="box_wrap">

           
                    <h1 className="center" style={{ textAlign: "center" }}>Technical skills</h1>
            <div className="skill_box row ">
                    <div className="myskill col-md-4">
                        <h2 className="font">React Js</h2>
                    </div>
                    <div className="myskill col-md-4">
                        <h2 className="font">FireBase</h2>
                    </div>
                    <div className="myskill col-md-4">
                        <h2 className="font">HTML/CSS</h2>
                    </div>
                    <div className="myskill col-md-4">
                        <h2 className="font">Axios</h2>
                    </div>

                    <div className="myskill col-md-4">
                        <h2 className="font">Bootstrap/MaterialUI</h2>
                    </div>
                    <div className="myskill col-md-4">
                        <h2 className="font">Javascript</h2>

                    </div>
                </div>
        </div>
        </div>
    );
}

export default Home;
