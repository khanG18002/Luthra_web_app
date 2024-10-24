import React from "react";

function Accolades() {
    return (
        <div>

            <div className="font-righteous bg-Light-Gray ">

                <h1 className="font-bold text-xl text-center py-4"> ACCOLADES </h1>

                <div className="flex flex-col md:flex-row justify-center space-x-6">
                    <div > <img src="./public/images/logo1.png" className="rounded-full w-32" alt="" /></div>
                    <div > <img src="./public/images/logo2.png" className="rounded-full w-32" alt="" /></div>
                    <div > <img src="./public/images/logo3.png" className="rounded-full w-32" alt="" /></div>
                    <div > <img src="./public/images/logo4.png" className="rounded-full w-40" alt="" /></div>
                    <div > <img src="./public/images/logo5.png" className="rounded-full w-32" alt="" /></div>
                    <div > <img src="./public/images/logo6.png" className="rounded-full w-32" alt="" /></div>
                    <div > <img src="./public/images/logo7.png" className="rounded-full w-32" alt="" /></div>
                </div>

                <div class="flex justify-center space-x-4 mt-10">

                    <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>


                <div className="flex justify-center py-7 ">
                    <button className="bg-custom-dark w-28 h-10 text-white rounded-xl hover:font-bold">
                        Read more
                    </button>
                </div>

            </div>



        </div>
    )
}


export default Accolades; 