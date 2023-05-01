import { Toaster } from "react-hot-toast";
import { OurContextProvider } from "../context/OurContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <OurContextProvider>
      <Component {...pageProps} />
      <Toaster />
    </OurContextProvider>
  );
}

export default MyApp;
