
import React, { useEffect, useRef, useState } from 'react';

const MyForm = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [salary, setSalary] = useState("");

    const ip = useRef();

    useEffect(() => {
    ip.current?.focus();
  }, []);


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 p-5">
            <div className="w-full max-w-md rounded-2xl border border-gray-700 bg-gray-900 p-8 shadow-2xl">

                <h2 className="mb-6 text-center text-3xl font-bold text-white">
                    My Form
                </h2>

                <div className="mb-5">
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                        Name
                    </label>
                    <input
                        type="text"
                        ref={ip}
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white outline-none focus:border-blue-500"
                    />
                    <h3 className="mt-2 text-blue-400">Name: {name}</h3>
                </div>

                <div className="mb-5">
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                        Age
                    </label>
                    <input
                        type="number"
                        placeholder="Enter age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white outline-none focus:border-blue-500"
                    />
                    <h3 className="mt-2 text-blue-400">Age: {age}</h3>
                </div>

                <div className="mb-5">
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                        Salary
                    </label>
                    <input
                        type="number"
                        placeholder="Enter salary"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white outline-none focus:border-blue-500"
                    />
                    <h3 className="mt-2 text-blue-400">Salary: ₹{salary}</h3>
                </div>

                <button
                    type="button"
                    onClick={() => {
                        setName("");
                        setAge("");
                        setSalary("");
                    }}
                    className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                    Clear Form
                </button>

            </div>
        </div>
    );
};

export default MyForm;
