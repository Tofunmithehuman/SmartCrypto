import React from "react";
import Navigation from "../Component/Navigation";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <Navigation />
      <div className="pt-28 text-white p-5 max-w-screen-md m-auto">
        <p className="mb-1 font-bold">GET NEW SOLUTION</p>
        <h1 className="text-5xl sm:text-8xl font-bold">SmartCrypto</h1>
        <h1>Technology for Cryptocurrencies.</h1>
        <p className="mt-8 max-w-screen-sm">
          We’ve worked with over{" "}
          <span className="text-light-pink">400 companies</span> to build Crypto
          solutions for their business, and we are still growing.
        </p>
      </div>

      {/* why SmartCrypto */}
      <div className="sectionOne bg-black-purple mt-28 pt-20 pb-28">
        <div className="text-white max-w-screen-xl m-auto">
          <h1 className="text-center font-bold md:text-4xl text-2xl">
            Why SmartCrypto?
          </h1>
          <div className="flex flex-wrap gap-5 mt-16 justify-evenly m-5">
            <div className="bg-light-blue p-10 max-w-sm rounded-lg">
              <h1 className="text-xl font-bold text-light-pink">
                Flexibility.<i className="fa-solid fa-person-running"></i>
              </h1>
              <p className="text-sm text-gray-700 mt-5 mb-3">
                We’ve worked with over 400 companies to build blockchain
                solutions for their business.
              </p>
              <ul className="list-disc text-gray-300">
                <li>Blockchain solutions for their business.</li>
                <li>Blockchain solutions for their business.</li>
                <li>Blockchain solutions for their business.</li>
              </ul>
            </div>
            <div className="bg-light-blue p-10 max-w-sm rounded-lg">
              <h1 className="text-xl font-bold text-light-pink">
                Transference.<i className="fa-solid fa-comments-dollar"></i>
              </h1>
              <p className="text-sm text-gray-700 mt-5 mb-3">
                We’ve worked with over 400 companies to build blockchain
                solutions for their business.
              </p>
              <ul className="list-disc text-gray-300">
                <li>Blockchain solutions for their business.</li>
                <li>Blockchain solutions for their business.</li>
                <li>Blockchain solutions for their business.</li>
              </ul>
            </div>
            <div className="bg-light-blue p-10 max-w-sm rounded-lg">
              <h1 className="text-xl font-bold text-light-pink">
                Security.<i className="fa-solid fa-shield-halved"></i>
              </h1>
              <p className="text-sm text-gray-700 mt-5 mb-3">
                We’ve worked with over 400 companies to build blockchain
                solutions for their business.
              </p>
              <ul className="list-disc text-gray-300">
                <li>Blockchain solutions for their business.</li>
                <li>Blockchain solutions for their business.</li>
                <li>Blockchain solutions for their business.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Plans */}
      <div className="sectionTwo text-white pt-28 pb-28">
        <h1 className="text-center font-bold md:text-4xl text-2xl">
          View Payment Plans...
        </h1>
        <div className="flex flex-wrap items-center gap-5 mt-16 justify-evenly m-5">
          <div className=" blurbg p-10 max-w-sm rounded-lg text-center">
            <i className="fa-solid fa-plant-wilt text-3xl text-light-pink"></i>
            <h1 className="text-xl font-bold text-light-pink">Basic Plan</h1>
            <p className="text-sm text-gray-700 mt-5 mb-3">
              Earning 79% POI weekly
            </p>
            <p className="text-sm text-gray-700 mb-3">
              Minimum deposit: 1,000 = $3,765.00
            </p>
            <ul className=" text-gray-300 flex flex-col gap-7 mb-7">
              <li>1,500 / $7,530.00</li>
              <li>2,500 / $13,825.00</li>
              <li>4,500 / $24,885.00</li>
            </ul>
            <Link
              to="/plan"
              className="bg-purple-900 hover:bg-purple-950 duration-200 ease-in-out pt-2 pb-2 ps-10 pe-10 rounded"
            >
              Select plan
            </Link>
          </div>
          <div className=" blurbg p-10 max-w-sm rounded-lg text-center">
            <i className="fa-solid fa-paper-plane text-3xl text-light-pink"></i>
            <h1 className="text-xl font-bold text-light-pink">Standard Plan</h1>
            <p className="text-sm text-gray-700 mt-5 mb-3">
              Earning 82% POI weekly
            </p>
            <p className="text-sm text-gray-700 mb-3">
              Minimum deposit: 5,000 = $31,150.00
            </p>
            <ul className="text-gray-300 flex flex-col gap-7 mb-20">
              <li>10,000 / $57,400.00</li>
              <li>14,000 / $80,360.00</li>
            </ul>
            <Link
              to="/plan"
              className="bg-purple-900 hover:bg-purple-950 duration-200 ease-in-out pt-2 pb-2 ps-10 pe-10 rounded"
            >
              Select plan
            </Link>
          </div>
          <div className=" blurbg p-10 max-w-sm rounded-lg text-center">
            <i className="fa-solid fa-sun-plant-wilt text-3xl text-light-pink"></i>
            <h1 className="text-xl font-bold text-light-pink">Luxury Plan</h1>
            <p className="text-sm text-gray-700 mt-5 mb-3">
              Earning 85% POI weekly
            </p>
            <p className="text-sm text-gray-700 mb-3">
              Minimum deposit: 15000 = $89,250.00
            </p>
            <ul className="text-gray-300 flex flex-col gap-7 mb-20">
              <li>20,000 / $119,000.00</li>
              <li>50,000 / $297,500.00</li>
            </ul>
            <Link
              to="/plan"
              className="bg-purple-900 hover:bg-purple-950 duration-200 ease-in-out pt-2 pb-2 ps-10 pe-10 rounded"
            >
              Select plan
            </Link>
          </div>
        </div>
      </div>
      {/* Be part of the future */}
      <div className="sectionThree text-white pt-28 pb-28 m-6">
        <div className="contain text-black pt-20 pb-20 md:ps-20 md:pe-20 ps-6 pe-6 max-w-5xl m-auto rounded-xl flex items-center md:flex-row flex-col gap-7">
          <div>
            <img
              src="https://iko-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcta_3-1.44da25fa.png&w=640&q=75"
              alt="token"
            />
          </div>
          <div>
            <h1 className="md:text-5xl text-2xl font-bold mb-6">Be part of the future.</h1>
            <p className="md:text-xl text-md">
              We’ve worked with over 400 companies to build blockchain solutions
              for their business.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
