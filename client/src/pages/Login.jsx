import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterResetAndLoginPage";
import { FormRow, SubmitBtn } from "../components";
import { toast } from "react-toastify";

function Login() {
  const loginDemoUser = () => {
    toast.success("Wypróbuj aplikację klik");
  };
  return (
    <Wrapper>
      <form className='form'>
        <h4>Login</h4>
        <FormRow type='email' name='email' />
        <FormRow type='password' name='password' />
        <SubmitBtn />
        <button type='buttpm' className='btn btn-block' onClick={loginDemoUser}>
          Wypróbuj aplikację
        </button>
        <p>
          Nie posiadasz konta?
          <Link to='/register' className='member-btn'>
            Rejestracja
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}
export default Login;
