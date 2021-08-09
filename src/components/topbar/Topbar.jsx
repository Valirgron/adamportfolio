import "./topbar.scss";
import { Person, Mail,GitHub,LinkedIn} from "@material-ui/icons";
import { useHistory } from "react-router-dom";

export default function Topbar({ menuOpen, setMenuOpen }) {
  const history = useHistory();

  function handleClick(links) {
    window.location.replace(links);
  }
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Adam
          </a>
          <div className="itemContainer">
            <GitHub className="icon" onClick={() =>handleClick("https://github.com/Valirgron")}/>
            <span>Valirgron</span>
          </div>
          <div className="itemContainer">
            <LinkedIn  className="icon" onClick={() =>handleClick("https://www.linkedin.com/in/adam-jamilkhair-6b31551ab/")}/>
            <span>Adam Jamilkhair</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" onClick={() =>handleClick("https://youtu.be/dQw4w9WgXcQ")}/>
            <span>adamjamilkhair@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}


