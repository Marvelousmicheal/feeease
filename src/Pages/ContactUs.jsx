import React from "react";
import Lilheader from "../Components/Lilheader";
import Listed1 from "../Components/Listed1";
import Footer from "../Components/Footer"

function ContactUs() {
  return (
    <>
      <section className="contact">
        <main className="banner">
          <div className="container">
            <h3 class="title">How can we help you today?</h3>
            <form action="">
              <input type="text" name="" placeholder="Search knowledge base" />
            </form>
            <div className="students-parents">
              <div className="student active">Student</div>
              <div className="parent">Parent</div>
            </div>
          </div>
        </main>
        <main className="listed1">
          <div className="container">
            <Listed1 />
          </div>
        </main>
        <main className="accordino">
          <div className="container">
            <Lilheader
              h5="Frequently Asked Questions"
              h1="If you got questions we have answer"
              quote="We have a list of frequently asked questions about us"
            />
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}

export default ContactUs;
