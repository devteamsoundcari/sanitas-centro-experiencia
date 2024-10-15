import { SanitasEmpresarial } from "../page/SanitasEmpresarial";
import { SanitasEmpresarialProvider } from "../context/index";
import "./App.css";

function App() {
  return (
    <>
      <SanitasEmpresarialProvider>
        <SanitasEmpresarial />
      </SanitasEmpresarialProvider>
    </>
  );
}

export default App;
