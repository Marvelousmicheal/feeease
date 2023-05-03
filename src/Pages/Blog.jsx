import React from "react";
import Author from "../Components/Author";

import BlogSlider from "../Components/BlogSlider";
import FeatureNews from "../Components/FeatureNews";
import Footer from "../Components/Footer";

function Blog() {
  return (
    <>
      <section className="blog-section">
        <div className="container">
          <header>
            <h2>Trending</h2>
          </header>
          <main className="section-one">
            <div class="slider">
              <div class="slider-container">
                <BlogSlider
                  thumbline="/image/benjamin-davies-Zm2n2O7Fph4-unsplash.jpg"
                  date="- July 2, 2020"
                  header="Your most unhappy customers are your greatest source of
                      learning."
                  displayText=" Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean."
                >
                  <Author
                    AuthorImg="/image/authors/1.jpg"
                    AuthorName="Micheal Bisong"
                    AuthorTitle="Writer and Reader"
                  />
                </BlogSlider>
                <BlogSlider
                  thumbline="adrian-dascal-eFq8xS1wJwM-unsplash.jpg"
                  date="- July 2, 2020"
                  header="Your most unhappy customers are your greatest source of
                      learning."
                  displayText=" Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean."
                >
                  <Author
                    AuthorImg="/image/authors/1.jpg"
                    AuthorName="Micheal Bisong"
                    AuthorTitle="Writer and Reader"
                  />
                </BlogSlider>
                <BlogSlider
                  thumbline="adrian-dascal-eFq8xS1wJwM-unsplash.jpg"
                  date="- July 2, 2020"
                  header="Your most unhappy customers are your greatest source of
                      learning."
                  displayText=" Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean."
                >
                  <Author
                    AuthorImg="/image/authors/1.jpg"
                    AuthorName="Micheal Bisong"
                    AuthorTitle="Writer and Reader"
                  />
                </BlogSlider>
              </div>
            </div>
          </main>
          {/* // main-two starts here */}
          <main className="section-two">
            <header>
              <h2>Featured Articles</h2>
            </header>

            <div class="news-section">
              <FeatureNews
                thumbline="/image/benjamin-davies-Zm2n2O7Fph4-unsplash.jpg"
                date="- July 2, 2020"
                header="Your most unhappy customers are your greatest source of
                      learning."
                displayText=" Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean."
              >
                <Author
                  AuthorImg="/image/authors/1.jpg"
                  AuthorName="Micheal Bisong"
                  AuthorTitle="Writer and Reader"
                />
              </FeatureNews>
              <FeatureNews
                thumbline="/image/fabian-quintero-UWQP2mh5YJI-unsplash.jpg"
                date="- July 2, 2020"
                header="Your most unhappy customers are your greatest source of
                      learning."
                displayText=" Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean."
              >
                <Author
                  AuthorImg="/image/authors/1.jpg"
                  AuthorName="Micheal Bisong"
                  AuthorTitle="Writer and Reader"
                />
              </FeatureNews>
              <FeatureNews
                thumbline="/image/fernando-meloni-j_gnGCDQRew-unsplash.jpg"
                date="- July 2, 2020"
                header="Your most unhappy customers are your greatest source of
                      learning."
                displayText=" Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean."
              >
                <Author
                  AuthorImg="/image/authors/1.jpg"
                  AuthorName="Micheal Bisong"
                  AuthorTitle="Writer and Reader"
                />
              </FeatureNews>
              <FeatureNews
                thumbline="/image/j-balla-photography-6wmFPgnd__Q-unsplash.jpg"
                date="- July 2, 2020"
                header="Your most unhappy customers are your greatest source of
                      learning."
                displayText=" Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean."
              >
                <Author
                  AuthorImg="/image/authors/1.jpg"
                  AuthorName="Micheal Bisong"
                  AuthorTitle="Writer and Reader"
                />
              </FeatureNews>
              <FeatureNews
                thumbline="/image/kitera-dent-bqrvYNu-E7c-unsplash.jpg"
                date="- July 2, 2020"
                header="Your most unhappy customers are your greatest source of
                      learning."
                displayText=" Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean."
              >
                <Author
                  AuthorImg="/image/authors/1.jpg"
                  AuthorName="Micheal Bisong"
                  AuthorTitle="Writer and Reader"
                />
              </FeatureNews>
              <FeatureNews
                thumbline="/image/marek-okon-WScpndZFrOM-unsplash.jpg"
                date="- July 2, 2020"
                header="Your most unhappy customers are your greatest source of
                      learning."
                displayText=" Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean."
              >
                <Author
                  AuthorImg="/image/authors/1.jpg"
                  AuthorName="Micheal Bisong"
                  AuthorTitle="Writer and Reader"
                />
              </FeatureNews>
            </div>
          </main>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Blog;
