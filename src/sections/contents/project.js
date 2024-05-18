import { faGithub } from "@fortawesome/free-brands-svg-icons";
import perfumeImage from "../../assets/project/perfume.png";
import picExp from "../../assets/project/petcare.png";
import repairkitImage from "../../assets/project/repairkit.png";
export const dataProj = [
    {
        date: "2021 - 2022",
        title: "Perfume Application",
        link: "https://github.com/khunmostz/Perfume-Application",
        materials: [
            {
                type: faGithub,
                link: "https://github.com/khunmostz/Perfume-Application"
            }
        ],
        descriptions: [
            "Perfume Application is a mockup application that collects many famous brand perfumes. The system is about e-commerce and has a payment system using Omise."
        ],
        skills: [
            ["Flutter", "Firebase"],
        ],
        pic: perfumeImage,
    },
    {
        date: "2021 - 2022",
        title: "Petcare Application",
        link: "https://github.com/khunmostz/petcareapplication",
        materials: [
            {
                type: faGithub,
                link: "https://github.com/khunmostz/petcareapplication"
            }
        ],
        descriptions: [
            "PetCare is a Flutter application that allows users to find nearby veterinary clinics within a 5-kilometer radius and record their pet expenses. Users can view vaccination schedules provided by veterinarians, while veterinarians can perform health checkups on pets and record examination data."
        ],
        skills: [
            ["Flutter", "Firebase"],
        ],
        pic: picExp,
    },
    {
        date: "2021 - 2022",
        title: "Repairkit Application",
        link: "https://github.com/khunmostz/repairkit",
        materials: [
            {
                type: faGithub,
                link: "https://github.com/khunmostz/repairkit"
            }
        ],
        descriptions: [
            "The Repairkit Application is a tool rental system that enables you to work conveniently and quickly, saving money on purchasing equipment you might only use 2-3 times."
        ],
        skills: [
            ["Flutter", "FCM", "Push Notification","Chat"],
        ],
        pic: repairkitImage,
    },
]