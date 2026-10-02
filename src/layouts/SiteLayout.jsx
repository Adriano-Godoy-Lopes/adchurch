import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function SiteLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
