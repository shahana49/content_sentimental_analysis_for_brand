import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <main className="h-screen   overflow-hidden grid grid-cols-2">
      <div className="h-full bg-[#F8F9FA] flex items-center justify-center">
        <div className=" w-full max-w-xl">
          <img src="/images/login.svg" alt="" />
        </div>
      </div>
      <div className="px-10 flex items-center justify-center">
        <div className="flex flex-col items-center w-full">
          <img src="/images/logo.svg" alt="" className="w-[180px]" />
          <h2 className="text-2xl font-semibold mt-5">
            Login into your account
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full mt-14 gap-y-5"
          >
            <div className="flex flex-col gap-y-1">
              <label className="text-[#555555]">Email Address</label>
              <div className="relative">
                <input
                  type="text"
                  className="rounded-lg bg-[#F1F3F6] p-3 w-full text-sm pl-5 outline-none pr-12"
                  placeholder="alex@email.com"
                />
                <div className="w-[45px] absolute h-[45px] rounded-lg flex items-center justify-center right-0 top-0 bg-[#0057A4]">
                  <img src="/icons/mail.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-[#555555]">Password</label>
              <div className="relative">
                <input
                  type="password"
                  className="rounded-lg bg-[#F1F3F6] p-3 w-full text-sm pl-5 outline-none pr-12"
                  placeholder="Enter your password"
                />
                <div className="w-[45px] absolute h-[45px] rounded-lg flex items-center justify-center right-0 top-0 bg-[#0057A4]">
                  <img src="/icons/lock.svg" alt="" />
                </div>
              </div>
            </div>
            <button className="text-white  bg-[#0057A4] rounded-lg py-3 text-sm font-medium mt-5">
              Login Now
            </button>
            <div className="flex items-center">
              <hr className="flex-1 border border-[#C2C2C2]/70" />
              <span className="text-[#C2C2C2] text-xs px-8">OR</span>
              <hr className="flex-1 border border-[#C2C2C2]/70" />
            </div>
            <Link
              to={"/register"}
              className="border-2 border-[#0057A4]/65 flex items-center
             justify-center text-[#0057A4] rounded-lg py-3 text-sm font-medium  "
            >
              Sign Up Now
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
