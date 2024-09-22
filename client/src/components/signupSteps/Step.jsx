// export const Step = ({ color1, color2 }) => {
//   return (
//     <div className="">
//       <ul className="steps steps-vertical lg:steps-horizontal  w-[340px] ">
//         <li className="step  step-primary">Currency</li>
//         <li className={`step ${color1}`}>Balance</li>
//         <li className={`step ${color2}`}>Finish</li>
//       </ul>
//     </div>
//   );
// };

export const Step = () => {
  return (
    <div className="">
      <ul className="steps steps-vertical lg:steps-horizontal  w-[340px] ">
        <li className="step  step-primary">Currency</li>
        <li className="step ">Balance</li>
        <li className="step ">Finish</li>
      </ul>
    </div>
  );
};
