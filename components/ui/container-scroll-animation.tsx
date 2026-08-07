"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.85, 0.98] : [1.03, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [isMobile ? 12 : 20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -30 : -80]);

  return (
    <div
      className="py-8 sm:py-14 md:py-20 flex items-center justify-center relative p-2 sm:p-6 md:p-8"
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center px-4 mb-4 sm:mb-8"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl mx-auto min-h-[30rem] sm:min-h-[34rem] md:min-h-[38rem] w-full border-2 sm:border-4 border-[#23283B] p-2 sm:p-4 md:p-6 bg-[#141724] rounded-[24px] sm:rounded-[32px] shadow-2xl shadow-nm-orange/20 relative group hover:border-nm-orange/50 transition-colors flex flex-col"
    >
      <div className="w-full h-full min-h-[28rem] sm:min-h-[32rem] md:min-h-[35rem] rounded-xl sm:rounded-2xl bg-[#08090D] relative flex flex-col justify-center">
        {children}
      </div>
    </motion.div>
  );
};
