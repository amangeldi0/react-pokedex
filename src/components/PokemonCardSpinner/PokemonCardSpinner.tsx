import React from "react";

export const Spinner = () => {
    return (
        <div className='pokemon__card__skeleton'>
            <div className="number__skeleton"></div>
            <div className="types__skeleton">
                <div className="types__circle"></div>
                <div className="types__circle"></div>
            </div>
            <div className="image_skeleton"></div>
            <div className="name_skeleton"></div>
        </div>
    );
};