import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'


export default ({ shuffledEdges, openViewer, closeImageViewer, handleArrowClick, imgRef, currentViewerId }) => {
    return (
        <div onClick={closeImageViewer} className={openViewer ? `viewer-wrapper open` : 'viewer-wrapper'}>
            <div className="viewer-box">
                <div className="close-btn" onClick={closeImageViewer}>X</div>
                <div className="viewer-image__wrapper" >
                    <div><IoIosArrowBack className="viewer__arrow-back" onClick={handleArrowClick}/></div>
                    {currentViewerId !== null ? <img ref={imgRef} className={`viewer-img {animate}`}
                                                    srcSet={shuffledEdges[currentViewerId].node.file.image.fluid.srcSet} style={{maxHeight: '100%'}}/>
                        : null}
                    <div><IoIosArrowForward className="viewer__arrow-forward" onClick={handleArrowClick}/></div>  
                </div>
            </div>
        </div>
    )
}