import React from 'react';
import Link from 'next/link';

// import { urlFor } from '../lib/client';

const FooterBanner = () => {
  // console.log(footerBanner);
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>discount</p>
          <h3>largeText1</h3>
          <h3>largeText2</h3>
          <p>saleTime</p>
        </div>
        <div className="right">
          <p>smallTex</p>
          <h3>midText</h3>
          <p>desc</p>
          {/* <Link href={`/product/${product}`}> */}
            <button type="button">buttonText</button>
          {/* </Link> */}
        </div>

        {/* <img 
          src={urlFor(image)} className="footer-banner-image"
        /> */}
      </div>
    </div>
  )
}

export default FooterBanner
