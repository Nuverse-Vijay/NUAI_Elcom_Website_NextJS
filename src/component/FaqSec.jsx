const { Fragment } = require("react")
import Image from "next/image"
import Link from 'next/link';


import Accordion from 'react-bootstrap/Accordion';



const FaqSec = () => {
    return(
        <div className="faqwrap py-xxl">
            <div className="container">
                <div className="faqwrapper">
                    <span className="label-text ">faq</span>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="faqdtl">
                                <h3>Find answers to your questions here</h3>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Accordion defaultActiveKey="0" flush >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Is the information on carbon footprint available for each product?</Accordion.Header>
                                    <Accordion.Body>
                                    Elcom’s products have obtained the “Carbon Footprint” certification, which is issued by Carbon Trust of the U.K through the comprehensive measuring of the environmental impact of carbon generation throughout a product’s lifecycle, from extracting and transporting the raw material to making and using the product. Since our achievement of the “Carbon Footprint” certification as the first in the semiconductor industry in 2019, the scope of certification has been expanded to not only key memory products, but also system semiconductors. As of 2021, a total of 24 products, such as 20 memory semiconductors and four system semiconductor products, have obtained the “Carbon Footprint” certification. 
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Do you have a policy for labor and human rights of employees and partners?</Accordion.Header>
                                    <Accordion.Body>
                                    Elcom’s products have obtained the “Carbon Footprint” certification, which is issued by Carbon Trust of the U.K through the comprehensive measuring of the environmental impact of carbon generation throughout a product’s lifecycle, from extracting and transporting the raw material to making and using the product. Since our achievement of the “Carbon Footprint” certification as the first in the semiconductor industry in 2019, the scope of certification has been expanded to not only key memory products, but also system semiconductors. As of 2021, a total of 24 products, such as 20 memory semiconductors and four system semiconductor products, have obtained the “Carbon Footprint” certification.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Do you have a safety and health management system?</Accordion.Header>
                                    <Accordion.Body>
                                    Elcom’s products have obtained the “Carbon Footprint” certification, which is issued by Carbon Trust of the U.K through the comprehensive measuring of the environmental impact of carbon generation throughout a product’s lifecycle, from extracting and transporting the raw material to making and using the product. Since our achievement of the “Carbon Footprint” certification as the first in the semiconductor industry in 2019, the scope of certification has been expanded to not only key memory products, but also system semiconductors. As of 2021, a total of 24 products, such as 20 memory semiconductors and four system semiconductor products, have obtained the “Carbon Footprint” certification.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>What are the company’s social contribution philosophy and vision?</Accordion.Header>
                                    <Accordion.Body>
                                    Elcom’s products have obtained the “Carbon Footprint” certification, which is issued by Carbon Trust of the U.K through the comprehensive measuring of the environmental impact of carbon generation throughout a product’s lifecycle, from extracting and transporting the raw material to making and using the product. Since our achievement of the “Carbon Footprint” certification as the first in the semiconductor industry in 2019, the scope of certification has been expanded to not only key memory products, but also system semiconductors. As of 2021, a total of 24 products, such as 20 memory semiconductors and four system semiconductor products, have obtained the “Carbon Footprint” certification.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>If there is the risk of an accident, do workers have the right to stop operation at any time?</Accordion.Header>
                                    <Accordion.Body>
                                    Elcom’s products have obtained the “Carbon Footprint” certification, which is issued by Carbon Trust of the U.K through the comprehensive measuring of the environmental impact of carbon generation throughout a product’s lifecycle, from extracting and transporting the raw material to making and using the product. Since our achievement of the “Carbon Footprint” certification as the first in the semiconductor industry in 2019, the scope of certification has been expanded to not only key memory products, but also system semiconductors. As of 2021, a total of 24 products, such as 20 memory semiconductors and four system semiconductor products, have obtained the “Carbon Footprint” certification.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default FaqSec;