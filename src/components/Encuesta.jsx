import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown, faFaceMeh, faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

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
                    <Button onClick={handleClick1}><FontAwesomeIcon icon={faFaceFrown} /></Button>
                    <Button onClick={handleClick2}><FontAwesomeIcon icon={faFaceMeh} /></Button>
                    <Button onClick={handleClick3}><FontAwesomeIcon icon={faFaceSmile} /></Button>
                </div>)
                :
                (<p>Encuesta contestada</p>)
            }
        </div>
    );
}
