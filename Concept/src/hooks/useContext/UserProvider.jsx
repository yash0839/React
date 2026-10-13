import React, { createContext, useContext } from "react";

const UserContext = createContext();

export default function UserProvider()  {
    const userName = "hihihihuhuhu";
    const age = 21;

    return (
        <UserContext.Provider value={{userName,age}}>
            <div className="min-h-screen flex items-center justify-center bg-black p-5">

                <div className="w-full max-w-lg rounded-2xl border p-8 text-center shadow-2xl backdrop-blur-lg">

                    <h3 className="mb-6 text-2xl font-bold text-white">
                        Hello {userName}
                    </h3>

                    <ChildComp />

                </div>
            </div>
        </UserContext.Provider>
    );
};

function ChildComp() {
    return (
        <div className="rounded-xl border border-blue-400/30 bg-blue-500/10 p-5">
            <p className="mb-4 text-sm text-blue-200">
                Data passed through Context API
            </p>

            <AnotherComp />
        </div>
    );
}

function AnotherComp() {
    const user = useContext(UserContext);

    return (
        <div className="rounded-xl bg-white p-5 shadow-lg transition duration-300 hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-gray-800">
                Heyyyyy {user.userName}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
                User data received using useContext()
            </p>
            <ThirdComp />
        </div>
    );
}

function ThirdComp() {
  const { userName, age } = useContext(UserContext);

  return (
    <div className="mt-4 rounded-lg bg-gray-100 p-4">
      <h2 className="font-bold text-gray-800">
        Name: {userName}
      </h2>
      <p className="mt-2 text-gray-600">
        Age: {age}
      </p>
    </div>
  );
}