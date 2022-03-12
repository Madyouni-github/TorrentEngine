import React, {useState, useEffect} from "react";
import { Table, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";




const Torrents = () => {
    const [torrents, setTorrents] = useState([]);
    const params = useLocation().search;

    // useEffect(() => {
    //     const searchParams = new URLSearchParams(params);
    //     fetch(`${myDomain}/search?` + searchParams.toString())
    //     .then(res => res.json())
    //     .catch(err => console.error(err));
    // },[torrents,params]);
    return(
        <>
            <Form style={{display:"flex", marginBottom:"10px"}} action="/search" method="get">
                <Form.Control type="search" name="search" placeholder="Search Torrents!" />
                <Button variant="dark" style={{height:"38px"}} type="submit">Search</Button>
            </Form>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Source</th>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Seeders</th>
                    <th>Leechers</th>
                    <th>Upload date</th>
                </tr>
                </thead>
                <tbody>
                    {/* {
                        torrents.map((itr,i) => (
                            <tr>
                                <td>{i+1}</td>
                                <td>{itr.Source}</td>
                                <td><a href={itr.Link}>{itr.Name}</a></td>
                                <td>{itr.Size}</td>
                                <td>{itr.Seeders}</td>
                                <td>{itr.Leechers}</td>
                                <td>{itr.UploadDate}</td>
                            </tr>
                        ))
                    } */}
                    <tr>
                                <td>1</td>
                                <td>oh</td>
                                <td><a href="#">nn</a></td>
                                <td>12k</td>
                                <td>20</td>
                                <td>89</td>
                                <td>2021</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>oh</td>
                                <td><a href="#">nn</a></td>
                                <td>12k</td>
                                <td>20</td>
                                <td>89</td>
                                <td>2021</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>oh</td>
                                <td><a href="#">nn</a></td>
                                <td>12k</td>
                                <td>20</td>
                                <td>89</td>
                                <td>2021</td>
                            </tr>
                </tbody>
            </Table>
        </>
    );
}


export default Torrents;