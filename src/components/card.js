import { Card, Col, Image, Row } from "react-bootstrap";

export function FeatureCard({icon, title, content}) {
    return(
        <div className="FeatureCard text-center my-5">
            <Card className="rounded rounded-5">
                <Card.Body className="px-3">
                    <Image src={icon} width={100} height={100} alt="feature" className="my-4"/>
                    <Card.Title className="mb-4">{title}</Card.Title>
                    <Card.Text className="mb-5">{content}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export function WorkflowCard({icon, title, content}) {
    return(
        <div className="WorkflowCard">
            <Row className="d-flex align-items-center text-center text-lg-start">
                <Col sm={12} lg={2} className="mb-3"><Image src={icon} alt="workflow" className="w-100"/></Col>
                <Col sm={12} lg={10}>
                    <div className="card-title mb-3">{title}</div>
                    <div className="card-content">{content}</div>
                </Col>
            </Row>
        </div>
    )
}