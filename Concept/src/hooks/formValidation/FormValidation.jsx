
import React, { useEffect, useState, useRef } from "react";

function FormValidation() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        password: ""
    });


    const ip = useRef();
    useEffect(() => {
        ip.current?.focus();

    }, []);


    const [errors, setErrors] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
        console.log(setFormData)
    }

    const validateForm = () => {
        let newErrors = {};

        if (formData.name.trim() === "") {
            newErrors.name = "Name is mandatory";
        }

        if (formData.age === "") {
            newErrors.age = "Age is mandatory";
        } else if (Number(formData.age) < 18) {
            newErrors.age = "Age should be at least 18";
        }

        if (formData.email === "") {
            newErrors.email = "Email is mandatory";
        } else if (!formData.email.endsWith("@gmail.com")) {
            newErrors.email = 'Email should end with "@gmail.com"';
        }

        if (formData.password === "") {
            newErrors.password = "Password is mandatory";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            alert("Signup successful!");

            setFormData({
                name: "",
                age: "",
                email: "",
                password: ""
            });

            setErrors({});
        }
    };



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Signup Form
                </h2>

                <form onSubmit={handleSubmit} className="space-y-2">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        ref={ip}
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-sm text-red-500">{errors.name}</p>

                    <input
                        type="number"
                        name="age"
                        placeholder="Enter age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-sm text-red-500">{errors.age}</p>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-sm text-red-500">{errors.email}</p>

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-sm text-red-500">{errors.password}</p>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Sign Up
                    </button>

                    
                    
                </form>
            </div>
        </div>
    );


}

export default FormValidation;
