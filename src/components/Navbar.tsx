import { useBeautyBalls } from "../context/BeautyBallsContext";

const Navbar = () => {
  const { openMenu } = useBeautyBalls();
  return (
    <nav className="c-nav-cluse container">
      <div className="c-nav-cluse-wrap">
        <div className="c-nav-cluse-links">
          <a href="https://bipa.hr/">
            <img src="/images/tvoja_bipa_logo.jpg" alt="Bipa" />
          </a>
          <img
            src="/images/loreal-paris-logo.png"
            alt="Loreal"
            className="c-nav-cluse-links-loreal"
          />
        </div>
        <div className="js-menu-btn c-menu-btn" onClick={openMenu}></div>
      </div>
    </nav>
  );
};

export default Navbar;
