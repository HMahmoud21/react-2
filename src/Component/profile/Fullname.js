import React from "react";
const user ={
    firstName:"hajer",
    lastName:"mahmoud",
}
function Fullname ()  {
 return (
   <>
     <h1>
        my name {user.firstName}, my lastName { user.lastName}
     </h1>
   </>
 );
};
export default Fullname ;