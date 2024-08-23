import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch [background:linear-gradient(90.01deg,_#8b1ef8,_#d251ff)] flex flex-col items-start justify-start pt-[110px] px-[33px] pb-[205px] box-border gap-[114px] max-w-full text-left text-59xl text-white font-lato lg:pt-[71px] lg:pb-[133px] lg:box-border mq825:gap-[57px] mq825:pt-[46px] mq825:pb-[86px] mq825:box-border mq450:gap-7 ${className}`}
    >
      <div className="w-[1512px] h-[975px] relative [background:linear-gradient(90.01deg,_#8b1ef8,_#d251ff)] hidden max-w-full" />
      <div className="w-[876px] flex flex-row items-start justify-center max-w-full">
        <h1 className="m-0 w-[548px] relative text-inherit tracking-[0.05em] font-semibold font-[inherit] flex items-center shrink-0 max-w-full z-[1] mq825:text-43xl mq450:text-28xl">
          Works
        </h1>
      </div>
      <div className="flex flex-row items-start justify-center gap-[58px] max-w-full text-center text-29xl text-gray-300 font-montserrat mq825:gap-[29px] mq1425:flex-wrap">
        <div className="w-[59px] flex flex-col items-start justify-start pt-[190px] pb-0 pl-0 pr-[29px] box-border">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[0.05em] font-bold font-[inherit] z-[1] mq825:text-19xl mq450:text-10xl">{`<`}</h3>
        </div>
        <div className="flex flex-col items-start justify-start py-0 pl-0 pr-10 box-border max-w-full text-left text-13xl text-white font-lato">
          <GroupComponent
            group1="/group-1@2x.png"
            mobileAppUIDesign="Mobile App UI Design"
          />
        </div>
        <GroupComponent
          propPadding="38px 26px 39px 32px"
          group1="/group-2@2x.png"
          mobileAppUIDesign="Website Design"
        />
        <div className="w-[30px] flex flex-col items-start justify-start pt-[190px] px-0 pb-0 box-border">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[0.05em] font-bold font-[inherit] z-[1] mq825:text-19xl mq450:text-10xl">{`>`}</h3>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
