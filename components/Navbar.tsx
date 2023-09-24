"use client";
import { useState } from 'react';

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center">
                        <img src="https://www.svgrepo.com/show/524328/book.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-red-500">r</span>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ant.AI</span>
                    </a>
                    <div className="ml-auto lg:hidden">
                        <button
                            data-collapse-toggle="navbar-hamburger"
                            type="button"
                            className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-hamburger"
                            aria-expanded="false"
                            onClick={handleClick}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`lg:flex lg:items-center lg:w-auto w-full ${active ? 'block' : 'hidden'}`} id="navbar-hamburger">
                        <ul className="lg:flex lg:flex-row flex-col font-medium mt-4 lg:mt-0 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <li>
                                <a href="/page.tsx" className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Home</a>
                            </li>
                            <li>
                                <a href="/missionStatement.html" className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Mission Statement</a>
                            </li>
                            <li>
                                <a href="home.html" className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-200 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
