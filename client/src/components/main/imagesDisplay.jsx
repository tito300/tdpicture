import React from 'react';
import Img from "gatsby-image";

export default ({ shuffledEdges, size, openImageViewer }) => (
    <div id="work-display" className="photos-display">
        <div className="photo-display__column">
        {shuffledEdges.slice(0, size).map(({ node }, i)=> {
            if([4].includes(i)) return (<div id={`photo-${i}`} key={node.id} className={`photo-container`} data-id={node.id} onClick={openImageViewer}>
                <Img fluid={node.file.image.fluid} style={{marginBottom: '14px', transform: 'scale(1.1) rotate(-3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/>
            </div>)
            if([11].includes(i)) return (<div id={`photo-${i}`} key={node.id} className={`photo-container`} data-id={node.id} onClick={openImageViewer}><Img fluid={node.file.image.fluid} style={{marginBottom: '14px', transform: 'scale(1.1) rotate(3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/></div>)
            return (<div id={`photo-${i}`} key={node.id} className={`photo-container`} data-id={node.id} onClick={openImageViewer}><Img fluid={node.file.image.fluid} style={{marginBottom: '14px'}}/></div>)
        })}  
        </div>
        <div className="photo-display__column">
        {shuffledEdges.slice(size, (size + size)).map(({ node }, i)=> {
            if([6].includes(i)) return (<div id={`photo-${size + i}`} key={node.id} className={`photo-container`} data-id={node.id} onClick={openImageViewer}><Img fluid={node.file.image.fluid} style={{marginBottom: '14px', transform: 'scale(1.1) rotate(3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/></div>)
            if([10].includes(i)) return (<div id={`photo-${size + i}`} key={node.id} className={`photo-container`} data-id={node.id} onClick={openImageViewer}><Img fluid={node.file.image.fluid} style={{marginBottom: '14px', transform: 'scale(1.1) rotate(-3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/></div>)
            return (<div id={`photo-${size + i}`} className={`photo-container`} data-id={node.id} onClick={openImageViewer}><Img fluid={node.file.image.fluid} style={{marginBottom: '14px'}}/></div>)
            })} 
        </div>
        <div className="photo-display__column">
        {shuffledEdges.slice((size + size), (size + size + size)).map(({ node }, i)=> {
            if([1].includes(i)) return (<div id={`photo-${size + size + i}`} key={node.id} className={`photo-container`} data-id={node.id} onClick={openImageViewer}><Img fluid={node.file.image.fluid} style={{marginBottom: '14px', transform: 'scale(1.1) rotate(3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/></div>)
            if([4].includes(i)) return (<div id={`photo-${size + size + i}`} key={node.id} className={`photo-container`} data-id={node.id} onClick={openImageViewer}><Img fluid={node.file.image.fluid} style={{marginBottom: '14px', transform: 'scale(1.1) rotate(-3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/></div>)
                return (<div id={`photo-${size + size + i}`} className={`photo-container`} data-id={node.id} onClick={openImageViewer}><Img fluid={node.file.image.fluid} style={{marginBottom: '14px'}}/></div>)
        })} 
        </div>
        <div className="photo-display__column">
        {shuffledEdges.slice((size + size + size), (size + size + size + size)).map(({ node }, i)=> {
            if([6].includes(i)) return (<div id={`photo-${size + size + size + i}`} key={node.id} className={`photo-container`} data-id={node.id} onClick={openImageViewer}><Img fluid={node.file.image.fluid} style={{marginBottom: '14px', transform: 'scale(1.1) rotate(3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/></div>)
            if([11].includes(i)) return (<div id={`photo-${size + size + size + i}`} key={node.id} className={`photo-container`} data-id={node.id} onClick={openImageViewer}><Img fluid={node.file.image.fluid} style={{marginBottom: '14px', transform: 'scale(1.1) rotate(-3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/></div>)
                return (<div id={`photo-${size + size + size + i}`} key={node.id} className={`photo-container`} data-id={node.id} onClick={openImageViewer}><Img fluid={node.file.image.fluid} style={{marginBottom: '14px'}}/></div>)
        })}
        </div>
    </div>
)