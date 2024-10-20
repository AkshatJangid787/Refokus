import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://cdn.prod.website-files.com/62df9251ae9124976626bcc8/62ebbe78f5b5cf388bac8281_CMS%20Load%20More%20385px-p-800.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/62df9251ae9124976626bcc8/62ebbe8d3c40995c96e54fd7_CMS%20Filter%20385px.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/62df9251ae9124976626bcc8/62e0f683b4bd5e97479afeb0_62b1cd7aa17ffc4d42b09be7_API-filler.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/62df9251ae9124976626bcc8/62e0f6844aea86be228e2784_60ef437825bf1a9e47c545aa_thumb-masonry-p-2000.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/62df9251ae9124976626bcc8/62e0f6830f555f238b0c4d14_60ef4360ce19af7bf7e43bbb_thumb-tabs-p-2000.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/62df9251ae9124976626bcc8/62ebbea17f5da559e4b24525_Rich%20Text%20Enhancer%20385px.png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) => 
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 2:
        imagesShow([0]);
        break;
      case 4:
        imagesShow([0, 1]);
        break;
      case 6:
        imagesShow([0, 1, 2]);
        break;
      case 8:
        imagesShow([0, 1, 2, 3]);
        break;
      case 10:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 12:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[33vw] leading-none font-medium tracking-tight select-none">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute w-72 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
