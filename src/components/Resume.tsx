import './Resume.css'
import ScrollReveal from './ScrollReveal'

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <h2 className="section-title">
          <ScrollReveal>Resume</ScrollReveal>
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
              <ScrollReveal enableBlur={false} baseOpacity={0.4}>
                Having trouble viewing the resume? 
                <a 
                  href="/reactwebsite/Shreyas_Muzumdar_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="fallback-link"
                >
                  Click here to open it in a new tab
                </a>
              </ScrollReveal>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
