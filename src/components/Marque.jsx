import { motion } from "framer-motion";
import React from "react";

function Marquee({ imagesurls, direction }) {
 
  const isSmallScreen = window.innerWidth < 768;

  return (
    <div className="flex w-full overflow-hidden invert">
      {!isSmallScreen ? (
        <>
          <motion.div
            initial={{ x: direction === "left" ? "0" : "-100%" }}
            animate={{ x: direction === "left" ? "-100%" : "0" }}
            transition={{
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            }}
            className="flex flex-shrink-0 gap-40 py-10 pr-40"
          >
            {imagesurls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`image-${index}`}
                className="w-32 h-10"
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ x: direction === "left" ? "0" : "-100%" }}
            animate={{ x: direction === "left" ? "-100%" : "0" }}
            transition={{
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            }}
            className="flex flex-shrink-0 gap-40 py-10 pr-40"
          >
            {imagesurls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`image-${index}`}
                className="w-32 h-10"
              />
            ))}
          </motion.div>
        </>
      ) : (
        <div className="flex flex-wrap gap-8 py-10 justify-center">
          {imagesurls.map((url, index) => (
            <img key={index} src={url} alt={`image-${index}`} className="w-32 h-10" />
          ))}
        </div>
      )}
    </div>
  );
}

export default Marquee;
