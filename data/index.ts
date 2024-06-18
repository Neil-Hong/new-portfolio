export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Awards", link: "#awards" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently focusing on NextJS and Blockchain Development.",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Chargemate - ETHGlobal Sydney Hackathon",
      des: "The project for ETHGlobal Sydney Hackathon, won the pool prize.",
      img: "/Chargemate.png",
      iconLists: ["/vue.svg", "/javascript.svg", "/ts.svg", "/css.svg", "/solidity.svg", "/aws.svg"],
      link: "https://github.com/Neil-Hong/Chargemate",
    },
    {
      id: 2,
      title: "Ipomoea Homepage",
      des: "Redesigned & Developed homepage for a start-up company.",
      img: "/Ipomoea.png",
      iconLists: ["/re.svg", "/sass.svg", "/javascript.svg", "/three.svg", "/fm.svg","/aws.svg"],
      link: "https://www.ipomoea.xyz/",    
    },
    {
      id: 3,
      title: "UEFA Champions League Draw System",
      des: "This imitates the UEFA Champions League draw scenario. It has been used by a streamer who has millions of followers in China during his streaming.",
      img: "/football-draw.png",
      iconLists: ["/next.svg", "/sass.svg", "/javascript.svg", "/three.svg", "/css.svg"],
      link: "https://vercel.com/neilhongs-projects/football-draw-version2",
    },
    {
      id: 4,
      title: "3D Galaxy Website",
      des: "This webiste is developed in React with Three.js, it shows the 3D feasibility on web development.",
      img: "/3Dwebsite.png",
      iconLists: ["/re.svg", "/javascript.svg", "/sass.svg", "/three.svg", "/gsap.svg"],
      link: "https://galaxy-personal.vercel.app/",
    },
    {
      id: 5,
      title: "NextJS Portfolio",
      des: "This is my second personal portfolio website developed in NextJS. It shows my projects and experiences.",
      img: "/nextjsportfolio.png",
      iconLists: ["/next.svg", "/javascript.svg", "/tail.svg", "/css.svg"],
      link: "https://github.com/Neil-Hong/NextJS-Portfolio/tree/main",
    },
    {
      id: 6,
      title: "NextJS Blog",
      des: "This is a blog website developed in NextJS. It shows my attempts and experiences studying in nextJS framework.",
      img: "/nextjs-blog.png",
      iconLists: ["/next.svg", "/javascript.svg", "/sass.svg", "/mysql.png", "/gsap.svg"],
      link: "https://github.com/Neil-Hong/NextJS-Blog/tree/main",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Won the pool prize in the ETHGlobal Sydney Hackathon among 2000+ participants.",
      name: "ETHGlobal Sydney Hackathon Pool Prrize Winner",
      title: "Director of AlphaStream Technologies",
      img:"/ETH.jpg"
    },
    {
      quote:
        "This NFT represents my participation and achievement in an Encode Club programme.",
      name: "Encode Club AI Foundation",
      title: "Director of AlphaStream Technologies",
      img:"/encodeAI.png"
    },
    {
      quote:
        "This NFT represents my participation and achievement in an Encode Club Solidity Bootcamp. And it's also the graduation certificate of the bootcamp.",
      name: "Encode Club Solidity Bootcamp",
      title: "Director of AlphaStream Technologies",
      img:"/encodeSolidity.png"
    },
    {
      quote:
        "Won the 3rd place in the DLT Science Foundation Hakathon among 2000+ submissions.",
      name: "DLT Science Foundation Hakathon 3rd Place Winner",
      title: "Director of AlphaStream Technologies",
      img:"/DSF.jpg"
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Full Stack & Bloackchain Developer - Veritas",
      desc: "Developed the Oracle chatbot MVP demo using Hedera SDK, React and Solidity, won the third prize among 2000+ submissions in DLT Science Foundation Hackathon. \n Developed MVP Google chrome extension for the veritas fashion project using ChatGPT, Web3.Storage, AWS, React and Google Chrome Extension SDK. Won the Fourth prize in 2023 Web3&AI Hackathon. \n Developed open source Product-id project using Web3.Storage, Co2.Storage, IPFS, React, AWS, shortlisted in re:publica 2023 Arena Berlin Hackathon. \n Researched new technologies/frameworks feasibility for projects, translated to technical docs and collaborated with solution architectures to confirm project user-cases.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Full Stack Developer - Ipomoea",
      desc: "Developed 3D online virtual try on React application by implementing Three.js and React-three-fiber libraries. \n Developed 3D Galaxy portfolio React website by implementing Three.js and React-three-fiber libraries. \n Designed website layout using Figma, applied designs to the website",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Frontend Develoepr Intern - Beamafilm",
      desc: "One of the developers in charge of improving Beamafilm website platform in React, upgraded website layout based on requirements.\n Worked on MERN stack, added functionalities and unit testing (Mocha) to the Beamafilm Website. \n Worked on Beamafilm Android TV app in React Native, added functionalities and improved layout. \n Helped Media team do the film test to ensure the user experience.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "IT Support Intern - Kagerin",
      desc: "Redesigned company's homepage website by leveraging ZhiMeng CMS. \n Maintained and Operating homepage, updated events of the company on homepage. Responsible for operating the online shopping module on Alibaba Platform.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link:"https://github.com/Neil-Hong"
    },
    {
      id: 2,
      img: "/insta.svg",
      link:"https://www.instagram.com/memoriaa94/"
    },
    {
      id: 3,
      img: "/link.svg",
      link:"https://www.linkedin.com/in/neil-hong-ba89ba1b8/"
    },
  ];