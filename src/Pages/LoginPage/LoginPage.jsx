import React, { useState } from "react";
import LoginForm from "../../Components/Login";
import SignUpForm from "../../Components/SignUpForm";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-sky-100 flex flex-col items-center justify-center min-h-screen md:py-2">
      <main className="flex items-center w-full px-2 md:px-20">
        <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
          <p className="text-6xl text-blue-500 font-bold">Đức Minh</p>
          <p className="font-medium text-lg leading-1 text-pink-400">
            Muốn đặt món, khám phá thêm những thứ thú vị? Đăng nhập ngay.
          </p>
        </div>
        {/* Render LoginForm or SignUpForm based on isLogin state */}
        {isLogin ? (
          <LoginForm setIsLogin={setIsLogin} />
        ) : (
          <SignUpForm setIsLogin={setIsLogin} />
        )}
      </main>
    </div>
  );
};

export default LoginPage;
