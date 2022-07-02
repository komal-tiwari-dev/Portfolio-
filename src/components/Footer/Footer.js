import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  background-image: url(https://raw.githubusercontent.com/komal-tiwari-dev/Portfolio-/ff0c49595913d4948ff7b1131b925ccf7ba63cdf/src/Assets/Materials/footer_wave.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <span>
          Coded with 💙 by{" "}
          <a
            href="https://github.com/komal-tiwari-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Komal_Tiwari
          </a>{" "}
        </span>
      </div>
    </FooterSection>
  );
}

export default Footer;
