import { useEffect, useRef, useState, useTransition } from "react";
import "./index.css";
import bgimg from "./assets/bg.webp";
import FormField from "./components/FormField";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    alert("submitted");
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgimg})` }}
        className=" flex min-h-[100%] items-center justify-center bg-cover bg-center"
      >
        <div className=" flex min-h-[20px] items-start justify-center rounded-lg bg-primary p-[2em] ">
          <form
            onSubmit={handleSubmit}
            className=" w-[50vw] max-w-[300px] space-y-10 text-start "
          >
            <h1 className="text-textcolor">Sign-Up</h1>
            <FormField
              name={"firstname"}
              id="firstname"
              heading={"First Name"}
              required={true}
              placeholder={"Enter First Name"}
              pattern={"lol"}
              errormsg="*incorrect pattern"
            ></FormField>
            <FormField
              name={"lastname"}
              id="lastname"
              heading={"Last Name"}
              required={true}
              placeholder={"Enter Last Name"}
              pattern={"lol"}
              errormsg="*incorrect pattern"
            ></FormField>
            <FormField
              name={"password"}
              id="password"
              heading={"Password"}
              required={true}
              placeholder={"Enter Password"}
              pattern={"lol"}
              errormsg="*incorrect pattern"
            ></FormField>

            <FormField type={"submit"}></FormField>
          </form>
        </div>
      </div>
      <a
        className=" absolute bottom-5"
        href="https://www.freepik.com/free-vector/abstract-colorful-technology-dotted-wave-background_6166234.htm#query=modern%20background&position=22&from_view=search&track=ais"
      >
        Image by Harryarts on Freepik
      </a>
    </>
  );
}

export default App;
