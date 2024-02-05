import { NavLink } from "react-router-dom";

export const Register = () => {
  return (
    <div className="w-max mx-auto flex flex-col gap-10 bg-slate-900 p-5 rounded-3xl opaсity-10">
      <nav className="m-5 gap-10 flex justify-center">
        <span className="block opacity-10">регістрація</span>

        <NavLink to="/auth/login" className="block px-8">
          логін
        </NavLink>
      </nav>
      <form className="gap-10 flex flex-col align-center">
        <label className="text-wite">
          ім'я тa різвище
          <input type="text" className="ml-5 text-black" />
        </label>
        <label className="">
          емеіл
          <input type="email" className="ml-5 text-black" />
        </label>
        <label className="">
          пароль
          <input type="password" className="ml-5 text-black" />
        </label>

        <button type="submit" className="px-1 py-3 bg-blue-950 rounded-3xl">
          відправити
        </button>
      </form>
    </div>
  );
};
