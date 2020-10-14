import React, { useState, UseEffect, useEffect } from 'react'
import ImageGallery from 'react-image-gallery';
import 'react-animated-slider/build/horizontal.css'
import './Gallery.css'
import "./GalleryFormat.css"
import axios from 'axios'

export default function Carosel() {
    const [images, setImages] = useState([])
    //const [imagesCleaned, setImagesCleaned] = useState([])
    useEffect(() => {
        axios.get('https://deep-stack.herokuapp.com/api/photos/allphotos')
            .then(res => {
                console.log(res)
                setImages(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const imagesCleaned = images.map(image => (
        { original: image.URL, thumbnail: image.URL, description: image.Title }
    ))
    console.log(imagesCleaned)

    // const images = [
    //     {
    //         original: 'https://picsum.photos/id/1018/1000/600/',
    //         originalTitle: "HI HI HI",
    //         description: "gdfbudvbndfvdf nfdjbnfdkjn  fdnbjfdnk dfn jfdnkfdn ",

    //         thumbnail: 'https://picsum.photos/id/1018/1000/600/',
    //     },
    //     {
    //         original: 'https://picsum.photos/id/1015/1000/600/',
    //         originalTitle: "HI HI HI",
    //         description: "gdfbudvbndfvdf nfdjbnfdkjn  fdnbjfdnk dfn jfdnkfdn ",
    //         thumbnail: 'https://picsum.photos/id/1018/1000/600/',
    //     },
    //     {
    //         original: 'https://picsum.photos/id/1019/1000/600/',
    //         originalTitle: "HI HI HI",
    //         description: "gdfbudvbndfvdf nfdjbnfdkjn  fdnbjfdnk dfn jfdnkfdn ",
    //         thumbnail: 'https://picsum.photos/id/1018/1000/600/',
    //     },
    // ];

    return (
        <div className="Gallery">
            <ImageGallery
                items={imagesCleaned}
                showPlayButton={false}
                height={"70vh"} />
        </div>
    )
}