import Header from "../components/Header";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import ContentLeft from "../components/ContentLeft";

const Home = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Header />
      <section className="w-[1490px] flex flex-row items-start justify-center pt-0 px-5 pb-[365px] box-border max-w-full text-left text-59xl text-black font-lato lg:pb-[237px] lg:box-border mq825:pb-[154px] mq825:box-border">
        <div className="w-[1106px] flex flex-col items-start justify-start gap-[157px] max-w-full lg:gap-[78px] mq825:gap-[39px] mq450:gap-5">
          <h1 className="m-0 w-[548px] relative text-inherit tracking-[0.05em] font-semibold font-[inherit] flex items-center max-w-full mq825:text-43xl mq450:text-28xl">
            About
          </h1>
          <div className="self-stretch relative text-[36px] tracking-[0.05em] font-semibold mq825:text-10xl mq450:text-[22px]">
            <p className="m-0">
              Hi, I’m Rahul Sharma. I’m from Lucknow in India. I’m an engineer
              and I love to design as well as code. I also like to travel and
              watch cricket.  I’ve been working in Gurgaon from the last two
              years. I’m quick learner and also very passionate about my work.
            </p>
            <p className="m-0">
              I like to design Websites and Mobile Apps. My favourite tools are
              Figma and Sketch.
            </p>
            <p className="m-0">
              I am keen to learn new things and progress in my career.
            </p>
          </div>
        </div>
      </section>
      <FrameComponent />
      <FrameComponent1 />
      <ContentLeft />
    </div>
  );
};

export default Home;
