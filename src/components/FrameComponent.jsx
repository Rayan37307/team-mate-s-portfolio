import WebDesign from "./WebDesign";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`w-[1498px] flex flex-row items-start justify-center pt-0 px-5 pb-[332px] box-border max-w-full text-left text-59xl text-black font-lato lg:pb-[216px] lg:box-border mq450:pb-[140px] mq450:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[126px] max-w-full lg:gap-[63px] mq825:gap-[31px] mq450:gap-4">
        <h1 className="m-0 w-[548px] relative text-inherit tracking-[0.05em] font-semibold font-[inherit] flex items-center max-w-full mq825:text-43xl mq450:text-28xl">
          Services
        </h1>
        <div className="flex flex-row items-start justify-start py-0 pl-[13px] pr-0 box-border max-w-full text-center text-13xl">
          <div className="flex flex-row items-start justify-start gap-[77px] max-w-full lg:gap-[38px] lg:flex-wrap mq825:gap-[19px]">
            <div className="h-[310px] w-[327px] flex flex-col items-start justify-start py-0 pl-0 pr-[17px] box-border max-w-full">
              <div className="self-stretch flex-1 rounded-31xl border-darkorchid border-[4px] border-solid flex flex-col items-start justify-start py-[47px] px-[45px] gap-[47px] mq450:gap-[23px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="w-[310px] h-[310px] relative rounded-31xl border-darkorchid border-[4px] border-solid box-border hidden" />
                <div className="flex flex-row items-start justify-start py-0 px-[66px]">
                  <img
                    className="h-20 w-20 relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/icons8graphicdesign1002@2x.png"
                  />
                </div>
                <b className="w-[212px] relative tracking-[0.05em] flex items-center z-[1] mq825:text-7xl mq450:text-lgi">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Graphic</p>
                    <p className="m-0">Design</p>
                  </span>
                </b>
              </div>
            </div>
            <WebDesign
              icons8WebDesign1002="/icons8webdesign1002@2x.png"
              web="Web"
            />
            <WebDesign
              propBorder="4px solid #8b1ef8"
              propBorder1="4px solid #8b1ef8"
              icons8WebDesign1002="/icons8smartphone100@2x.png"
              web="UI/UX"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
