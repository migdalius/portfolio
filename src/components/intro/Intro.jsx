import "../intro/intro.css";
import Me from "../../img/me.png";

const stacks = [
  {
    id: 1,
    name: "HTML5",
    img: "../img/html.png",
  },
  {
    id: 2,
    name: "CSS3",
    img: "../img/css.png",
  },
  {
    id: 3,
    name: "JavaScript",
    img: "../img/js.png",
  },
  {
    id: 4,
    name: "React",
    img: "../img/react.png",
  },
  {
    id: 5,
    name: "GitHub",
    img: "../img/git.png",
  },
];

const additionals = [
  {
    id: 1,
    name: "Adobe Ilustrator",
    img: "../img/adobe_ilustrator.png",
  },
  {
    id: 2,
    name: "Gimp",
    img: "../img/gimp.png",
  },
];
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h1 className="i-intro">Cześć, jestem Wojtek </h1>
          <div className="intro-cv">
            <a href="../img/cv_wojciech_nowak.pdf" target="_blank">
              <button className="btn-primary">Pobierz CV</button>
            </a>
          </div>
          <div className="i-desc">O mnie</div>
          <p>
            Jestem front-end developerem. Jako pierwszą aplikację komercyjną
            stworzyłem responsywną stronę pozwalającą na łatwą interakcję z
            instrukcjami do uprawy. Aplikacja posiada wbudowany system CMS
            wykorzystujący CRUD. Obecnie pracuje nad sklepem internetowym
            opartym o react i node.js(express.js)
          </p>
          <div>
            <div className="intro-second-title intro-hr">
              W swojej pracy używam
            </div>
            <div className="stack-flex">
              {stacks.map((stack) => (
                <div className="stack-cube-container">
                  <div>{stack.name}</div>
                  <div className="stack-details-container">
                    <img
                      src={stack.img}
                      alt={stack.name}
                      className="stack-img"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="intro-second-title intro-hr">
            Dodatkowe umiejętności
          </div>
          <div className="stack-flex">
            {additionals.map((add) => (
              <div className="stack-cube-container">
                <div>{add.name}</div>
                <div className="stack-details-container">
                  <img src={add.img} alt={add.name} className="stack-img" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
