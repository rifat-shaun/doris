import { useContext } from "react";
import { BreadCrumbContext } from "../../context/Breadcrumbs";
import { Typography } from "../common";
import { IBreadCrumbItem } from "../../types/base";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  const { breadcrumbs } = useContext(BreadCrumbContext);

  const getLinkProps = (breadcrumbItem: IBreadCrumbItem): { to: string } => {
    return { to: breadcrumbItem.link as unknown as string };
  };

  const renderWithLink = (breadcrumb: IBreadCrumbItem) => {
    return (
      <Link {...getLinkProps(breadcrumb)}>
        <Typography className="font-marcellus uppercase">
          {breadcrumb.title}
        </Typography>
      </Link>
    );
  };

  const renderWithoutLink = (breadcrumb: IBreadCrumbItem) => {
    return (
      <Typography className="font-marcellus uppercase">
        {breadcrumb.title}
      </Typography>
    );
  };

  return (
    <div className="h-7 bg-secondaryBodyBackground">
      <div className="container h-full">
        <div className="h-full flex items-center gap-2">
          {breadcrumbs?.map((breadcrumb: IBreadCrumbItem, index: number) => (
            <div key={breadcrumb.title + index} className="cursor-pointer">
              {breadcrumb?.link
                ? renderWithLink(breadcrumb)
                : renderWithoutLink(breadcrumb)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
