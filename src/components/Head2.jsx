import React from "react";

function Head2() {

    return (
        <div className="text-white text-5xl font-righteous"> {/* Parent div of image and 3 balls */}

            <div> {/* image */}
                <img src="./public/images/Home 2.png" alt="" />
            </div>

            <div className="flex justify-center items-center space-x-14 py-14"> {/* Three balls */}

                <div className="bg-custom-dark rounded-full w-72 h-72 text-center"> {/* 1st ball */}
                    <div className="py-20 ">
                        <h1>66</h1>
                        <h1>Partners</h1>
                    </div>
                </div>

                <div className="bg-custom-dark rounded-full w-72 h-72 text-center"> {/* 2st ball */}
                    <div className="py-20 ">
                        <h1>66</h1>
                        <h1>Partners</h1>
                    </div>
                </div>
                <div className="bg-custom-dark rounded-full w-72 h-72 text-center"> {/* 3st ball */}
                    <div className=" py-20">
                        <h1>66</h1>
                        <h1>Partners</h1>
                    </div>
                </div>

            </div>
        </div>

    )

}

export default Head2; 