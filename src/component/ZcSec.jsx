import SectionTitle from "./layouts/SectionTitle";

const ZcSec = () => {
    return (
        <>
            <SectionTitle/>
            <div className='emissionwrap'>
                <div className='container'>
                    <div className='emissiondtl'>
                        <div className='emissintext'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <h6>Emissions</h6>
                                    <p>Scope 1 emissions (in tons)</p>
                                    <p>Scope 2 emissions (in tons)</p>
                                </div>
                                <div className='col-lg-3'>
                                    <h6>Base Year 2018</h6>
                                    <p>45</p>
                                    <p>1305</p>
                                </div>
                                <div className='col-lg-3'>
                                    <h6>Recent Year 2022</h6>
                                    <p>35</p>
                                    <p>665</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ZcSec;