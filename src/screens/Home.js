import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Card from '../components/card'

export default function Home() {
    return (
        <div>
            <div><Navbar /></div>
            <div><Carousel/></div>
            <div className='m-3'>
            <Card/>
            <Card/>
            <Card/>
            </div>
            <div><Footer /></div>

        </div>
    )
}
