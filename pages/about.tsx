import React from "react";

function About() {
  return (
    <>
      <div className="m-3 text-center">
        <br />
        <br />
        <br />
        <div>
          <div className="text-3xl md:text-4xl font-extrabold">
            <span className="bg-clip-text text-logo">About</span>
          </div>
        </div>
        <br />
        <div className="max-w-screen-md m-auto">
          <p className="text-base">
            <strong>myreadme</strong> is a code editor for Web and Docker, since
            2022.
          </p>
          <br />
          <p className="text-base">
            Creator and maintainer:{" "}
            <a
              className="text-indigo-700"
              href="https://github.com/nelsondev19"
            >
              Nelson Hernández
            </a>
          </p>
          <br />
          <p className="text-base">
            Source Code:{" "}
            <a
              className="text-indigo-700"
              href="https://github.com/nelsondev19/myreadme"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
