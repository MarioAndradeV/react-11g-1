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

const petsData = {
  dogs: [
    {
      name: "Sr. Peabody",
      age: "5",
    },
    {
      name: "Solovino",
      age: "10",
    },
  ],
  cats: [
    {
      name: "Misifu",
      age: "1",
    },
    {
      name: "Nefermishi",
      age: "5",
    },
  ],
  parrots: [
    {
      name: "Garzilazo",
      age: "1",
    },
    {
      name: "Pancho",
      age: "5",
    },
  ],
};

export default function Exercises() {
  const buildPetType = ([type, pets], index) => (
    <React.Fragment key={index}>
      <div className="card-header">{type}</div>
      <ul className="list-group list-group-flush">
        {pets.map((pet, index) => (
          <Pet pet={pet} key={index} index={index} />
        ))}
      </ul>
    </React.Fragment>
  );

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            {Object.entries(petsData).map(buildPetType)}
          </div>
        </div>
      </div>
    </div>
  );
}
