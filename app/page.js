import Home from "./barebones";
import dynamic from "next/dynamic";
import ScrollAnimation from "./ScrollAnimation";



function pageWithAnimation() {

    return (
        <>
            <Home />
            <ScrollAnimation />
        </>
    );
}
export default pageWithAnimation;