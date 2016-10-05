import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

class HomePage extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={12}>
                        <p>Home Page</p>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default HomePage;
