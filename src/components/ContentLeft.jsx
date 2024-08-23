import PropTypes from "prop-types";

const ContentLeft = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-midnightblue flex flex-col items-start justify-start pt-[152px] px-[197px] pb-11 box-border gap-[162px] max-w-full text-left text-59xl text-white font-lato lg:pt-[99px] lg:pb-[29px] lg:box-border mq825:gap-[81px] mq825:pt-16 mq825:px-[98px] mq825:pb-5 mq825:box-border mq450:gap-10 mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="w-[1512px] h-[975px] relative bg-midnightblue hidden max-w-full" />
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[50px] box-border gap-[68px] max-w-full lg:gap-[34px] mq825:gap-[17px]">
        <h1 className="m-0 w-[548px] relative text-inherit tracking-[0.05em] font-semibold font-[inherit] flex items-center max-w-full z-[1] mq825:text-43xl mq450:text-28xl">
          Get in Touch
        </h1>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[11px] pr-0 box-border max-w-full text-29xl">
          <h3 className="m-0 flex-1 relative text-inherit tracking-[0.05em] font-semibold font-[inherit] inline-block max-w-full z-[1] mq825:text-19xl mq450:text-10xl">
            Do you have a new project or job for me? Or just want to have a
            chat, feel free to connect.
          </h3>
        </div>
      </div>
      <div className="w-[665px] flex flex-row items-start justify-start py-0 px-2 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq825:flex-wrap mq825:justify-center">
          <img
            className="h-[100px] w-[100px] relative object-cover min-h-[100px] z-[1]"
            loading="lazy"
            alt=""
            src="/icons8linkedin100@2x.png"
          />
          <img
            className="h-[100px] w-[100px] relative object-cover min-h-[100px] z-[1]"
            loading="lazy"
            alt=""
            src="/icons8instagram100@2x.png"
          />
          <img
            className="h-[100px] w-[100px] relative object-cover min-h-[100px] z-[1]"
            loading="lazy"
            alt=""
            src="/icons8gmail100@2x.png"
          />
          <img
            className="h-[100px] w-[100px] relative object-cover min-h-[100px] z-[1]"
            loading="lazy"
            alt=""
            src="/icons8dribbble100@2x.png"
          />
        </div>
      </div>
      <div className="w-[856px] flex flex-row items-start justify-start py-0 px-[11px] box-border max-w-full text-5xl">
        <div className="flex-1 relative tracking-[0.05em] font-semibold inline-block max-w-full z-[1] mq450:text-lgi">
          Copyright 2022 Rahul Sharma. All Rights Reserved.
        </div>
      </div>
    </section>
  );
};

ContentLeft.propTypes = {
  className: PropTypes.string,
};

export default ContentLeft;
