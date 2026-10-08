import React from 'react';
import { useState } from 'react';

const UseState2 = () => {

    const [emp, setEmp] = useState({
        name: "jone",
        age: 25,
        salary: 50000,
        address: "pune"
    })

    function undateSalary() {
        setEmp(data => {
            return {
                ...data,
                name: "yash",
                age: 21,
                salary: 60000,
                address: "mumbai"
            }
        })
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-96 bg-white shadow-lg rounded-xl p-6">

                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Employee Details
                </h2>

                <h2 className="text-lg text-gray-700 mb-2">
                    <span className="font-semibold">Name:</span> {emp.name}
                </h2>

                <h2 className="text-lg text-gray-700 mb-2">
                    <span className="font-semibold">Age:</span> {emp.age}
                </h2>

                <h2 className="text-lg text-gray-700 mb-2">
                    <span className="font-semibold">Salary:</span> ₹{emp.salary}
                </h2>

                <h2 className="text-lg text-gray-700 mb-5">
                    <span className="font-semibold">Address:</span> {emp.address}
                </h2>

                <button
                    onClick={undateSalary}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                    Change employee details
                </button>

            </div>
        </div>
    );
}

export default UseState2;
