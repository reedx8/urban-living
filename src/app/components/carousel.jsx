'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <Image
        src='/carousel/16-min.png'
        onDragStart={handleDragStart}
        role='presentation'
        width={500}
        height={334}
        alt='picture in carousel'
    />,
    <Image
        src='/carousel/17-min.jpg'
        onDragStart={handleDragStart}
        role='presentation'
        width={500}
        height={334}
        alt='picture in carousel'
    />,
    <Image
        src='/carousel/18-min.png'
        onDragStart={handleDragStart}
        role='presentation'
        width={500}
        height={334}
        alt='picture in carousel'
    />,
    <Image
        src='/carousel/19-min.png'
        onDragStart={handleDragStart}
        role='presentation'
        width={500}
        height={334}
        alt='picture in carousel'
    />,
    <Image
        src='/carousel/20-min.jpg'
        onDragStart={handleDragStart}
        role='presentation'
        width={500}
        height={334}
        alt='picture in carousel'
    />,
    <Image
        src='/carousel/11-min.jpg'
        onDragStart={handleDragStart}
        role='presentation'
        width={500}
        height={334}
        alt='picture in carousel'
    />,
    <Image
        src='/carousel/24-min.jpg'
        onDragStart={handleDragStart}
        role='presentation'
        width={500}
        height={334}
        alt='picture in carousel'
    />,
    <Image
        src='/carousel/21-min.jpg'
        onDragStart={handleDragStart}
        role='presentation'
        width={500}
        height={334}
        alt='picture in carousel'
    />,
    <Image
        src='/carousel/10-min.jpg'
        onDragStart={handleDragStart}
        role='presentation'
        width={500}
        height={334}
        alt='picture in carousel'
    />,
    <Image
        src='/carousel/22-min.jpg'
        onDragStart={handleDragStart}
        role='presentation'
        width={500}
        height={334}
        alt='picture in carousel'
    />,
    <Image
        src='/carousel/23-min.jpg'
        onDragStart={handleDragStart}
        role='presentation'
        width={500}
        height={334}
        alt='picture in carousel'
    />,
];

export default function Carousel() {
    return <AliceCarousel mouseTracking autoWidth infinite items={items} />;
}
