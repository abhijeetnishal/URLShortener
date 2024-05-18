"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const LoginPage = () => {
    const [formValues, setFormValues] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({ email: "", password: "" });

    const validateForm = () => {
        let tempErrors = { email: "", password: "" };
        let formIsValid = true;

        if (!formValues.email) {
            formIsValid = false;
            tempErrors.email = "Please enter your email address.";
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            formIsValid = false;
            tempErrors.email = "Email address is invalid.";
        }

        if (!formValues.password) {
            formIsValid = false;
            tempErrors.password = "Please enter your password.";
        } else if (formValues.password.length < 6) {
            formIsValid = false;
            tempErrors.password = "Password should have at least 6 characters.";
        }

        setErrors(tempErrors);
        return formIsValid;
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validateForm()) {
            console.log(formValues);
        }
    }

    return (
        <>
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 max-w">
                        Or
                        <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                          login
                        </Link>
                    </p>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={handleSubmit} method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input type="email" name="email" value={formValues.email} onChange={handleChange} />
                                    {errors.email && <div>{errors.email}</div>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input type="password" name="password" value={formValues.password} onChange={handleChange} />
                                    {errors.password && <div>{errors.password}</div>}
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <Link href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Sign in
                                </button>
                            </div>
                        </form>
                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-gray-100 text-gray-500">
                                        Or continue with
                                    </span>
                                </div>
                            </div>
                            <div className="mt-6 grid grid-cols-3 gap-3">
    <div>
      <Link href="#">
        <a className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <Image src="https://www.svgrepo.com/show/512120/facebook-176.svg" alt="Facebook" width={20} height={20} />
        </a>
      </Link>
    </div>
    <div>
      <Link href="#">
        <a className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <Image src="https://www.svgrepo.com/show/513008/twitter-154.svg" alt="Twitter" width={20} height={20} />
        </a>
      </Link>
    </div>
    <div>
      <Link href="#">
        <a className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <Image src="https://www.svgrepo.com/show/506498/google.svg" alt="Google" width={24} height={24} />
        </a>
      </Link>
    </div>
  </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;