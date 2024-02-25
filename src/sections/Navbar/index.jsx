import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const navs = [
    {
        title: "About",
        sectionId: "About-section",
    },
    {
        title: "Experience",
        sectionId: "Experience-section",
    },
    {
        title: "Project",
        sectionId: "Project-section",
    },
    // {
    //     title:"Article",
    //     sectionId:"Article-section",
    // },
]

const Navbar = ({ navBarItems, currentSection }) => {

    const [isMouseEnter, setIsMouseEnter] = useState({})

    const handleClick = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });

    }


    return (
        <div className='flex flex-col font-semibold'>

            {
                navBarItems.map((nav, index) => (
                    <div key={`nav-${index}`}
                        onClick={() => handleClick(nav.sectionId)}
                        onMouseEnter={() => setIsMouseEnter(
                            {
                                [nav.title]: true
                            }
                        )}
                        onMouseLeave={() => setIsMouseEnter(
                            {
                                [nav.title]: false
                            }
                        )}
                        className='cursor-pointer flex py-2'>
                        <div>
                            <FontAwesomeIcon icon={faArrowRight}
                            
                             className={`mr-2 new-arrow ${currentSection === nav.sectionId ? "text-primaryTitle" : isMouseEnter[nav.title] ? "" : "hidden"}`} />
                        </div>
                        <div className={`${currentSection === nav.sectionId || isMouseEnter[nav.title] ? "translate-x3" : ""} duration-500 ease-out`}>
                            {nav.title}
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default Navbar;