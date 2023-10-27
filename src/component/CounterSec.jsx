import React from 'react';
import { useCountUp } from 'react-countup';
import CountUp from 'react-countup';



const CounterSec = () => {


    // return (
    //     <div className="App">
    //       <h1>GEEKSFORGEEKS</h1>
    //       <div>
    //         <CountUp
    //           start={0}
    //           end={100000}
    //           duration={3}
    //         />    
    //       </div>
    //     </div>
    //   );
    return (
         <>
         <div className="counterWrap">
             <div className="container">
                 <div className="counterwrapper">
                     <div className="row">
                         <div className="col-lg-4">
                             <div className="countWord">
                                 <CountUp className='h1'
                                    start={0}
                                    end={290}
                                    
                                 />+  
                                 <p>Products</p>
                             </div>
                         </div>
                         <div className="col-lg-4">
                             <div className="countWord">
                                <CountUp className='h1'
                                    start={0}
                                    end={20}
                                    duration={3}
                                 />+
                                 <p>Dealers & Distributors</p>
                             </div>
                         </div>
                         <div className="col-lg-4">
                             <div className="countWord">
                                <CountUp className='h1'
                                    start={0}
                                    end={15}
                                    duration={4}
                                 />+
                                 <p>Certifications & Approvals</p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         </>
    )
}

export default CounterSec;