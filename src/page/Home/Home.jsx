import React from 'react';
import NewConteiner from '../../components/NewContneiner/NewConteiner';
import PicHome from '../../components/PicHome/PicHome';
import './home.scss';
import pic1 from '../../img/image-1.jpg';
import pic2 from '../../img/image-2.jpg';
import pic3 from '../../img/image-3.jpg';

const Home = () => {
  return (
    <div className='home'>
      <div className="item">
        <PicHome />
      </div>
      <div className="item"><h1>The Bright Future of Web 3.0?</h1></div>
      <div className="item">
        <div className="note-center">

          We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
          But is it really fulfilling its promise?
        </div>
        <button>
          Read more
        </button>
      </div>
      <div className="item"><NewConteiner /> </div>

      <div className="item">
        <img className='img-article' src={pic1} alt="" />
        <div className="main">
          <div className="number-article">01</div>
          <div className="header-article">Reviving Retro PCs</div>
          <div className="note-article">What happens when old PCs are given modern upgrades?</div>
        </div>
      </div>
      <div className="item">
        <img className='img-article'src={pic2} alt="" />
        <div className="main">
          <div className="number-article">02</div>
          <div className="header-article">Top 10 Laptops of 2022</div>
          <div className="note-article">Our best picks for various needs and budgets.</div>
        </div>
      </div>
      <div className="item">
        <img className='img-article' src={pic3} alt="" />
        <div className="main">
          <div className="number-article">03</div>
          <div className="header-article">The Growth of Gaming</div>
          <div className="note-article">How the pandemic has sparked fresh opportunities.</div>
        </div>
      </div>
    </div>
  )
}

export default Home
