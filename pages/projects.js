import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { faSquareArrowUpRight, faCode, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <div className="row d-flex justify-content-space-around">
            <div class="card mb-1 me-1 pt-3">
                <img class="card-img-top" src="https://picsum.photos/200" alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">HomeEats</h5>
                    <p class="card-text">Landing page built with HTML and CSS without frontend framework and deployed using Vercel.</p>
                    <p>
                        <span class="badge bg-secondary me-2">HTML</span>
                        <span class="badge bg-primary me-2">CSS</span>
                        <span class="badge bg-dark me-2">vercel</span>
                    </p>
                    <a target='_blank' href="https://home-eats-flax.vercel.app/" class="btn btn-sm btn-dark text-white me-2">See Live</a>
                    <a target='_blank' href="https://github.com/KevinJudith/HomeEats" class="btn btn-sm btn-outline-dark me-2">
                        <FontAwesomeIcon icon={faCode} className='icon'/>
                    </a>
                </div>
            </div>
            <div class="card mb-1 me-1 pt-3">
                <img class="card-img-top" src="https://picsum.photos/200" alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Online Code Editor</h5>
                    <p class="card-text">Simple Python code editor using HTML, CSS, FLask for backend and deployed on Render with gunicorn as HTTP server.</p>
                    <p>
                        <span class="badge bg-secondary me-2">HTML</span>
                        <span class="badge bg-primary me-2">CSS</span>
                        <span class="badge bg-warning me-2">Flask</span>
                        <span class="badge bg-dark me-2">Render</span>
                        <span class="badge bg-secondary me-2">gunicorn</span>
                    </p>
                    <a target='_blank' href="https://code-editor-flask-2.onrender.com/" class="btn btn-sm btn-dark text-white me-2">See Live</a>
                    <a target='_blank' href="https://github.com/KevinJudith/code-editor-flask" class="btn btn-sm btn-outline-dark me-2">
                        <FontAwesomeIcon icon={faCode} className='icon'/>
                    </a>
                    <a target='_blank' href="https://medium.com/@kjsmekens/creating-an-online-code-editor-for-python-with-flask-e547f597632b" class="btn btn-sm btn-outline-primary me-2">
                        Read Article <FontAwesomeIcon icon={faSquareArrowUpRight} className='icon'/>
                    </a>
                    
                </div>
            </div>
            <div class="card mb-1 me-1 pt-3">
                <img class="card-img-top" src="https://picsum.photos/200" alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">NextJS with HTML5</h5>
                    <p class="card-text">Landing page using HTML5, CSS and transform properties.</p>
                    <p>
                        <span class="badge bg-danger me-2">HTML5</span>
                        <span class="badge bg-primary me-2">CSS</span>
                        <span class="badge bg-info me-2">Transform</span>
                    </p>
                    <a target='_blank' href="https://nextjs-blog-git-master-kevinjudiths-projects.vercel.app/" class="btn btn-sm btn-dark text-white me-2">See Live</a>
                    <a target='_blank' href="https://github.com/KevinJudith/nextjs-blog" class="btn btn-sm btn-outline-dark me-2">
                        <FontAwesomeIcon icon={faCode} className='icon'/>
                    </a>
                </div>
            </div>
            <div class="card mb-1 me-1 pt-3">
                <img class="card-img-top" src="https://picsum.photos/200" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Portfolio</h5>
                    <p class="card-text">Personal page built using NextJS, Bootstrap, AWS CloudFront and Github Actions</p>
                    <p>
                        <span class="badge bg-danger me-2">NextJS</span>
                        <span class="badge bg-primary me-2">Bootstrap</span>
                        <span class="badge bg-warning me-2">AWS</span>
                        <span class="badge bg-info me-2">Github Actions</span>
                    </p>
                    <a target='_blank' href="https://portfolio-pi-sooty-49.vercel.app/" class="btn btn-sm btn-dark text-white me-2">See Live</a>
                    <a target='_blank' href="https://github.com/KevinJudith/portfolio-public" class="btn btn-sm btn-outline-dark me-2">
                        <FontAwesomeIcon icon={faCode} className='icon'/>
                    </a>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}