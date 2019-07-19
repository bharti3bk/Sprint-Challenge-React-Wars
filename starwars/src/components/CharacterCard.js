import React, {useEffect, useState} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import axios from "axios" 
import '../../src/App.css'

function CharacterCard(props) {
    const [person, setstate] = useState(props.person)
    
    useEffect(() => {
     axios.get(person.homeworld).then(res => {
          console.log(res);
          person.home = res.data.name;
          console.log(person.home);
          setstate(person)
        });
    },[person]);
    
    if(person.home != null) {
    return (
        <Card>
        <img id ="StarWarsImgs" src={props.img} wrapped ui={false} size="small" />
        <Card.Content>
          <Card.Header>{person.name}</Card.Header>
          <Card.Meta>From {person.home}</Card.Meta>
          <Card.Description>
            {`Height: ${person.height} Mass: ${person.mass}`}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='fighter jet' />
            {`${person.starships.length} starships`}
          </a>
        </Card.Content>
      </Card>
       )
    } else 
    {
        return <div>Loading...</div>
    }
}
export default CharacterCard ;