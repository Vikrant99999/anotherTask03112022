import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import MetaData from "../../utils/MetaData";
import { clearError, login } from "../../reduxstore/actions/adminAsUserActions";
import { useSelector, useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import GoogleButton from "react-google-button";
import formValidate from "./validation/FormValidation";
import "./form.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passeye, setPasseye] = useState(false);
  const [validErr, setValidErr] = useState({});
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.adminuser
  );
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const { email, password } = inputs;
  const handleSubmit = (e) => {
    e.preventDefault();
    setValidErr(formValidate(inputs));

    const formData = {
      email,
      password,
    };
    dispatch(login(formData));
  };

  const setPassView = () => {
    setPasseye(!passeye);
  };
  
  // login with google response
  const responseSuccessGoogle = (res) => {};

  const responseFailureGoogle = (res) => {};

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (error) {
      dispatch(clearError());
    }
    if (isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, navigate, error, isAuthenticated]);

  return (
    <Fragment>
      <MetaData title={"login"} />
      <div className="kn-login-signup-form-page">
        <div className="form-container">
          <div className="form__header">
            <h2>login or create an account</h2>
          </div>
          <form
            id="login__form"
            className="formClass"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="form__control">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={inputs.email}
                onChange={onChange}
              />
            </div>
            <div className="form__control password">
              <label htmlFor="password">Password</label>
              <input
                type={passeye ? "text" : "password"}
                id="password"
                className="password"
                name="password"
                value={inputs.password}
                onChange={onChange}
              />
              <span onClick={setPassView}>
                {passeye ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </span>
            </div>
            <button className="formSubmitBtn">
              {/* {loading ? <FormLoading /> : <>Login</>} */}
              Login with email
            </button>
          </form>
          <div className="login__options">
            <p>or use one of these options</p>
            <div className="login__options-icon">
              <GoogleLogin
                clientId="393708804409-dst9mdvhanm4rf11am246vjhr13t1540.apps.googleusercontent.com"
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <GoogleButton />
                  </button>
                )}
                buttonText="Login"
                onSuccess={responseSuccessGoogle}
                onFailure={responseFailureGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </div>
          <div className="login-signup__privacy">
            <p>
              By signing in or creating an account, you agree with our
              <Link to="/privacypolicy"> terms & conditions</Link> and
              <Link to="/privacypolicy">Privacy Statement</Link>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
