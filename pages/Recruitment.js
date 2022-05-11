/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import img from "../assets/inside.jpg"
import cr from "../assets/blogger.png"
import ve from "../assets/film-editor.png"
import pr from "../assets/public-relations.png"
import wd from "../assets/web-development.png"
import gd from "../assets/graphic-designer.png"
import pg from "../assets/photographer.png"
import {  Card } from 'semantic-ui-react'
import CardComponent from '../components/Card'
import Head from 'next/head'

const Recruitment = () => {
    return (
        <>
        <Head>
        <title>RECRUITMENT | HITian Inside</title>
       </Head>
        <section className='back2 pb-20'>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: 50 }}>
                <h1 style={{ marginTop: 20,fontSize:40 }}>Apply Now</h1>
                <p className="md:text-2xl text-center mt-20 px-20">Get ready to embrace a magical spree as HITian INSIDE is recruiting. Hold your breaths, tie your laces and gear up to be a part of the Maroon Squad. We are eagerly waiting to welcome the on boarders to the most scintillating ride.</p>
            </div>
            <p className='text-5xl text-center mt-40 mb-32 '>Positions Available</p>
            <Card.Group className="my-20">
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto lg:gap-x-32 gap-x-20'>
                <CardComponent link="https://docs.google.com/forms/d/e/1FAIpQLSdaiPa4M52onmzGcFD29WyqCt-WNgKvMfw6D4yS1jDFZg6ehg/viewform" image={cr} desc="The most exciting thing about a writer is that there is always an empty page . The most dreadful thing about a writer is also that there is always another empty page. Content writing is an art of great dedication and if seriously taken can help you grow. We recruit content writers, people who like to pen down thoughts on the cellulose." position="Content Writer" />
                <CardComponent link="https://docs.google.com/forms/d/e/1FAIpQLSevlyJPK_cWLX3BjxTfVuCJ34mZMDtGlKwPLJd2Fm9N_m297A/viewform" image={wd} desc="Being an online media provider inside college we people need to maintain our website regularly. For designing and up-gradation of the website , here we want to recruit you, the web designing enthusiast in our college premises." position="Web Developer" />
                <CardComponent link="https://docs.google.com/forms/d/e/1FAIpQLSeTKkbPJHOUBXRtarosYFwaepYn0sVXJV4Yebm5ChbK3xbDJA/viewform" image={gd} desc="If you are mad about making short timed arts with low labor and high creative mentality then we people are specifically waiting for you and we'll  be happy enough to include you in our Inside family." position="Graphic Designer" />
                <CardComponent link="https://docs.google.com/forms/d/e/1FAIpQLScD8eAfEdU1nLACXoDHk-nG3LQOB6ftSE-ZBn5FBnJW9Weo_Q/viewform" image={pr} desc="Face of the team with good communication skills and public dealing." position="Public Relation" />
                <CardComponent link="https://docs.google.com/forms/d/e/1FAIpQLScIjDGFVN1c3gjx5ZBipEw8GZS0LeGhZTqaNK0F4Fm0lFp6gA/viewform" image={ve} desc="Video editing is the process of editing segments of motion video production footage, special effects and sound recordings in the post-production process" position="Video Editor" />
                <CardComponent link="https://docs.google.com/forms/d/e/1FAIpQLScm0MTvp_ya2owrufduhGbIGaZ7Wc3Tk3jT-JBs5-W-d-k53w/viewform" image={pg} desc="Eye of the team. Seek for field and focus on the work. Make events memorable and works to be portrayed for the juniors to come." position="Photographer"/>
                </div>
            </Card.Group>
            </section>   
        </>
    )
}

export default Recruitment