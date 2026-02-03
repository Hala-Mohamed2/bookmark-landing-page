
const items =[
    {
        img:'./images/logo-chrome.svg',
        title:'Add to Chrome',
        desc:'Minimum version 62',
    },
    {
        img:'./images/logo-firefox.svg',
        title:'Add to Firefox',
        desc:'Minimum version 55',
    },
    {
        img:'./images/logo-opera.svg',
        title:'Add to Opera',
        desc:'Minimum version 46',
    },
]

export default function Extension() {
return (
    <div className=" my-9">
        <div className="md:w-[500px] text-center mx-auto px-6">
            <h2 className="text-gray-800 text-2xl font-medium">Download the extension</h2>
            <p className="text-gray-500 py-6">We’ve got more browsers in the pipeline. Please do let us know if you’ve 
            got a favourite you’d like us to prioritize.</p>
        </div>

        <div className="container pt-9 flex flex-col md:flex-row items-center justify-center gap-9">
            {items.map((item,index) => (
                <div className="bg-white text-center rounded-sm w-[230px] p-4 shadow-xl shadow-gray-200 ">
                    <img className="w-\[80px] text-center mx-auto py-6" src={item.img} alt="" />
                    <h3 className="text-gray-800 font-bold">{item.title}</h3>
                    <h6 className="text-gray-500 text-[13px] pb-4 border-b border-dashed">{item.desc}</h6>
                    <button className="bg-blue-600 py-2 px-3 text-sm cursor-pointer text-white w-full rounded-sm mt-6">Add & Install Extension</button>
                </div>
            ))}
        </div>


    </div>
)
}
