
import React from "react";

const NewComp = () => {
  const username = "dinesh bhai";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-blue-950 p-5">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-2xl">
        <h3 className="mb-6 text-2xl font-bold text-gray-800">
          Hello, I am{" "}
          <span className="text-red-500">{username}</span>
        </h3>

        <ChildComp name={username} />
      </div>
    </div>
  );
};

function ChildComp({ name }) {
  return (
    <div className="rounded-xl border-l-4 border-blue-500 bg-slate-100 p-5">
      <p className="mb-4 text-sm text-gray-500">
        Passing data to another component...
      </p>

      <AnotherComp value={name} />
    </div>
  );
}

function AnotherComp({ value }) {
  return (
    <div className="rounded-xl bg-blue-100 p-5 transition duration-300 hover:-translate-y-1">
      <h4 className="text-lg font-semibold leading-relaxed text-slate-800">
        Hello guys, my name is{" "}
        <span className="font-bold text-red-500">{value}</span>
      </h4>
    </div>
  );
}

export default NewComp;
