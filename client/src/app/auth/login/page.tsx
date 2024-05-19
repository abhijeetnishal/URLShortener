"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GoogleIcon } from "@/components/icons/GoogleIcon";

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
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      console.log(formValues);
    }
  };

  return (
    <div>
      <div className="relative h-dvh mt-4 bg-gray-100 flex flex-col justify-start py-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-2 text-center md:text-3xl text-xl font-extrabold text-gray-900">
            Welcome back
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-12 p-4 shadow sm:rounded-lg sm:px-10">
            <button className="w-full mb-4 flex items-center justify-center border border-gray-300 p-3 rounded-lg">
              <div className="flex flex-row">
                <GoogleIcon />
                <div className="ml-4 text-sm font-semibold text-gray-700">
                  Login with Google
                </div>
              </div>
            </button>

            <div className="flex flex-row justify-start items-center mt-6">
              <hr className="w-48 border-1 border-gray-300"></hr>
              <div className="px-2 text-gray-400 font-medium">or</div>
              <hr className="w-48 border-1 border-gray-300"></hr>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit} method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your email address"
                    onChange={handleChange}
                  />
                  {errors.email && <p>{errors.email}</p>}
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your password"
                    onChange={handleChange}
                  />
                  {errors.password && <p>{errors.password}</p>}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign up
                </button>
              </div>
            </form>

            <p className="mt-5 text-center text-sm text-gray-600 max-w">
              Don&apos;t have an account yet?
              <Link
                href="/auth/signup"
                className="ml-2 font-medium text-blue-600 hover:text-blue-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
