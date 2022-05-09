/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import img from "../assets/inside.jpg"
import cr from "../assets/blogger.png"
import ve from "../assets/film-editor.png"
import pr from "../assets/public-relations.png"
import wd from "../assets/web-development.png"
import gd from "../assets/graphic-designer.png"
import { Segment } from 'semantic-ui-react'
import { Button, Card } from 'semantic-ui-react'
import CardComponent from '../components/Card'
import Image from 'next/image'

const Index = () => {
  return (
    <>
      <svg xmlnsXlink=''> </svg>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
        <Image src={img} width={300} height={300} />
        <h1 style={{ marginTop: 20 }}>Recruitments Opening Soon</h1>
        <p style={{ marginTop: 20, width: 600, textAlign: "center" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusamus quae odio atque, deleniti velit tempora quidem consequatur aspernatur, consequuntur dicta corporis praesentium neque laborum laboriosam! Adipisci soluta debitis doloremque?</p>
      </div>
      <Card.Group style={{ marginTop: 40, display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
        <CardComponent image={cr} position="Content Writer" />
        <CardComponent image={wd} position="Web Developer" />
        <CardComponent image={gd} position="Graphics Designer" />
        <CardComponent image={pr} position="Public Relations" />
        <CardComponent image={ve} position="Video Editor" />
      </Card.Group>
    </>
  )
}

export default Index