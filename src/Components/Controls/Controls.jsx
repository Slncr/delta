import React, { useContext } from 'react';
import { ModalContext } from "../../Context";

import "./style.css";

export const Controls = () => {
    const { openModal } = useContext(ModalContext);
    
    const handleClick = () => {
        openModal({title: 'asd'});
    }

    return (
        <div>
            <button onClick={handleClick}>asd</button>
        </div>
    )
}
