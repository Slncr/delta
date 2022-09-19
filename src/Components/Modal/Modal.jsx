import React, {useCallback, useState} from "react";

import "./style.css";

export const Modal = ({isModalOpen, content, onClose, onOpen}) => {


    const backdropClasses = !isModalOpen ? 'backdrop-hide' : '' ;

    return (
        <div className={`backdrop ${backdropClasses}`}>
            <div className="modal">
                <button onClick={onClose}>krestic</button>
                <div className="modal-body">
                    <img height={200} width={300} src={content} alt=""/>
                </div>
            </div>
        </div>
    )
}