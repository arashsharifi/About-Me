import React from "react";

function Button(props) {
  return (
    <button className=" mt-4 md:mt-0 bg-violet-900 text-white py-2 px-6 md:ml-8 hover:bg-violet-600 rounded-lg duration-500">
      {props.children}
    </button>
  );
}

export default Button;
