import React, { useState, useEffect, useRef } from 'react';
import './styles/Projects.css';
import Mockup from './images/Sakthi_mockup.jpg';

const Projects = () => {
  const [modalImage, setModalImage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const modalRef = useRef(null);

  const handleImageClick = (src) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const modal = modalRef.current;
    if (modal) {
      if (isModalOpen) {
        modal.classList.add('open');
      } else {
        modal.classList.remove('open');
      }
    }
  }, [isModalOpen]);

  return (
    <section id='projects'>
      <div className="sec-hdr-wrapper">
        <div className="sec-main-hdr">Projects</div>
        <div className="sec-sub-hdr">My work</div>
      </div>

      <div className="my-work-gallery carousel">
        <div
          className={`slider-wrapper carousel-track l2r ${isPaused ? 'paused' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...Array(3)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="slide-sec">
                <img src={Mockup} alt="mockup" className="work-img" onClick={() => handleImageClick(Mockup)} />
              </div>
              <div className="slide-sec">
                <img src={Mockup} alt="mockup" className="work-img" onClick={() => handleImageClick(Mockup)} />
              </div>
              <div className="slide-sec">
                <img src={Mockup} alt="mockup" className="work-img" onClick={() => handleImageClick(Mockup)} />
              </div>
              <div className="slide-sec">
                <img src={Mockup} alt="mockup" className="work-img" onClick={() => handleImageClick(Mockup)} />
              </div>
              <div className="slide-sec">
                <img src={Mockup} alt="mockup" className="work-img" onClick={() => handleImageClick(Mockup)} />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className={`modal ${isModalOpen ? 'open' : ''}`} id="imageModal" ref={modalRef} onClick={handleModalClose}>
        <span className="close" onClick={handleModalClose}>&times;</span>
        <div className="modal-content">
          {isModalOpen && (
            <>
              <img src={modalImage} alt="Full View" />
              <div className='model-desc'>
                <div className="proj-desc">
                  <h3>Sakthi Portfolio</h3>
                  <p>Comming Soon....</p>
                </div>

                <div className="view-prj-btn">View Project</div>
                  
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
