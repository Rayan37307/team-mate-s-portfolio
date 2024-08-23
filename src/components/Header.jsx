import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[109px] box-border max-w-full text-left text-13xl text-black font-open-sans lg:pb-[71px] lg:box-border mq825:pb-[46px] mq825:box-border ${className}`}
    >
      <div className="flex-1 [background:linear-gradient(90.01deg,_rgba(139,_30,_248,_0.1),_rgba(210,_81,_255,_0.1))] flex flex-row items-start justify-start max-w-full">
        <div className="self-stretch w-[1512px] relative [background:linear-gradient(90.01deg,_rgba(139,_30,_248,_0.1),_rgba(210,_81,_255,_0.1))] hidden max-w-full" />
        <div className="flex-1 flex flex-col items-start justify-start pt-[42px] pb-[297px] pl-[67px] pr-14 box-border relative gap-[183px] max-w-full lg:pt-[27px] lg:pb-[193px] lg:box-border mq825:gap-[91px] mq825:pt-5 mq825:pb-[125px] mq825:pl-[33px] mq825:pr-7 mq825:box-border mq450:gap-[46px]">
          <header className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-left text-9xl text-gray-100 font-lato">
            <div className="w-[375px] flex flex-row items-start justify-start gap-4 max-w-full">
              <img
                className="h-[58.1px] w-[67px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/logo.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                <div className="self-stretch relative tracking-[0.05em] uppercase font-extrabold whitespace-nowrap z-[1]">
                  Rahul Sharma
                </div>
              </div>
            </div>
            <div className="w-[700px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[76px] max-w-full mq825:gap-[38px] mq450:gap-[19px]">
                <nav className="m-0 flex-1 flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border max-w-full lg:hidden">
                  <nav className="m-0 self-stretch h-[34px] relative text-left text-9xl text-black font-lato">
                    <a className="[text-decoration:none] absolute top-[0px] left-[0px] tracking-[0.05em] font-semibold text-[inherit] inline-block min-w-[85px] z-[1]">
                      About
                    </a>
                    <a className="[text-decoration:none] absolute top-[0px] left-[324px] tracking-[0.05em] font-semibold text-[inherit] inline-block min-w-[91px] z-[1]">
                      Works
                    </a>
                    <a className="[text-decoration:none] absolute top-[0px] left-[147px] tracking-[0.05em] font-semibold text-[inherit] inline-block min-w-[115px] z-[1]">
                      Services
                    </a>
                  </nav>
                </nav>
                <img
                  className="h-[71px] w-[209px] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
          </header>
          <div className="w-[1356px] flex flex-row items-start justify-center max-w-full">
            <div className="w-[1106px] flex flex-row items-start justify-between max-w-full gap-5 lg:flex-wrap">
              <div className="w-[521px] relative tracking-[0.05em] flex items-center shrink-0 min-w-[521px] max-w-full z-[1] lg:flex-1 mq825:text-7xl mq825:min-w-full mq450:text-lgi">
                <span className="w-full">
                  <p className="m-0 text-59xl font-semibold font-lato">
                    Hi, I’m Rahul
                  </p>
                  <p className="m-0"> I’m a UI/UX</p>
                  <p className="m-0">{`& Web Designer from India`}</p>
                </span>
              </div>
              <img
                className="w-[388px] relative max-h-full object-cover max-w-full z-[1] lg:flex-1"
                loading="lazy"
                alt=""
                src="/hero-image@2x.png"
              />
            </div>
          </div>
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] z-[2]" />
        </div>
      </div>
    </section>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
