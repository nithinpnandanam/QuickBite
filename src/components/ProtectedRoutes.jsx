import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


const ProtectedRoutes = (Component) => {
    return () => {
        return Component
    //     const navigate = useNavigate()
    // const isAuthenticated = useSelector(state => state.authenticate.isAuthenticated);
    //   return (

    //         <>
    //          if (!isAuthenticated) {
    //             return navigate("/login");
    // }else{
    //     <Component />

    // }
    //         </>
          
    //   );
    };
};

export default ProtectedRoutes

// export const WithPromotedLabel = (RestaurantCard) => {
//     // props == {{resData:element}}
//     return (props) => {
//       return (
//         <div className="relative">
//           <label className="rounded-tl-[16px] rounded-tr-lg rounded-br-lg rounded-bl-lg absolute left-[6px] top-[6px] p-2.5 bg-black text-white">
//             Promoted
//           </label>
//           {/* Restaurant card must only take {resData:element} */}
//           <RestaurantCard {...props} />
//         </div>
//       );
//     };
//   };