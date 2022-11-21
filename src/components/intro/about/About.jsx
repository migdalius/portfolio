import "../about/about.css";

const About = () => {
  return (
    <section className="pl">
      <div className="pl-texts">
        <h2 className="pl-title">Projekty</h2>
        <p className="pl-desc">
          Szybkie wprowadzenie w formie filmu dla wszystkich projektów, które
          ukończyłem.
        </p>
        <div className="mov-container">
          <div className="movie-bg">
            <iframe
              className="move-iframe"
              height="315"
              src="https://www.youtube.com/embed/4WXH4oqnB2g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className="mov-desc">
              <h3 className="move-title">Szybkauprawa</h3>
              <hr className="move-hr" />
              <p>
                Stworzenie strony przechowującej instrukcje online dla zestawów
                uprawowych, strona wykonana przy pomocy reacta i oparta o
                backend po stronie firebase.
              </p>
            </div>
          </div>
        </div>

        <hr class="hr-primary" />
      </div>
    </section>
  );
};

export default About;
