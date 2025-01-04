
import React, {useState, useEffect} from 'react';
import '../css/firstpage.css';
import { Link, Outlet } from 'react-router-dom';

function savatqush() {
  var  spanqush = document.getElementById('spanqush');
  var  spanqush1 = document.getElementById('spanqush1');
  var span = document.getElementById('span');
  var modal = document.getElementById('modal')

  var div = document.createElement('div')
  var divrasm = document.createElement('div')
  var divtext = document.createElement('div')
  var divism = document.createElement('div')
  var divnarx = document.createElement('div')
  var btndalete = document.createElement('button')
  var i = document.createElement('i')
  var span2 = document.createElement('span')
  var img = document.createElement('img')
  var span10 = document.createElement('span')

  btndalete.addEventListener('click', function daleteDiv(){
      modal1.removeChild(div)
  })

 i.classList = "fa-solid fa-x"

  div.style.width = "100%";
  div.style.height = "15vh";
  div.style.display = "inline-flex"
  

  divtext.style.width = "60%";
  divtext.style.height = "15vh";
  divtext.style. display = "flex";
  divtext.style.flexDirection = "column";

  divrasm.style.width = "20%";
  divrasm.style.height = "15vh";
  divrasm.style.display = "inline-flex";
  divrasm.style.justifyContent = "center";
  divrasm.style.alignItems = "center";

  divism.style.width = "100%";
  divism.style.height = "5vh";
  divism.style.display = "inline-flex";
  divism.style.alignItems = "center";
  divism.style.marginTop = "20px";

  divnarx.style.width = "100%";
  divnarx.style.height = "5vh";
  divnarx.style.display = "inline-flex";
  divnarx.style.alignItems = "center";

  btndalete.style.width = "10%";
  btndalete.style.height = "5vh";
  btndalete.style.border = "none";
  btndalete.style.marginTop = "5vh";
  btndalete.style.background = "none";

  

  i.style.color = "black"
  i.style.fontSize = "11pt"
  i.style.marginTop = "-2vh"

  img.style.width = "100%";
  img.style.height = "15vh";

  span.style.marginLeft = "20px"
  span.style.marginBottom = "40px"

  span10.style.fontSize = "10pt"
  span10.style.marginLeft = "20px"
  span10.style.color = "gray"

  btndalete.value = i;
  
  img.setAttribute('src', 'https://nout.uz/wp-content/uploads/2023/02/84-300x300.png')

  span2.innerText = window.localStorage.getItem("ism");
  spanqush.innerText = spanqush.innerText * 1 + 1;
  spanqush1.innerText = spanqush1.innerText * 1 + 1;
  span10.innerText = window.localStorage.getItem("narx");
  window.localStorage.setItem("ism", "HP Pavilion 15 Gold (R3-5300U)");
  window.localStorage.setItem("narx", "4 845 000");

  modal.appendChild(div)
  div.appendChild(divrasm)
  div.appendChild(divtext)
  div.appendChild(btndalete)
  btndalete.appendChild(i)
  divtext.appendChild(divism)
  divtext.appendChild(divnarx)
  divrasm.appendChild(img)
  divism.appendChild(span)
  divnarx.appendChild(span10)

  modal1.appendChild(div)
  div.appendChild(divrasm)
  div.appendChild(divtext)
  div.appendChild(btndalete)
  btndalete.appendChild(i)
  divtext.appendChild(divism)
  divtext.appendChild(divnarx)
  divrasm.appendChild(img)
  divism.appendChild(span)
  divnarx.appendChild(span10)
}



