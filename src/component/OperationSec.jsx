import Image from "next/image"
import Link from 'next/link';
import EsoperationBox from "./layouts/EsoperationBox";


const OperationSec = () => {
    return (
        <>
        <div className="operationWrap">
            <div className="eesoSec">
                <div className="container">
                    <div className="esoWrap">
                        <div className="esoContent">
                            <h6 className="label-text">Our Machineries and Processes</h6>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="esoTtl">
                                        <h3>Engineered for efficient and seamless operations</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <EsoperationBox/>
                    <EsoperationBox/>
                    <EsoperationBox/>
                    <EsoperationBox/>
                    <EsoperationBox/>
                    <EsoperationBox/>
                    <EsoperationBox/>
                    <EsoperationBox/>
                </div>
            </div>
        </div>
        </>
    )
}

export default OperationSec;