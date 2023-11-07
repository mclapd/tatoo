"use client";

import { useState } from "react";
import { galleryData } from "../data";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import { motion } from "framer-motion";
import { fadeIn } from "../effects/variants";
import Image from "next/image";
import Link from "next/link";
import { Gallery } from "react-grid-gallery";

const GallerySection = () => {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsopen] = useState(false);
  const { title, btnText, btnIcon, images } = galleryData;

  console.log(index);

  return (
    <section className="bg-[#f9f9f9] section relative mt-[40px] lg:mt-0">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amout: 0.6 }}
          className="h2 max-w-[370px] lg:mb-20"
        >
          {title}
        </motion.h2>
      </div>
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amout: 0.2 }}
        className="mb-8 lg:mb-20"
      >
        <Gallery
          images={images}
          onClick={() => setIsopen(true)}
          enableImageSelection={false}
        />
        {isOpen && (
          <Lightbox
            mainSrc={images[index].original}
            nextSrc={images[(index + 1) % images.length].original}
            prevSrc={
              images[(index + images.length - 1) % images.length].original
            }
            onCloseRequest={() => setIsopen(false)}
            onMovePrevRequest={() =>
              setIndex((index + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setIndex((index + images.length + 1) % images.length)
            }
          />
        )}
      </motion.div>
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amout: 0.2 }}
        className="flex justify-center"
      >
        <button className="btn btn-lg btn-dark">
          {btnText} <div className="text-xl">{btnIcon}</div>
        </button>
      </motion.div>
    </section>
  );
};

export default GallerySection;
