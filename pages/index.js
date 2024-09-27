import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer'; // Import the Footer component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium, faGithub, faDev, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container p-4">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className="card">
              <img
                src="https://picsum.photos/200"
                alt="Your Name"
                className="card-img-top custom-img"            
              />
              <div className="card-body text-center mt-1">
                <h5 className="card-title">Leo William</h5>
                <div className="d-flex justify-content-center mb-3 mt-2">
                  <a href="#" className="btn btn-outline-dark mx-1" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faMedium} className='icon'/>
                  </a>
                  <a href="#" className="btn btn-outline-dark mx-1" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className='icon' />
                  </a>
                  <a href="#" className="btn btn-outline-dark mx-1" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faDev} className='icon'/>
                  </a>
                  <a href="#" className="btn btn-outline-dark mx-1" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className='icon'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-8">
            <div className="card card-introduction">
            <div className="mb-4">
              <h3>Introduction</h3>
              <p>Hey! I'm Leo. I like to code during my free time and I enjoy writing articles around technology adoption. You can follow me on
                    <a
                        target="_blank"
                        href="#"
                        className='repo-link'
                    >
                        Medium
                    </a> and
                    <a
                        target="_blank"
                        href="#"
                        className='repo-link'
                    >
                        Dev.to
                    </a> for more articles.
              </p>
              <p>This personal page is built with NextJS, CSS, Bootstrap, Github Actions, S3 bucket and AWS CloudFront. 
                    If you're interested to learn more, have a look at the  
                    <a
                        target="_blank"
                        href="https://github.com/KevinJudith/portfolio-public"
                        className='repo-link'
                    >
                        GitHub repo.
                    </a>
                </p>
            </div>
            <div className="mb-4">
                <h4>Quick links</h4>
                <div className="mt-2 d-flex flex-row align-items-center">
                    <button className='btn btn-outline-dark me-2'>
                        <a href="#" style={{color:'inherit', textDecoration:'none' }}>Message</a> 
                    </button>
                    <button className='btn aquamarine me-2'>
                        <Link href="/projects" style={{color:'inherit', textDecoration:'none'}}>Projects</Link>
                    </button>
                    <button className='btn btn-outline-secondary'>
                        <a target='_blank' href="#" style={{color:'inherit', textDecoration:'none' }}>Resume</a> 
                    </button>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Add the Footer component */}
    </>
  );
}