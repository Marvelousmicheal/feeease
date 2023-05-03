import React, { useEffect } from "react";

function Preloader() {
  //   const [showLoader, setshowLoader] = useState(true);
  //   setTimeout(() => {
  //     setshowLoader(false);
  //   }, 6000);

  //   return showLoader ? (
  //     <div class="intro" >
  //       <h1 class="quote-header">
  //         <span class="logo active big-header ">FEEEASE</span>
  //         <br />
  //         <span class="logo small-header">
  //           "Streamlining your life with FEEEASE which is easy...."
  //         </span>
  //       </h1>
  //     </div>
  //   ) : null;

  useEffect(() => {
    const intro = document.querySelector(".intro");

    const logoSpan = document.querySelectorAll(".logo");

    const intervalId = setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add("active");
        }, (idx + 1) * 1000);
      });

      setTimeout(() => {
        logoSpan.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.remove("active");
            span.classList.add("fade");
          }, (idx + 1) * 1500);
        });
      }, 3000);

      setTimeout(() => {
        intro.style.top = "-100vh";
      }, 7800);
    });

    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div class="intro">
      <h1 class="quote-header">
        <span class="logo big-header ">FEEEASE</span>
        <br />

        <span class="logo small-header">
          "Streamlining your life with FEEEASE which is easy...."
        </span>
      </h1>
    </div>
  );
}

export default Preloader;
