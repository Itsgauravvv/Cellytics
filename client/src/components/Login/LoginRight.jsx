import React from "react";

const LoginRight = () => {
  return (
    <div className="bg-white/12 backdrop-blur-md shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
      <h2 className="text-3xl font-semibold text-white mb-4 outfit">
        Access Your Dashboard
      </h2>
      <p className="text-white mb-10">
        Access Cellytics to explore intelligent insights, dynamic charts, and easy report downloads — all powered by your spreadsheets
      </p>
      <img
        src="./regright1.png"
        alt="Excel Analysis Preview"
        className="rounded-xl shadow-md"
      />
    </div>
  );
};

export default LoginRight;
