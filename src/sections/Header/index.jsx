import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { data } from '../contents/header';
const Header = () => {
    return (
        <div className='flex flex-col gap-2'>
        <div className='text-3xl text-primaryTitle font-semibold'>{data.name}</div>
        <div className=' text-primaryAccent font-semibold'>{data.title}</div>
        <div className='text-sm w-5/6'>{data.caption}</div>
        <div className='mt-4'>
          <a href={data.link} target='blank'>
            <span className='bg-primaryTitle rounded-md text-gray-200 py-2 px-3'>
              {data.btnText}
              <span className='inline-block rotate-90 ml-2'>
                <FontAwesomeIcon icon={faArrowDown} className='animate-bounce' />
              </span>
            </span>
          </a>
        </div>
      </div>
    );
  };
  
  export default Header;