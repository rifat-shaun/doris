import { TYPOGRAPHY_VARIANT } from "../../constants/base";
import { Typography } from "../common";

const Banner = () => {
  return (
    <div className="bg-darkGreen h-[29px] flex items-center justify-center py-2">
      <Typography
        variant={TYPOGRAPHY_VARIANT.LIGHT}
        className="text-white font-marcellus"
      >
        {/* TODO: Replace this text from DB, Dynamic text render */}
        COMPLIMENTARY SHIPPING ON ALL ORDERS OVER £200
      </Typography>
    </div>
  );
};

export default Banner;
