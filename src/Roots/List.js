import React from 'react'
 import CardList from '../Components/Card/CardList';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/Css/List.css";
import { Container,Row } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
function List() {
    const counter = useSelector((state) => state.counter);

   return (
    <Container style={{maxWidth:1080}}>
    <Helmet> 
      <title>Eatzy Product List</title>
      <meta name="description"
      content="Get info for all your favourite products list"
      />
       <meta name="keywords"
      content="products,gift"
      />
      </Helmet>
    <Row className='ListContainer'>
    {
      counter.map((count)=>(
        <CardList key={count.id} id={count.id} image={count.image} 
        name={count.name} category={count.category} visit={count.visit} />
      ))
    }
      
    </Row>

    </Container>
  )
}

export default List