import { useState } from "react";

export default function Features() {
  const [head, setHead] = useState("Bookmark");

  return (
    <div>
      <div className="text-center w-[500px] mx-auto mt-14">
        <h2 className="text-gray-800 text-3xl font-medium">Features</h2>
        <p className="text-gray-500 py-6">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <div>
        <div className="text-center pt-9 mx-auto border-b border-gray-300 w-[700px] pb-6 flex justify-center text-gray-500 text-[20px] gap-19">
          <button
            onClick={() => setHead("Bookmark")}
            className="cursor-pointer"
          >
            Simple Bookmarking
          </button>
          <button
            onClick={() => setHead("searching")}
            className="cursor-pointer"
          >
            Speedy Searching
          </button>
          <button onClick={() => setHead("sharing")} className="cursor-pointer">
            Easy Sharing
          </button>
        </div>

        {head == 
          "Bookmark" &&(
            <div className="container py-13 flex gap-22 ">
              <img
                className="w-[480px]"
                src="./images/illustration-features-tab-1.svg"
                alt=""
              />
              <div className="pt-9 w-[380px]">
                <h2 className="text-gray-800 text-3xl font-medium">
                  Bookmark in one click
                </h2>
                <p className="text-gray-500 py-6 text-sm">
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>
                <button className="bg-blue-600 text-white text-[13px] py-2 px-4 cursor-pointer rounded-sm">
                  More Info
                </button>
              </div>
            </div>
          )}

          {head == 
          "searching" &&(
            <div className="container py-13 flex gap-22 ">
              <img
                className="w-[480px]"
                src="./images/illustration-features-tab-2.svg"
                alt=""
              />
              <div className="pt-9 w-[380px]">
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
            <div className="container py-13 flex gap-22 ">
              <img
                className="w-[480px]"
                src="./images/illustration-features-tab-3.svg"
                alt=""
              />
              <div className="pt-9 w-[380px]">
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
