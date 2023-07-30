// export const AuthButton = ({ children, ...rest }) => {
//     return (
//         <button className="bg-[#262626f2] w-full py-3 rounded-lg md:max-lg:py-2 hover:text-sm" {...rest} type="submit">{children || "Submit"}</button>
//     )
// }


// AuthButton.js
import { useState } from 'react';

export const AuthButton = ({ children, isLoading, ...rest }) => {
  return (
    <button
      className={`bg-[#262626f2] w-full py-3 rounded-lg md:max-lg:py-2 hover:text-sm ${
        isLoading ? 'cursor-not-allowed opacity-50' : ''
      }`}
      {...rest}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : children || 'Submit'}
    </button>
  );
};

export default AuthButton;
