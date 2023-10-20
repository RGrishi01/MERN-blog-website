import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {/* this value is available to all the children wrapped inside the function UserContextProvider(in our case, all the components in App.js) */}
      {children}
    </UserContext.Provider>
  );
}
