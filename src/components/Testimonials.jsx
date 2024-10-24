import React from "react";

function Testimonials() {
    return (
        <div className="font-righteous">
            <h1 className="font-bold text-xl text-center py-9"> TESTIMONIALS </h1>

            <div className=" items-center  px-10"> {/* Parent div  */}

                <div className="flex flex-col  md:flex-row space-x-8 justify-center ">
                    <div className="bg-Light-Gray  rounded-xl px-10 "> {/* First box  */}
                        <div className="flex items-center px-5 py-5">
                            <img src="./public/images/member4.1.png" alt="" />
                            <h1 className="px-4"> NAME </h1>
                        </div>

                        <div>
                            <p className="font-serif pb-5">
                                “Lorem ipsum dolor sit amet consectetur. Arcu maecenas tristique <br />
                                amet gravida sed. Quisque euismod et egestas turpis odio mollis <br />
                                sapien. Nibh vestibulum lectus aliquam risus dui risus et orci. Velit <br />
                                tempor enim convallis pellentesque morbi mi sem enim. Hendrerit <br />
                                ornare egestas ornare in aliquam faucibus ut sit. Odio egestas var <br />
                                nunc aliquam pretium lacinia eget aliquam sed. Sit egestas amet.” <br />
                                donec purus varius quis magna.
                            </p>
                        </div>

                    </div>

                    <div className="bg-Light-Gray  rounded-xl px-10"> {/* First box  */}
                        <div className="flex items-center px-5 py-5">
                            <img src="./public/images/member4.2.png" alt="" />
                            <h1 className="px-4"> NAME </h1>
                        </div>

                        <div>
                            <p className="font-serif pb-5">
                                “Lorem ipsum dolor sit amet consectetur. Arcu maecenas tristique <br />
                                amet gravida sed. Quisque euismod et egestas turpis odio mollis <br />
                                sapien. Nibh vestibulum lectus aliquam risus dui risus et orci. Velit <br />
                                tempor enim convallis pellentesque morbi mi sem enim. Hendrerit <br />
                                ornare egestas ornare in aliquam faucibus ut sit. Odio egestas var <br />
                                nunc aliquam pretium lacinia eget aliquam sed. Sit egestas amet.” <br />
                                donec purus varius quis magna.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div class="flex justify-center space-x-4 mt-10">

                <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>

            <div className="flex justify-center py-7 ">
                <button className="bg-custom-dark w-28 h-10 text-white rounded-xl hover:font-bold">
                    Read more
                </button>
            </div>

        </div>
    )

}

export default Testimonials; 