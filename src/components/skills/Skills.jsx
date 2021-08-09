import "./Skills.scss";

export default function Skills() {
  const data = [
    {
      id: 1,
      name: "Hardskills",
      img:
        "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?cs=srgb&dl=pexels-pixabay-373543.jpg&fm=jpg",
      icon: "assets/development.png",
      desc:
        "Data Analysis",
      desc1:
        "Web Development",
      desc2:
        "Reforcement Learning",
    },
    {
      id: 2,
      name: "Softskills",
      img:
        "https://images.pexels.com/photos/4861362/pexels-photo-4861362.jpeg?cs=srgb&dl=pexels-cottonbro-4861362.jpg&fm=jpg",
      icon: "assets/communicate.png",
      desc:
        "Communication",
      desc1:
        "Teamwork",
      desc2:
        "Self-learning",
      featured: true,
    },
    {
      id: 3,
      name: "Programming Language",
      img:
        "https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?cs=srgb&dl=pexels-hitesh-choudhary-879109.jpg&fm=jpg",
      icon: "assets/programming.png",
      desc:
        "Python",
      desc1:
        "C#",
      desc2:
        "C",
      desc3:
        "SQL",
      desc4:
        "HTML",
      desc5:
        "CSS",
      desc6:
        "Javascript",
    },
  ];
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <h3>{d.name}</h3>
            </div>
            <div className="center">
              {d.desc}<br/>
              {d.desc1}<br/>
              {d.desc2}<br/>
              {d.desc3}<br/>
              {d.desc4}<br/>
              {d.desc5}<br/>
              {d.desc6}
            </div>
            <div className="bottom">
            <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
              
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
