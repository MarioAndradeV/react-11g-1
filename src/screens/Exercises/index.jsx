import React, { useState } from "react";
import Pet from "../../components/Pet";
// export default function Exercises() {
//   const [USD, setUSD] = useState(null);
//   const [MXN, setMXN] = useState(null);

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
//                   value={Number(USD)}
//                   onChange={(event) => {
//                     setUSD(event.target.value);
//                     setMXN((event.target.value * 19.84).toFixed(2));
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
//                   value={Number(MXN)}
//                   onChange={({ target: { value } }) => {
//                     setUSD((value / 19.84).toFixed(2));
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Ejercicio credit card

export default function Exercises() {
  const [cardNumber, setNumber] = useState("");
  const [cardName, setName] = useState("");
  const [cardCVC, setCVC] = useState("");
  const [cardDate, setDate] = useState("");

  return (
    <div className="container h-100">
      <div className="row h-100  align-items-center">
        <div className="d-flex col-10 col-md-6 bg-danger rounded h-50 align-items-center px-0">
          <div className="col p-4">
            <form>
              <h1 className="text-white">Credit Card</h1>
              <div className="form-group col-12">
                <label className="text-white" htmlFor="cardNumberInput">
                  Card Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cardNumberInput"
                  placeholder="Ej. XXXX-XXXX-XXXX-XXXX"
                  value={cardNumber}
                  onChange={(event) => {
                    setNumber(event.target.value);
                  }}
                  maxLength="19"
                />
              </div>
              <div className="form-group col-12">
                <label className="text-white" htmlFor="cardNameInput">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cardNameInput"
                  placeholder="Ej. Mario Andrade..."
                  value={cardName}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
              <div className="form-group col-12">
                <label className="text-white" htmlFor="cardCVCInput">
                  CVC
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cardCVCInput"
                  placeholder="Ej. 123"
                  value={cardCVC}
                  onChange={(event) => {
                    setCVC(event.target.value);
                  }}
                  maxLength="3"
                />
              </div>
              <div className="form-group col-12">
                <label className="text-white" htmlFor="cardDateInput">
                  Date
                </label>
                <input
                  type="month"
                  className="form-control"
                  id="cardDateInput"
                  placeholder=""
                  value={cardDate}
                  onChange={(event) => {
                    setDate(event.target.value);
                  }}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="card h-50 w-50 bg-info">
          <div className="card-body">
            <div className=" d-flex justify-content-between ">
              <h1 className="text-white">VISA</h1>
            </div>
            <h2 className="text-white ">{cardNumber}</h2>
            <h2 className="text-white">{cardName}</h2>
            <div className="d-flex justify-content-between mt-2">
              <h3 className="text-white mt-6">{cardCVC}</h3>
              <h3 className="text-white">{cardDate}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const petsData = [
//   {
//     name: "Sr. Peabody",
//     age: "5",
//   },
//   {
//     name: "Misifu",
//     age: "1",
//   },
//   {
//     name: "Solovino",
//     age: "10",
//   },
//   {
//     name: "Nefermishi",
//     age: "5",
//   },
// ];

// export default function Exercises() {
//   const buildLIPets = ({ name, age }, index) => (
//     <li key={index} className="list-group-item">
//       Name: {name}, age: {age}
//     </li>
//   );

//   const petsUI = petsData.map(({ name, age }, index) => (
// <li key={index} className="list-group-item">
//   Name: {name}, age: {age}
// </li>
//   ));

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col">
//           <div className="card" style={{ width: "18rem" }}>
//             <div className="card-header">Pets</div>
//             <ul className="list-group list-group-flush">
//               {petsData.map(buildLIPets)}
//             </ul>
//             <div className="card-header">Pets</div>
//             <ul className="list-group list-group-flush">{petsUI}</ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Ejercicio Pets con objeto de arrays

// const petsData = {
//   dogs: [
//     {
//       name: "Sr. Peabody",
//       age: "5",
//     },
//     {
//       name: "Solovino",
//       age: "10",
//     },
//   ],
//   cats: [
//     {
//       name: "Misifu",
//       age: "1",
//     },
//     {
//       name: "Nefermishi",
//       age: "5",
//     },
//   ],
//   parrots: [
//     {
//       name: "Garzilazo",
//       age: "1",
//     },
//     {
//       name: "Pancho",
//       age: "5",
//     },
//   ],
// };

// export default function Exercises() {
//   const buildPetType = ([type, pets], index) => (
//     <React.Fragment key={index}>
//       <div className="card-header">{type}</div>
//       <ul className="list-group list-group-flush">
//         {pets.map((pet, index) => (
//           <Pet pet={pet} key={index} index={index} />
//         ))}
//       </ul>
//     </React.Fragment>
//   );

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col">
//           <div className="card" style={{ width: "18rem" }}>
//             {Object.entries(petsData).map(buildPetType)}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
