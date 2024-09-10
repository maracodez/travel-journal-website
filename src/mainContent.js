import './App.css';
import rectangle from "./img/rectangle.png"
import rectangle2 from "./img/rectangle2.png"
import rectangle3 from "./img/rectangle3.png"
import fill from "./img/Fill.png"



export default function MainContent() {
    const openMap = (latitude, longitude) => {
      const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`; 
      window.open(googleMapsUrl, '_blank');
    };

  return (
    <div>
      <div className="section">
        <div className="image">
          <img src={rectangle} alt="" id="section-img"/>
        </div>
        <div >
          <div className="section1">
            <img src={fill} alt="" id="section1-img"/>
            <p>JAPAN</p>
            <button onClick={() => openMap(35.3606, 138.7274)}>View on Google Maps</button>
          </div>
          <h1>Mount Fuji</h1>
          <p id="date">12 Jan, 2021 - 24 Jan, 2021</p>
          <p id="describtion">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters &#40;12,380 feet&#41;. Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourist</p>
        </div>
      </div>
      <hr/>
      <div className="section">
        <div className="image">
        <img src={rectangle2} alt="" id="section-img"/>
        </div>
        <div>
          <div className="section1">
            <img src={fill} alt="" id="section1-img"/>
            <p>AUSTRALIA</p>
            <button onClick={() => openMap(-33.8568, 151.2153)}>View on Google Maps</button>
          </div>
          <h1>Sydney Opera House</h1>
          <p id="date">27 May, 2021 - 8 Jun, 2021</p>
          <p id="describtion">The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded</p>
        </div>
      </div>
      <hr/>
      <div className="section">
        <div className="image">
          <img src={rectangle3} alt="" id="section-img"/>
        </div>
        <div> 
          <div className="section1">
            <img src={fill} alt="" id="section1-img"/>
            <p>NORWAY</p>
            <button onClick={() => openMap(62.1048, 7.0054)}>View on Google Maps</button>
          </div>
          <div>
            <h1>Geirangerfjord</h1>
            <p id="date">01 Oct, 2021 - 18 Nov, 2021</p>
            <p id="describtion">The Geiranger Fjord is a fjord in the Sunnmere region of More og Romsdal county, Norway. It is located entirely in the Stranda Municipality</p>
          </div>
        </div>
      </div>
    </div>
  )
}

