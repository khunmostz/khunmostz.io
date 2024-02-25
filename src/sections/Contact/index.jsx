import { faGithub,faMedium,faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return <div className='flex items-end gap-4 text-2xl'>
    <FontAwesomeIcon icon={faGithub} className='hover:scale-125 hover:text-primaryTitle transition-all' />
    <FontAwesomeIcon icon={faMedium} className='hover:scale-125 hover:text-primaryTitle transition-all' />
    <FontAwesomeIcon icon={faLinkedin} className='hover:scale-125 hover:text-primaryTitle transition-all' />
  </div>
    
}

export default Contact;