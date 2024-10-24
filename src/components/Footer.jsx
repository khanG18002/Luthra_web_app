import React from "react";

function Footer() {
    return (
        <div>
            <div className="flex flex-col md:flex-row sm:flex-col-reverse justify-between space-x-20 bg-custom-dark font-righteous text-white px-16 py-5"> {/* footer parent div  */}

                <div> {/* Footer 1st paragrape */}

                    <h1 className="py-3"> LOGO </h1>
                    <p className="font-serif ">
                        “Lorem ipsum dolor sit amet consectetur. <br />
                        amet gravida sed. Quisque euismod et an <br />
                        sapien. Nibh vestibulum lectus aliquam <br />
                        tempor enim convallis pellentesque hasn <br />
                        ornare egestas ornare in aliquam amet in <br />
                        nunc aliquam pretium lacinia eget aliqua <br />
                        donec purus varius quis magna.
                    </p>

                </div>

                <div> {/* Footer 1st paragrape */}

                    <h1 className="py-3"> COMPANY </h1>
                    <div className="font-serif">
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Expertise</li>
                            <li>In the Spotlight</li>
                            <li>Thought Capital</li>
                            <li>Career</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                </div>

                <div> {/* Footer 1st paragrape */}

                    <h1 className="py-3"> JOIN US ON </h1>
                    <div className="flex space-x-4 text-center">
                        <p> Facebook </p>
                        <p> Insta </p>
                    </div>


                </div>


            </div>
        </div>
    )

}

export default Footer;