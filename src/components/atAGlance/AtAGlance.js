import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHelicopter, faUserAlt, faRetweet } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './AtAGlance.css'

const AtAGlance = () => {

    const helicopter = <FontAwesomeIcon icon={faHelicopter} />
    const user = <FontAwesomeIcon icon={faUserAlt} />
    const revisit = <FontAwesomeIcon icon={faRetweet} />


    return (
        <div>
            <Row xs={1} sm={1} md={2} lg={3} className="m-2">


                <Col className="p-3">
                    <div className="my-3 shadow border border-muted border-1 p-3">
                        <div className="font-size text-muted text-center">{helicopter}
                        </div>
                        <h3 className="text-success text-center">Total 7000 trip Completed</h3>
                    </div>
                </Col>
                <Col className="p-3">
                    <div className="my-3 shadow border border-muted border-1 p-3">
                        <div className="font-size text-muted text-center">{user}
                        </div>
                        <h3 className="text-success text-center"> 21000 Happy Client</h3>
                    </div>
                </Col>
                <Col className="p-3">
                    <div className="my-3 shadow border border-muted border-1 p-3">
                        <div className="font-size text-muted text-center">{revisit}
                        </div>
                        <h3 className="text-success text-center"> 9452 Person Revisited</h3>
                    </div>
                </Col>



            </Row>
        </div>
    );
};

export default AtAGlance;