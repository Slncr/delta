import React from "react"


function ImagesBlock({imageId, imageUrl}) {
    
    return (
        <div className="Container">
        <div className="content__items">
            <img 
            className="content__items"
            src={imageUrl}
            alt="img"
            
            />
            
            <h4 className="image__id">{imageId}</h4>
        </div>
        </div>
    )
} 



export default ImagesBlock
