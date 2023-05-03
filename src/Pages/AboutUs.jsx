import React from "react";
import {
  BsPlayFill,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs";
import {
  AiOutlineTeam,
  AiOutlineGlobal,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { MdJoinLeft } from "react-icons/md";
import {
  FcDoughnutChart,
  FcHome,
  FcGlobe,
  FcHighPriority,
} from "react-icons/fc";
import Lilheader from "../Components/Lilheader";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function AboutUs() {
  return (
    <>
      <section className="Aboutus-section">
        <main className="main">
          <main className="main-one">
            <div className="container">
              <h4>Built for student, by studepreneurs</h4>
              <h1>
                The platform built to help student make payment from the comfort
                of their homes
              </h1>
              <div className="play-main">
                <img src="/image/about-popup.webp" alt="nothing-to-see" />
                <div className="outer-play">
                  <button>
                    <BsPlayFill />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </main>
        <main className="main-two">
          <div className="container">
            <div>
              <span>
                <AiOutlineTeam />
              </span>
              <h5>2000+ employees & 100+ nationalities</h5>
            </div>
            <div>
              <span>
                <AiOutlineGlobal />
              </span>

              <h5>27+ offices around the world</h5>
            </div>
            <div>
              <span>
                <MdJoinLeft />
              </span>

              <h5>€303.6 BN billion in processed volume in 2020</h5>
            </div>
          </div>
        </main>
        <main className="main-three">
          <div className="container">
            <Lilheader
              h5="Our values"
              h1="The values that drive everything we do "
              quote="Our commitment to innovation and creativity fuels our drive
            to provide exceptional customer experiences."
            />
            <div className="card-main">
              <div className="card">
                <span>
                  <FcDoughnutChart />
                </span>
                <div class="text-box">
                  <h4>Accountability</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                    justo aliquet elit sed convallisolo neque aliquam elementum
                    dolr.
                  </p>
                </div>
              </div>
              <div className="card">
                <span>
                  <FcDoughnutChart />
                </span>
                <div class="text-box">
                  <h4>Accountability</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                    justo aliquet elit sed convallisolo neque aliquam elementum
                    dolr.
                  </p>
                </div>
              </div>
              <div className="card">
                <span>
                  <FcDoughnutChart />
                </span>
                <div class="text-box">
                  <h4>Accountability</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                    justo aliquet elit sed convallisolo neque aliquam elementum
                    dolr.
                  </p>
                </div>
              </div>
              <div className="card">
                <span>
                  <FcDoughnutChart />
                </span>
                <div class="text-box">
                  <h4>Accountability</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                    justo aliquet elit sed convallisolo neque aliquam elementum
                    dolr.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <main className="main-four">
          <div className="container">
            <Lilheader
              h5="Our Team"
              h1="The amazing team behind our company"
              quote="We are a team of studepreneurs, payment specialists and blockchain enthusiasts."
            />
            <div className="team-id">
              <div className="team-card">
                <img
                  src="/image/authors/team-image-1.webp"
                  alt="an image of marvelous"
                />
                <h4>Marvelous Donatus</h4>
                <p>CEO & co-founder </p>
                <div className="social-links">
                  <Link to="">
                    <span>
                      <BsInstagram />
                    </span>
                  </Link>
                  <Link to="">
                    <span>
                      <BsFacebook />
                    </span>
                  </Link>
                  <Link to="">
                    <span>
                      <BsTwitter />
                    </span>
                  </Link>
                  <Link to="">
                    <span>
                      <BsLinkedin />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="team-card">
                <img
                  src="/image/authors/team-image-1.webp"
                  alt="an image of marvelous"
                />
                <h4>Marvelous Donatus</h4>
                <p>CEO & co-founder </p>
                <div className="social-links">
                  <Link to="">
                    <span>
                      <BsInstagram />
                    </span>
                  </Link>
                  <Link to="">
                    <span>
                      <BsFacebook />
                    </span>
                  </Link>
                  <Link to="">
                    <span>
                      <BsTwitter />
                    </span>
                  </Link>
                  <Link to="">
                    <span>
                      <BsLinkedin />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="team-card">
                <img
                  src="/image/authors/team-image-1.webp"
                  alt="an image of marvelous"
                />
                <h4>Marvelous Donatus</h4>
                <p>CEO & co-founder </p>
                <div className="social-links">
                  <Link to="">
                    <span>
                      <BsInstagram />
                    </span>
                  </Link>
                  <Link to="">
                    <span>
                      <BsFacebook />
                    </span>
                  </Link>
                  <Link to="">
                    <span>
                      <BsTwitter />
                    </span>
                  </Link>
                  <Link to="">
                    <span>
                      <BsLinkedin />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="team-card">
                <img
                  src="/image/authors/team-image-1.webp"
                  alt="an image of marvelous"
                />
                <h4>Marvelous Donatus</h4>
                <p>CEO & co-founder </p>
                <div className="social-links">
                  <Link to="">
                    <span>
                      <BsInstagram />
                    </span>
                  </Link>
                  <Link to="">
                    <span>
                      <BsFacebook />
                    </span>
                  </Link>
                  <Link to="">
                    <span>
                      <BsTwitter />
                    </span>
                  </Link>
                  <Link to="">
                    <span>
                      <BsLinkedin />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="team-card">
                <img
                  src="/image/authors/team-image-1.webp"
                  alt="an image of marvelous"
                />
                <h4>Marvelous Donatus</h4>
                <p>CEO & co-founder </p>
                <div className="social-links">
                  <Link to="">
                    <span>
                      <BsInstagram />
                    </span>
                  </Link>
                  <Link to="">
                    <span>
                      <BsFacebook />
                    </span>
                  </Link>
                  <Link to="">
                    <span>
                      <BsTwitter />
                    </span>
                  </Link>
                  <Link to="">
                    <span>
                      <BsLinkedin />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="team-card">
                <img
                  src="/image/authors/team-image-1.webp"
                  alt="an image of marvelous"
                />
                <h4>Marvelous Donatus</h4>
                <p>CEO & co-founder </p>
                <div className="social-links">
                  <Link to="">
                    <span>
                      <BsInstagram />
                    </span>
                  </Link>
                  <Link to="">
                    <span>
                      <BsFacebook />
                    </span>
                  </Link>
                  <Link to="">
                    <span>
                      <BsTwitter />
                    </span>
                  </Link>
                  <Link to="">
                    <span>
                      <BsLinkedin />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        <main className="main-five">
          <div className="container">
            <Lilheader
              h5="Our Office"
              h1="Come and visit our offices around the world"
              quote="If you ever feel like visiting us ,we are are always ready and open to see you, please dont be shy ."
            />
            <div className="location-main">
              <div className="location">
                <div className="locationname">
                  <span>
                    <FcHome />
                  </span>
                  <h2>Awka, Anambra</h2>
                </div>
                <div className="locationemail-number">
                  <div className="locationdetail">
                    <span>
                      <AiOutlineMail />
                    </span>
                    <h5>awka@feeease.com</h5>
                  </div>
                  <div className="locationdetail">
                    <span>
                      <AiOutlinePhone />
                    </span>
                    <h5>(+234)8057361331</h5>
                  </div>
                </div>
              </div>
              <div className="location">
                <div className="locationname">
                  <span>
                    <FcHighPriority />
                  </span>
                  <h2>Awka, Anambra</h2>
                </div>
                <div className="locationemail-number">
                  <div className="locationdetail">
                    <span>
                      <AiOutlineMail />
                    </span>
                    <h5>awka@feeease.com</h5>
                  </div>
                  <div className="locationdetail">
                    <span>
                      <AiOutlinePhone />
                    </span>
                    <h5>(+234)8057361331</h5>
                  </div>
                </div>
              </div>
              <div className="location">
                <div className="locationname">
                  <span>
                    <FcGlobe />
                  </span>
                  <h2>Awka, Anambra</h2>
                </div>
                <div className="locationemail-number">
                  <div className="locationdetail">
                    <span>
                      <AiOutlineMail />
                    </span>
                    <h5>awka@feeease.com</h5>
                  </div>
                  <div className="locationdetail">
                    <span>
                      <AiOutlinePhone />
                    </span>
                    <h5>(+234)8057361331</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}

export default AboutUs;
