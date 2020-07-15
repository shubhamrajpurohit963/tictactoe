import React, { useState } from "react";
import Icon from "./components/Icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false)
    setWinMessage("")
    itemArray.fill("empty",0,9)
  };

  const checkIsWinner = () => {
    if(itemArray[0] === itemArray[1] 
        && itemArray[0] === itemArray[2]
        && itemArray[0] !== "empty"){
            setWinMessage(`${itemArray[0]} Won`)
        }
    else if(itemArray[3] === itemArray[4] 
        && itemArray[3] === itemArray[5]
        && itemArray[3] !== "empty"){
            setWinMessage(`${itemArray[3]} Won`)
    }
    else if(itemArray[6] === itemArray[7] 
        && itemArray[6] === itemArray[8]
        && itemArray[6] !== "empty"){
            setWinMessage(`${itemArray[6]} Won`)
    }
    else if(itemArray[0] === itemArray[3] 
        && itemArray[3] === itemArray[6]
        && itemArray[0] !== "empty"){
            setWinMessage(`${itemArray[0]} Won`)
    }
    else if(itemArray[1] === itemArray[4] 
        && itemArray[4] === itemArray[7]
        && itemArray[1] !== "empty"){
            setWinMessage(`${itemArray[1]} Won`)
    }
    else if(itemArray[2] === itemArray[5] 
        && itemArray[5] === itemArray[8]
        && itemArray[2] !== "empty"){
            setWinMessage(`${itemArray[2]} Won`)
    }
    else if(itemArray[0] === itemArray[4] 
        && itemArray[4] === itemArray[8]
        && itemArray[0] !== "empty"){
            setWinMessage(`${itemArray[0]} Won`)
    }
    else if(itemArray[2] === itemArray[4] 
        && itemArray[4] === itemArray[6]
        && itemArray[2] !== "empty"){
            setWinMessage(`${itemArray[2]} Won`)
    }
  };

  const istie = () =>{
    if(itemArray[0] === "circle" || itemArray[0] === "cross"){
        if(itemArray[1] === "circle" || itemArray[1] === "cross"){
          if(itemArray[2] === "circle" || itemArray[2] === "cross"){
            if(itemArray[3] === "circle" || itemArray[3] === "cross"){
              if(itemArray[4] === "circle" || itemArray[4] === "cross"){
                if(itemArray[5] === "circle" || itemArray[5] === "cross"){
                  if(itemArray[6] === "circle" || itemArray[6] === "cross"){
                    if(itemArray[7] === "circle" || itemArray[7] === "cross"){
                      if(itemArray[8] === "circle" || itemArray[8] === "cross"){
                        setWinMessage("Match Tied")
                      }
                    }
                  }
                }
              }
            }
          }
        }

    }
  }

  const changeItem = itemNumber => {
    if(winMessage){
        return toast(winMessage,{type:"success"})
    }
    if(itemArray[itemNumber] == "empty"){
        itemArray[itemNumber] = isCross ? "cross" : "circle"
        setIsCross(!isCross)
    }else{
        return toast("already filled",{type:"error"})
    }
    checkIsWinner()
    istie()
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
            {winMessage ? (
                <div className="mb-2 mt-2"> 
                    <h1 className="text-success text-uppercase text-center">{winMessage}</h1>
                    <button color="success block" onClick={reloadGame}>Reload</button>
                </div>
            ) : (
                <h1 className="text-center text-dark">
                    {isCross ? "Cross" : "Circle"}'s Turn
                </h1>
            )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card color="dark" onClick={()=>{changeItem(index)}}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
