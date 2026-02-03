import React from 'react'

export default function () {
return (
    <div className='container '>

        <div className='flex gap-16 mt-[50px]'>
            <div className='w-[500px] pt-9'>
                <h1 className='text-gray-700 text-4xl font-medium'>A Simple Bookmark Manager</h1>
                <p className='text-gray-400 py-6'>A clean and simple interface to organize your favourite websites. Open a new 
                browser tab and see your sites load instantly. Try it for free.</p>
                <div className='flex gap-4'>
                    <button className='bg-blue-600 text-[13px] cursor-pointer text-white py-3 px-6 rounded-sm'>Get it on Chrome</button>
                    <button className='bg-gray-100 text-[13px] cursor-pointer text-gray-700 shadow shadow-gray-300 py-3 px-6 rounded-sm'>Get it on Firefox</button>
                </div>
            </div>

            <div>
                <img className='w-[600px]' src="./images/illustration-hero.svg" alt="" />
            </div>
        </div>

    </div>
)
}
