import {useEffect} from "react";
import "./Detail.css";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { updateCounter } from "../../features/counter/counterSlice";
function Detail() {
  const counter = useSelector((state) => state.counter);

  const dispatch=useDispatch();
  console.log(counter)

  const handleclick=()=>(
    dispatch(updateCounter({
      id:Number(id),
      visit: 1
    }))

  )
  const { id } = useParams();



  useEffect(() => {
    handleclick()

  }, []);
  return (
    <Container className="detailContainer">
    <Helmet> 
      <title>Eatzy Product Details</title>
      <meta name="description"
      content="Get info for all your favourite products details"
      />
       <meta name="keywords"
      content="products,gift"
      />
      </Helmet>
      <Row className="cardDt" xs="12">
        {counter
          .filter((fltr) => fltr.id === Number(id))
          .map((flt) => (
            <div  key={flt.id}>
              <Col xs="12"  className="imageBox">
                {" "}
                <Image
                  src={`https://eatzy.vercel.app/${flt.image}`}
                  rounded
                  className="detailImage"
                />
              </Col>
              <Col xs="12" >
                {" "}
                <h1>{flt.name}</h1>
                <hr></hr>
                <p>{flt.category}</p>
                <hr></hr>
                <p>{flt.explain}</p>
                <hr></hr>
                <div className="textReadMore">
                  <div className="textReadMoreChild ">
                    {" "}
                    <Button variant="outline-danger">{flt.price}</Button>{" "}
                  </div>
                  <div className="textReadMoreChild">
                    <Button>Add To Cart</Button>
                  </div>
                </div>
              </Col>
            </div>
          ))}
      </Row>
    </Container>
  );
}

export default Detail;
