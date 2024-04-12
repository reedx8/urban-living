'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// import one from '../assets/carousel/1.jpg';
// import two from '../assets/carousel/2.jpg';
// import three from '../assets/carousel/3.jpg';
// import four from '../assets/carousel/4.jpg';
// import five from '../assets/carousel/5.jpg';
// import six from '../assets/carousel/6.jpg';
// import seven from '../assets/carousel/7.jpg';
// import eight from '../assets/carousel/8.jpg';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img
        src='/carousel/1.jpg'
        onDragStart={handleDragStart}
        role='presentation'
    />,
    <img
        src='/carousel/2.jpg'
        onDragStart={handleDragStart}
        role='presentation'
    />,
    <img
        src='/carousel/3.jpg'
        onDragStart={handleDragStart}
        role='presentation'
    />,
    <img
        src='/carousel/4.jpg'
        onDragStart={handleDragStart}
        role='presentation'
    />,
    <img
        src='/carousel/5.jpg'
        onDragStart={handleDragStart}
        role='presentation'
    />,
    <img
        src='/carousel/6.jpg'
        onDragStart={handleDragStart}
        role='presentation'
    />,
    <img
        src='/carousel/7.jpg'
        onDragStart={handleDragStart}
        role='presentation'
    />,
    <img
        src='/carousel/8.jpg'
        onDragStart={handleDragStart}
        role='presentation'
    />,
];

export default function Carousel() {
    return <AliceCarousel mouseTracking autoWidth infinite items={items} />;
}
