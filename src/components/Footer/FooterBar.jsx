import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function FooterBar() {
  return (
    <>
      <Footer className="row">
        <div style={{ display: "flex" }}>
          <div
            // className="col-sm-12 col-md-6 col-lg-4 my-4"
            style={{ width: "35%" , padding:"15px"}}
          >
            <Brand>Einfochips - An Arrow Company</Brand>
            <Info>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </Info>
            <Icons style={{marginTop:"15px"}}>
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedinIn />
            </Icons>
          </div>
          <div
            className="flex flex-col justify-center"
            style={{ width: "30%", padding:"30px" }}
          >
            <Address>Reach us</Address>
            <AddressInfo>
              Einfochips, Ahmedabad <br />
              380001
            </AddressInfo>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 flex flex-col justify-center" style={{ width: "40%" }}>
            <Links>
              <Link to="/about">About Us</Link>
              <Link to="/service">Our Services</Link>
              <Link to="/contact">Contact Us</Link>
            </Links>
          </div>
        </div>
        <div className="col-12 text-center ">
          <Copy>
            copyright &copy;2023. Enifochips - an arrow company. All rights reserved.
          </Copy>
        </div>
      </Footer>
    </>
  );
}

const Footer = styled.div`
  width: 100%;
  background: black;
  color: white;
  padding: 20px 15px;
`;

const Brand = styled.h2`
  font-size: 26px;
  font-weight: 600;
  font-family: "Times New Roman", Times, serif;
`;

const Address = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

const AddressInfo = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const Info = styled.p`
  font-size: 14px;
  text-align: justify;
  font-weight: 400;
  font-family: "Times New Roman", Times, serif;
  line-height: 24px;
`;

const Copy = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  margin-top: 20px;
`;

const Icons = styled.div`
  color: white;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    font-weight: 600;
  }

  @media screen and (max-width: 767px) {
    a {
      padding-top: 20px;
    }
  }
`;
