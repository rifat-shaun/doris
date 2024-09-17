import { createContext, FC, useState } from "react";
import { IBreadCrumbItem, IBreadCrumbProviderProps } from "../types/base";

export const BreadCrumbContext = createContext<Record<string, any>>({});

export const BreadCrumbProvider: FC<IBreadCrumbProviderProps> = ({
  children,
}) => {
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadCrumbItem[]>([]);
  const [onClick, setOnClick] = useState<any>(null);

  return (
    <BreadCrumbContext.Provider
      value={{
        breadcrumbs,
        setBreadcrumbs,
        onBreadCrumbClick: onClick,
        setOnBreadCrumbClick: setOnClick,
      }}
    >
      {children}
    </BreadCrumbContext.Provider>
  );
};
