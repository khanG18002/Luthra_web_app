import React from "react";


function Navbar() {
    return (
        <div className="flex justify-around bg-custom-dark h-8 items-center text-white font-righteous "> {/* Parent div contain 2 div*/}

            <div className="font-bold ">
                LOGO
            </div>

            <div className="md:hidden lg:hidden">
                <ul className="flex space-x-5">
                    <li className="hover:font-bold">Home</li>
                    <li className="hover:font-bold">Expertise</li>
                    <li className="hover:font-bold">Expertise</li>
                   
                </ul>


            </div>

            <div className=" ">
                <ul className="hidden  md:flex gap-5 text-xs font-light  ">
                    <li className="hover:font-bold">Home</li>
                    <li className="hover:font-bold">Contact Us</li>
                    <li className="hover:font-bold">Expertise</li>
                    <li className="hover:font-bold">In the Spotlight</li>
                    <li className="hover:font-bold">Thought Capital</li>
                    <li className="hover:font-bold">Career</li>
                    <li className="hover:font-bold">Expertise</li>
                    {/* <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact</Link> */}
                </ul>
            </div>

        </div>
    )

}

export default Navbar;