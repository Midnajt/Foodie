import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterResetAndLoginPage";
import { FormRow, Logo, SubmitBtn } from "../components";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const loginDemoUser = () => {
    toast.success("Wypróbuj aplikację klik!");
  };

  const submitHandler = () => {
    navigate("/dashboard");
  };

  return (
    <Wrapper>
      <form className='form' onSubmit={submitHandler}>
        <Logo />
        <h4>Login</h4>
        <FormRow type='email' name='email' defaultValue='test@gmail.com' />
        <FormRow type='password' name='hasło' defaultValue='secretPassword123' />
        <SubmitBtn />
        <button type='button' className='btn btn-block' onClick={loginDemoUser}>
          Wypróbuj aplikację
        </button>
        <p>
          Nie posiadasz konta?
          <Link to='/register' className='member-btn'>
            Rejestracja
          </Link>
        </p>
        <Link to='/reset' className='resetPassword-btn'>
          Zresetuj hasło
        </Link>
      </form>
    </Wrapper>
  );
}
export default Login;
