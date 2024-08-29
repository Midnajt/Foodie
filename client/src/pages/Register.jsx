import { Link } from "react-router-dom";
import { FormRow, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";

function Register() {
  return (
    <Wrapper>
      <form className='form'>
        <h4>Register</h4>
        <FormRow type='text' name='name' />
        <FormRow type='text' name='lastName' labelText='last name' defaultValue='smith' />
        <FormRow type='text' name='location' />
        <FormRow type='email' name='email' />
        <FormRow type='password' name='password' />
        <SubmitBtn />
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}
export default Register;
