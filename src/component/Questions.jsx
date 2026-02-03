import { useState } from "react"

const quests = [
    {
        title:'What is Bookmark?',
        img:'./images/icon-arrow.svg',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
    },
    {
        title:'How can I request a new browser?',
        img:'./images/icon-arrow.svg',
        desc:'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
    },
    {
        title:'Is there a mobile app?',
        img:'./images/icon-arrow.svg',
        desc:'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
    },
    {
        title:'What about other Chromium browsers?',
        img:'./images/icon-arrow.svg',
        desc:'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
    },
]


export default function Questions() {

    const [open , setOpen] = useState(null);


return (
    <div>
        <div className="text-center pt-16 mx-auto w-[500px]">
            <h2 className="text-gray-800 text-3xl font-medium">Frequently Asked Questions</h2>
            <p className="text-gray-500 py-4">Here are some of our FAQs. If you have any other questions you’d like 
            answered please feel free to email us.</p>
        </div>

        <div className="my-9">
            {quests.map((quest,index)=> (
                <div className="w-[600px] mx-auto border-t border-gray-200 py-4 last:border-b last:border-gray-300">
                    <div onClick={()=> setOpen(open == index ? null : index)} className="flex items-center justify-between cursor-pointer">
                        <h2 className="text-gray-800 text-[20px]">{quest.title}</h2>
                        <img src={quest.img} alt="" />
                    </div>
                    <p className={`text-gray-500 text-sm pt-4 ${open == index? "block" : "hidden"}`}>{quest.desc}</p>
                </div>
            ))}
        </div>

        <div className="text-center mb-6">
            <button className="bg-blue-600 text-white rounded-sm py-2 px-4 cursor-pointer">More Info</button>
        </div>


    </div>
)
}
