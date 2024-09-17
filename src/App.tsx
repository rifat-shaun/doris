import { BreadCrumbProvider } from "./context/Breadcrumbs";
import { RouterProvider } from "./context/Router";

export const App = () => {
  return (
    <BreadCrumbProvider>
      <RouterProvider />
    </BreadCrumbProvider>
  );
};
