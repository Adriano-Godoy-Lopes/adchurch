import { BrowserRouter, Routes, Route } from "react-router-dom";

import SiteLayout from "./layouts/SiteLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Pastors from "./pages/Pastors";
import Ministries from "./pages/Ministries";
import Agenda from "./pages/Agenda";
import Gallery from "./pages/Gallery";
import Messages from "./pages/Messages";
import Prayer from "./pages/Prayer";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/pastores" element={<Pastors />} />
          <Route path="/ministerios" element={<Ministries />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/mensagens" element={<Messages />} />
          <Route path="/oracao" element={<Prayer />} />
          <Route path="/contato" element={<Contact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;