import Footer from '@/components/sections/Footer';
import Link from 'next/link';
import MarqueeSection from '@/components/sections/MarqueeSection';
import React from 'react';

export default function PortfolioPage() {
  return (
    <>
      <style>{`
        .page-wrapper {
          min-height: 100vh;
          background-color: #ffffff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          line-height: 1.6;
          color: #1e1e1e;
          padding: 80px 0;
        }

        /* Layout Container */
        .portfolio-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Individual Project Section Spacing */
        .project-section {
          padding: 80px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .project-section:last-child {
          border-bottom: none;
        }

        /* Top Header (Project Title) */
        .header {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 60px;
          letter-spacing: -1px;
        }

        /* Main Content Grid/Flex Layout */
        .content-wrapper {
          display: flex;
          gap: 80px;
          align-items: flex-start;
        }

        /* Left Column (Text) */
        .text-content {
          flex: 1;
          max-width: 450px;
          padding-top: 80px;
        }

        .text-content p {
          font-size: 24px;
          line-height: 1.5;
          margin-bottom: 50px;
          max-width: 350px;
          color: #4a4a4a;
        }

        /* Statistic Block */
        .statistic-block {
          margin-top: 80px;
        }

        .statistic-block .percentage {
          font-size: 80px;
          font-weight: 700;
          margin-bottom: 10px;
          line-height: 1;
        }

        .statistic-block .description {
          font-size: 18px;
          color: #4a4a4a;
          max-width: 280px;
        }

        /* CTA Button (Case study link) */
        .cta-button {
          display: inline-block;
          background-color: #facc15;
          color: #000000;
          padding: 12px 24px;
          border-radius: 12px;
          font-weight: 700;
          text-decoration: none;
          margin-top: 24px;
          transition: background-color 0.2s ease;
        }

        .cta-button:hover {
          background-color: #fde047;
        }

        /* Right Column (Image/Video) */
        .image-content {
          flex: 2;
          position: relative;
          min-width: 600px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .image-content img,
        .image-content video {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Base Overlay Styling (Pill/Card) */
        .overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(255, 255, 255, 0.95);
          padding: 10px;
          border-radius: 50px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 20px;
          font-weight: 600;
          white-space: nowrap;
        }

        /* Status Label Overlay (Project 2) */
        .status-overlay {
          background-color: rgba(255, 255, 255, 1);
          border-radius: 8px;
          padding: 15px 25px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .status-overlay .status-dot {
          width: 10px;
          height: 10px;
          background-color: #ff9900;
          border-radius: 50%;
        }

        .status-overlay .text-label {
          color: #1e1e1e;
          font-size: 16px;
          font-weight: 500;
        }

        /* Progress Bar Overlay (Project 3) */
        .progress-overlay {
          background-color: #f0f0f0;
          padding: 15px 15px 15px 25px;
          border-radius: 8px;
          width: 300px;
          flex-direction: column;
          gap: 10px;
        }

        .progress-overlay .progress-text {
          display: flex;
          justify-content: space-between;
          width: 100%;
          font-size: 16px;
          color: #4a4a4a;
        }

        .progress-overlay .bar-container {
          width: 100%;
          height: 8px;
          background-color: #e0e0e0;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-overlay .progress-bar {
          width: 75%;
          height: 100%;
          background-color: #00BCD4;
        }

        /* Notification Badge Overlay (Project 5) */
        .badge-overlay {
          background-color: #1e1e1e;
          padding: 15px 25px;
          border-radius: 12px;
          gap: 10px;
          box-shadow: 0 10px 30px rgba(30, 30, 30, 0.2);
        }

        .badge-overlay .badge-icon {
          font-size: 24px;
          color: #ff5e3a;
        }

        .badge-overlay .badge-text {
          color: #ffffff;
          font-size: 18px;
          font-weight: 500;
        }

        /* Media Query for responsiveness */
        @media (max-width: 1000px) {
          .page-wrapper {
            padding: 40px 0;
          }

          .content-wrapper {
            flex-direction: column;
            gap: 40px;
          }

          .text-content {
            max-width: 100%;
            padding-top: 0;
          }

          .image-content {
            min-width: unset;
            margin: 0 -20px;
          }

          .portfolio-container {
            padding: 0 20px;
          }

          .header {
            font-size: 36px;
            margin-bottom: 40px;
          }

          .text-content p {
            font-size: 20px;
          }

          .statistic-block .percentage {
            font-size: 64px;
          }
        }
      `}</style>

      <div className="page-wrapper">
        <div className="portfolio-container">
          {/* PROJECT 1: NORTHWEST */}
          <section className="project-section">
            <div className="header">Northwest Constructions Ltd.</div>

            <div className="content-wrapper">
              <div className="text-content">
                <p>
                  Northwest Constructions is committed to building spaces that
                  stand the test of time, with thoughtful planning and structural
                  innovation at every stage.
                </p>

                <div className="statistic-block">
                  <div className="percentage" style={{ color: '#00b075' }}>
                    58%
                  </div>
                  <div className="description">
                    Share price increase in the 12 months after launch.
                  </div>
                  <Link href="/portfolio/northwest" className="cta-button">
                    View Full Case Study →
                  </Link>
                </div>
              </div>

              <div className="image-content">
                <video autoPlay muted loop playsInline controls>
                  <source
                    src="https://r2-northwest.takkar.ooo/surrey_city_centre_Drone_May7_compressed.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>

          {/* PROJECT 2: RON BASRA */}
          <section className="project-section">
            <div className="header">Ron Basra Real Estate Group</div>

            <div className="content-wrapper">
              <div className="text-content">
                <p>
                  Ron Basra and his team bring nearly three decades of
                  award-winning real estate service to Vancouver, combining deep
                  local insight with client-first guidance on every transaction.
                </p>

                <div className="statistic-block">
                  <div className="percentage" style={{ color: '#6C5CE7' }}>
                    28+
                  </div>
                  <div className="description">
                    Years of award-winning real estate service in Vancouver.
                  </div>
                  <Link href="/portfolio/ron-basra" className="cta-button">
                    View Full Case Study →
                  </Link>
                </div>
              </div>

              <div className="image-content">
                <img
                  src="https://placehold.co/800x530/6C5CE7/FFFFFF?text=Agency+Teamwork+Visual"
                  alt="People collaborating in a modern office."
                />
                <div className="overlay status-overlay">
                  <span className="status-dot" />
                  <span className="text-label">Project Live</span>
                  <span className="text-label" style={{ opacity: 0.6 }}>
                    2 weeks ago
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* PROJECT 3: FORTE PHYSIO */}
          <section className="project-section">
            <div className="header">
              Forte Sports &amp; Orthopaedic Physiotherapy
            </div>

            <div className="content-wrapper">
              <div className="text-content">
                <p>
                  Forte Physiotherapy helps people move better and feel stronger
                  with evidence-based care for sports injuries, pain, pelvic
                  health and post-surgical recovery.
                </p>

                <div className="statistic-block">
                  <div className="percentage" style={{ color: '#00BCD4' }}>
                    92%
                  </div>
                  <div className="description">
                    Customer satisfaction rating within the first 6 months of
                    launch, exceeding targets.
                  </div>
                  <Link href="/portfolio/forte" className="cta-button">
                    View Full Case Study →
                  </Link>
                </div>
              </div>

              <div className="image-content">
                <img
                  src="https://placehold.co/800x530/00BCD4/FFFFFF?text=Aura+App+Interface"
                  alt="Mobile banking interface showing investment data."
                />
                <div className="overlay progress-overlay">
                  <div className="progress-text">
                    <span>Sustainable Fund A</span>
                    <span style={{ fontWeight: 700 }}>75% Funded</span>
                  </div>
                  <div className="bar-container">
                    <div className="progress-bar" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PROJECT 4: MEDALLION */}
          <section className="project-section">
            <div className="header">Medallion Homes</div>

            <div className="content-wrapper">
              <div className="text-content">
                <p>
                  Medallion Homes crafts residences that balance modern design
                  with enduring quality, creating homes across Metro Vancouver
                  that are beautiful, functional and built to last.
                </p>

                <div className="statistic-block">
                  <div className="percentage" style={{ color: '#FF5E3A' }}>
                    450k
                  </div>
                  <div className="description">
                    Sample listing value in recent Medallion-built communities.
                  </div>
                  <Link href="/portfolio/medallion" className="cta-button">
                    View Full Case Study →
                  </Link>
                </div>
              </div>

              <div className="image-content">
                <video autoPlay muted loop playsInline controls>
                  <source
                    src="https://r2-medallion.takkar.ooo/compressed_3118.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>

          {/* PROJECT 5: ARMAAN SANDHU */}
          <section className="project-section">
            <div className="header">Armaan Sandhu Real Estate</div>

            <div className="content-wrapper">
              <div className="text-content">
                <p>
                  Armaan Sandhu focuses on helping buyers and sellers navigate
                  BC&apos;s residential market with clear advice, thoughtful
                  marketing and a focus on long-term relationships.
                </p>

                <div className="statistic-block">
                  <div className="percentage" style={{ color: '#1e1e1e' }}>
                    $15M
                  </div>
                  <div className="description">
                    Residential specialist serving Surrey, Vancouver and
                    surrounding areas.
                  </div>
                  <Link href="/portfolio/armaan-sandhu" className="cta-button">
                    View Full Case Study →
                  </Link>
                </div>
              </div>

              <div className="image-content">
                <img
                  src="https://placehold.co/800x530/1e1e1e/888888?text=Chronos+Desktop+View"
                  alt="Dark, minimalist computer desktop interface."
                />
                <div className="overlay badge-overlay">
                  <span className="badge-icon">★</span>
                  <span className="badge-text">
                    New Feature Alert: Dark Mode v2
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <MarqueeSection />
        <Footer />
      </div>
    </>
  );
}
