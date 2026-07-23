import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Pastors = lazy(() => import("./pages/Pastors"));
const Ministries = lazy(() => import("./pages/Ministries"));
const Ministry = lazy(() => import("./pages/Ministry"));
const Agenda = lazy(() => import("./pages/Agenda"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Messages = lazy(() => import("./pages/Messages"));
const Prayer = lazy(() => import("./pages/Prayer"));
const Contact = lazy(() => import("./pages/Contact"));

export default function App() {
  return (
    <SiteLayout>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/pastores" element={<Pastors />} />
          <Route path="/ministerios" element={<Ministries />} />
          <Route path="/ministerios/:slug" element={<Ministry />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/mensagens" element={<Messages />} />
          <Route path="/oracao" element={<Prayer />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </Suspense>
    </SiteLayout>
  );
}