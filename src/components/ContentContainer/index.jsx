import React, { useEffect, useState } from 'react'
import FormattedDate from '../FormattedDate';
import Picture from '../Picture';
import TitleLink from '../TitleLink';
import Description from '../Desciption';
import Tech from '../Tech';
import Material from '../Material';

const ContentContainer = ({
    onInitial,
    title:sectionTitle= "",
data = []}) => {
   
    const [isMouseEnter, setIsMouseEnter] = useState({});

    const SECTION_ID = `${sectionTitle}-section`

    useEffect(() => {
        onInitial(SECTION_ID)
    },[])

    return (
        <div id={SECTION_ID} className='scroll-m-14'>
            <div className="text-primaryAccent font-bold px-2">{sectionTitle}</div>
            {
                data.map((
                    {
                        date,
                        title,
                        link,
                        materials,
                        descriptions,
                        pic,
                        skills
                    }, index) => {
                    return <div
                    id={`${SECTION_ID}-${index}`}
                    key={`section-${index}`} className={`grid grid-cols-[25%_75%] transition-all duration-300 ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-primaryBase" : ""} rounded-md px-2 py-6`}
                        onMouseEnter={() => setIsMouseEnter({
                           [`${SECTION_ID}-${index}`]: true
                        })}
                        onMouseLeave={() => setIsMouseEnter({[`${SECTION_ID}-${index}`]: false })}
                    >
                        <div>
                            <FormattedDate isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}>{date}</FormattedDate>
                            <Picture picture={pic} title={title} />
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <TitleLink isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} title={title} link={link} />
                            {materials.length >0 ?    <div className="flex gap-x-4 text-xl items-center">
                                {
                                    materials.map((e, index) => {
                                        return <Material key={`${e}-material-${index}`} icon={e.type} link={e.link} />
                                    })
                                }

                            </div>: null}

                            {
                                descriptions.map((e, index) => {
                                    return <Description key={`${e}-desc-${index}`} description={e}/>
                                })

                            }
                            {
                                skills.map((e, index) => {
                                    return <Tech key={`${e}-tech-${index}`} isHighLight={isMouseEnter['exp1']} data={e} />
                                })
                            }
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default ContentContainer