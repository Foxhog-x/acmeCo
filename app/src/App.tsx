import { useState } from "react";
import "./App.css";
import { Header } from "./layout/Header";
import Profilepage from "./pages/profilepage";
import SimpleSnackbar from "./components/SimpleSnackbar";
interface OpenState {
  bool: boolean;
  message: string;
}
function App() {
  const [open, setOpen] = useState<OpenState>({
    bool: false,
    message: "",
  });
  return (
    <>
      <Header />
      <Profilepage setOpen={setOpen} />
      <SimpleSnackbar open={open} setOpen={setOpen} />
    </>
  );
}

export default App;
