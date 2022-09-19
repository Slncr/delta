import React, {useCallback} from "react"


export const ImagesBlock = ({imageId, imageUrl, openModal}) => {

    const openModalWithContent = useCallback(() => {
        openModal(imageUrl)
    }, [imageUrl, openModal])
    
    return (
        <div className="Container">
            <div className="content__items">
                <img
                className="content__items"
                src={imageUrl}
                alt="img"
                onClick={openModalWithContent}
                />

                <h4 className="image__id">{imageId}</h4>
            </div>
        </div>
    )
}