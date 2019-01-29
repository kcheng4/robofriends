import React,{Component} from 'react';
import Card from './Card';
//import {robots} from './Robots';

class CardList extends Component {
  render(){
    const robots=this.props.robots;
    const cardComponent = robots.map((user, i) => {
      return (
        <Card
        key={robots[i].id}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
        />

      )
    });
    return(
      <div>
        {cardComponent}
      </div>
    );
  };
}

export default CardList;
