import { useBeautyBalls } from "../context/BeautyBallsContext";
import { Link } from 'react-router-dom'

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
            src="/images/tvoja_bipa_logo.jpg"
            alt="Bipa"
          />
        </a>
        <div className="js-menu-btn-close c-menu-close-btn" onClick={closeMenu}>
          
        </div>
        <div className="c-menu-content">
          <div>
            <h6>MENU</h6>
            <Link className="c-menu-link" to={"/"} onClick={closeMenu}>
              Početna stranica
            </Link>
            <Link className="c-menu-link" to={"/nagrade"} onClick={closeMenu}>
            Nagrade
            </Link>           
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
