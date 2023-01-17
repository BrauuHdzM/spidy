import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown, faFaceMeh, faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const Encuesta = (props) => {

    const [show, setShow] = useState(true);
    const [optionEncuesta, setOptionEncuesta] = useState(null);


    useEffect(() => {
        if (props.idPrediction === null || optionEncuesta === null) {
            console.log("idPredictions===null || option === null");
        } else {
            console.log("idPredictions", props.idPrediction);
            console.log("option", optionEncuesta);
            const data = { idPrediction: props.idPrediction, surveyResult: optionEncuesta };

            axios.post('/predictions/encuesta', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                setShow(false);
            });

        }

    }, [optionEncuesta]);


    const handleClick1 = () => {
        setOptionEncuesta(1);
        setShow(false);
    }
    const handleClick2 = () => {
        setOptionEncuesta(2);
        setShow(false);
    }
    const handleClick3 = () => {
        setOptionEncuesta(3);
        setShow(false);
    }




    return (
        <div>
            {show ?
                (<div>
                    <p class="text-center"><i> <font color="grey"> ¡Ayúdanos a seguir mejorando Spidy!. Califica tu experiencia</font></i> </p>
                   <p class="text-center">
                    <Row>
                        <Col>
                        <div class="mx-auto">
                    <Button onClick={handleClick1} className="btnEncuesta btn btn-danger" ><p><br></br> <FontAwesomeIcon icon={faFaceFrown} size="lg"/><br></br>Pésima</p></Button>
                    </div>
                    </Col>
                    <Col className="d-flex justify-content-center">
                    <Button onClick={handleClick2} className="btnEncuesta btn btn-danger"><p><br></br><FontAwesomeIcon icon={faFaceMeh}  size="lg"/><br></br>Regular</p></Button>
                    </Col>
                    <Col className="d-flex justify-content-center">
                    <Button onClick={handleClick3} className="btnEncuesta btn btn-danger "><p><br></br><FontAwesomeIcon icon={faFaceSmile} size="lg"/><br></br>Positiva</p></Button>
                    </Col>
                    </Row>
                    </p>
                </div>)
                :
                (<p class="text-center"><i> <font color="grey">Muchas gracias, tus comentarios nos ayudan a seguir mejorando Spidy</font></i></p>)
            }
        </div>
    );
}
