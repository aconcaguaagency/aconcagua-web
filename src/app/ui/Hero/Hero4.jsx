import React from "react";
import parse from "html-react-parser";
import Div from "../Div";
import VerticalLinks from "../VerticalLinks";

export default function Hero4({
  title,
  subtitle,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  phoneNumber,
  email,
}) {
  return (
    <Div
      className="cs-hero "
      style={{
        backgroundImage: "url(/images/fondoAconcagua.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="cs-hero cs-style1 cs-type1 text-center cs-fixed_bg"
        style={{ background: "rgba(0,18,48,0.7)", height: "52rem" }}
      >
        <Div className="container">
          <Div className="cs-hero_text">
            <div className="cs-primary_font cs-primary_color"> We Are </div>
            <h1 className="cs-hero_title">
              <span>Aconcagua </span>
              <br /> Agency{" "}
            </h1>
            <Div className="cs-hero_info justify-content-center">
              <Div className="cs-hero_subtitle">{subtitle}</Div>
            </Div>
          </Div>
        </Div>

        <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
        {(phoneNumber || email) && (
          <Div className="cs-hero_social_wrap cs-left_side cs-primary_font cs-primary_color">
            <ul className="cs-hero_social_links">
              {email && (
                <li>
                  <span>{email}</span>
                </li>
              )}
              {phoneNumber && (
                <li>
                  <span>{phoneNumber}</span>
                </li>
              )}
            </ul>
          </Div>
        )}
        <a href={scrollDownId} className="cs-down_btn">
          .
        </a>
      </div>
    </Div>
  );
}
