import { ReactNode } from "react";
import { TYPOGRAPHY_SIZE, TYPOGRAPHY_VARIANT } from "../constants/base";

type TTypographyVariant = `${TYPOGRAPHY_VARIANT}`;

type TTypographySize = `${TYPOGRAPHY_SIZE}`;

export interface ITypographyProps {
  children: ReactNode;
  variant?: TTypographyVariant;
  size?: TTypographySize;
  className?: string;
  onClick?(event: any): void;
}
