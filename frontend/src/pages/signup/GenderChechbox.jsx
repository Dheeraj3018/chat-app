import React from "react";

const GenderChechbox = () => {
  return (
    <div className=" flex">
      <div className="form-control">
        <label className={"label gap-2 cursor-pointer"}>
          <span className="lable-text">Male</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>
      <div className="form-control">
        <label className={"label gap-2 cursor-pointer"}>
          <span className="lable-text">Female</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>
    </div>
  );
};

export default GenderChechbox;

//Starter code
// import React from "react";

// const GenderChechbox = () => {
//   return (
//     <div className=" flex">
//       <div className="form-control">
//         <label className={"label gap-2 cursor-pointer"}>
//           <span className="lable-text">Male</span>
//           <input type="checkbox" className="checkbox border-slate-900" />
//         </label>
//       </div>
//       <div className="form-control">
//         <label className={"label gap-2 cursor-pointer"}>
//           <span className="lable-text">Female</span>
//           <input type="checkbox" className="checkbox border-slate-900" />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default GenderChechbox;
