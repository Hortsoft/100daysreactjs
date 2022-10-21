import React from "react";

import Footer from "./../footer/Footer";
import Header from "./../header/Header";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <MDBContainer>
      <MDBRow start>
        <MDBCol size='3'>
          One of two columns 3 col wide
        </MDBCol>
        <MDBCol size='9'>
          One of two columns, 9 col wide
          <main>{children}</main>
        </MDBCol>
      </MDBRow>
      </MDBContainer>
        
        <Footer />
      </div>
    </>
  );
};

export default Layout;
