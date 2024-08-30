import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/eatingTogether.svg";
// import main from "../assets/images/dish.svg";
import { Logo } from "../components/index";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Wspólna <span>organizacja</span> posiłków
          </h1>
          <p>Ta aplikacja pomoże Ci zarządzać planem żywieniowym dla dwojga. Dodaj posiłki do menu, wybierz je w planie tygodnia i skorzystaj z automatycznie wygenerowanej listy zakupów.</p>
          <Link to='/register' className='btn register-link'>
            Rejestracja
          </Link>
          <Link to='/login' className='btn'>
            Login / Demo
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
}

export default Landing;
