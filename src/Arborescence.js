/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';

import '../assets/css/bootstrap.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/boxicon.min.css';
import '../assets/css/custom.css';
import '../assets/css/templatemo.css';
import Tre from './Tree';
// import Arbre from './Arbre';
import Search from './Search';
import Navbar from './Navbar';
import Footer from './Footer';

class Arborescence extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>

      <Navbar />
      <section className="banner-bg bg-light">
        <div className="container h-50">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <h1 className="h2 text-center semi-bold-600">Your Family Tree</h1>
              <Search />
              <p className="text-center light-300  pt-3">Exploring your family tree is like unraveling a captivating tapestry, woven with the intricate stories and legacies of ancestors spanning numerous generations. Each branch of your lineage offers a unique thread of history, connecting you to a diverse array of individuals who have contributed to your heritage. Delving into this rich ancestral tapestry unveils a captivating narrative that shapes your identity and deepens your understanding of the past.</p>
            </div>
          </div>
        </div>
      </section>
<div className='bg-light'>
                 
             
                   <Tre />
                {/* <Arbre /> */}
                 

</div>
      </>
    );
  }
}

export default Arborescence;
