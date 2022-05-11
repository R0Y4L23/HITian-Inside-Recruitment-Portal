/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Button, Card } from 'semantic-ui-react'
import Image from 'next/image'

const CardComponent = (props) => {
    return (
        <Card>
            <Card.Content>
                <Image
                    height={100}
                    width={100}
                    src={props.image}
                />
                <Card.Header style={{ marginTop: 20 }}>{props.position}</Card.Header>
                {/* <Card.Description>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quae consequuntur voluptatem accusantium recusandae ea?
                </Card.Description> */}
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>
                        Coming Soon
                    </Button>
                </div>
            </Card.Content>
        </Card>
    )
}

export default CardComponent