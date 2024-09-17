import { useContext, useEffect } from "react";
import { BreadCrumbContext } from "../context/Breadcrumbs";

const Home = () => {
  const { setBreadcrumbs } = useContext(BreadCrumbContext);

  useEffect(() => {
    setBreadcrumbs?.([
      {
        title: "Home",
      },
    ]);
  }, [setBreadcrumbs]);

  return (
    <div className="bg-red-300 font-dosis font-light container">
      HOME Hello from home page
    </div>
  );
};

export default Home;
