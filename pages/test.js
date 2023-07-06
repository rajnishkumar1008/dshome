import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import FormFooterSubscriber from '../components/FormFooterSubscriber';
import Form from "../components/Form";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import VideoPlayer from "../components/VideoPlayer";
import VideoPlayeside from "../components/VideoPlayeside";
import LinkWithFadeOut from "../components/LinkWithFadeOut";

const Test = () => {
  // const [playing, setPlaying] = useState(false);
  // const [showPoster, setShowPoster] = useState(true);
  // const playerRef = useRef(null);
  // const videoContainerRef = useRef(null);

  // const handlePlay = () => {
  //   setPlaying(true);
  //   setShowPoster(false);
  //   playerRef.current?.seekTo(0);
  // };

  // const handleEnded = () => {
  //   setPlaying(false);
  //   setShowPoster(true);
  // };

  // const handlePause = () => {
  //   setPlaying(false);
  // };

  return (
    <>
      <Head>
        <title>Home Dynamics Square | Book Free Consultation</title>
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/contact-us/"
        />
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <main>
        <div className="main-banner">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 66666,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper mySwipe-home-slider"
          >
            <SwiperSlide>
              <div className="slider-banner">
                <div className="video-bg">
                  <video
                    className="video-screen"
                    autoPlay
                    loop
                    muted
                    poster="/img/video-bg.png"
                  >
                    <source src="/video/SLide1.mp4" />
                  </video>
                </div>
                <div className="video-conte">
                  <h1>
                    Dynamics Square is a leading Microsoft Partner in Canada.{" "}
                  </h1>
                  <p>
                    We take pride in successfully transforming businesses by
                    delivering effectual single-point solutions.
                  </p>
                  <Link href="/about/">
                    <a className="btn">
                      About Us <i class="bi bi-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-banner">
                <div className="video-bg">
                  <video
                    className="video-screen"
                    autoPlay
                    loop
                    muted
                    poster="/img/video-bg.png"
                  >
                    <source src="/video/SLide2.mp4" />
                  </video>
                </div>
                <div className="video-conte">
                  <h1>Accelerating your business for tomorrow </h1>
                  <p>
                    We are here to let you stay ahead of the curve. Our
                    professionals specialize in transforming businesses and
                    ensuring they are future-ready.{" "}
                  </p>
                  <Link href="/about/">
                    <a className="btn">
                      About Us <i class="bi bi-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-banner">
                <div className="video-bg">
                  <video
                    className="video-screen"
                    autoPlay
                    loop
                    muted
                    poster="/img/video-bg.png"
                  >
                    <source src="/video/SLide3.mp4" />
                  </video>
                </div>
                <div className="video-conte">
                  <h1>Sustainable Associations</h1>
                  <p>
                    Dynamics Square has joined hands with Microsoft to drive
                    ambitious sustainability outcomes, with smart actions &
                    processes.{" "}
                  </p>
                  <Link href="/about/">
                    <a className="btn">
                      About Us <i class="bi bi-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-banner">
                <div className="video-bg">
                  <video
                    className="video-screen"
                    autoPlay
                    loop
                    muted
                    poster="/img/video-bg.png"
                  >
                    <source src="/video/SLide4.mp4" />
                  </video>
                </div>
                <div className="video-conte">
                  <h1>Leading the transformation</h1>
                  <p>
                    We pave the way for your business's success with business
                    intelligence, providing full-fledged ERP software on the
                    cloud.{" "}
                  </p>
                  <Link href="/about/">
                    <a className="btn">
                      About Us <i class="bi bi-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <section className="into-banner-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 align-self-center">
                <img
                  className="new-pic"
                  src="/img/micrsoft-parten-white.png"
                  alt="parten image"
                />
              </div>
              <div className="col-lg-1">
                <div className="sh"></div>
              </div>
              <div className="col-lg-9 align-self-center">
                <div className="info-right-new">
                  <div className="info-img-new">
                    <img src="/img/clutch-img.png" alt="parten image" />
                  </div>
                  <div className="info-contr-new">
                    <h3>
                      Experience Personalized Microsoft Cloud <br />
                      Solutions for Simplified Operations
                    </h3>
                    <div className="info">
                      <span>Streamline Processes</span>
                      <span>Minimize Expenses</span>
                      <span>Set New Records</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="new-main-heading">
                  <h2>We are Globally Trusted</h2>
                  <p>
                    As a Microsoft Solutions Partner, we have built sustainable
                    futures by serving 500 + projects and delivering an
                    extensive portfolio of successful business solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="row inner-side-pad">
              <div className="col-lg-12">
                <div className="new-counter-wraper">
                  <div className="new-counter">
                    <h3>500+</h3>
                    <p>Clients Worldwide</p>
                  </div>
                  <div className="new-counter">
                    <h3>150+</h3>
                    <p>Certified Pofessionals</p>
                  </div>
                  <div className="new-counter">
                    <h3>12+</h3>
                    <p>Years Experience</p>
                  </div>
                  <div className="new-counter">
                    <h3>7+</h3>
                    <p>Global Presence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="player-wrapper">
      {!playing && (
        <div className="play-button-overlay" onClick={handlePlay}>
          <img src="/img/video-bg.png" alt="Video Poster" />
         <i class="bi bi-play-circle-fill"></i>
        </div>
      )}
      <ReactPlayer
       ref={playerRef}
        url="/video/test.mp4"
        className="react-player"
        controls={false}
        playing={playing}
        onEnded={handleEnded}
        onPause={handlePause}
        width="100%"
        height="100%"
        loop={true}
      />
    </div> */}

        <section>
<<<<<<< HEAD
          <VideoPlayer
            poster="/img/poster-1.png"
            src="https://meleewholesale.com/assets/video/SLide4-1.mp4"
          />
=======
          <VideoPlayer poster="/img/poster-1.png" src="https://meleewholesale.com/assets/video/SLide4-1.mp4" />
>>>>>>> a67ca0e3f67ce4afd374c7beb9becf7e40c488fd
        </section>
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="new-main-heading">
                  <h2>
                    We offer Solutions that help <br />
                    you witness Exponential Growth
                  </h2>
                  <p>
                    We are a trusted Microsoft Dynamics 365 partner in Canada,
                    and we aim to offer services for potential business growth.
                    We are helping businesses adapt to agility, innovation, and
                    transformation and empowering them to stay ahead of the
                    curve.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div>
                  <ul className="nav nav-tabs video-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-bs-toggle="tab"
                        href="#tb1"
                      >
                        Sales & Marketing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-bs-toggle="tab" href="#tb2">
                        Service
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-bs-toggle="tab" href="#tb3">
                        Finance
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-bs-toggle="tab" href="#tb4">
                        Supply Chain
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div id="tb1" className="container tab-pane active">
                      <div className="row vide-bg">
                        <div className="col-lg-5 align-self-center">
                          <div className="tab-inner-heading">
                            <h3>Generate more Revenue & Visibility </h3>
                          </div>
                        </div>
                        <div className="col-lg-7 p-0 align-self-center">
                          <div>
                            <VideoPlayeside
                              poster="/img/poster3.png"
                              src="https://meleewholesale.com/assets/video/vide-1.mp4"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="tb2" className="container tab-pane fade">
                      <div className="row vide-bg">
                        <div className="col-lg-5 align-self-center">
                          <div className="tab-inner-heading">
                            <h3>
                              Personalize, Re-Imagine & Elevate the Customer
                              Service Experience{" "}
                            </h3>
                          </div>
                        </div>
                        <div className="col-lg-7 p-0 align-self-center">
                          <div>
                            <VideoPlayeside
                              poster="/img/poster6.png"
                              src="https://meleewholesale.com/assets/video/vide-2.mp4"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="tb3" className="container tab-pane fade">
                      <div className="row vide-bg">
                        <div className="col-lg-5 align-self-center">
                          <div className="tab-inner-heading">
                            <h3>
                              Accelerate Finances with Advanced Automation{" "}
                            </h3>
                          </div>
                        </div>
                        <div className="col-lg-7 p-0 align-self-center">
                          <div>
                            <VideoPlayeside
                              poster="/img/poster7.png"
                              src="https://meleewholesale.com/assets/video/vide-3.mp4"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="tb4" className="container tab-pane fade">
                      <div className="row vide-bg">
                        <div className="col-lg-5 align-self-center">
                          <div className="tab-inner-heading">
                            <h3>
                              Grow with Digital Supply Chain Transformation{" "}
                            </h3>
                          </div>
                        </div>
                        <div className="col-lg-7 p-0 align-self-center">
                          <div>
                            <VideoPlayeside
                              poster="/img/poster3.png"
                              src="https://meleewholesale.com/assets/video/vide-4.mp4"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="tb5" className="container tab-pane fade">
                      <div className="row vide-bg">
                        <div className="col-lg-5 align-self-center">
                          <div className="tab-inner-heading">
                            <h3>Drive demand and close deals faster</h3>
                          </div>
                        </div>
                        <div className="col-lg-6 p-0 align-self-center">
                          <div>
                            <VideoPlayeside
                              poster="/img/poster5.png"
                              src="https://meleewholesale.com/assets/video/vide-5.mp4"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-222">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="new-main-heading">
                  <h2>
                    Are you ready to transform your business with modernized
                    technology?
                  </h2>
                  <p>
                    At Dynamics Square. We transform businesses with Microsoft's
                    most modern tech - Microsoft Cloud, Azure, AI (Artificial
                    Intelligence), Power Apps, Dataverse, Dynamics 365, Power
                    BI, AR (Augmented Reality), VR (Virtual Reality), MR (Mixed
                    Reality), and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="card poster-card">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/poster-1.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Implementation</h3>
                    <p className="card-text">
                      At Dynamics Square, we specialize in seamless Microsoft
                      Dynamics implementation complemented by enduring support.
                      Our deep expertise ensures a smooth deployment of the
                      Dynamics 365 suite, encompassing both ERP and CRM
                      applications, free from the traditional glitches and
                      hassles.{" "}
                    </p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card poster-card">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/poster-2.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Upgrade Services</h3>
                    <p className="card-text">
                      We have successfully transformed businesses with our
                      futuristic Upgrading services. Dynamics Square ensures
                      that the team can extend developing modern methodologies.
                      for unveiling your true business potential.{" "}
                    </p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card poster-card">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/poster-3.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Support Services</h3>
                    <p className="card-text">
                      We prioritize long-term associations with you over
                      anything. Our team is happy to assist the clients after
                      completing the project.{" "}
                    </p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bc-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="new-main-heading">
                  <h2>Industries </h2>
                  <p>
                    We foster the healthcare sector to make a huge impact. At
                    Dynamics Square, we offer advisory, innovation,
                    implementation, and managed services, to effectively align
                    healthcare solutions.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row-d">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              centeredSlides={true}
              pagination={{
                clickable: false,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/industry-poster-1.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Food & Beverages</h3>
                    <p className="card-text">
                      Revolutionize, streamline, and elevate your food supply
                      chain with advanced technologies.{" "}
                    </p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/industry-poster-2.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Retail & E-Commerce</h3>
                    <p className="card-text">
                      Scale up to create exceptional, insightful shopping,
                      customer experiences like never before.{" "}
                    </p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/industry-poster-3.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Education</h3>
                    <p className="card-text">
                      Streamline the educational methodologies by Dynamics 365
                      while following a holistic approach for envisioning
                      possibilities to drive the future of education.{" "}
                    </p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/industry-poster-1.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Finances </h3>
                    <p className="card-text">
                      Experience greater financial stability, efficiency, and
                      visibility with Dynamics 365 advanced solutions. Time to
                      drive more revenue and reduce costs.{" "}
                    </p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/industry-poster-2.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Startups</h3>
                    <p className="card-text">
                      Build, empower & sustain your startup, and small business
                      with powerful cloud business management solutions.{" "}
                    </p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/industry-poster-1.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Not For Profit</h3>
                    <p className="card-text">Power a progressive yet sustainable transformation in society by streamlining fundraising using Dynamics 365 Non-Profit Solutions. </p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/industry-poster-2.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Manufacturing</h3>
                    <p className="card-text">Unleash accelerating Manufacturing growth by leveraging Dynamics 365 Solutions. Bring agility to surpass ahead of your competitors.</p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/industry-poster-3.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Professional Services</h3>
                    <p className="card-text">Maximize your revenue through a streamlined project management process with Dynamics 365 capabilities.</p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className="col-pd-22">
          <div className="container">
            <LinkWithFadeOut />
          </div>
        </section>

        <section className="new-testi-wraper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="testmonial-new-slider">
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper mySwiper-testi"
                  >
                    <SwiperSlide>
                      <div className="testn-inner">
                        <div className="test-pic">
                          <img src="/img/dummy-pic.png" alt="dummy-pic" />
                        </div>
                        <div className="client-info">
                          <h3>Our Leadership</h3>
                          <p>We understand that business complexities are constantly evolving, and being compliant with this paradigm shift is of vital importance for a business to sustain.</p>
                          <span>Manish G</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testn-inner">
                        <div className="test-pic">
                          <img src="/img/dummy-pic.png" alt="dummy-pic" />
                        </div>
                        <div className="client-info">
                          <h3>Our Leadership</h3>
                          <p>We take pride in being an ERP partner, associating with Microsoft for successful sustainability outcomes.  We understand the importance and thereby take measures to accelerate the process  </p>
                          <span>Nitesh</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why-us-wrapp">
           <div className="container">
           <div className="row justify-content-center">
            <div className="col-lg-8">
            <div className="new-main-heading">
                  <h2>Why Us</h2>
                </div>
            </div>
          </div>
           <div className="row">
            <div className="col-lg-4">
              <div className="why-us-box">
               <img src="/img/why-pic-1.png" alt="dunnp" />
               <h3>Our Sustainable Approach</h3>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="why-us-box">
               <img src="/img/why-pic-2.png" alt="dunnp" />
               <h3>Humans at Dynamics</h3>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="why-us-box">
               <img src="/img/why-pic-3.png" alt="dunnp" />
               <h3>Our Dynamics</h3>
              </div>
            </div>
           </div>
           </div>
        </section>


        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="footer-new-top">
                  <img src="/img/footer-ne-bg.png" alt="imd" />
                  <div className="bott">
                    <div className="left">
                      <h3>Ask About<br />
Our Products,Offerings & Other Details</h3>
<p>Get in touch with our Dynamics Consultants Now</p>
                    </div>
                    <div className="right">
                    <a href="/contact-us/" >Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-cont-bf">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h3>Delve into a Tailored Experience</h3>
              </div>
            </div>
          </div>
        </section>
        <footer id="footer" className="footer footer-new-bg">
          <div className="footer-top colo-new">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-5 col-md-12 footer-info">
                  <a href="/" className="logo d-flex align-items-center">
                  <img
                   src="/img/dynamics_square_tm_logo_footer.svg"
                   alt="Dynamics Square TM Logo"
                   width="301"
                   height="21"
                    style={{marginBottom:"20px"}}
                  />
                  </a>
                  <p>Dynamics Square is Canada's leading Microsoft Gold Certified Partner
                  that caters to the needs of orgnizations who can source
                  next-gen Microsoft Business Apps from our highly skilled
                  Microsoft consultants.</p>
                  {/* <img
                    src="/img/microsoft-partner-footer.png"
                    alt="microsoft-partner"
                    className="footer-img"
                    width="210" height="74"
                  />
                  <img
                    src="/img/Tech-For-Socil-Impact.svg"
                    alt="Tech-For-Socil-Impact"
                    className="footer-img"
                    width="683" height="154"
                  />
                  <div className="footer-award">
                  <img src="/img/award-1.png" alt='top micrsoft dynamics crm company' width="108" height="108" />
                  <img src="/img/award-2.png" alt='top micrsoft dynamics crm company' width="108" height="108" />
                  <img src="/img/award-3.png" alt='top micrsoft dynamics crm company' width="108" height="108" />
                </div> */}
                </div>
                <div className="col-lg-2 col-12 footer-links">
                  <p>BUSINESS APPS</p>
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/products/dynamics-365-business-central/">
                        Business Central
                      </a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/products/microsoft-dynamics-365-finance/">
                        Finance
                      </a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/products/dynamics-365-supply-chain-management/">
                        Supply Chain
                      </a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/products/microsoft-dynamics-365-sales/">
                        Sales
                      </a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/products/microsoft-power-bi/">
                        Power BI
                      </a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/products/microsoft-azure/">Azure IoT</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/products/microsoft-dynamics-erp/">
                        ERP (NAV/GP/AX)
                      </a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/products/microsoft-dynamics-crm/">
                        CRM
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-2 col-12 footer-links">
                  <p>QUICK LINKS</p>
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/about-us/">About us</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/why-us/">Why Us</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/our-services/">Our Services</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/partner/">Our Partners</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/contact-us/">Contact Us</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/blog/" rel="">
                        Blogs
                      </a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/privacy-policy/">Privacy policy</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-12 text-md-start">
                  <p>CONNECT WITH US</p>
  
                  <div className="social-links mt-3">
                    <a
                      target="_blank"
                      rel=""
                      href="https://twitter.com/dsquare_ca"
                      className="twitter"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a
                      target="_blank"
                      rel=""
                      href="https://www.facebook.com/dynamicssquareca"
                      className="facebook"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      target="_blank"
                      rel=""
                      href="https://www.youtube.com/c/DynamicsSquare"
                      className="instagram"
                    >
                      <i className="bi bi-youtube"></i>
                    </a>
                    <a
                      target="_blank"
                      rel=""
                      href="https://www.linkedin.com/company/dynamics-square-canada/"
                      className="linkedin"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                  <br />
                  {/* <div className="subbb">
                    <p>Subscribe Newsletter</p>
                    <span>
                      Get Dynamics 365 Product Updates, Free Webinars, Blogs,
                      Offers And Much More!
                    </span>
                    <FormFooterSubscriber />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              &copy; Copyright &nbsp;<span>2023 Dynamics Square.</span>
              <div className="footer-extra-link">
                <a href="/terms-of-use/">Terms of Use </a>
                <a href="/cookie-policy/">| Cookie </a>
                {/* <a href="/sitemap.xml">| Sitemap</a> */}
              </div>
            </div>
          </div>
        </footer>
        <div className='call-bb-wr'>
      <button className="fixed-button wobble" type="button">
      <a href="tel:+12898070740" target="_self"><i className="bi bi-telephone-fill"></i></a>
</button>
</div>
      </main>
    </>
  );
};

export default Test;
