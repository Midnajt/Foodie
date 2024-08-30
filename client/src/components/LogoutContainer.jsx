import { useState } from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { useDashboardContext } from "../pages/DashboardLayout";
import { toast } from "react-toastify";

function LogoutContainer() {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();

  const profieClickhandler = () => {
    toast.success("profieClickhandler");
  };

  return (
    <Wrapper>
      <button
        type='button'
        className='btn logout-btn'
        onClick={() => {
          setShowLogout(!showLogout);
        }}
      >
        {user.avatar ? <img src={user.avatar} alt='avatar' className='img' /> : <FaUserCircle />}

        {/* {user?.name} */}
        {"Marcin"}
        <FaCaretDown />
      </button>
      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <button type='button' className='dropdown-btn' onClick={profieClickhandler}>
          profil
        </button>
        <button type='button' className='dropdown-btn' onClick={logoutUser}>
          wyloguj
        </button>
      </div>
    </Wrapper>
  );
}
export default LogoutContainer;
