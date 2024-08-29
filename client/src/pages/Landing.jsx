import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";

function Landing() {
  return (
    <Wrapper>
      <nav>nawigacja</nav>
      <div className='container page'>
        landing page
        <div>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login / Demo User
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default Landing;
