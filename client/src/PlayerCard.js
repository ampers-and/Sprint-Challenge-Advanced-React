import React from 'react';
import { Card } from 'semantic-ui-react'


export default function PlayerCard(props){

    console.log(props);
    const player = props.player;
    console.log(player);

    return(
        <Card>
            <Card.Content>
                <Card.Header>{player.name}</Card.Header>
                <Card.Meta>{player.country}</Card.Meta>
                <Card.Description>
                Searches: {player.searches}
                </Card.Description>
            </Card.Content>
        </Card>
    )

}