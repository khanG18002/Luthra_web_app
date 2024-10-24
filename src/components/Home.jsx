import React from "react";
import KeyRecognition from "./KeyRecognition";
import DealCorner from "./DealCorner";
import Testimonials from "./Testimonials";
import Accolades from "./Accolades";
import RecentUpdates from "./RecentUpdates";
import Head from "./Head";


function Home() {
    return (
        <div>
            <Head />
            <KeyRecognition />
            <DealCorner />
            <Testimonials />
            <Accolades />
            <RecentUpdates />
        </div>
    )
}

export default Home;