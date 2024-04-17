'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <Image
        src='/carousel/1.jpg'
        onDragStart={handleDragStart}
        role='presentation'
        width={500}
        height={300}
        alt='picture in carousel'
    />,
    <Image
        src='/carousel/2.jpg'
        onDragStart={handleDragStart}
        role='presentation'
        width={500}
        height={300}
        alt='picture in carousel'
    />,
    <Image
        src='/carousel/3.jpg'
        onDragStart={handleDragStart}
        role='presentation'
        width={500}
        height={300}
        alt='picture in carousel'
    />,
    <Image
        src='/carousel/4.jpg'
        onDragStart={handleDragStart}
        role='presentation'
        width={500}
        height={300}
        alt='picture in carousel'
    />,
    <Image
        src='/carousel/5.jpg'
        onDragStart={handleDragStart}
        role='presentation'
        width={500}
        height={300}
        alt='picture in carousel'
    />,
    <Image
        src='/carousel/6.jpg'
        onDragStart={handleDragStart}
        role='presentation'
        width={500}
        height={300}
        alt='picture in carousel'
    />,
    <Image
        src='/carousel/7.jpg'
        onDragStart={handleDragStart}
        role='presentation'
        width={500}
        height={300}
        alt='picture in carousel'
    />,
    <Image
        src='/carousel/8.jpg'
        onDragStart={handleDragStart}
        role='presentation'
        width={500}
        height={300}
        alt='picture in carousel'
    />,
];

export default function Carousel() {
    return <AliceCarousel mouseTracking autoWidth infinite items={items} />;
}
