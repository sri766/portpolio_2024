 const card = [
    {
      name: 'Disney',
      image: ['./space-assets/project/disney1.png',
              './assets/project/disney2.png',
              './assets/project/disney3.png'
      ],
    },
    {
      name: 'StoreTrend',
      image: ['./assets/project/storetrend1.png'],
    },
    {
      name: 'MovieFlex',
      image: [
        './assets/project/movie2.png',
        './assets/project/movie1.png'
      ],
    },
    {
      name: 'Indi-Quest',
      image: [
        './assets/project/indiquest1.png',
        './assets/project/indiquest2.png',
        './assets/project/indiquest3.png'
      ],
    },
    {
      name: 'Portfolio',
      image: ['./assets/project/portfolio1.png'],
    }
  ]
  
  const projects = [
    {
      title: "Disney+ Clone",
      tag: "Frontend",
      subtitle: ['React', 'Redux', 'Firebase'],
      description:
        "Built Disney Hotstar clone with React,Redux, and Firebase.Showcased adeptness in React frameworks, seamless integration, and skillful web app creation.",
      image: "/assets/project/disney2.png",
      link: "https://todo-3ce31.web.app/",
      github: 'https://github.com/sri766/disney-clone',
      blog: 'false'
    },
    {
      title: "StoreTrend",
      tag: "Frontend",
      subtitle: ['React', 'Redux', 'Strapi', 'Stripe'],
      description:
        "Developed a React-based E-commerce site Powered with Redux, Strapi and Stripe. Implemented a user-friendly Add to Cart feature to enhance the shopping experience with Redux. Combined Stripe to provide a robust, smooth transaction and Checkout Page",
      image: "/assets/project/storetrend1.png",
      link: "https://hammerhead-app-eafku.ondigitalocean.app/",
      github: 'https://github.com/sri766/StoreTrend',
      blog: 'false'
    },
    {
      title: "MovieFlex",
      tag: "Frontend",
      subtitle: ['React', 'Redux', 'TMDB API'],
      description:
        "Explore the world of cinema with the Movie Explorer App, a sophisticated React application powered by Redux and integrated with The Movie Database (TMDB) API. This feature-rich application provides users with an immersive and seamless experience as they navigate through a vast collection of movies and TV shows.",
      image: "/assets/project/movie1.png",
      link: "https://movie-db-theta-ten.vercel.app/",
      github: 'https://github.com/sri766/MovieDB',
      blog: 'false'
    },
    {
      title: "CI/CD pipeline",
      tag: "DevOps",
      subtitle: ["Jenkins", "Github-Webhooks", "AWS EC2"],
      description:
        "Built a Node.js Todo app with CRUD features.Integrated CI/CD pipeline via Jenkins, GitHub webhooks, and deployed on AWS EC2.",
      image: "",
      link: "https://sri766.hashnode.dev/day-81-project-2declarative-pipeline",
      blog: 'true'
    },
    {
      title: "Netflix-Clone on AWS EC2",
      tag: "DevOps",
      subtitle: ["AWS EC2", "Jenkins", "Docker", "Trivy", "SonarQube"],
      description: "Engineered Netflix clone deployment on AWS EC2 with Jenkins pipeline.Containerized using Docker for enhanced scalability.Implemented Trivy for rigorous Docker image security scans and SonarQube to ensure robust code quality and security.",
      image: "",
      link: "https://sri766-blog.vercel.app/netflix-clone-on-aws-ec2",
      blog: 'true'
    }
  ];

  export default {card, projects}


