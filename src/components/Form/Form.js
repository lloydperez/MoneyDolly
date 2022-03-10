import { useState } from "react";
import EmailValidation from "../../utils/EmailValidation/EmailValidation";
import { 
  EMAILADDRESS, 
  FIRSTNAME, 
  LASTNAME, 
  PASSWORD 
} from "../../variables/form";
import ErrorIcon from "../../assets/images/icon-error.svg";

const Form = (props) => {
  const { btnLabel, footerLabel } = props;
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);
  console.log('values', values);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleValidation();

    alert("form submited: " + JSON.stringify(values));
  };

  const handleValidation = () => {
    let errorData = {}

    if (!values[FIRSTNAME]) {
      errorData[FIRSTNAME] = "First name cannot be empty";
    }

    if (!values[LASTNAME]) {
      errorData[LASTNAME] = "Last name cannot be empty";
    }

    if (!values[PASSWORD]) {
      errorData[PASSWORD] = "Password cannot be empty";
    }

    if (!values[EMAILADDRESS]) {
      errorData[EMAILADDRESS] = "Email address cannot be empty";
    } else {
      if (!EmailValidation(values.emailAddress)) {
        errorData[EMAILADDRESS] = "Looks like this is not an email";
      }
    }

    setErrors({...errorData});
  };

  console.log('errors', errors);

  return (
    <div className="form-component">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="field-group">
            <input
              placeholder="First Name"
              onChange={handleChange}
              type="text"
              name={FIRSTNAME}
              value={values.firstName ? values.firstName : ""}
            />
            {errors.firstName ? <img className="errorIcon" src={ErrorIcon} /> : ''}
            <div className="error">{errors.firstName}</div>
          </div>
          <div className="field-group">
            <input
              placeholder="Last Name"
              onChange={handleChange}
              type="text"
              name={LASTNAME}
              value={values.lastName ? values.lastName : ""}
            />
            {errors.lastName ? <img className="errorIcon" src={ErrorIcon} /> : ''}
            <div className="error">{errors.lastName}</div>
          </div>
          <div className="field-group">
            <input
              placeholder="Email Address"
              onChange={handleChange}
              type="text"
              name={EMAILADDRESS}
              value={values.emailAddress ? values.emailAddress : ""}
            />
            {errors.emailAddress ? <img className="errorIcon" src={ErrorIcon} /> : ''}
            
            <div className="error">{errors.emailAddress}</div>
          </div>
          <div className="field-group">
            <input
              placeholder="Password"
              onChange={handleChange}
              type="password"
              name={PASSWORD}
              value={values.password ? values.password : ""}
            />
            {errors.password ? <img className="errorIcon" src={ErrorIcon} /> : ''}
            <div className="error">{errors.password}</div>
          </div>
          <input type="submit" value={btnLabel} className="btn btn-primary" />
        </div>
      </form>
      <p className="form-component__footer-label">{footerLabel}</p>
    </div>
  );
};

export default Form;
