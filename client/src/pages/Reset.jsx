import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterResetAndLoginPage";
import { FormRow, Logo, SubmitBtn } from "../components";

function Login() {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Zresetuj hasło</h4>
        <p>Proszę podać adres e-mail użyty podczas rejestracji. Otrzymasz wiadomość z dalszymi instrukcjami.</p>
        <FormRow type='email' name='email' />
        <SubmitBtn />
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
