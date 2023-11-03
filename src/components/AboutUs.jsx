import React, { useState } from 'react';
import { useTransition, a } from 'react-spring';
import '../style/AboutUs.css'
import line from '../Images/line.png';
import img1 from '../Images/access_time.svg'
import img2 from '../Images/update.svg'
import img3 from '../Images/education.svg'
import img4 from '../Images/wallet.svg'
import img5 from '../Images/forum.svg'
import img6 from '../Images/feedback.svg'
import ProfileCard from './ProfileCard';
import { HStack, VStack } from '@chakra-ui/react';
const slides = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Alice Brown",
    role: "Backend Developer",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "David Lee",
    role: "AI Modeler",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Grace Robinson",
    role: "Tester",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Mark Turner",
    role: "Documentation Specialist",
    image: "https://via.placeholder.com/150",
  },
  // Add more team members here
];


const AboutUs = () => {
  const [index, set] = useState(0);

  const profiles = [
    {
      name: 'Julie L. Arsenault',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },
        { icon: 'fa-instagram', url: '#' },
      ],
    },
    {
      name: 'Frank A. Lopes',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(30).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },
        { icon: 'fa-instagram', url: '#' },
      ],
    },
    {
      name: 'James M. Hinkle',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(28).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },
        { icon: 'fa-instagram', url: '#' },
      ],
    },
    {
      name: 'Maria C. Boucher',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(27).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },
        { icon: 'fa-instagram', url: '#' },
      ],
    },
    {
      name: 'Rasheed A. Harrison',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },
        { icon: 'fa-instagram', url: '#' },
      ],
    },
    {
      name: 'Karen I. McCluskey',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(25).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },
        { icon: 'fa-instagram', url: '#' },
      ],
    },
    {
      name: 'Michael K. Bayne',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(24).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },
        { icon: 'fa-instagram', url: '#' },
      ],
    },
    {
      name: 'Josephine S. Darakjy',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },
        { icon: 'fa-instagram', url: '#' },
      ],
    },
    {
      name: 'Eddie L. Johnson',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(22).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },
        { icon: 'fa-instagram', url: '#' },
      ],
    },
    {
      name: 'Chloe A. Roberts',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(20).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },
        { icon: 'fa-instagram', url: '#' },
      ],
    },
    {
      name: 'Thomas A. Anderson',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).jpg',
      socialLinks: [{ icon: 'fa-github', url: '#' }, { icon: 'fa-linkedin', url: '#' }, { icon: 'fa-instagram', url: '#' }],
    },
    {
      name: 'Cynthia J. Olson',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(16).jpg',
      socialLinks: [{ icon: 'fa-github', url: '#' }, { icon: 'fa-linkedin', url: '#' }, { icon: 'fa-instagram', url: '#' }],

    }

  ];




  const transitions = useTransition(slides[index], {
    from: { opacity: 0, transform: 'translate3d(-50%, 0, -200px) scale(0.8)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0, 0) scale(1)' },
    leave: { opacity: 0, transform: 'translate3d(50%, 0, -200px) scale(0.8)' },
  });

  const nextSlide = () => set((state) => (state + 1) % slides.length);
  const prevSlide = () => set((state) => (state - 1 + slides.length) % slides.length);

  return (
    <div>
      <div className='a'>
        We ❤️ what we do
      </div>

      <div className='b' >
        Discover the Story Behind Our Passion for Profits:<br></br>
        Unveiling the Magic Behind Your Financial Future
      </div>

      <div className='c'>
        <img src={line} alt="line" className='line'></img>
      </div>

      <div className='d'>
        Experience Stock Predictions like Never Before. Your Journey to Unveiling Tomorrow's Opportunities
      </div>

      <div className='e'>
        We are a team of passionate students from DAIICT College, embarking on this software project assigned by our professor, Saurabh Tiwari. While we may not have years of professional experience, we are enthusiastic and dedicated to delivering a great product under our professor's guidance
      </div>


      <div className='f'>

        <div className='card'>
          <img src={img1} alt="img1" className='img1'></img>
          <h3 className='title'>
            <b>  Use Anytime: </b>
          </h3 >
          <p className='disc'>Our website is accessible 24/7, allowing you to check stock patterns and predictions at your convenience. Whether you're an early bird or a night owl, you can access valuable insights whenever it suits you.</p>
        </div>


        <div className='card'>
          <img src={img2} alt="img1" className='img1'></img>
          <h3 className='title'>
            <b>  Real-time Updates: </b>
          </h3 >
          <p className='disc'>Stay informed about the latest stock trends and predictions as our platform provides real-time data and analysis, enabling you to make timely decisions.</p>
        </div>


        <div className='card'>
          <img src={img3} alt="img1" className='img1'></img>
          <h3 className='title'>
            <b> Educational Resource:  </b>
          </h3 >
          <p className='disc'>Utilize our Newbie Manual to enhance your stock market knowledge. It's a valuable resource for both beginners and experienced investors, offering insights, tips, and tutorials to help you make informed choices.</p>
        </div>


        <div className='card'>
          <img src={img4} alt="img1" className='img1'></img>
          <h3 className='title'>
            <b> Personalized Portfolio: </b>
          </h3 >
          <p className='disc'> Create and manage your personalized portfolio effortlessly. Monitor your investments and track their performance over time, all in one place.</p>
        </div>


        <div className='card'>
          <img src={img5} alt="img1" className='img1'></img>
          <h3 className='title'>
            <b> Interactive Community: </b>
          </h3 >
          <p className='disc'> Engage with a vibrant community of fellow investors. Share your thoughts, get feedback, and discuss strategies with like-minded individuals through our Comments and Feedback sections.</p>
        </div>



        <div className='card'>
          <img src={img6} alt="img1" className='img1'></img>
          <h3 className='title'>
            <b> User-driven Improvements: </b>
          </h3 >
          <p className='disc'>Your feedback matters. We are constantly working to enhance the website based on user input. Your suggestions and comments play a crucial role in shaping the future of our platform.</p>
        </div>
      </div>



      <div className='g'>
        Our Team Members
        </div>


      <div className='h'>

      <section className="vh-400" style={{ backgroundColor: 'white' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </div>
      </div>
    </section>



      </div>





    </div>
  );
};

export default AboutUs;

