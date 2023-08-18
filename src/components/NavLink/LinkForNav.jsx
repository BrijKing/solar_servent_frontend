import React from "react";
import { Link } from "react-router-dom";

const LinkForNav = ({ links }) => {
  console.log(links);
  return (
    <>
      <div className="flex pr-6">
        {Array.from(links)?.map((i) => (
          <>
            <div className="p-3">
              <Link to={`/${i.path}`}>{i.name}</Link>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default LinkForNav;

// Array.from(links)?.map((i) => {
//   return (
//     <div name="nav" className="" key={i.id}>
//       <div className="p-3">
//         <Link to={`/${i.path}`}>{i.name}</Link>
//       </div>
//     </div>
//   );
