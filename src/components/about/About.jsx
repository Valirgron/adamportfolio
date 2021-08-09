import "./About.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="wrapper">
          <div className="aboutme">
            <h2>About Me</h2>
            <ul>
              <li class="flex">
                <span>Name: </span>
                <span>Muhammad Adam bin Jamilkhair</span>
              </li>
              <li class="flex">
                <span>Date of birth: </span>
                <span>15/07/1998</span>
              </li>
              <li class="flex">
                <span>Address: </span>
                <span>Pt 2776, Jalan Damai 6, Desa Seri Iskandar, <div class="place">Seri Iskandar, Perak</div></span>
              </li>
              <li class="flex">
                <span>Zip code: </span>
                <span>32610</span>
              </li>
              <li class="flex">
                <span>Phone: </span>
                <span>+60139671260</span>
              </li>
            </ul>
          </div>
        </div> 
      </div>
      <div className="right">
      <div className="imgContainer">
          <img src="assets/adam.png" alt="" />
        </div>
        <a href="#skills">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
