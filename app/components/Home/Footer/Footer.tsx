import React from "react";
import { DiJoomla } from "react-icons/di";

const Footer = () => {
  return (
    <footer className="pt-16 pb-16 bg-gray-200 dark:bg-gray-900">
      <div className="w-[90%] mx-auto grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center">
        {/*---------Part-----1-----*/}
        <div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-cyan-800 dark:bg-white rounded-full flex items-center justify-center flex-col">
              <DiJoomla className="text-2xl text-white" />
            </div>
            <h1 className="text-cyan-800 hidden sm:block md:text-2xl font-bold">
              Codex_Lab
            </h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            animi, omnis ad beatae necessitatibus quaerat! Atque fugiat
          </p>
        </div>
        {/*---------Part-----2-----*/}
        <div>
          <h1 className="text-xl font-medium text-gray-900">For Candidates</h1>
          <div className="mt-4 space-y-4">
            <p className="text-sm text-gray-500">Browse Jobs</p>
            <p className="text-sm text-gray-500">Browse Categories</p>
            <p className="text-sm text-gray-500">Candidate Dashboard</p>
            <p className="text-sm text-gray-500">Job Alerts</p>
            <p className="text-sm text-gray-500">My Bookmarks</p>
          </div>
        </div>
        {/*---------Part-----3-----*/}
        <div>
          <h1 className="text-xl font-medium text-gray-900">For Employers</h1>
          <div className="mt-4 space-y-4">
            <p className="text-sm text-gray-500">Browse Candidates</p>
            <p className="text-sm text-gray-500">Employer Dashboard</p>
            <p className="text-sm text-gray-500">Add Job</p>
            <p className="text-sm text-gray-500">Job Packages</p>
          </div>
        </div>
        {/*---------Part-----4-----*/}
        <div>
          <h1 className="text-xl font-medium text-gray-900">About Us</h1>
          <div className="mt-4 space-y-4">
            <p className="text-sm text-gray-500">Job Page</p>
            <p className="text-sm text-gray-500">Job Page Alternative</p>
            <p className="text-sm text-gray-500">Resume Page</p>
            <p className="text-sm text-gray-500">Blog</p>
            <p className="text-sm text-gray-500">Contact</p>
          </div>
        </div>
        {/*---------Part-----5-----*/}
        <div>
          <h1 className="text-xl font-medium text-gray-900">
            Helpful Resourses
          </h1>
          <div className="mt-4 space-y-4">
            <p className="text-sm text-gray-500">Site Map</p>
            <p className="text-sm text-gray-500">Terms of Use</p>
            <p className="text-sm text-gray-500">Privacy Center</p>
            <p className="text-sm text-gray-500">Security Center</p>
            <p className="text-sm text-gray-500">Accessibility Center</p>
          </div>
        </div>
        {/*---------Part-----6-----*/}
        <div>
          <h1 className="text-xl font-medium text-gray-900">Call Us</h1>
          <h1 className="text-md font-medium text-gray-700">+90859304285</h1>

          <div className="mt-4 space-y-4">
            <p className="text-sm text-gray-500">Dhaka Tangail</p>
            <p className="text-sm text-gray-500">Dhaka Tangail Bangladesh</p>
            <p className="text-sm text-gray-500">example@gmail.com</p>
          </div>
        </div>
      </div>
      <hr className="mt-7 mb-7 text-gray-300 w-[90%] mx-auto" />
    </footer>
  );
};

export default Footer;
