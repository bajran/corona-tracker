import React, { useState } from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CornaPrecautions = (props) => {
  const [modalSympton, setModal] = useState(false);
  const [modalDoDont, setmodalDoDont] = useState(false);
  const [modalPrecaution, setmodalPrecaution] = useState(false);
  
  const {
    buttonLabel,
    className
  } = props;

  const toggleSympton = () => setModal(!modalSympton);
  const toggleDoDont = () => setmodalDoDont(!modalDoDont);
  const togglePrecaution = () => setmodalPrecaution(!modalPrecaution)

  return (
    <Row>
    {/* Sympton Modal */}
      <Col sm="4">
        <Card body className="card-precautions-body cp">
          <CardTitle className="corna-title">Coronavirus - Symptons</CardTitle>
          <CardText>
            Source- <a href="https://www.who.int/health-topics/coronavirus">WHO</a>
          </CardText>
          <Button color="danger" onClick={toggleSympton}>
          Know more
          </Button>
        </Card>
      </Col>
      <Modal isOpen={modalSympton} toggle={toggleSympton} className={className}>
        <ModalHeader toggle={toggleSympton}>Symptons</ModalHeader>
        <ModalBody>
            <h6 style={{fontSize: '13px'}}>
                The COVID-19 virus affects different people in different ways.  
                COVID-19 is a respiratory disease and most infected people will 
                develop mild to moderate symptoms and recover without requiring special treatment.  
                People who have underlying medical conditions and those over 60 years old have a higher risk of 
                developing severe disease and death.
            </h6>
            <pre>
            Common symptoms:<br/>
                fever<br/>
                tiredness<br/>
                dry cough.<br/><br/>
            Other symptoms:<br/>
                shortness of breath<br/>
                aches and pains<br/>
                sore throat<br/>
                and very few people will report diarrhoea, nausea or a runny nose.<br/>
            </pre>
            <h6 style={{fontSize: '13px'}}>People with mild symptoms who are otherwise healthy should self-isolate and 
            contact their medical provider or a COVID-19 information line for advice on testing and referral.</h6>
            <h6 style={{fontSize: '13px'}}>People with fever, cough or difficulty breathing should call their doctor and 
            seek medical attention.</h6>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleSympton}>
           Close
          </Button>
        </ModalFooter>
      </Modal>

{/* Do Don't Modals */}
      <Col sm="4">
        <Card body className="card-precautions-body cp">
          <CardTitle className="corna-title">Coronavirus - Do's & Don'ts</CardTitle>
          <CardText>
            Source - <a href="https://dot.gov.in/whatsnew/dos-and-donts-noval-coronavirus-covid-19">Government</a>
          </CardText>
          <Button color="warning" onClick={toggleDoDont}>
          Know more
          </Button>
        </Card>
      </Col>
      <Modal isOpen={modalDoDont} toggle={toggleDoDont} className={className}>
        <ModalHeader toggle={toggleDoDont}>Do's and Don'ts</ModalHeader>
        <ModalBody>
            <h6>
                Do's
            </h6>
            <ul> 
                <li>Avoid crowded places or Avoid participating in large gatherings </li> 
                <li>Practice frequent hand washing. Wash hands with soap and water or use alcohol based hand rub.</li> 
                <li>Cover your nose and mouth with handkerchief/tissue while sneezing and coughing</li> 
                <li>Throw used tissues into closed bins immediately after use</li> 
                <li>See a doctor if you feel unwell (fever, difficult breathing and cough). While visiting doctor wear a mask/cloth to cover your mouth and nose</li> 
            </ul><br/>

            <h6 >
                Don'ts
            </h6>
            <ul> 
                <li>Have a close contact with anyone, if you’re experiencing cough and fever</li>
                <li>Touching eyes, nose or mouth with unwashed hands while coughing or sneezing </li> 
                <li>Spitting in public places </li> 
                <li>Disposal of used napkin or tissue paper in open areas </li> 
            </ul>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleDoDont}>
           Close
          </Button>
        </ModalFooter>
      </Modal>

    {/* WHO Precautions */}
      <Col sm="4">
        <Card body className="card-precautions-body cp">
          <CardTitle className="corna-title">Coronavirus - Prevention</CardTitle>     
          <CardText>
            Source - <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">WHO</a>
          </CardText>     
          <Button color="primary" onClick={togglePrecaution}>
            Know more
          </Button>
        </Card>
      </Col>
      <Modal isOpen={modalPrecaution} toggle={togglePrecaution} className={className}>
        <ModalHeader toggle={togglePrecaution}>Prevention</ModalHeader>
        <ModalBody>
            <h6 style={{fontSize: '13px'}}>
                To prevent infection and to slow transmission of COVID-19, do the following:
            </h6>
            <ul><li>Wash your hands regularly with soap and water, or clean them with alcohol-based hand rub.</li>
            <li>Maintain at least 1 metre distance between you and people coughing or sneezing.</li>
            <li>Avoid touching your face.</li>
            <li>Cover your mouth and nose when coughing or sneezing.</li>
            <li>Stay home if you feel unwell.</li>
            <li>Refrain from smoking and other activities that weaken the lungs.</li>
            <li>Practice physical distancing by avoiding unnecessary travel and staying away from large groups of people.</li>
        </ul>
            
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={togglePrecaution}>
           Close
          </Button>
        </ModalFooter>
      </Modal>
    </Row>
  );
};

export default CornaPrecautions;
