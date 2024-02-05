import { NavLink } from "react-router-dom";
import men from "../../images/user-desktop3x.png";

export const WelcomePage = () => {
  return (
    <div className="m-auto mt-20 size-max flex flex-col gap-6">
      <img src={men} alt={men} className="w-60 mx-auto" />
      <div className="flex gap-2">
        <p className="mx-auto w-max inline">Вас вітає веб додаток</p>
        <p>"два камушка corporation"</p>
      </div>

      <NavLink to="/auth/login" className="mx-auto">
        login
      </NavLink>
      <NavLink to="/auth/register" className="mx-auto">
        register
      </NavLink>
    </div>
  );
};
