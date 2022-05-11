/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import img from "../assets/inside.jpg"
import cr from "../assets/blogger.png"
import ve from "../assets/film-editor.png"
import pr from "../assets/public-relations.png"
import wd from "../assets/web-development.png"
import gd from "../assets/graphic-designer.png"
import {  Card } from 'semantic-ui-react'
import CardComponent from '../components/Card'
import Head from 'next/head'

const Recruitment = () => {
    return (
        <>
        <Head>
        <title>RECRUITMENT | HITian Inside</title>
       </Head>
        <section className='back2'>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: 50 }}>
                <h1 style={{ marginTop: 20,fontSize:40 }}>Recruitments Opening Soon</h1>
                <p style={{ marginTop: 20, width: 600, textAlign: "center" }} className="text-2xl">Get ready to embrace a magical spree as HITian INSIDE is recruiting soon. Hold your breaths, tie your laces and gear up to be a part of the Maroon Squad. We are eagerly waiting to welcome the on boarders to the most scintillating ride. Stay tuned for further updates.</p>
            </div>
            <p className='text-5xl ml-10 mt-24 '>Positions Available</p>
            <Card.Group style={{ marginTop: 40, display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center",flexWrap:"wrap",paddingBottom:80 }}>
                <CardComponent image={cr} position="Content Writer" />
                <CardComponent image={wd} position="Web Developer" />
                <CardComponent image={gd} position="Graphics Designer" />
                <CardComponent image={pr} position="Public Relations" />
                <CardComponent image={ve} position="Video Editor" />
            </Card.Group>
            </section>   
        </>
    )
}

export default Recruitment