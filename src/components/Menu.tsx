import { useBeautyBalls } from "../context/BeautyBallsContext";

type MenuProps = {
  isOpen: boolean;
};

const Menu = ({ isOpen }: MenuProps) => {
  const { closeMenu } = useBeautyBalls();
  return (
    <div className={`${isOpen ? "opened-menu" : "closed-menu"} l-menu js-menu`}>
      <div className="container">
        <a href="/" className="c-menu-content-logo">
          <img
            src="/Portals/1-System/Skins/Remington/img/backgrounds/tvoja_bipa_logo.jpg"
            alt="Bipa"
          />
        </a>
        <div className="js-menu-btn-close c-menu-close-btn" onClick={closeMenu}>
          zatvori
        </div>
        <div className="c-menu-content">
          <div>
            <h6>MENU</h6>
            <a className="c-menu-link" href="/beauty-boom/">
              Početna stranica
            </a>
            <a className="c-menu-link" href="/beauty-boom/nagrade">
              Nagrade
            </a>
            <a className="c-menu-link" href="/beauty-boom/prijavi-se">
              Prijavi se
            </a>
          </div>
          <div>
            <p>Zvuči lijepo, zar ne?</p>
            <p>Sad požuri u BIPU i sretno!</p>
          </div>
          <span className="c-menu-footer">
            © 2019. BIPA d.o.o. Vodovodna 20/A, 10000Zagreb
          </span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
