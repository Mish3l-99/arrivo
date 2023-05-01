import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const backendHost = process.env.NEXT_PUBLIC_BACKEND_HOST;

const OurContext = createContext({});

export const useG = () => useContext(OurContext);

export const OurContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [programBar, setProgramBar] = useState("summary");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  return (
    <OurContext.Provider
      value={{
        user,
        setUser,
        programBar,
        setProgramBar,
      }}
    >
      {loading ? null : children}
    </OurContext.Provider>
  );
};
