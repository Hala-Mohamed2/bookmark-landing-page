import { useState } from "react";

export default function Features() {
  const [head, setHead] = useState("Bookmark");

  return (
    <div>
      <div className="text-center px-6 md:px-0 md:w-[500px] mx-auto mt-14">
        <h2 className="text-gray-800 text-3xl font-medium">Features</h2>
        <p className="text-gray-500 py-6">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <div>
        <div className="text-center pt-9 mx-auto md:border-b border-gray-300 md:w-[700px] pb-6 flex flex-col gap-5 md:flex-row justify-center text-gray-500 text-[16px] md:text-[20px] md:gap-19">
          <button
            onClick={() => setHead("Bookmark")}
            className="cursor-pointer border-b border-gray-300 pb-5 md:border-b-0"
          >
            Simple Bookmarking
          </button>
          <button
            onClick={() => setHead("searching")}
            className="cursor-pointer border-b border-gray-300 pb-5 md:border-b-0"
          >
            Speedy Searching
          </button>
          <button onClick={() => setHead("sharing")} className="cursor-pointer border-b border-gray-300 pb-5 md:border-b-0">
            Easy Sharing
          </button>
        </div>

        {head == 
          "Bookmark" &&(
            <div className="container py-13 flex flex-col md:flex-row gap-22 ">
              <img
                className="md:w-[480px]"
                src="./images/illustration-features-tab-1.svg"
                alt=""
              />
              <div className="pt-9 md:w-[380px] text-center md:text-left">
                <h2 className="text-gray-800 text-3xl font-medium">
                  Bookmark in one click
                </h2>
                <p className="text-gray-500 py-6 text-sm">
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>
                <button className="bg-blue-600 text-white text-[13px] hidden md:flex py-2 px-4 cursor-pointer rounded-sm">
                  More Info
                </button>
              </div>
            </div>
          )}

          {head == 
          "searching" &&(
            <div className="container py-13 flex flex-col md:flex-row gap-22 ">
              <img
                className="md:w-[480px]"
                src="./images/illustration-features-tab-2.svg"
                alt=""
              />
              <div className="pt-9 md:w-[380px] text-center md:text-left">
                <h2 className="text-gray-800 text-3xl font-medium">
                  Intelligent search
                </h2>
                <p className="text-gray-500 py-6 text-sm">
                  Our powerful search feature will help you find saved sites in no time at all. 
                  No need to trawl through all of your bookmarks.
                </p>
                <button className="bg-blue-600 text-white text-[13px] py-2 px-4 cursor-pointer rounded-sm">
                  More Info
                </button>
              </div>
            </div>
          )}

          {head == 
          "sharing" &&(
            <div className="container py-13 flex flex-col md:flex-row gap-22 ">
              <img
                className="w-[480px]"
                src="./images/illustration-features-tab-3.svg"
                alt=""
              />
              <div className="pt-9 md:w-[380px] text-center md:text-left">
                <h2 className="text-gray-800 text-3xl font-medium">
                  Share your bookmarks
                </h2>
                <p className="text-gray-500 py-6 text-sm">
                  Easily share your bookmarks and collections with others. Create a shareable 
                  link that you can send at the click of a button.
                </p>
                <button className="bg-blue-600 text-white text-[13px] py-2 px-4 cursor-pointer rounded-sm">
                  More Info
                </button>
              </div>
            </div>
          )}


      </div>
    </div>
  );
}
