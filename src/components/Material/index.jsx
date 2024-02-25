import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Material = ({ icon, link }) => {
    return (
        <a href={link} target="blank" className="transition-all hover:scale-110">
            <FontAwesomeIcon icon={icon} />
        </a>
    );
}

export default Material