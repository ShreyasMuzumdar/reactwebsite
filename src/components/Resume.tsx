import './Resume.css'
import GeometricPatterns from './GeometricPatterns'

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <GeometricPatterns 
        density="low" 
        speed="slow" 
        opacity={0.25}
        colors={['#4a90e2', '#2c5aa0', '#357abd']}
      />
      <div className="container">
        <h2 className="section-title">
          Resume
        </h2>
        <div className="resume-content">
          <div className="resume-actions">
            <a 
              href="/reactwebsite/Shreyas_Muzumdar_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="resume-button download-btn"
            >
              📄 Download PDF
            </a>
            <a 
              href="/reactwebsite/Shreyas_Muzumdar_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="resume-button view-btn"
            >
              🔍 View in New Tab
            </a>
          </div>
          
          <div className="resume-viewer">
            <iframe
              src="/reactwebsite/Shreyas_Muzumdar_Resume.pdf"
              title="Shreyas Muzumdar Resume"
              className="resume-pdf"
              loading="lazy"
            />
          </div>
          
          <div className="resume-fallback">
            <p>
              Having trouble viewing the resume? 
              <a 
                href="/reactwebsite/Shreyas_Muzumdar_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="fallback-link"
              >
                Click here to open it in a new tab
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
