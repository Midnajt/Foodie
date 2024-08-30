import { Link } from "react-router-dom";
import { FormRow, Logo, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/RegisterResetAndLoginPage";

function Register() {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Rejestracja</h4>
        <FormRow type='text' name='imię' />
        <FormRow type='text' name='nazwisko' labelText='last name' />
        <FormRow type='email1' name='email' />
        <FormRow type='email2' name='drugi email' />
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
