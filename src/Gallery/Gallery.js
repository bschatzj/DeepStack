import React, { useState, UseEffect } from 'react'
import ImageGallery from 'react-image-gallery';
import 'react-animated-slider/build/horizontal.css'
import './Gallery.css'
import "./GalleryFormat.css"
export default function Carosel() {


    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/1000/600/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/1000/600/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/1000/600/',
        },
    ];

    return (
        <div className="Gallery">
            <ImageGallery items={images}
                showPlayButton={false}
                height={"70vh"} />
        </div>
    )
}