export default function main1(props) {
  const [user, setUser] = useState()
    
  useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json()) 
    .then(json => {
       console.log(json);
       setUser(json[0].title)
    });
  })

    return (
        <div>
            <main>
                   <div className='div8'>
                    <div className='div9'>
                        <div className='div11'>
                          <h1>Toshkentda noutbuklar. Tanlang, 200 ta modeldan!</h1>
                          <h5>Noutbuk do’koni №1. O’zbekistonga yetkazib berish. 2 yilga qadar kafolat.</h5>
                        </div>
                    </div>
                    
                   </div>
                   <Link to="/lenovo">
                       <div className='div10'>
                          <img id='main-img' src="https://nout.uz/wp-content/uploads/2023/07/Lenovo-1536x507.jpg" alt="" />
                       </div>
                   </Link>
                   <Link to="/asus">
                       <div className='div10'>
                          <img id='main-img' src="https://nout.uz/wp-content/uploads/2022/05/asus-ban-2-1536x390.jpg" alt="" />
                       </div>
                   </Link>
                    <Link to="/hp">
                       <div className='div010'>
                          <img id='main-img' src="https://nout.uz/wp-content/uploads/2023/07/HP-1-1536x507.jpg" alt="" />
                       </div>
                    </Link>
                    
                    <Link to="/msi">
                       <div className='div10'>
                          <img id='main-img' src="https://nout.uz/wp-content/uploads/2022/05/msi-2-1536x390.jpg" alt="" />
                       </div>
                    </Link> 
                    <Link to="/acer">
                       <div className='div10'>
                          <img id='main-img' src="https://nout.uz/wp-content/uploads/2023/07/Acer-1536x406.jpg" alt="" />
                       </div>
                    </Link>
                    <Link to="/dell">
                       <div className='div10'>
                          <img id='main-img' src="https://nout.uz/wp-content/uploads/2022/05/dell.jpg" alt="" />
                       </div>
                    </Link>
                    <div className='div13'>
                    <div className='div14'>
                        <div className='div11'>
                          <h1>Asosiy daraja</h1>
                        </div>
                    </div>
                    
                       <div className='div012 row '>
                       <div class="card div017 col-xl-6 lg-6 md-6 sm-12  ">
                         <Link to="/hppaviliongold" id='a1'>
                           <span id='span'>HP Pavilion 15 Gold (R3-5300U)</span>
                            <img  id='img' src="https://nout.uz/wp-content/uploads/2023/02/84-300x300.png" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <span>15.6</span>

                              <p class="card-text">AMD Ryzen™ 3-5300u(2.6 GHz-3.8 GHz) (4 yadro - 8 ip)</p>
                              <span>AMD® Radeon Graphics</span>
                                <br />
                                <br />
                              <span>256GB PCIe® NVMe™ M.2 SSD (512GB SSD=+40 у.е)</span>
                                <br />
                                <br />
                              <span id='span_narx'>4 845 000</span>
                                <br />
                              <span id='span1'>380</span>
                              
                            </div>
                           </Link>
                              <button id='a2' onClick={savatqush}  type="button" class="btn btn-primary" ><i class="fa-solid fa-cart-shopping"></i></button>
                              <hr id='tg_hr'/>
                              <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>

                          </div>
                          <div className='div016 col-xl-6 lg-6 md-6 sm-12 '>
                          <a id='a1' href="/hppavilionsilver">
                           <span id='span'>HP Pavilion 15 Silver (R3-5300U/4GB)</span>
                            <img  id='img' src="https://nout.uz/wp-content/uploads/2023/02/84-300x300.png" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <span>15.6</span>

                              <p class="card-text">AMD Ryzen™ 3-5300u(2.6 GHz-3.8 GHz) (4 yadro - 8 ip)</p>
                              <span>AMD® Radeon Graphics</span>
                                <br />
                                <br />
                              <span>256GB PCIe® NVMe™ M.2 SSD (512GB SSD=+40 у.е)</span>
                                <br />
                                <br />
                              <span>4 845 000</span>
                                <br />
                              <span id='span1'>380</span>
                            </div>
                          </a>
                          <button id='a2' onClick={savatqush}  href="#" class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                            <hr id='tg_hr'/>
                            <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                          </div>
                          
                       </div>
                    
                   </div>
                   <div className='biznes'>
                     <div className='class'>
                      <h1>Biznes-klass</h1>
                     </div>
                   </div>
                   <div className='div13'>
                    <div className='div14'>
                        <div className='div11'>
                          <h1>Kuchli noutbuklar</h1>
                        </div>
                    </div>
                    
                       <div className='div012 row '>
                       <div class="card div17 col-xl-6 lg-6 md-6 sm-12  ">
                         <a id='a1' href="/msistelath17studio">
                           <span id='span'>MSI Stealth 17 Studio (i9-13900H/RTX4080)</span>
                            <img id='img' src="https://nout.uz/wp-content/uploads/2023/03/MSI-Stealth-17-4-300x300.jpg" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <br />
                              <span>15.6</span>
                                 <br />
                              <p class="card-text">Intel® Core™ i9-13900h(4.1 GHz-5.4 GHz) (14 yadro - 20 ip)</p>
                                <br />
                              <span>1TB PCIe® NVMe™ M.2 SSD </span>
                                <br />
                                <br />
                              <span id='span01'>38 237 250 so'm</span>
                                <br />
                              <span id='span1'>2 999</span>
                              
                            </div>
                          </a>
                          <button onClick={savatqush} id='a2' href="#" class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                             <hr id='tg_hr'/>
                             <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                          </div>
                          <div className='div16 col-xl-6 lg-6 md-6 sm-12 '>
                          <a id='a1' href="/asustufgamin">
                           <span id='span'>Asus TUF Gaming Silver FA507(R-77735HS/RTX4060/ENG-RU)</span>
                            <img id='img' src="https://nout.uz/wp-content/uploads/2024/07/42-300x300.png" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <span>15.6</span>

                              <p class="card-text">AMD Ryzen™ 7-7735hs(3.2 GHz-4.7 GHz) (8 yadroli; - 16 ip;)</p>
                              <span>AMD® Radeon Graphics</span>
                                <br />
                                <br />
                              <span>512GB PCIe® NVMe™ M.2 SSD     (1TB SSD=+50 у.е)</span>
                                <br />
                                <br />
                              <span id='span01'>12 737 250 so'm</span>
                                <br />
                              <span id='span1'>999</span>
                              
                            </div>
                          </a>
                          <button onClick={savatqush} id='a2' href="#" class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                             <hr id='tg_hr'/>
                             <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i>TG orqali buyurma</a>
                          </div>
                          
                       </div>
                    
                   </div>
                   <div className='biznes'>
                     <div className='class'>
                     
                     </div>
                   </div>
                   <div className='div13'>
                    <div className='div14'>
                        <div className='div11'>
                          <h1>Ultrabuklar</h1>
                        </div>
                    </div>
                    
                       <div className='div012 row '>
                       <div class="card div17 col-xl-6 lg-6 md-6 sm-12  ">
                         <a id='a1' href="/lggram14">
                           <span id='span'>LG Gram 14 (i7-1360P)</span>
                            <img id='img' src="https://nout.uz/wp-content/uploads/2023/09/LG-Gram-14-1-300x300.jpg" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <br />
                              
                              <p class="card-text">14" WQXGA+ OLED 90Hz</p>
                                <br />
                                <span>"Intel® Core™ i7-1360P (2,2 gigagertsli - 5,0 gigagertsli) (12 yadroli; 16 ta ip)"</span>
                                <br />
                                <br />
                              <span>Intel Iris Xe Graphics</span>
                                <br />
                                <br />
                                <span class="custom-value">16GB DDR5</span>
                                   <br />
                                   <br />
                                <span class="custom-value">512GB PCIe® NVMe™ M.2 SSD (1TB SSD=+50 у.е)</span>
                                  <br />
                                  <br />
                              <span id='span01'>17 750 000 so'm</span>
                                <br />
                              <span id='span1'>1000</span>
                              
                            </div>
                          </a>
                            <button onClick={savatqush} id='a2' href="#" class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                             <hr id='tg_hr'/>
                             <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                          </div>
                          <div className='div16 col-xl-6 lg-6 md-6 sm-12 '>
                          <a id='a1' href="/gatewayl31">
                           <span id='span'>Gateway L31 (i7-1255U)</span>
                            <img id='img' src="https://nout.uz/wp-content/uploads/2023/08/Gateway-300x300.jpg" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <span>14* FullHD IPS TouchScreen</span>

                              <p class="card-text"></p>
                              <span class="custom-value">Intel® Core™ i7-1255u (3.5 GHz – 4.7 GHz) (10 yadroli 12 ip)</span>
                                <br />
                                <br />
                              <span class="custom-value">Intel UHD Graphics</span>
                                  <br />
                                  <br />
                                <span class="custom-value">8GB DDR4</span>
                                  <br />
                                  <br />
                                <span class="custom-value">512GB PCIe® NVMe™ M.2 SSD (1TB SSD=+50 у.е)</span>
                                  <br />
                                  <br />
                              <span id='span01'>7 012 500 so'm</span>
                                <br />
                              <span id='span1'>550</span>
                              
                            </div>
                          </a>
                            <button onClick={savatqush} id='a2' href="#" class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                             <hr id='tg_hr'/>
                             <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                          </div>
                          
                       </div>
                    
                   </div>
                  
                    
                   
                   <div className='biznes'>
                     <div className='class'>
                     
                     </div>
                   </div>
                   <div className='div13'>
                    <div className='div14'>
                        <div className='div11'>
                          <h1>Transformerlar</h1>
                        </div>
                    </div>
                    
                       <div className='div12 row '>
                       <div class="card div17 col-xl-6 lg-6 md-6 sm-12  ">
                         <a id='a1' href="/hpspectex360">
                           <span id='span'>HP Spectre x360 16 (i7-13700H)</span>
                            <img id='img' src="https://nout.uz/wp-content/uploads/2023/07/Spectre-GOLD-16-4-300x300.jpg" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <br />
                              
                                  <span class="custom-value">16" 3K+ (3072 x 1920) IPS TS Corning® Gorilla® Glass NBT™ 400 nits, 100% sRGB</span>
                                <br />
                                  <br />
                                <span>"Intel® Core™ i7-13700H (3,7 gigagertsli - 5,0 gigagertsli) (14 yadroli; 20 ta ip)"</span>
                                <br />
                                <br />
                              <span>Intel Iris Xe Graphics</span>
                                <br />
                                <br />
                                <span class="custom-value">16GB DDR4</span>
                                   <br />
                                   <br />
                                <span class="custom-value">512GB PCIe® NVMe™ M.2 SSD </span>
                                  <br />
                                  <br />
                              <span id='span01'>17 212 500 so'm</span>
                                <br />
                              <span id='span1'>1350</span>
                              
                            </div>
                          </a>
                            <button onClick={savatqush} id='a2' href="#" class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                             <hr id='tg_hr'/>
                             <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                          </div>
                          
                          
                       </div>
                    
                   </div>


                   <div className='biznes'>
                     <div className='class'>
                     
                     </div>
                   </div>
                   <div className='div13'>
                    <div className='div14'>
                        <div className='div11'>
                          <h1>Kompyuterlar</h1>
                        </div>
                    </div>
                    
                       <div className='div12 row '>
                            <div class="card div17 col-xl-2 lg-6 md-6 sm-6  ">
                              <a id='a1' href="/asusrogstrixg35">
                                <span id='span' class="woocommerce-loop-product__title">Asus ROG Strix G35CG (i9-11900KF/RTX3080 10GB)</span>
                                  <img id='img' src="https://nout.uz/wp-content/uploads/2021/11/asus-rog-intt1-300x300.jpg" class="card-img-top" alt="..." />
                                  <div class="cardbody">
                                    <br />
                                    
                                      <span class="custom-value">Intel Core i9-11900kf (3.5 GHz - 5.3 GHz) (8 yadro-16 ip)</span>
                                        <br />
                                        <br />
                                      <span class="custom-value">GeForce RTX 3080 NVIDIA 10GB/256Bit/GDDR6</span>
                                        <br />
                                        <br />
                                      <span>Intel Iris Xe Graphics</span>
                                        <br />
                                        <br />
                                      <span class="custom-value">32GB DDR4</span>
                                        <br />
                                        <br />
                                      <span class="custom-value">1TB PCIe® NVMe™ M.2 SSD</span>
                                        <br />
                                        <br />
                                    <span id='span01'>26 775 000 so'm</span>
                                      <br />
                                    <span id='span1'>2100</span>
                                    
                                  </div>
                                </a>
                                <button onClick={savatqush} id='a2' href="#" class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                                   <hr id='tg_hr'/>
                                   <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                                </div>
                                
                                
                            <div class="card div17 col-xl-2 lg-6 md-6 sm-6  ">
                              <a id='a1' href="/asusrogstrixga15">
                                <span id='span'>Asus ROG Strix GA15 (R5-5600X/GTX1650)</span>
                                  <img id='img' src="https://nout.uz/wp-content/uploads/2021/11/rog-g10dk-2-300x300.jpg" class="card-img-top" alt="..." />
                                  <div class="cardbody">
                                    <br />
                                    
                                        <span class="custom-value">"AMD Ryzen ™ 5 5600x ish stoli protsessori (6 yadro / 12 ip, 35 MB Kesh, 3.7 GHz dan 4.6 GHz gacha)"</span>
                                      <br />
                                        <br />
                                      <span class="custom-value">GeForce GTX™ 1650 NVIDIA 4GB/128Bit/GDDR5</span>
                                  
                                      <br />
                                      <br />
                                      <span class="custom-value">16GB DDR4</span>
                                        <br />
                                        <br />
                                      <span class="custom-value">512GB PCIe® NVMe™ M.2 SSD <br />(1TB SSD=+70 y.e) </span>
                                        <br />
                                        <br />
                                    <span id='span01'>13 387 500 so'm</span>
                                      <br />
                                    <span id='span1'>1050</span>
                                    
                                  </div>
                                </a>
                                <button onClick={savatqush} id='a2' href="#" class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                                   <hr id='tg_hr'/>
                                   <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                                </div>
                                
                                
                            <div class="card div0017 col-xl-2 lg- md-6 sm-6  ">
                              <a id='a1' href="/asusrogstrixg15dk">
                                <span id='span'>Asus ROG Strix G15DK (R5-5600X/RTX3070)</span>
                                  <img id='img' src="https://nout.uz/wp-content/uploads/2021/11/rog-g10dk-2-300x300.jpg" class="card-img-top" alt="..." />
                                  <div class="cardbody">
                                    <br />
                                    
                                        <span class="custom-value">"AMD Ryzen ™ 5 5600x ish stoli protsessori (6 yadro / 12 ip, 35 MB Kesh, 3.7 GHz dan 4.6 GHz gacha)"</span>
                                      <br />
                                        <br />
                                      <span class="custom-value">NVIDIA® GeForce® RTX3070 8GB DDR6 with LHR : 3x DP, 2x HDMI</span>
                                      <br />
                                      <br />
                                      <span class="custom-value">16GB DDR4</span>
                                        <br />
                                        <br />
                                      <span class="custom-value">512GB PCIe® NVMe™ M.2 SSD <br />(1TB SSD=+70 y.e) </span>
                                        <br />
                                        <br />
                                    <span id='span01'>16 575 000 so'm</span>
                                      <br />
                                    <span id='span1'>1300</span>
                                    
                                  </div>
                                </a>
                                <button onClick={savatqush} id='a2' href="#" class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                                   <hr id='tg_hr'/>
                                   <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                                </div>

                            <div class="card div0017 col-xl-2 lg-6 md-6 sm-6  ">
                         <a id='a1' href="/lenovolegion5t5">
                           <span id='span'>Lenovo Legion 5 T5 (7-5700G/RTX3060)</span>
                            <img id='img' src="https://nout.uz/wp-content/uploads/2021/11/legioen-t1-300x300.jpg" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <br />
                              
                                  <span class="custom-value">AMD Ryzen ™ 7-5700g (3.80 GHz - 4.60 GHz) (8 yadro-16 ip)</span>
                                <br />
                                  <br />
                                <span class="custom-value">GeForce® RTX™3060 NVIDIA 12GB/192/GDDR6</span>
                                <br />
                                <br />
                              <span>Intel Iris Xe Graphics</span>
                                <br />
                                <br />
                                <span class="custom-value">32GB DDR4</span>
                                   <br />
                                   <br />
                                <span class="custom-value">1TB PCIe® NVMe™ M.2 SSD </span>
                                  <br />
                                  <br />
                              <span id='span01'>16 575 000 so'm</span>
                                <br />
                              <span id='span1'>1300</span>
                              
                             </div>
                             </a>
                             <button onClick={savatqush} id='a2' href="#" class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                                <hr id='tg_hr'/>
                                <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                            </div>
                                   
                          
                           <div class="card div0017 col-xl-2 lg-6 md-6 sm-6">
                         <a id='a1' href="/asusrogstrixg35i7">
                           <span id='span'>Asus Rog Strix G35CG (i7-11700KF/RTX3080 10GB)</span>
                            <img id='img' src="https://nout.uz/wp-content/uploads/2021/11/asus-rog-intt1-300x300.jpg" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <br />
                              
                                  <span class="custom-value">Intel® Core™ i7-11700kf (3.6 GHz – 5.0 GHz) (8 yadroli; 16 ip)</span>
                                <br />
                                  <br />
                                <span class="custom-value">GeForce RTX 3080 NVIDIA 10GB/256Bit/GDDR6</span>
                                <br />
                                <br />
                                <span class="custom-value">32GB DDR4</span>
                                   <br />
                                   <br />
                                <span class="custom-value">1TB PCIe® NVMe™ M.2 SSD </span>
                                  <br />
                                  <br />
                              <span id='span01'>25 500 000 so'm</span>
                                <br />
                              <span id='span1'>2000</span>
                              
                            </div>
                            </a>
                            <button onClick={savatqush} id='a2' href="#" class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                             <hr id='tg_hr'/>
                             <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                           </div>
  

                       </div>
                       
                       
                    
                          
                       
                   </div>
                   <div className='div13'>
                    <div className='div14'>
                        <div className='div11'>
                          <h1>Aksessuarlar</h1>
                        </div>
                    </div>
                    
                    
                       <div className='div012 row '>
                            <div class="card main_div017 col-xl-2 lg-6 md-6 sm-6  ">
                              <a id='a1' href="/dellgamingsumka">
                                <span id='span' class="woocommerce-loop-product__title">Dell Gaming Backpack 15</span>
                                  <img id='img' src="https://nout.uz/wp-content/uploads/2021/04/dell-backpack-1-300x300.jpg" class="card-img-top" alt="..." />
                                  <div class="cardbody">
                                    <br />
                                    <bdi id='bdi'>637 500 so'm</bdi><span id='s' class="woocommerce-Price-amount amount">663 000 so'm&nbsp;</span>
                                     <br />
                                     <span id='id0'>50</span>
                                    
                                  </div>
                                </a>
                                <button onClick={savatqush} id='a2'  class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                                  <hr id='tg_hr'/>
                                  <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                                </div>
                                
                                
                            <div class="card main_div017 col-xl-2 lg-6 md-6 sm-6  ">
                              <a id='a1' href="/msiairsumka">
                                <span id='span'>MSI Air Backpack</span>
                                  <img id='img' src="https://nout.uz/wp-content/uploads/2021/03/msi-air-backpack-1-300x300.jpg" class="card-img-top" alt="..." />
                                  <div class="cardbody">
                                    <br />

                                    <bdi id='bdi'>637 500 so'm</bdi><span id='s' class="woocommerce-Price-amount amount">663 000 so'm&nbsp;</span>
                                     <br />
                                     <span id='id0'>50</span>
                                        
                                    
                                  </div>
                                </a>
                                <button onClick={savatqush} id='a2'  class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                                   <hr id='tg_hr'/>
                                   <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                                </div>
                                
                                
                            <div class="card div017 col-xl-2 lg- md-6 sm-6  ">
                              <a id='a1' href="/msibattlepackbag">
                                <span id='span'>MSI Battlepack Bag</span>
                                  <img id='img' src="https://nout.uz/wp-content/uploads/2021/04/msi-backpack-5-300x300.jpg" class="card-img-top" alt="..." />
                                  <div class="cardbody">
                                  <br />
                                    <bdi id='bdi'>1 275 000 so'm</bdi><span id='s' class="woocommerce-Price-amount amount">663 000 so'm&nbsp;</span>
                                     <br />
                                     <span id='id0'>100</span>
                                        
                                      
                                    
                                  </div>
                                </a>
                                <button onClick={savatqush} id='a2'  class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                                   <hr id='tg_hr'/>
                                   <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                                </div>

                            

                          
                           <div class="card div017 col-xl-2 lg-6 md-6 sm-6">
                             <Link to="/msiurbanraider" id="a1">
                               <span id='span'>MSI Urban Raider Gaming Laptop <br /> Backpack</span>
                                <img id='img' src="https://nout.uz/wp-content/uploads/2021/03/msi-urban-raider-gaming-backpack-4-300x300.jpg" class="card-img-top" alt="..." />
                                <div class="cardbody">
                                <br />
                                        <bdi id='bdi'>1 275 000 so'm</bdi><span id='s' class="woocommerce-Price-amount amount">663 000 so'm&nbsp;</span>
                                         <br />
                                         <span id='id0'>100</span>                              
                                     
                                  
                                </div>
                             </Link>
                             <button onClick={savatqush} id='a2'  class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                             <hr id='tg_hr'/>
                             <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                           </div>
                       </div>
                   </div>
                    <div className='di'>
                          <div className='id'>
                            <div className='di1'></div>
                            <div className='di2'></div>
                          </div>
                    </div>

                    




            </main>
                <Outlet/>
        </div>
    );
}
