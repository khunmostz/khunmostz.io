import Contact from "../Contact";
import Header from "../Header";
import Navbar from "../Navbar";

const LeftSection = ({ navBarItems, currentSection }) => {
    return (
        <div className="px-5">
            <div className='sticky top-14 grid gap-y-5 lg:grid-rows-[1fr_2fr_20%] lg:h-[86vh]'>
                <Header />
                <Navbar navBarItems={navBarItems} currentSection={currentSection} />
                <Contact />
            </div>
        </div>
    );
}

export default LeftSection;