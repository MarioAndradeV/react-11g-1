import React, { useState } from "react";

import "./styles.css";

// export default function Exercises() {
//   const [USD, setUSD] = useState(0);
//   const [MXN, setMXN] = useState(0);

//   return (
//     <div className="container h-100">
//       <div className="row h-100 justify-content-center align-items-center">
//         <div className="d-flex col-10 col-md-6 bg-dark rounded h-50 align-items-center px-0">
//           <div className="col p-5">
//             <form>
//               <div className="form-group col-12">
//                 <label className="text-white" htmlFor="USDInput">
//                   USD
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="USDInput"
//                   aria-describedby="emailHelp"
//                   placeholder="Enter USD"
//                   value={Number(USD).toFixed(2)}
//                   onChange={(event) => {
//                     setUSD(event.target.value);
//                     setMXN(event.target.value * 19.84);
//                   }}
//                 />
//               </div>
//               <div className="form-group col-12">
//                 <label className="text-white" htmlFor="MXNInput">
//                   MXN
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="MXNInput"
//                   placeholder="Enter MXN"
//                   value={Number(MXN).toFixed(2)}
//                   onChange={({ target: { value } }) => {
//                     setUSD(value / 19.84);
//                     setMXN(value);
//                   }}
//                 />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//Ejercicio 2

export default function Exercises() {
  const [NUMBER, setNUMBER] = useState("");
  const [NAME, setNAME] = useState("");
  const [VALID_THRU, setVALID_THRU] = useState("");
  const [CVC, setCVC] = useState("");
  const [NUMBER2, setNUMBER] = useState("");
  const [NAME2, setNAME] = useState("");
  const [VALID_THRU2, setVALID_THRU] = useState("");
  const [CVC2, setCVC] = useState("");
  return (
    <div className="form-group col-4 m-4 ">
      <label className="text-black" htmlFor="NUMBER">
        Card Number...
      </label>
      <input
        type="text"
        className="form-control"
        id="NUMBER"
        placeholder="Ej. XXXX-XXXX-XXXX-XXXX"
        value={NUMBER}
        onChange={({ target: { value } }) => setNUMBER(value)}
      />
      <label className="text-black" htmlFor="NAME">
        Name...
      </label>
      <input
        type="text"
        className="form-control"
        id="NAME"
        placeholder="Ej. Mario Andrade"
        value={NAME}
        onChange={({ target: { value } }) => setNAME(value)}
      />
      <label className="text-black" htmlFor="VALID_THRU">
        VALID_THRU
      </label>
      <input
        type="date"
        className="form-control"
        id="VALID_THRU"
        placeholder="VALID_THRU"
        value={VALID_THRU}
        onChange={({ target: { value } }) => setVALID_THRU(value)}
      />
      <label className="text-black" htmlFor="CVC">
        CVC
      </label>
      <input
        type="text"
        className="form-control"
        id="CVC"
        placeholder="Ej. 123"
        value={CVC}
        onChange={({ target: { value } }) => setCVC(value)}
      />
      <div className="w-400 h-200 bg-dark m-4 d-flex">
        <div className="card-body ">
          <p></p>
        </div>
      </div>
    </div>
  );
}
