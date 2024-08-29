import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, SubmitBtn } from "../components";

function Login() {
  return (
    <Wrapper>
      <form className='form'>
        <h4>Login</h4>
        <FormRow type='email' name='email' />
        <FormRow type='password' name='password' />
        <SubmitBtn />
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'>
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}
export default Login;
