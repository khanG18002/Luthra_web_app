import React from "react";

function KeyRecognition() {
    return (

        <div className=" font-righteous p-9"> {/* Parent div  */}
            <div>
                <h1 className="font-bold text-xl text-center py-9">
                    KEY RECOGNITION
                </h1>
            </div>
            <div className="flex flex-col items-center justify-center  gap-9 md:flex-row ">  {/* which have 3 more div */}

                <div className="bg-custom-dark text-white w-60 h-52 text-2xl rounded-3xl flex items-center justify-center"> {/* 1st div */}
                    <p> Chambers And <br />
                        Partners Global <br />
                        And Asia Pacific <br />
                        2024</p>
                </div>

                <div className="bg-custom-dark text-white  w-60 h-52 text-2xl rounded-3xl flex items-center justify-center"> {/* 2nd div */}
                    <p>
                        Legal 500 Asial- <br />
                        Pacific and <br />
                        Green Guide <br />
                        2024 <br />
                    </p>
                </div >

                <div className="bg-custom-dark text-white  w-60 h-52 text-2xl rounded-3xl flex items-center justify-center" > {/* 3rd div */}
                    <p>
                        BloombergNEF <br />
                        Clean Energy <br />
                        League Tables <br />
                    </p>
                </div>
            </div>
        </div>
    )

}

export default KeyRecognition;