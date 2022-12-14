import { Link } from "react-router-dom";
import { useBeautyBalls } from "../context/BeautyBallsContext";

const Home = () => {
  const { setJumpToSlide } = useBeautyBalls();
  return (
    <div className="l-page-beautyball-home">
      <div className="container">
        <div className="l-beautyball-home">
          <div className="l-beautyball-start">
            <img alt="Beauty ball" src="/images/beauty-ball-logo.png" />
            <p>
              Kupuj{" "}
              <strong>
                <span className="pink">L´ORÉAL PARIS</span>
              </strong>{" "}
              proizvode, uživaj uz beauty poklone i osvajaj vrhunske nagrade.
            </p>
          </div>

          <div className="l-beautyball-balls">
            <div className="c-beautyball-ball-1">
              <Link to={"/nagrade#nagrada3"} onClick={() => setJumpToSlide(1)}>
                <img
                  alt="Philips Lumea"
                  src="/images/philips-lumea-home.new.png"
                />
              </Link>
            </div>

            <div className="c-beautyball-ball-2">
              <Link to={"/nagrade#nagrada1"} onClick={() => setJumpToSlide(2)}>
                <img
                  alt="Xiaomi Watch"
                  src="/images/xiaomi-watch-home-new.png"
                />
              </Link>
            </div>

            <div className="c-beautyball-ball-3">
              <Link to={"/nagrade#nagrada2"} onClick={() => setJumpToSlide(3)}>
                <img
                  alt="Dyson Airwrap complete nickel-fuchsia"
                  src="/images/dyson-airwrap-home-new.png"
                />
              </Link>
            </div>

            <div className="c-beautyball-ball-4">
              <img alt="Beauty ball" src="/images/ruz-bubble-home.png" />
            </div>

            <div className="c-beautyball-ball-5">
              <Link to={"/nagrade"}>
                <img
                  alt="Klikni i otkrij više"
                  src="/images/klikni-i-otkrij-vise.png"
                />
              </Link>
            </div>
          </div>

          <div className="l-beautyball-end">
            <div className="l-beautyball-end-1">
              <h3>Dobra kupnja zaslužuje sjajan poklon.</h3>

              <p>
                Sada imaš dobar razlog za počastiti se kupnjom, jer BIPA časti
                poklonima i sjajnim nagradama. Osvoji pametni{" "}
                <strong>Xiaomi sat</strong>, nadogradi svoju beauty rutinu uz{" "}
                <strong>Philips Lumea</strong> uređaj za depilaciju, oblikuj
                savršenu frizuru uz <strong>Dyson Airwrap</strong> uređaj za
                oblikovanje kose ili si uljepšaj dan novim proizvodom iz{" "}
                <strong>L’oréal</strong> asortimana.
              </p>

              <p>
                Zvuči lijepo, zar ne? Sad požuri u BIPU po svoju beauty priliku.
                Sretno!&nbsp;
              </p>
            </div>

            <div className="l-beautyball-end-2">
              <h3>Kako možeš sudjelovati?</h3>

              <ul>
                <li>
                  <strong>Od 1.10. do 31.10.</strong> uživaj uz beauty poklone
                  uz svaku kupnju <strong>L&acute;ORÉAL PARIS</strong> proizvoda
                  u iznosu od <strong>150 HRK</strong> (
                  <strong>19,91 EUR</strong>) ili više.&nbsp;
                </li>
                <li>
                  Prijavi se za nagradnu igru putem web obrasca na{" "}
                  <a
                    href="http://www.bipa.hr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.bipa.hr
                  </a>
                  &nbsp;ili pošalji SMS poruku na broj 60054 (2,40 kn / 0,32
                  &euro;* SMS, PDV uključen) sadržaja: LOREAL, broj računa, ime,
                  prezime i adresa (ulica, mjesto i poštanski broj).
                </li>
                <li>
                  Igraj i osvoji jednu od glavnih nagrada:&nbsp;
                  <strong>10 Philips Lumea</strong>,{" "}
                  <strong>5 Dyson Airwrap </strong>uređaja,
                  <strong> 5 Xiaomi satova</strong>.
                </li>
              </ul>
            </div>

            <div className="l-beautyball-end-3">
              <Link className="l-beautyball-end-3-link" to={"/prijavi-se"}>
                Prijavi se
              </Link>

              <p className="l-beautyball-end-3-text">
                Cijene izražene u eurima izračunate su prema tečaju 1 EUR =
                7,53450 HRK. Promocija traje do 1.10.2022. do 31.10.2022. ili do
                isteka zaliha beauty proizvoda. Prikazi beauty proizvoda su
                simbolični. Više informacija potraži na{" "}
                <a
                  href="http://www.bipa.hr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.bipa.hr
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
