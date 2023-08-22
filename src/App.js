import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSec from "./components/LandingSec";
import ProjectsSec from "./components/ProjectsSec";
import ContactMeSec from "./components/ContactMeSec";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSec />
          <ProjectsSec />
          <ContactMeSec />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;