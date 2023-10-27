import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DefaultBlogBox from "./layouts/DefaultBlogBox";


const InsightsSec = () => {
    return (
        <div className="insightwrap">
            <div className="container">
                <div className="insightdtl">
                    <h6 className="small-text">insights</h6>
                    <div className="insightbox">
                        <h2>Latest insights from Elcom</h2>
                        <div className="btnbox"><a className="elcom-btn primary-black-btn" href="#">Show More</a></div>
                    </div>
                    <Tabs
                    defaultActiveKey="BLOGS"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                    >
                        <Tab eventKey="BLOGS" title="BLOGS">
                            <div className="dbbbox">
                                <div className="row">
                                    <DefaultBlogBox />
                                    <DefaultBlogBox />
                                    <DefaultBlogBox />
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="NEWS" title="NEWS">
                            <div className="dbbbox">
                                <div className="row">
                                    <DefaultBlogBox />
                                    <DefaultBlogBox />
                                    <DefaultBlogBox />
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="EVENTS" title="EVENTS">
                            <div className="dbbbox">
                                <div className="row">
                                    <DefaultBlogBox />
                                    <DefaultBlogBox />
                                    <DefaultBlogBox />
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default InsightsSec;