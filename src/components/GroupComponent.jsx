import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent = ({
  className = "",
  propPadding,
  group1,
  mobileAppUIDesign,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`w-[565px] [backdrop-filter:blur(4px)] rounded-31xl bg-gray-200 border-white border-[2px] border-solid box-border flex flex-col items-start justify-start pt-[42px] pb-[35px] pl-[31px] pr-[27px] gap-8 max-w-full z-[1] text-left text-13xl text-white font-lato mq825:gap-4 mq450:pt-[27px] mq450:pb-[23px] mq450:box-border ${className}`}
      style={groupDivStyle}
    >
      <div className="w-[565px] h-[452px] relative [backdrop-filter:blur(4px)] rounded-31xl bg-gray-200 border-white border-[2px] border-solid box-border hidden max-w-full" />
      <img
        className="self-stretch h-[297px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
        loading="lazy"
        alt=""
        src={group1}
      />
      <div className="w-[444px] relative tracking-[0.05em] font-semibold flex items-center max-w-full z-[1] mq825:text-7xl mq450:text-lgi">
        {mobileAppUIDesign}
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  group1: PropTypes.string,
  mobileAppUIDesign: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default GroupComponent;
