import React, { useState } from 'react';
import { account } from '../appwrite/appwrite_config';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailPasswordSession(user.email, user.password);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    loginUser(e);
  };

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="text-center font-bold text-2xl">Log in</div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleFormSubmit}>
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
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      setUser({
                        ...user,
                        email: e.target.value
                      });
                    }}
                  />
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
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      setUser({
                        ...user,
                        password: e.target.value
                      });
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a
                    href="/signup"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Don't have Account, Sign Up
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Log in
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div>
                  <a
                    href="/"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Facebook</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="#1877F2"
                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>

                <div>
                  <a
                    href="/"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Google</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#EA4335"
                        d="M24 9.5c3.34 0 6.09 1.15 8.12 3.02l6.08-6.08C34.62 3.41 29.67 1 24 1 14.73 1 7.1 6.36 4.09 14.26l7.14 5.65C12.94 13.05 18.07 9.5 24 9.5z"
                      />
                      <path
                        fill="#4285F4"
                        d="M46.91 24.11c0-1.67-.14-3.26-.41-4.82H24v9.11h12.87c-.55 2.91-2.22 5.39-4.72 7.03l7.14 5.53C42.68 37.56 46.91 31.4 46.91 24.11z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M11.23 28.37c-.65-1.92-1.02-3.95-1.02-6.03s.37-4.11 1.02-6.03L4.09 14.26C2.8 17.23 2 20.53 2 24s.8 6.77 2.09 9.74l7.14-5.37z"
                      />
                      <path
                        fill="#34A853"
                        d="M24 46c5.67 0 10.61-1.93 14.15-5.23l-7.14-5.53c-2.03 1.37-4.59 2.21-7.01 2.21-5.93 0-10.96-3.83-12.77-9.14L4.09 33.74C7.1 41.64 14.73 47 24 47z"
                      />
                      <path
                        fill="none"
                        d="M0 0h48v48H0z"
                      />
                    </svg>
                  </a>
                </div>

                <div>
                  <a
                    href="/"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with GitHub</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="#6e5494"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.422 2.865 8.172 6.839 9.49.5.093.682-.215.682-.482 0-.237-.009-.866-.014-1.7-2.782.603-3.37-1.308-3.37-1.308-.454-1.15-1.11-1.456-1.11-1.456-.907-.62.07-.608.07-.608 1.002.07 1.527 1.03 1.527 1.03.888 1.524 2.33 1.083 2.89.829.09-.645.35-1.084.635-1.334-2.222-.25-4.556-1.11-4.556-4.94 0-1.092.39-1.985 1.032-2.683-.103-.254-.448-1.274.097-2.655 0 0 .84-.268 2.75 1.03A9.534 9.534 0 0110 5.65c.84.004 1.694.112 2.493.33 1.908-1.297 2.746-1.03 2.746-1.03.548 1.382.202 2.401.1 2.655.642.698 1.03 1.59 1.03 2.683 0 3.837-2.338 4.687-4.566 4.933.36.308.678.917.678 1.85 0 1.334-.012 2.411-.012 2.737 0 .267.18.578.688.48C17.138 18.18 20 14.43 20 10.017 20 4.484 15.523 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
