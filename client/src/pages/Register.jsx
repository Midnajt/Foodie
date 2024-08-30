import { Link } from "react-router-dom";
import { FormRow, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/RegisterResetAndLoginPage";

function Register() {
  return (
    <Wrapper>
      <form className='form'>
        <h4>Rejestracja</h4>
        <FormRow type='text' name='imię' />
        <FormRow type='text' name='nazwisko' labelText='last name' defaultValue='smith' />
        <FormRow type='email' name='email' />
        <FormRow type='password' name='hasło' />
        <SubmitBtn />
        <p>
          Posiadasz już konto?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}
export default Register;
