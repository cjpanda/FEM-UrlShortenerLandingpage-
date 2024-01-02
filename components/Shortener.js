"use client";

import { useEffect, useState } from "react";
import fetchData from "@/utils/fetchData";

const storedLinks = () => {
  let links = localStorage.getItem("links");

  if (links) {
    return JSON.parse(localStorage.getItem("links"));
  } else {
    return [];
  }
};

const Shortener = () => {
  const [text, setText] = useState("");
  const [links, setLinks] = useState(storedLinks());
  const [copyText, setCopyText] = useState("Copy");

  const isValidUrl = (url) => {
    // Regular expression for basic URL validation
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidUrl(text)) {
      alert("Invalid URL");
      return;
    }

    try {
      const shortenedLink = await fetchData(text);

      setLinks((prevLinks) => [
        ...prevLinks,
        { original: text, shortened: shortenedLink },
      ]);
      setText("");
    } catch (error) {
      alert(error.message);
    }
  };

  // Handle Copy Function
  const handleCopy = (shortenedLink) => {
    navigator.clipboard.writeText(shortenedLink);
    setCopyText("Copied!");
  };

  //Local Storage to Save Links
  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  return (
    <div className="px-5">
      <section className="short short-overlay rounded-lg ">
        <form
          onSubmit={handleSubmit}
          className=" flex items-center justify-center py-10 md:py-16"
        >
          <div className="flex flex-col md:flex-row md:w-4/5 w-full 	">
            <input
              type="url"
              placeholder="Shorten a link here. Example:https://www.google.com"
              className="w-full py-4 px-5 rounded-lg mb-2 md:mb-0 focus:outline-none"
              value={text}
              required
              onChange={(e) => setText(e.target.value)}
            />
            <button
              type="sumbit"
              className="bg-accent hover:bg-opacity-75 px-4 lg:px-7 font-bold text-white tracking-[1px] text-lg lg:text-[15px]  transition-all duration-300 btn-lg  rounded-lg w-full md:w-60 md:ml-3"
              onClick={handleSubmit}
            >
              Shorten it!
            </button>
          </div>
        </form>

        {/* Display Shortned Links */}
        <div className="flex flex-col ">
          {links.map((link, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center  bg-white  text-center md:flex-row md:justify-between p-3 mt-2 rounded-lg shadow"
            >
              <div>
                <h6 className="mb-3 md:mb-0">{link.original}</h6>
              </div>
              <div>
                <ul className="md:flex md:items-center">
                  <li className="md:mr-5 mb-2">
                    <button
                      className="text-accent"
                      onClick={() => handleCopy(link.shortened)}
                    >
                      {link.shortened}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleCopy(link.shortened)}
                      className="btn btn-sm rounded-lg text-sm focus:bg-primary"
                    >
                      {copyText}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shortener;
