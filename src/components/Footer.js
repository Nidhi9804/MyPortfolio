import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ChangeHistoryIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="https://www.instagram.com/nidhi9804/">
        <InstagramIcon />
</Link>
      
<Link to ="https://www.linkedin.com/in/nidhi-gupta-3b4120166/">
        <LinkedInIcon />
</Link>
<Link to="https://vercel.com/nidhi9804">
<ChangeHistoryIcon/>
</Link>
      </div>
      <p> &copy; 2023 NidhiPortfolio</p>
    </div>
  );
}

export default Footer;