import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo/Brand Name */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">MyPortfolio</h1>
          </div>

          {/* Navigation Links */}
          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#projects"
                  className="hover:underline"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/dishant-codes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.6-4-.8-4.3-1.6-.1-.3-.6-1-.8-1.2-.2-.2-.6-.5 0-.5.5 0 .9.5 1 1 .6 1 1.5.7 1.9.5.1-.4.3-.7.5-.9-2.7-.3-5.4-1.4-5.4-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.3.9-.2 1.8-.3 2.7-.3.9 0 1.8.1 2.7.3 2.3-1.6 3.3-1.3 3.3-1.3.6 1.6.3 2.9.1 3.2.7.9 1.2 2 1.2 3.3 0 4.6-2.7 5.7-5.4 6 .3.2.5.6.5 1.1v1.6c0 .4.3.7.8.6 4.6-1.5 7.9-5.7 7.9-10.9C23.5 5.73 18.27.5 12 .5z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/dishant-aarak-3249a1171"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 20h-3v-10h3v10zm-1.5-11.5c-.967 0-1.75-.783-1.75-1.75s.783-1.75 1.75-1.75 1.75.783 1.75 1.75-.783 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.518-1.231-2.75-2.75-2.75s-2.75 1.232-2.75 2.75v5.5h-3v-10h3v1.104c.919-1.413 3.167-2.104 4.75-2.104 2.757 0 5 2.243 5 5v6z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
