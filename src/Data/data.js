


export const blog = [
    {
      title: "Netflix Clone On AWS EC2",
      brief: "Step-by-step guide for launching a Netflix clone on AWS EC2. Initialization, EC2 instance provisioning, and Ubuntu 22.04 setup.",
      url: "https://sri766-blog.vercel.app//netflix-clone-on-aws-ec2",
      coverImage: "https://cdn.hashnode.com/res/hashnode/image/upload/v1706028088850/7b92ccc6-78af-4789-bdeb-83eb06585686.png"
    },
    {
      title: "Day 89 - Project 10",
      brief: "Creating IAM user, setting policies, and mounting an AWS S3 bucket on EC2. Utilize aws-cli for effective resource management.",
      url: "https://sri766-blog.vercel.app//day-89-project-10",
      coverImage: "https://cdn.hashnode.com/res/hashnode/image/upload/v1706439123181/a4edab70-77c5-4c11-9c2a-1332657c0c21.png"
    },
    {
      title: "Day 88 - Project 9",
      brief: "Deploying a Django Todo app on AWS EC2 using Kubeadm Kubernetes cluster. Prerequisites include Dockerizing the app and pushing it to a container registry.",
      url: "https://sri766-blog.vercel.app//day-88-project-9",
      coverImage: "https://cdn.hashnode.com/res/hashnode/image/upload/v1695749812600/1cdf59aa-56b5-43ef-85d7-6d7b48e4e628.png"
    },
    {
      title: "Day 87 - Project 8",
      brief: "Deploying a React application on AWS Elastic BeanStalk using GitHub Actions. CICD with GitHub Repository integration and AWS Elastic BeanStalk setup.",
      url: "https://sri766-blog.vercel.app//day-87-project-8",
      coverImage: "https://cdn.hashnode.com/res/hashnode/image/upload/v1695745965733/d5d9fa46-2142-4fc6-96a0-934cbfa4fceb.webp"
    },
    {
      title: "Day 86 - Project 7",
      brief: "Deploying a Portfolio app on AWS S3 using GitHub Actions. CICD with GitHub Repository integration and GitHub Actions setup.",
      url: "https://sri766-blog.vercel.app//day-86-project-7",
      coverImage: "https://cdn.hashnode.com/res/hashnode/image/upload/v1695218303838/d0ce3423-3ff0-4acb-82c3-5cb63e82e4f8.png"
    }
  ];
  

  export const skillsData = [
    { domain: 'Frontend',
      image: './assets/about01.png' ,
        skills: [
      {name:'HTML',icon:'./assets/html.png'},
      {name:'CSS',icon:'./assets/css.png'},
      {name:'Javascript',icon:'./assets/javascript.png'},
      {name:'React',icon:'./assets/react.svg'},
      {name:'Redux',icon:'./assets/redux.png'},
    ]},
    { domain: 'Backend', 
      image: './assets/about02.png',
       skills: [
      {name:'Node',icon:'./assets/node.png'},
      {name:'Python',icon:'./assets/python.png'},
      {name:'C++',icon:'./assets/cpp.png'}
    ]},
    { domain: 'DevOps', 
      image: './assets/about03.png',
        skills: [
      {name:'Docker',icon:'./assets/docker.png'},
      {name:'Jenkins',icon:'./assets/jenkins.png'},
      {name:'Git',icon:'./assets/git.png'},
      {name:'AWS',icon:'./assets/aws.svg'},
    ]},
    { domain: 'Design', 
      image: './assets/about04.png',
      skills: [
      {name:'Figma',icon:'./assets/figma.png',}
    ]}
  ];


  const card = [
    {
      name: 'Disney',
      image: ['./assets/project/disney1.png',
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
  

  export default {card,blog,skillsData}


