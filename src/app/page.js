import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="main">
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background">
        <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" className="" />
        <div className="container d-flex flex-column align-items-center text-center mt-auto">
          <h2 data-aos="fade-up" data-aos-delay={100} className="">
            THE ANNUAL
            <br />
            <span>MARKETING</span> CONFERENCE
          </h2>
          <p data-aos="fade-up" data-aos-delay={200}>
            10-12 December, Downtown Conference Center, New York
          </p>
          <div data-aos="fade-up" data-aos-delay={300} className="">
            <a
              href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              className="glightbox pulsating-play-btn mt-3"
            />
          </div>
        </div>
        <div className="about-info mt-auto position-relative">
          <div className="container position-relative" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-6">
                <h2>About The Event</h2>
                <p>
                  Sed nam ut dolor qui repellendus iusto odit. Possimus inventore
                  eveniet accusamus error amet eius aut accusantium et. Non odit
                  consequatur repudiandae sequi ea odio molestiae. Enim possimus
                  sunt inventore in est ut optio sequi unde.
                </p>
              </div>
              <div className="col-lg-3">
                <h3>Where</h3>
                <p>Downtown Conference Center, New York</p>
              </div>
              <div className="col-lg-3">
                <h3>When</h3>
                <p>
                  Monday to Wednesday
                  <br />
                  10-12 December
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Hero Section */}
    </main>

  );
}
