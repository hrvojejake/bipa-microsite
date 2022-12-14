import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Prijava = () => {
  const [poruka, setPoruka] = useState({});

  const formik = useFormik({
    initialValues: {
      brojRacuna: "",
      ime: "",
      adresa: "",
      grad: "",
      dob: "",
      email: ""
    },

    validationSchema: Yup.object({
      brojRacuna: Yup.string().required("Obavezno polje"),
      ime: Yup.string().required("Obavezno polje"),
      adresa: Yup.string().required("Obavezno polje"),
      grad: Yup.string().required("Obavezno polje"),
      dob: Yup.string().required("Obavezno polje"),
      email: Yup.string()
        .email("Provjerite e-mail adresu")
        .required("Obavezno polje")
    }),

    onSubmit: (values) => {
      setPoruka(values);
      console.table(values);
    }
  });

  return (
    <div className="container">
      <p className="l-beautyball-prijava-title">
        Još jedan korak dijeli te od sudjelovanja.
      </p>

      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <div className="">
            <input
              type="text"
              placeholder="broj računa (npr. 1234/123/1)*"
              id="brojRacuna"
              name="brojRacuna"
              className="form-control"
              required={true}
              value={formik.values.brojRacuna}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.brojRacuna && formik.errors.brojRacuna && (
            <span className="help-block">{formik.errors.brojRacuna}</span>
          )}
        </div>

        <div className="form-group">
          <div>
            <input
              type="text"
              placeholder="ime i prezime*"
              id="ime"
              name="ime"
              className="form-control"
              required={true}
              value={formik.values.ime}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.ime && formik.errors.ime && (
            <span className="help-block">{formik.errors.ime}</span>
          )}
        </div>
        <div className="form-group ">
          <div className="">
            <input
              type="text"
              placeholder="adresa (npr. Ulica 5)*"
              id="adresa"
              name="adresa"
              className="form-control"
              required={true}
              value={formik.values.adresa}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.adresa && formik.errors.adresa && (
            <span className="help-block">{formik.errors.adresa}</span>
          )}
        </div>
        <div className="form-group ">
          <div className="">
            <input
              type="text"
              placeholder="grad (npr. Zagreb)*"
              id="grad"
              name="grad"
              className="form-control"
              required={true}
              value={formik.values.grad}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.grad && formik.errors.grad && (
            <span className="help-block">{formik.errors.grad}</span>
          )}
        </div>
        <div className="form-group ">
          <div className="">
            <input
              type="text"
              placeholder="datum rođenja (dd.mm.gggg.)*"
              id="dob"
              name="dob"
              className="form-control"
              required={true}
              value={formik.values.dob}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.dob && formik.errors.dob && (
            <span className="help-block">{formik.errors.dob}</span>
          )}
        </div>
        <div className="form-group ">
          <div className="">
            <input
              type="email"
              placeholder="e-mail adresa*"
              id="email"
              name="email"
              className="form-control"
              required={true}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.email && formik.errors.email && (
            <span className="help-block">{formik.errors.email}</span>
          )}
        </div>

        <div className="form-group row">
          <div className="col-12">
            {/*<div id="msgIncomplete" className="alert alert-danger mobius-message" role="alert">Molimo Vas da unesete sva polja prije slanja</div>
            <div id="code02" className="alert alert-danger mobius-message" role="alert">Došlo je do pogreške: web servis za spremanje prijava nije aktivan</div>
            <div id="code03" className="alert alert-danger mobius-message" role="alert">Došlo je do pogreške: Vaš broj računa je već iskorišten</div>
            <div id="code04" className="alert alert-danger mobius-message" role="alert">Došlo je do pogreške: unesene su pogrešne vrijednosti</div>
            <div id="code05" className="alert alert-danger mobius-message" role="alert">Došlo je do pogreške: unijeli ste pogrešan format računa</div>
            
            <div id="msgRecap" className="alert alert-danger mobius-message" role="alert">Please fill in all required fields before sending.</div>
            <div id="msgError" className="alert alert-danger mobius-message" role="alert">Došlo je do greške, molimo pokušajte ponovno</div>
            <div id="msgSending" className="alert alert-warning mobius-message" role="alert">Prijava se šalje</div>
            <div id="msgNewsletterSuccess" className="alert alert-success mobius-message">Success! If you are not registered yet, you will get an e-mail with which you can finalize your registration.</div>
            <div id="msgNewsletterFailed" className="alert alert-danger mobius-message">Došlo je do greške</div>     */}
            {Object.keys(poruka).length !== 0 && (
              <div
                id="msgOk"
                className="alert alert-success mobius-message"
                role="alert"
              >
                <p>Hvala na slanju prijave</p>
                <p>Prijava je primljena.</p>
              </div>
            )}
          </div>

          <div className="col-12">
            <input id="sendFormWithApi" type="submit" value="Pošalji prijavu" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Prijava;
