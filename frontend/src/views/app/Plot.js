import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import {Table, Card, Row, Col} from 'react-bootstrap';
// import {Link} from 'react-router-dom';

const Plot = () => {

  const [plots, setPlot] = useState([]);
  
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = "http://127.0.0.1:8000/app/plot/"
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
      setPlot(json)
      console.log(json, "json");
      return json;
    }, [])
    .catch((error) => {
      console.error(error);
    })
  },[]);

  // useEffect(() => {
  //   if(data.length !==0){
  //     setIsLoading(true);
  //   }
  //   console.log(data);
  // },[data]);

    return (
      <div className="content">
      <br />
      <Row>
        <Col>
        <Card>
      <Card.Header>
        <h4>View Plot Information</h4>
        {/* <Link className="btn btn-warning" to="/add">Add New Plot</Link> */}
      </Card.Header>
      <Card.Body>
          <Table stripped bordered hover size="sm">
            <thead>
            <tr>
              <th width="170">Plot Number</th>
              <th width="170">Plot Image</th>
              <th width="170">Date Updated</th>
              <th width="170">Action</th>           
            </tr>
            </thead>

          <tbody>
          { 
          plots.map((con, index) => (
          <tr key={con.index}>
            
            <td>{con.plot_number}</td>
          </tr>

          ))
          }

          </tbody>
          </Table>
          </Card.Body>
          </Card>

        </Col>
      </Row>
      </div>

    )
}

export default Plot;