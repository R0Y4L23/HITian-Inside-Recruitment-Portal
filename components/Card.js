/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Button, Card } from 'semantic-ui-react'
import Image from 'next/image'

const CardComponent = (props) => {
    return (
        <Card style={{height:550}}>
            <Card.Content>
                <Image
                    height={100}
                    width={100}
                    src={props.image}
                />
                <Card.Header style={{ marginTop: 20 }}>{props.position}</Card.Header>
                <Card.Description className="text-xl">
                    {props.desc}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <a href={props.link}>
                    <Button basic color='green'>
                       Apply Here
                    </Button>
                    </a>
                </div>
            </Card.Content>
        </Card>
    )
}

export default CardComponent