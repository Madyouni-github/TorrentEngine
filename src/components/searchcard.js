import React from "react";
import { Card, Button, Form } from "react-bootstrap";



const SearchCard = () => {
    return(
        <Card style={{width: '100%', height: "200px"}}>
            <Card.Body>
                <Form style={{display:"flex"}} action="/search" method="get">
                    <Form.Control type="search" name="search" placeholder="Search Torrents!" />
                    <Button variant="dark" style={{height:"38px"}} type="submit">Search</Button>
                </Form>
                <Card.Text style={{marginLeft:'auto', marginRight: 'auto', marginTop: '100px', textAlign: "center"}}>
                    TorrentEngine is a tribute to torrentz.eu
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default SearchCard;