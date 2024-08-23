import { useMemo } from "react";
import PropTypes from "prop-types";

const WebDesign = ({
  className = "",
  propBorder,
  propBorder1,
  icons8WebDesign1002,
  web,
}) => {
  const webDesignStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const rectangleDivStyle = useMemo(() => {
    return {
      border: propBorder1,
    };
  }, [propBorder1]);

  return (
    <div
      className={`h-[310px] w-[310px] rounded-31xl border-darkviolet border-[4px] border-solid box-border flex flex-col items-start justify-start py-[47px] px-[45px] gap-[46px] text-center text-13xl text-black font-lato mq450:gap-[23px] mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
      style={webDesignStyle}
    >
      <div
        className="w-[310px] h-[310px] relative rounded-31xl border-darkviolet border-[4px] border-solid box-border hidden"
        style={rectangleDivStyle}
      />
      <div className="flex flex-row items-start justify-start py-0 pl-[65px] pr-[66px]">
        <img
          className="h-[81px] w-[81px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src={icons8WebDesign1002}
        />
      </div>
      <b className="w-[212px] relative tracking-[0.05em] flex items-center z-[1] mq825:text-7xl mq450:text-lgi">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">{web}</p>
          <p className="m-0">Design</p>
        </span>
      </b>
    </div>
  );
};

WebDesign.propTypes = {
  className: PropTypes.string,
  icons8WebDesign1002: PropTypes.string,
  web: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
  propBorder1: PropTypes.any,
};

export default WebDesign;
