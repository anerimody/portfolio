import "./Navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar.jsx";

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar/>

            <div className="wrapper">
                <motion.span initial={{opacity:0, scale:0.5}}
                             animate={{opacity:1, scale:1}}
                             transition={{duration:0.5}}>
                    Aneri Mody
                </motion.span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/aneri-mody/"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"/></a>
                    <a href="https://www.linkedin.com/in/aneri-mody/"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"/></a>
                    <a href="https://www.linkedin.com/in/aneri-mody/"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"/></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;