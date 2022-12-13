import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="container">
      <div className="l-error-page">
        <img src="/images/error-image.png" alt="Greška pri traženju stranice" />
        <div className="l-error-content">
          <h3 className="error-title">
            Greška: <span>404</span> - Članak nije pronađen
          </h3>
          <div className="c-error-content">
            <strong>Stranica nije nađena zbog:</strong>
            <ul>
              <li>zastarjelog bookmarka/favorita</li>
              <li>
                pretraživači imaju zastarjele podatke o stranici koja više ne
                postoji
              </li>
              <li>krivo upisane adrese</li>
              <li>nemate pristup na ovu stranicu</li>
              <li>traženi resurs nije nađen</li>
              <li>greška na serveru.</li>
            </ul>

            <Link to={"/"}>
              <span>← Početna</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
