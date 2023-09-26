"use client";
import Image from "next/image";
import "./style.css";
import { SlRocket } from "react-icons/sl";
import AboutCard from "./components/aboutCard";
import { useRef, SyntheticEvent } from "react";
import Typewriter from "typewriter-effect";

export default function Home() {
  const ref = useRef<null | HTMLDivElement>(null);

  const handleScrollToProducts = (e: SyntheticEvent) => {
    e.preventDefault();
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex overflow-hidden min-h-screen flex-col items-center justify-between">
      <div className="banner">
        <div className="navbar text-yellow-400">
          <i className="fas fa-rocket logo flex gap-2 items-center text-yellow-400">
            Vislendor <SlRocket color={"#ffc107"} />
          </i>
          <ul className="md:block flex">
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToProducts(e);
                }}
              >
                Product
              </a>
            </li>
            {/* <li>
              <a href="#">About</a>
            </li> */}
            <li>
              <a href="mailto:kolosafo@gmail.com">Contact</a>
            </li>
          </ul>
        </div>

        <div className="content">
          <div className="title">
            Get a Website
            <div className="slider">
              <Typewriter
                options={{
                  strings: ["NOW", "TODAY", "FREE"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <p>
            Empower Your Online Presence and Drive More Customers to Your
            Business
          </p>
          <a href="mailto:kolosafo@gmail.com" style={{ all: "unset" }}>
            <button className="button" type="button">
              Contact Us
            </button>
          </a>
        </div>
      </div>

      {/* ABOUT US SECTION */}
      <div className="bg-gray-200 flex flex-col" ref={ref}>
        <h1 className="text-gray-700 text-5xl self-center my-10 font-semibold">
          Products
        </h1>
        <AboutCard
          link="https://cilantrorestaurants.com"
          img={"/cilantro/1.png"}
          title="Cilantro"
          desc="Cilantro is the team work of Cilantro Restaurant Cafe. 
          We aim at promoting the food industry through our restaurants 
          and our delectable dishes, which integrates different cultures."
        />
        <hr className="bg-black border-b-2 border-gray-300 w-full" />
        <AboutCard
          link="https://tapitbydendo.com"
          img={"/tapit/1.png"}
          title="Tap It"
          desc="Tap It is a company that provides Nfc cards for sharing contact information and social media content.
          Our cards are designed to be easy to use, so users can share content with fewer steps and fewer distractions.
          We believe that communication is at the heart of our lives. So we`ve made it our mission to make sure you never have to worry about losing track of who you`re talking to or what you`re saying.
          Our product allows people to share contact information and social media posts easily and efficiently, without having to worry about getting distracted or leaving a note behind somewhere. It`s a simple way for home or on the go."
        />
        <hr className="bg-black border-b-2 border-gray-300 w-full" />
        <AboutCard
          link="https://loveisintheair.store"
          img={"/love/1.png"}
          title="Love is in the air"
          desc="At Love is in the air, we understand that love is both complex 
          and beautiful. Our unique approach combines ancient wisdom with modern 
          techniques to create a love chart that goes beyond traditional astrology. 
          Using the powerful Love Cards system, we'll uncover the intricate 
          details of your intimate relationship."
        />
        <hr className="bg-black border-b-2 border-gray-300 w-full" />
        <AboutCard
          link="https://trainwithvinny.com"
          img={"/twv/1.png"}
          title="Train With Vinny"
          desc="Fully fledged - ONLINE PERSONAL TRAINING THAT PUSHES YOU BEYOND YOUR LIMITS"
        />
        <div className="flex flex-col justify-center items-center text-center gap-4 py-10 bg-gray-700">
          <h3 className="md:text-base text-sm">
            {" "}
            Contact us to bring your business to new heights online with a
            tailored website specially made for your service.
          </h3>

          <a href="mailto:kolosafo@gmail.com" style={{ all: "unset" }}>
            <button className="button" type="button">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
