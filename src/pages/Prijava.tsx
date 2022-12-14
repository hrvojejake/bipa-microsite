import { useFormik } from 'formik'

type FormikConfig = { initialValues: 
  {brojRacuna: string; 
    ime: string; 
    adresa: string; 
    grad: string; 
    dob: string; 
    email: string;} }

const Prijava = () => {

  const formik = useFormik<FormikConfig>({
    initialValues: {
      brojRacuna: '',
      ime: '',
      adresa: '',
      grad: '',
      dob: '',
      email: ''
    }
  })

  return (
    <div className="container">
      <p className="l-beautyball-prijava-title">
        Još jedan korak dijeli te od sudjelovanja.
      </p>

      <form>
        <div className="form-group has-feedback has-error">
          <div className="">
            <input
              type="text"
              placeholder="broj računa (npr. 1234/123/1)*"
              id="brojRacuna"
              className="form-control"
              required={true}
              data-smk-msg="Obavezno polje"
              value={brojRacuna}
              onChange={(e) => setBrojRacuna(e.target.value)}
            />
          </div>
          <span className="help-block smk-error-msg">Obavezno polje</span>
        </div>

        <div className="form-group ">
          <div className="">
            <input
              type="text"
              placeholder="ime i prezime*"
              id="ime"
              className="form-control"
              required={true}
              data-smk-msg="Obavezno polje"
              value={ime}
              onChange={(e) => setIme(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group ">
          <div className="">
            <input
              type="text"
              placeholder="adresa (npr. Ulica 5)*"
              id="adresa"
              className="form-control"
              required={true}
              data-smk-msg="Obavezno polje"
              value={adresa}
              onChange={(e) => setAdresa(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group ">
          <div className="">
            <input
              type="text"
              placeholder="grad (npr. Zagreb)*"
              id="grad"
              className="form-control"
              required={true}
              data-smk-msg="Obavezno polje"
              value={grad}
              onChange={(e) => setGrad(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group ">
          <div className="">
            <input
              type="text"
              placeholder="datum rođenja (dd.mm.gggg.)*"
              id="dob"
              className="form-control"
              required={true}
              data-smk-msg="Obavezno polje"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group ">
          <div className="">
            <input
              type="email"
              placeholder="e-mail adresa*"
              id="email"
              className="form-control"
              required={true}
              data-smk-msg="Provjerite e-mail adresu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group row">
          {/*
          <div className="col-12">
            <div id="msgIncomplete" className="alert alert-danger mobius-message" role="alert">Molimo Vas da unesete sva polja prije slanja</div>
            <div id="code02" className="alert alert-danger mobius-message" role="alert">Došlo je do pogreške: web servis za spremanje prijava nije aktivan</div>
            <div id="code03" className="alert alert-danger mobius-message" role="alert">Došlo je do pogreške: Vaš broj računa je već iskorišten</div>
            <div id="code04" className="alert alert-danger mobius-message" role="alert">Došlo je do pogreške: unesene su pogrešne vrijednosti</div>
            <div id="code05" className="alert alert-danger mobius-message" role="alert">Došlo je do pogreške: unijeli ste pogrešan format računa</div>
            
            <div id="msgRecap" className="alert alert-danger mobius-message" role="alert">Please fill in all required fields before sending.</div>
            <div id="msgError" className="alert alert-danger mobius-message" role="alert">Došlo je do greške, molimo pokušajte ponovno</div>
            <div id="msgSending" className="alert alert-warning mobius-message" role="alert">Prijava se šalje</div>
            <div id="msgNewsletterSuccess" className="alert alert-success mobius-message">Success! If you are not registered yet, you will get an e-mail with which you can finalize your registration.</div>
            <div id="msgNewsletterFailed" className="alert alert-danger mobius-message">Došlo je do greške</div>
            <div id="msgOk" className="alert alert-success mobius-message" role="alert">
              <p>Hvala na slanju prijave</p>
              <p>Prijava je primljena.</p>
            </div>
          </div>
        */}

          <div className="col-12">
            <button
              id="sendFormWithApi"
              type="button"
              className="btn btn-primary"
            >
              Pošalji prijavu
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Prijava;
