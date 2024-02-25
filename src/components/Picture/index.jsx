import React from 'react'

const Picture = ({picture,title}) => {
    if(!picture) return null
    return (
        <div className="w-5/6 rounded-md border-2 border-primarySubContent">
            <img src={picture} alt={title} />
        </div>
    )
}

export default Picture