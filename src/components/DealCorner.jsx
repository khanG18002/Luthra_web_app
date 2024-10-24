import React from "react";

function DealCorner() {
    return (
        <div className="  bg-Light-Gray font-righteous ">


            <div>
                <h1 className=" font-bold text-xl text-center py-9"> DEAL CORNER </h1>
            </div>

            <div className="flex ">
                <div className="   mx-5 rounded-2xl bg-white"> {/* first div which have transaction team and Compitition etc  */}


                    <div className="bg-custom-dark rounded-t-3xl text-white pb-5"> {/* Top of the page which have logo and text  */}
                        <h1 className="px-6 py-5">LOGO</h1>

                        <div className="text-center space-y-3 px-5 ">
                            <h1> DEAL ANNOUNCEMENT </h1>
                            <p> LOREM IPSUM DOLOR SIT AMET CONSECTURE </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Arcu maecenas tristique <br />
                                amet gravida sed. Quisque euismod et egestas turpis odio mollis eget <br />
                                sapien. Nibh vestibulum lectus aliquam risus dui risus et orci. Velit <br />
                                tempor enim convallis pellentesque morbi mi sem enim. Hendrerit <br />
                                ornare egestas ornare in aliquam faucibus ut sit. Odio egestas varius <br />
                                nunc aliquam pretium lacinia eget aliquam sed. Sit egestas amet nulla <br />
                                donec purus varius quis magna.
                            </p>

                        </div>
                    </div>


                    <div className=" rounded-b-3xl "> {/*TRANSACTION AND COMPITITION TEAM parent div*/}


                        <div className="py-4">{/* only TRANSACTION team with 3 member  */}
                            <h1 className="  font-bold text-xl text-center py-4 "> TRANSACTION TEAM </h1>

                            <div className="flex flex-col md:flex-row justify-center  space-x-10">

                                <div className=""> { /* Transaction team 1st member */}
                                    <img src="./public/images/member1.png" className="mx-auto" alt="" />
                                    <div className="text-center ">
                                        <h1>NAME</h1>
                                        <p className="font-light text-sm font-serif">Partner</p>
                                    </div>
                                </div>


                                <div className=""> { /* Transaction team 2nd member */}
                                    <img src="./public/images/member2.png" className="mx-auto" alt="" />
                                    <div className="text-center">
                                        <h1>NAME</h1>
                                        <p className="font-light text-sm font-serif">Management Associates</p>
                                    </div>
                                </div>


                                <div className=""> { /* Transaction team 3rd member */}
                                    <img src="./public/images/member3.png" className="mx-auto" alt="" />
                                    <div className="text-center">
                                        <h1>NAME</h1>
                                        <p className="font-light text-sm font-serif">Associates</p>
                                    </div>
                                </div>
                            </div>

                        </div> {/* end  TRANSACTION team with 3 member  */}


                        <div className="py-4"> {/* COMPITITION1 TEAM parent div  */}

                            <h1 className="font-bold text-xl text-center py-4">COMPITITION TEAM</h1>

                            <div className="flex flex-col md:flex-row justify-center space-x-10"> {/* COMPITITION team 5 member  parent div*/}


                                <div className=""> { /* COMPITITION team 1st member */}
                                    <img src="./public/images/member2.1.png" className="mx-auto" alt="" />
                                    <div className="text-center">
                                        <h1>NAME</h1>
                                        <p className="font-light text-sm font-serif">Partner</p>
                                    </div>
                                </div>

                                <div className=""> { /* COMPITITION team 2nd member */}
                                    <img src="./public/images/member2.2.png" className="mx-auto" alt="" />
                                    <div className="text-center">
                                        <h1>NAME</h1>
                                        <p className="font-light text-sm font-serif">Partner</p>
                                    </div>
                                </div>

                                <div className=""> { /* COMPITITION team 3rd member */}
                                    <img src="./public/images/member2.3.png" className="mx-auto" alt="" />
                                    <div className="text-center">
                                        <h1>NAME</h1>
                                        <p className="font-light text-sm font-serif">Management Associates</p>
                                    </div>
                                </div>

                                <div className=""> { /* COMPITITION team 4th member */}
                                    <img src="./public/images/member2.4.png" className="mx-auto" alt="" />
                                    <div className="text-center">
                                        <h1>NAME</h1>
                                        <p className="font-light text-sm font-serif">Associates</p>
                                    </div>
                                </div>

                                <div className=""> { /* COMPITITION team 5th member */}
                                    <img src="./public/images/member2.5.png" className="mx-auto" alt="" />
                                    <div className="text-center">
                                        <h1>NAME</h1>
                                        <p className="font-light text-sm font-serif">Associates</p>
                                    </div>
                                </div>

                            </div>

                        </div>  {/* end COMPITITION1 TEAM parent div  */}


                        <div className="py-4"> {/* COMPITITION2 TEAM parent div  */}

                            <h1 className="font-bold text-xl text-center py-4">COMPITITION TEAM</h1>

                            <div className=""> {/* COMPITITION team 7 member  parent div*/}

                                <div className="flex flex-col md:flex-row justify-center space-x-10"> {/* First 4 member in one row  */}

                                    <div className=""> { /* COMPITITION team 1st member */}
                                        <img src="./public/images/member3.1.png" className="mx-auto" alt="" />
                                        <div className="text-center">
                                            <h1>NAME</h1>
                                            <p className="font-light text-sm font-serif">Partner</p>
                                        </div>
                                    </div>

                                    <div className=""> { /* COMPITITION team 2nd member */}
                                        <img src="./public/images/member3.2.png" className="mx-auto" alt="" />
                                        <div className="text-center">
                                            <h1>NAME</h1>
                                            <p className="font-light text-sm font-serif">Partner</p>
                                        </div>
                                    </div>

                                    <div className=""> { /* COMPITITION team 3rd member */}
                                        <img src="./public/images/member3.3.png" className="mx-auto" alt="" />
                                        <div className="text-center">
                                            <h1>NAME</h1>
                                            <p className="font-light text-sm font-serif">Management</p>
                                        </div>
                                    </div>

                                    <div className=""> { /* COMPITITION team 4th member */}
                                        <img src="./public/images/member3.4.png" className="mx-auto" alt="" />
                                        <div className="text-center">
                                            <h1>NAME</h1>
                                            <p className="font-light text-sm font-serif">Associates</p>
                                        </div>
                                    </div>

                                </div> {/*First 4 member in one row*/}

                                <div className="flex flex-col md:flex-row justify-center space-x-10 py-6"> {/* SECOND row which have 3 member   */}

                                    <div className=""> { /* COMPITITION team 1st member */}
                                        <img src="./public/images/member1.png" className="mx-auto" alt="" />
                                        <div className="text-center">
                                            <h1>NAME</h1>
                                            <p className="font-light text-sm font-serif">Associates</p>
                                        </div>
                                    </div>

                                    <div className=""> { /* COMPITITION team 2nd member */}
                                        <img src="./public/images/member2.png" className="mx-auto" alt="" />
                                        <div className="text-center">
                                            <h1>NAME</h1>
                                            <p className="font-light text-sm font-serif">Associates</p>
                                        </div>
                                    </div>

                                    <div className=""> { /* COMPITITION team 3rd member */}
                                        <img src="./public/images/member3.png" className="mx-auto" alt="" />
                                        <div className="text-center">
                                            <h1>NAME</h1>
                                            <p className="font-light text-sm font-serif">Associates</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>  {/* end COMPITITION TEAM parent div  */}

                    </div> {/* end  TRANSACTION AND COMPITITION TEAM parent div  */}

                </div>

                <div>

                    <div className=" rounded-t-3xl text-white pb-5 py-64"> {/* Top of the page which have logo and text  */}

                        <div className="bg-custom-dark rounded-t-3xl px-5 ">
                            <div className="flex justify-between">
                                <h1 className="px-6 py-5">NAME</h1>
                                <h1 className="px-6 py-5">LOGO</h1>
                            </div>

                            <div className="text-center space-y-3 px-5 py-6 ">
                                <h1> LOREM IPSUM DOLOR SIT </h1>
                                <p> AMET CONSECTURE </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Arcu maecenas tristique <br />
                                    amet gravida sed. Quisque euismod et egestas turpis odio mollis eget <br />
                                    sapien. Nibh vestibulum lectus aliquam risus dui risus et orci. Velit <br />
                                    tempor enim convallis pellentesque morbi mi sem enim. Hendrerit <br />
                                    ornare egestas ornare in aliquam faucibus ut sit. Odio egestas varius <br />
                                    nunc aliquam pretium lacinia eget aliquam sed. Sit egestas amet nulla <br />
                                    donec purus varius quis magna. <br />
                                </p>

                            </div>
                        </div>

                        <div className=" bg-white text-black py-4  rounded-b-3xl ">{/* only TRANSACTION team with 3 member  */}
                            <h1 className="  font-bold text-xl text-center py-4 "> THE TEAM </h1>

                            <div className="flex flex-col md:flex-row justify-center space-x-10 px-5   ">

                                <div className=""> { /* Transaction team 1st member */}
                                    <img src="./public/images/member2.1.png" className="mx-auto" alt="" />
                                    <div className="text-center ">
                                        <h1>NAME</h1>
                                        <p className="font-light text-sm font-serif">Partner</p>
                                    </div>
                                </div>


                                <div className=""> { /* Transaction team 2nd member */}
                                    <img src="./public/images/member2.2.png" className="mx-auto" alt="" />
                                    <div className="text-center">
                                        <h1>NAME</h1>
                                        <p className="font-light text-sm font-serif">Management </p>
                                    </div>
                                </div>


                                <div className=""> { /* Transaction team 3rd member */}
                                    <img src="./public/images/member2.3.png" className="mx-auto" alt="" />
                                    <div className="text-center">
                                        <h1>NAME</h1>
                                        <p className="font-light text-sm font-serif">Associates</p>
                                    </div>
                                </div>


                                <div className=""> { /* Transaction team 3rd member */}
                                    <img src="./public/images/member2.4.png" className="mx-auto" alt="" />
                                    <div className="text-center">
                                        <h1>NAME</h1>
                                        <p className="font-light text-sm font-serif">Associates</p>
                                    </div>
                                </div>


                                <div className=""> { /* Transaction team 3rd member */}
                                    <img src="./public/images/member2.5.png" className="mx-auto" alt="" />
                                    <div className="text-center">
                                        <h1>NAME</h1>
                                        <p className="font-light text-sm font-serif">Associates</p>
                                    </div>
                                </div>


                            </div>

                        </div> {/* end  TRANSACTION team with 3 member  */}




                    </div>

                </div>


            </div>

            <div className="flex justify-center py-7 ">
                <button className="bg-custom-dark w-28 h-10 text-white rounded-xl hover:font-bold">
                    Read more
                </button>
            </div>
        </div>




    )
}

export default DealCorner;