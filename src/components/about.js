import React from "react";
import { Tabs, Tab } from "react-bootstrap";


const About = () => {
    return(
        <>
            <Tabs defaultActiveKey="facts">
                <Tab eventKey="facts" title="Facts">
                    <ol>
                        <li>TorrentEngine is an aggregator and a Multisearch. This means we just search other search engines.</li>
                        <li>TorrentEngine is a very powerful internet location search tool.</li>
                        <li>TorrentEngine does not host or "make available" any files or torrents in any way, shape or form.</li>
                        <li>TorrentEngine links to other independent search engines that might host torrent files. We have absolutely no control over those domains.</li>
                        <li>Indexing process is completely automated. We don't check it. Whatever the robots find, are sucked in. The good, the bad and the ugly.</li>
                        <li>TorrentEngine files are simply metadata and cannot be copyrighted.</li>
                        <li>We don't host torrents, we don't even save torrents. We just extract the filename and the size from the sources.</li>
                        <li>TorrentEngine is similar to Google.</li>
                    </ol>
                </Tab>
                <Tab eventKey="privacy" title="Privacy">
                    <ol>
                        <li>We do not log.</li>
                        <li>We do not mingle with your internet privacy.</li>
                        <li>We are not interested in what you do online.</li>
                    </ol>
                </Tab>
                <Tab eventKey="takedown" title="Takedown">
                    <ol>
                        <li>Remember that this is just a search/indexing tool, your content is not hosted here. Please be polite. There is no point in threats.</li>
                        <li>We cannot take down your content because we do not host it. You can rather redirect yourself to the actual source and request a take down of your content.</li>
                        <li>We absolutely have no strings attached to privacy.</li>
                    </ol>
                </Tab>
            </Tabs>
        </>
    );
}

export default About;