// import images
import Logo from "../public/images/header/logo.svg";
// import GalleryImg1 from "../public/images/gallery/1.png";
// import GalleryImg2 from "../public/images/gallery/2.png";
// import GalleryImg3 from "../public/images/gallery/3.png";
// import GalleryImg4 from "../public/images/gallery/4.png";
// import GalleryImg5 from "../public/images/gallery/5.png";
// import GalleryImg6 from "../public/images/gallery/6.png";
// import GalleryImg7 from "../public/images/gallery/7.png";
// import GalleryImg8 from "../public/images/gallery/8.png";
import QuoteImg from "../public/images/testimonial/quote.svg";
// import icons
import { GrFacebookOption } from "react-icons/gr";
import { IoMdArrowForward } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io";

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: "/", name: "Home" },
    { href: "/", name: "About" },
    { href: "/", name: "Gallery" },
    { href: "/", name: "Interview" },
    { href: "/", name: "Articles" },
    { href: "/", name: "Contact" },
  ],
};

export const socialData = [
  { href: "/", icon: <GrFacebookOption /> },
  { href: "/", icon: <IoLogoInstagram /> },
  { href: "/", icon: <IoLogoPinterest /> },
  { href: "/", icon: <IoLogoTwitter /> },
  { href: "/", icon: <IoLogoYoutube /> },
];

export const heroData = {
  title: "I’m Void Sir.",
  subtitle:
    "Tattoos have their own unique power and magic. They not only beautify the body but also the psyche.",
  btnText: "read more",
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: "My Story:",
  subtitle1:
    "In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.",
  subtitle2:
    "Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.",
  btnText: "Know more",
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: "Check my gallery:",
  btnText: "View all",
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: "/images/gallery/1.png",
      original: "/images/gallery/1.png",
      width: 465,
      height: 412,
    },
    {
      src: "/images/gallery/2.png",
      original: "/images/gallery/2.png",
      width: 465,
      height: 540,
    },
    {
      src: "/images/gallery/3.png",
      original: "/images/gallery/3.png",
      width: 465,
      height: 412,
    },
    {
      src: "/images/gallery/4.png",
      original: "/images/gallery/4.png",
      width: 465,
      height: 540,
    },
    {
      src: "/images/gallery/5.png",
      original: "/images/gallery/5.png",
      width: 465,
      height: 540,
    },
    {
      src: "/images/gallery/6.png",
      original: "/images/gallery/6.png",
      width: 464,
      height: 412,
    },
    {
      src: "/images/gallery/7.png",
      original: "/images/gallery/7.png",
      width: 465,
      height: 540,
    },
    {
      src: "/images/gallery/8.png",
      original: "/images/gallery/8.png",
      width: 465,
      height: 412,
    },
  ],
};

export const interviewData = {
  title:
    "“Consider what you desire. Your tattoo artist will never tell you what tattoo to have.”",
  btnText: "Watch it now",
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "The entire team is extremely kind and friendly. They're fantastic. They're great at what they do! And it's unique.They will properly consult with you.",
    name: "Jack Geoffrey",
    occupation: "Tattoo Artist",
  },
  {
    quoteImg: QuoteImg,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?",
    name: "Douglas Hane",
    occupation: "Tattoo Artist",
  },
];

export const contactData = {
  title: "Get in touch with me:",
  info: [
    {
      title: "LA office",
      subtitle:
        "In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus",
      address: {
        icon: <FaMapMarkerAlt />,
        name: "784 Norman Street, Los Angeles",
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "+49 93 30493943",
      },
      email: {
        icon: <FaEnvelope />,
        address: "contact@yourcompany.com",
      },
      link: "Get location",
    },
    {
      title: "NYC office",
      subtitle:
        "Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus",
      address: {
        icon: <FaMapMarkerAlt />,
        name: "1630 Elm Drive, New York City",
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "+49 34 36573355",
      },
      email: {
        icon: <FaEnvelope />,
        address: "contact@yourcompany.com",
      },
      link: "Get location",
    },
  ],
  form: {
    name: "Write your name here",
    email: "Write your email address",
    message: "Write your messages here",
    btnText: "Send it",
  },
};

export const footerData = {
  about: {
    title: "About void tattoo",
    subtitle:
      "Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus",
    address: {
      icon: <FaMapMarkerAlt />,
      name: "1630 Elm Drive, New York City",
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: "+49 34 36573355",
    },
    email: {
      icon: <FaEnvelope />,
      address: "contact@yourcompany.com",
    },
  },
  links: {
    title: "Useful links",
    items: [
      { href: "/", name: "About me" },
      { href: "/", name: "My gallery" },
      { href: "/", name: "My services" },
      { href: "/", name: "Contact me" },
    ],
  },
  program: {
    title: "Working Time",
    items: [
      { name: "Mon - Tue / Appointment" },
      { name: "Wed - Fri / 10:00 - 9:00pm" },
      { name: "Sat / 10:00 - 6:00pm" },
      { name: "Sun / no work on this day" },
    ],
  },
  newsletter: {
    title: "Newsletter",
    subtitle:
      "Elit duis porttitor massa tellus nun in velit arcu posuere integer.",
    form: {
      placeholder: "Your email address",
      icon: <FiSend />,
    },
  },
};
