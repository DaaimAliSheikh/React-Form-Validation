import React, { useState } from "react";

const FormField = (props) => {
  const { heading, errormsg, ...attr } = props;
  const [valid, setValid] = useState(true);

  const handleBlur = (e) => {
    if (!e.target.checkValidity()) {
      setValid(false);
    } else {
      setValid(true);
    }
  };
  return (
    <div className="w-[100%]">
      {attr.type !== "submit" ? (
        <>
          <label className=" text-textcolor" htmlFor={attr.id}>
            {heading}
          </label>
          <input
            {...attr}
            className=" mt-[0.2em] w-[100%] rounded-lg bg-gradient-to-r from-[#ff3a3a] to-[#8f70ff]  p-[.5em] "
            onBlur={handleBlur}
            onInvalid={(e) => e.target.setCustomValidity(" ")}
            onChange={(e) => {
              e.target.setCustomValidity("");
              if (e.target.checkValidity()) setValid(true);
            }}
          />

          <p className=" text-red-700">{valid || errormsg}</p>
        </>
      ) : (
        <button className=" mt-[0.2em] w-[100%] rounded-lg bg-gradient-to-r from-[#8f70ff] to-[#ff3a3a]  p-[.5em] ">
          Submit
        </button>
      )}
    </div>
  );
};

export default FormField;
