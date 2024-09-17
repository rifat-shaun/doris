import React from "react";
import { ITypographyProps } from "../../types/base";
import { TYPOGRAPHY_SIZE, TYPOGRAPHY_VARIANT } from "../../constants/base";

export const Typography: React.FC<ITypographyProps> = ({
  children,
  variant = TYPOGRAPHY_VARIANT.REGULAR,
  size = TYPOGRAPHY_SIZE.BASE,
  onClick,
  className,
}) => {
  const getFontSize = (): string => {
    const { SMALL, MEDIUM, MEDIUM_SUBTITLE, BIG, HEADING, SUB_HEADING } =
      TYPOGRAPHY_SIZE;

    switch (size) {
      case SMALL:
        return "text-small";
      case MEDIUM:
        return "text-medium";
      case MEDIUM_SUBTITLE:
        return "text-mediumSubtitle";
      case BIG:
        return "text-big";
      case HEADING:
        return "text-heading";
      case SUB_HEADING:
        return "text-subHeading";
      default:
        return "text-sm";
    }
  };

  const getFontWeight = (): string => {
    const { LIGHT, REGULAR, MEDIUM, SEMIBOLD, BOLD, EXTRA_BLACK } = TYPOGRAPHY_VARIANT;

    switch (variant) {
        case LIGHT: 
        return "font-light";
      case REGULAR:
        return "font-normal";
      case MEDIUM:
        return "font-medium";
      case SEMIBOLD:
        return "font-semibold";
      case BOLD:
        return "font-bold";
      case EXTRA_BLACK:
        return "font-black";
      default:
        return "font-normal";
    }
  };

  const typographyClasses = `${getFontSize()} ${getFontWeight()}`;
  const combinedClasses = `${typographyClasses} ${className ?? ""}`;

  return (
    <div className={combinedClasses} onClick={onClick}>
      {children}
    </div>
  );
};
