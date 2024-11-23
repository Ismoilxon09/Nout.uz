import React from 'react';
import '../css/acer.css';
import '../css/samsung.css';
import { Link } from 'react-router-dom';
import '../css/firstpage.css';
import '../css/mahsulot.css';

function nextrasm() {
   var imgrasm = document.getElementById('imgrasm')
   imgrasm.setAttribute('src', 'https://nout.uz/wp-content/uploads/2022/05/grosshare1.jpg')
   imgrasm.style.width = "100%";
   imgrasm.style.translate = "1s";
}
function nextrasm1() {
  var imgrasm = document.getElementById('imgrasm')
  imgrasm.setAttribute('src', 'https://nout.uz/wp-content/uploads/2022/05/grosshare3.jpg')
  imgrasm.style.width = "100%";
  imgrasm.style.translate = "1s";
}
function nextrasm2() {
  var imgrasm = document.getElementById('imgrasm')
  imgrasm.setAttribute('src', 'https://nout.uz/wp-content/uploads/2022/05/grosshare2.jpg')
  imgrasm.style.width = "100%";
  imgrasm.style.translate = "1s";
}
function sonqush(){
  var inpson = document.getElementById('inpson')
  inpson.value = inpson.value *1 +1;
}
function sonayir(){
  var inpson = document.getElementById('inpson')

  if(inpson.value * 1 > 1){
    inpson.value = inpson.value *1 -1;
  }
}
function savatqush() {
  var  span1 = document.getElementById('span1');
  span1.innerText = span1.innerText + inpson.value;
}
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
const Msicrosshair15 = () => {
    return (
        <div>
            <header>
                   <div className='header-div'>
                      <div className='header-div1'>
                        
                            <span id='span01'>Noutbuklar Toshkentda birinchi qoldan. O’zbekistonda eng zo’r narxlar!</span>
                       <div className='header-div2'>
                          <div className='header-div3'>
                          <Link id='Link01'>(90) 973-49-60 
                          Андрей</Link>
                          <Link id='Link01'>(90) 994-59-49
                           Шохрух</Link>
                          <Link id='Link01'>(94) 661-95-13
                           Рустам</Link>
                          <Link id='Link01'>(99) 815-50-15 
                          Отабек</Link>
                          <Link id='Link01'>(93) 399-22-72 
                          Николай</Link>
                          <Link id='Link01'>(97) 735-01-19 
                          Баходыр</Link>
                          <Link id='Link0'>
                          Русский(Russian)
                          </Link>
                          </div>
                        </div>
                      </div>
                  </div>
                  <hr id='hr'/>
                  <div className='header_div'>
                      <div className='header_div1'>
                          <div className='header_div01'>
                            <div className='header_div2'>
                            <button id='btn' class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i class="fa-solid fa-bars"></i></button>
                                <div  class=" offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                  <div class="offcanvas-header">

                                    
                                    <button id='btn21' type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                  </div>
                                  <div class="offcanvas-body">
                                  <ul id='offcanvas_ul'>
                                       <Link to="/asus">
                                          <li id='offcanvas_li'>
                                            <Link to="/asus" id='offcanvas_link'>Asus</Link>
                                          </li>
                                       </Link>
                                       <Link to="/msi">
                                          <li id='offcanvas_li'>
                                            <Link to="/msi" id='offcanvas_link'>MSI</Link>
                                          </li>
                                       </Link>
                                       <Link to="/lenovo">
                                          <li id='offcanvas_li'>
                                            <Link to="/lenovo" id='offcanvas_link'>Lenovo</Link>
                                          </li>
                                       </Link>
                                       <Link to="/hp">
                                          <li id='offcanvas_li'>
                                            <Link to="/hp" id='offcanvas_link'>HP</Link>
                                          </li>
                                       </Link>
                                       <Link to="/dell">
                                          <li id='offcanvas_li'>
                                            <Link to="/dell" id='offcanvas_link'>Dell</Link>
                                          </li>
                                       </Link>
                                       <Link to="/razer">
                                          <li id='offcanvas_li'>
                                            <Link to="/razer" id='offcanvas_link'>Razer</Link>
                                          </li>
                                       </Link>
                                       <Link to="/samsung">
                                          <li id='offcanvas_li'>
                                            <Link to="/samsung" id='offcanvas_link'>Samsung</Link>
                                          </li>
                                       </Link>
                                       <Link to="/microsoft">
                                          <li id='offcanvas_li'>
                                            <Link to="/microsoft" id='offcanvas_link'>Microsoft Surface</Link>
                                          </li>
                                        </Link>
                                        <Link to="/acer">
                                           <li id='offcanvas_li'>
                                            <Link to="/acer" id='offcanvas_link'>Acer</Link>
                                           </li>
                                        </Link>
                                        <Link to="/lg">
                                          <li id='offcanvas_li'>
                                            <Link to="/lg" id='offcanvas_link'>LG</Link>
                                          </li>
                                        </Link>
                                        <Link>
                                          <li id='offcanvas_li'>
                                            <Link id='offcanvas_link'> Русский (Russian)</Link>
                                          </li>
                                        </Link>
                                     </ul>

                                    
                                  </div>
                                </div>
                            </div>
                              <div className='header_div3'>
                                <img src="https://nout.uz/wp-content/uploads/2021/03/noutuzblogo.svg" alt="" />
                              </div>
                          </div>
                          <div className='header_div02'>
                            <a href="">
                              <i class="fa-solid fa-arrows-rotate"></i>
                            </a>
                            <a href="">
                              <i class="fa-regular fa-user"></i>
                            </a>
                            <a href="">
                              <i class="fa-solid fa-bag-shopping"></i>
                            </a>
                          </div>
                          
                      </div>
                      <div className='header'>
                         <input placeholder='Mahsulot Izlash ...' type="text" />
                         <Link id='Link'><i class="fa-solid fa-magnifying-glass"></i></Link>
                      </div>
                      <div className='header1 '>
                      <div class="container">
                          <div class="row">
                            <div class="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel"  data-interval="1000">
                                    
                                     
                                          <div class="MultiCarousel-inner">
                                            <div class="item">
                                               <Link to="tel:909734960" id='link_tel'>
                                               (90) 973-49-60
                                               Андрей
                                              </Link>
                                             </div>
                                            <div class="item">
                                               <Link to="tel:909945949" id='link_tel'>
                                               (90) 994-59-49
                                               Шохрух
                                              </Link>
                                            </div>
                      
                                            <div class="item">
                                                <Link to="tel:946619513" id='link_tel'>
                                                  (94) 661-95-13
                                                  Рустам
                                                </Link>
                                            </div>
                      
                                            <div class="item">
                                                <Link to="tel:998155015" id='link_tel'>
                                                  (99) 815-50-15
                                                  Отабек
                                                </Link>
                                            </div>
                      
                                            <div class="item">
                                                <Link to="tel:977350119" id='link_tel'>
                                                    (97) 735-01-19
                                                    Баходыр
                                                </Link>
                                            </div>
                      
                                          
                                          </div>
                                     
                                  </div>
                            </div>
                            </div>
                      </div>
                  </div>
                    <div className='div_header'>
                        <div className='div_header1'>
                          <Link>
                            <img id='div_header_img' src="https://nout.uz/wp-content/uploads/2021/03/logotype-nout.svg" alt="" />
                          </Link>
                        </div>
                        <div className='div_header2'>
                            <Link id='select' to="/">Bosh sahifa</Link>
                            <div class="btn-group">
                                  <button id='select' type="button" class="btn btn-danger dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                                    Brendlar
                                  </button>
                                  <ul id='dropdown' class="dropdown-menu overflow-auto">
                                         <li><Link  id='li1' className='dropdown-item'>Brendlar</Link></li>
                                         <li><Link to="/asus" id='li1' className='dropdown-item'>Asus</Link></li>
                                         <li><Link to="/msi" id='li1' className='dropdown-item'>MSI</Link></li>
                                         <li><Link to="/lenovo" id='li1' className='dropdown-item'>Lenovo</Link></li>
                                         <li><Link to="/dell" id='li1' className='dropdown-item'>Dell</Link></li>
                                         <li><Link to="/hp" id='li1' className='dropdown-item'>HP</Link></li>
                                         <li><Link to="/razer" id='li1' className='dropdown-item'>Razer</Link></li>
                                         <li><Link to="/samsung" id='li1' className='dropdown-item'>Samsung</Link></li>
                                         <li><Link to="/microsoft" id='li1' className='dropdown-item'>Microsoft Surface</Link></li>
                                         <li><Link to="/acer" id='li1' className='dropdown-item'>Acer</Link></li>
                                         <li><Link to="/lg" id='li1' className='dropdown-item'>LG</Link></li>



                                  </ul>
                                </div>
                            <Link id='select'>Kredit shartlari</Link>
                            <Link id='select'>Bog'lanish</Link>
                        </div>
                        <div className='div_header3'>
                          <i id='i01' class="fa-solid fa-headphones"></i>
                          <div className='div_header4'>
                            <Link>
                              <h6 id='h6'>+998 (93) 399-22-72</h6>
                            </Link>
                            
                            <span>  @Noutuz (Telegram)</span>
                          </div>
                        </div>
                    </div>
                    <div className='inp-div'>
                    <div class="dropdown ">
                                    <button id='btn-1' class="btn btn-secondary  dropdown-toggle  "  type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Barcha bo'limlar
                                    </button>
                                    <ul id='dropdown' class="dropdown-menu overflow-auto">
                                         <li><Link  id='li1' className='dropdown-item'>Barcha bo'limlar</Link></li>
                                         <li><Link  id='li1' className='dropdown-item'>Aksessuarlar</Link></li>
                                         <li><Link  id='li1' className='dropdown-item'>HyperX</Link></li>
                                         <li><Link to="/asus" id='li1' className='dropdown-item'>Asus</Link></li>
                                         <li><Link to="/dell" id='li1' className='dropdown-item'>Dell</Link></li>
                                         <li><Link to="/hp" id='li1' className='dropdown-item'>HP</Link></li>
                                         <li><Link to="/msi" id='li1' className='dropdown-item'>MSI</Link></li>
                                         <li><Link  id='li1' className='dropdown-item'>O'yin uchun noutbuklar</Link></li>
                                         <li><Link  id='li1' className='dropdown-item'>PC</Link></li>
                                         <li><Link  id='li1' className='dropdown-item'>Transformerlar</Link></li>
                                         <li><Link  id='li1' className='dropdown-item'>Ultrabuklar</Link></li>
                                         <li><Link  id='li1' className='dropdown-item'>Monobloklar</Link></li>
                                         <li><Link  id='li1' className='dropdown-item'>Biznes uchum noutbuklar</Link></li>
                                         <li><Link  id='li1' className='dropdown-item'>Nutbuklar</Link></li>


                                  </ul>
                                  
                                </div>
                                <div className='div4'>
                          
                          <div className='inp-div1'>
                            <input placeholder='Mahsulotlar boyicha qidirish '  id='inp' type="text" />
                          
                              <div class="dropdown ">
                                  <button id='btn1' class="btn btn-secondary  "  type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Barcha bo'limlar
                                  </button>
                                  <ul id='dropdown' class="dropdown-menu overflow-auto">
                                       <li><Link  id='li1' className='dropdown-item'>Barcha bo'limlar</Link></li>
                                       <li><Link  id='li1' className='dropdown-item'>Aksessuarlar</Link></li>
                                       <li><Link  id='li1' className='dropdown-item'>HyperX</Link></li>
                                       <li><Link to="/asus" id='li1' className='dropdown-item'>Asus</Link></li>
                                       <li><Link to="/dell" id='li1' className='dropdown-item'>Dell</Link></li>
                                       <li><Link to="/hp" id='li1' className='dropdown-item'>HP</Link></li>
                                       <li><Link to="/msi" id='li1' className='dropdown-item'>MSI</Link></li>
                                       <li><Link  id='li1' className='dropdown-item'>O'yin uchun noutbuklar</Link></li>
                                       <li><Link  id='li1' className='dropdown-item'>PC</Link></li>
                                       <li><Link  id='li1' className='dropdown-item'>Transformerlar</Link></li>
                                       <li><Link  id='li1' className='dropdown-item'>Ultrabuklar</Link></li>
                                       <li><Link  id='li1' className='dropdown-item'>Monobloklar</Link></li>
                                       <li><Link  id='li1' className='dropdown-item'>Biznes uchum noutbuklar</Link></li>
                                       <li><Link  id='li1' className='dropdown-item'>Nutbuklar</Link></li>


                                </ul>
                                
                              </div>
                              <div class="btn-group">
                                <button id='btn1' type="button" class="btn btn-danger dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                                  
                                </button>
                                <ul id='dropdown' class="dropdown-menu overflow-auto">
                                       <li><Link  id='li1' className='dropdown-item'>Barcha bo'limlar</Link></li>
                                       <li><Link  id='li1' className='dropdown-item'>Aksessuarlar</Link></li>
                                       <li><Link  id='li1' className='dropdown-item'>HyperX</Link></li>
                                       <li><Link to="/asus" id='li1' className='dropdown-item'>Asus</Link></li>
                                       <li><Link to="/dell" id='li1' className='dropdown-item'>Dell</Link></li>
                                       <li><Link to="/hp" id='li1' className='dropdown-item'>HP</Link></li>
                                       <li><Link to="/msi" id='li1' className='dropdown-item'>MSI</Link></li>
                                       <li><Link  id='li1' className='dropdown-item'>O'yin uchun noutbuklar</Link></li>
                                       <li><Link  id='li1' className='dropdown-item'>PC</Link></li>
                                       <li><Link  id='li1' className='dropdown-item'>Transformerlar</Link></li>
                                       <li><Link  id='li1' className='dropdown-item'>Ultrabuklar</Link></li>
                                       <li><Link  id='li1' className='dropdown-item'>Monobloklar</Link></li>
                                       <li><Link  id='li1' className='dropdown-item'>Biznes uchum noutbuklar</Link></li>
                                       <li><Link  id='li1' className='dropdown-item'>Nutbuklar</Link></li>


                                </ul>
                              </div>
                              <button id='inp-1'><i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                       </div>
                       <div className='div5'>
                             <Link to="https://nout.uz/uz/mening-akkauntim/">
                               <i class="fa-regular fa-user"></i>
                             </Link>  
                             <div className='div005 ' type="button"  data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Savat">                      
                             <button  class="btn btn-primary position-relative" id='btn_buy1'  type="button"  data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom"  data-bs-content="Savatchada mahsulotlar yo'q">
                             <i class="fa-solid fa-bag-shopping"></i>
                              <span id='span1' class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                0
                                
                              </span>
                            </button>
                               
                             </div>
                         </div>
                   </div>
                   <div className='div_main01 '>
                           <div className='div_main2 overflow-x-auto'>
                              <Link id='main-link' to="/">Bosh sahifa</Link>
                              <span><i class="fa-solid fa-chevron-right"></i></span>
                              <div className='divmain'>
                                <Link to="/msi" id='main-link1'>MSI</Link>
                              </div>
                              
                              <span><i class="fa-solid fa-chevron-right"></i></span>
                              
                              <span>MSI Crosshair 15 (i7-12700H/RTX3070Ti)</span>

                           </div>
                   </div>
             </header>
             <main>
                <div className='div_nout'>
                     <div className='div_nout1'>
                        <div className="div_rasm">
                          <div className="rasm">
                              <img id='imgrasm' src="https://nout.uz/wp-content/uploads/2022/05/grosshare1.jpg" alt="" />
                          </div>
                          <div className="rasm_next overflow-x-auto">
                              <div onClick={nextrasm} className="img_01"></div>
                              <div onClick={nextrasm1} className="img_02"></div>
                              <div onClick={nextrasm2} className="img_03"></div>
                          </div>
                        </div>
                        <div className="div_malumot">
                           <h3>MSI Crosshair 15 (i7-12700H/RTX3070Ti)</h3>
                           <img id='imghp' src="HP Victus 15 (i5-12450H/RTX3050) Uzb" alt="" />
                             <hr id='hrhp'/>
                           <Link id='TG'><strong><i id='itg' class="fa-brands fa-telegram"></i>TG orqali buyurtma</strong></Link>
                           <h5 id='about'>Ekran: 15.6'' FullHD IPS 144Hz</h5>
                           <h5 id='about'>Protsessor: Intel® Core™ i7-12700h (3.5 GHz – 4.7 GHz) (14 yadro; #ishlash yadrolari 6, # samarali yadrolar 8; 20 iplar)</h5>
                           <h5 id='about'>Videokarta:  GeForce RTX3070Ti NVIDIA 8GB/256Bit/GDDR6</h5>
                           <h5 id='about'>OZU: 16GB DDR4 (32GB=+65 у.е)</h5>
                           <h5 id='about'>Hard: 1TB PCIe® NVMe™ M.2 SSD</h5>
                           <h2>18 060 000 so'm</h2>
                           <span>1400</span>
                             <br />
                             <div className="div_harid">
                             <div className="buy_naqt">
                               <div className="div_select">
                                  <input id='inpson' type="text" value={1}/>
                                  <div className='qush'>
                                      <button onClick={sonqush} id='btnqush0'><i class="fa-regular fa-circle-up"></i></button>
                                        <br />
                                     <button onClick={sonayir} id='btnqush'><i class="fa-regular fa-circle-down"></i></button>
                                  </div>
                               </div>
                            
                                 <button onClick={savatqush} id='button_buy'><i id='i_buy' class="fa-solid fa-cart-shopping"></i> Savatga qoshish</button>
                               </div>
                             <div className='buy_percent'>
                               <button id='button_percent'><i class="fa-solid fa-percent"></i>  Bo'lib to'lash</button>
                             </div>
                           </div>
                        </div>
                     </div>
                </div>
                <div className='div_fikr'>
                      <div className='div_fikrlar'>                     
                          <div className='div_h5'>
                             <h5>Parametrlar</h5>
                          </div>
                      </div>
                      <div className='fikrlar_body'>
                         <div className="div_parametrlar">
                            <span>Brend</span>
                            <div className="p">
                              <p>MSI</p>
                            </div>
                         </div>
                         <div className="div_parametrlar">
                            <span>Model</span>
                            <div className="p">
                              <p>	
                              MSI Crosshair 15 B12UGZ-288XUZ</p>
                            </div>
                         </div>
                         <div className="div_parametrlar">
                            <span>Protsessor</span>
                            <div className="p">
                               <p>Intel® Core™ i7-12700h (3.5 GHz – 4.7 GHz) (14 yadro; #ishlash yadrolari 6, # samarali yadrolar 8; 20 iplar)</p>
                            </div>
                         </div>
                         <div className="div_parametrlar">
                            <span>Videokarta</span>
                            <div className="p">
                               <p>GeForce RTX3070Ti NVIDIA 8GB/256Bit/GDDR6</p>
                            </div>
                         </div>
                         <div className="div_parametrlar">
                            <span>Ekran diagonali</span>
                            <div className="p">
                               <p>15.6'' FullHD IPS 144Hz</p>
                            </div>
                         </div>
                         <div className="div_parametrlar">
                            <span>Ekran o\'lchami</span>
                            <div className="p">
                               <p>FHD</p>
                            </div>
                         </div>
                         <div className="div_parametrlar">
                            <span>Matritsa turi</span>
                            <div className="p">
                               <p>IPS</p>
                            </div>
                         </div>
                         <div className="div_parametrlar">
                            <span>OZU</span>
                            <div className="p">
                               <p>16GB DDR4 (32GB=+65 у.е)</p>
                            </div>
                         </div>
                         <div className="div_parametrlar">
                            <span>Hard</span>
                            <div className="p">
                               <p>1TB PCIe® NVMe™ M.2 SSD</p>
                            </div>
                         </div>
                         <div className="div_parametrlar">
                            <span>Сеть</span>
                            <div className="p">
                               <p>Лицензионный Windows 11</p>
                            </div>
                         </div>
                         <div className="div_parametrlar">
                            <span>Корпус</span>
                            <div className="p">
                               <p>Alyuminiy / Plastmassa</p>
                            </div>
                         </div>
                         <div className="div_parametrlar">
                            <span>Порты</span>
                            <div className="p">
                               <p>
                                 3x USB 3
                                  1x HDMI
                                  1x TYP-C
                               </p>   
                            </div>
                         </div>
                      </div>
                  </div>
                  <div className='div_oxshash'>
                     <div className='div_oxshash1'>
                         <div className='samsung_progres1 '>
                            <h4>O'xshash Noutbuklar</h4>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                              <div class="progress-bar" ></div>
                            </div>
                      
                         </div>
                     </div>
                  </div>
                  <div className='div_main012 row '>
                  <div class="card main16 col-xl-4 lg-4 md-4 sm-12  ">
                         <Link id='a1' to="/hppavilionsilver">
                           <span id='span'>HP Pavilion 15 Silver (R3-5300U/4GB)</span>
                            <img id='img' src="https://nout.uz/wp-content/uploads/2023/02/80-300x300.png" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <br />
                              <span>15.6</span>
                                 <br />
                                 <br />
                              <p class="card-text">AMD Ryzen™ 3-5300u (2.6 GHz - 3.8 GHz) (4 yadro - 8 ip)</p>
                                <br />
                              <span>AMD® Radeon Graphics</span>
                                <br />
                                <br />
                              <span>4GB DDR4 (8GB=+10 у.е)</span>
                                <br />
                                <br />
                              <span>256GB PCIe® NVMe™ M.2 SSD (512GB SSD=+40 у.е)</span>
                                <br />
                                <br />
                              <span id='span01'>4 754 500 so'm</span>
                                <br />
                              <span id='span1'>370</span>
                              
                              <button id='a2' class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                          </Link>
                            <hr id='tg_hr'/>
                            <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                          </div>
                       
                          <div className='div_main16 col-xl-4 lg-4 md-4 sm-12 '>
                          <a id='a1' href="/asustufgamingf17">
                           <span id='span'>Asus TUF Gaming F17 (i9-13900H/RTX4060)</span>
                            <img id='img' src="https://nout.uz/wp-content/uploads/2022/06/2022-f17-tuf1-300x300.jpg" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <span>17.3'' QHD IPS 240Hz</span>

                              <p class="card-text">Intel Core i9-13900H (1.6GHz - 5.4GHz) (14 yadro - 20 potok)</p>
                                <br />
                              <span>GeForce RTX4060 8GB/140W/GDDR6</span>
                                <br />
                                <br />
                              <span>16GB DDR4 (32GB=+65 у.е)</span>
                                <br />
                              <span>512GB PCIe® NVMe™ M.2 SSD (1TB SSD=+50 у.е)</span>
                                <br />
                                <br />
                              <span id='span01'>16 000 000 so'm</span>
                                <br />
                              <span id='span1'>1250</span>
                              
                              <button id='a2' class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                          </a>
                            <hr id='tg_hr'/>
                            <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                          </div>
                          
             </div>
             </main>
             <footer> 
                    <div className='footer_div'>
                    <div class="dropdown1">
                         <button id='footer-btn' class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Brendlar
                         </button>
                         <ul id='footer-ul' class="dropdown-menu ">
                         <Link to="/asus" id='Link11'>
                                  <li id='footer-li'>Asus</li>
                                </Link>
                                <Link to="/msi" id='Link11'>
                                  <li id='footer-li'>MSI</li>
                                </Link>
                                <Link to="/lenovo" id='Link11'>
                                  <li id='footer-li'>Lenovo</li>
                                </Link>
                                <Link to="/hp" id='Link11'>
                                  <li id='footer-li'>HP</li>
                                </Link>
                                <Link to="/dell" id='Link11'>
                                  <li id='footer-li'>Dell</li>
                                </Link>
                                <Link to="/razer" id='Link11'>
                                  <li id='footer-li'>Razer</li>
                                </Link>
                                <Link to="/samsung" id='Link11'>
                                  <li id='footer-li'>Samsung</li>
                                </Link>
                                <Link to="/microsoft" id='Link11'>
                                  <li id='footer-li'>Microsoft Surface</li>
                                </Link>
                                <Link to="/acer" id='Link11'>
                                  <li id='footer-li'>Acer</li>
                                </Link>
                                <Link to="/lg" id='Link11'>
                                  <li id='footer-li'>LG</li>
                                </Link>
                                <Link to="/" id='Link11'>
                                  <li id='footer-li'>Русский (Russian)</li>
                                </Link>
                         </ul>
                       </div>
                       <div class="dropdown1">
                         <button id='footer-btn' class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Магазин
                         </button>
                         <ul id='footer-ul' class="dropdown-menu">
                         <Link id='Link11'>
                                  <li  id='footer-li'>Noutbuklar</li>
                                </Link>
                                <Link id='Link11'>
                                  <li id='footer-li'>Ультрабуки</li>
                                </Link>
                                <Link id='Link11'>
                                  <li id='footer-li'>Трансформеры</li>
                                </Link>
                                <Link id='Link11'>
                                  <li id='footer-li'>Biznes uchun noutbuklar</li>
                                </Link>
                                <Link id='Link11'>
                                  <li id='footer-li'>O’yin noutbuklari</li>
                                </Link>
                                <Link id='Link11'>
                                  <li id='footer-li'>PC</li>
                                </Link>
                         </ul>
                       </div>
                       <div class="dropdown1">
                         <button id='footer-btn'   class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Помощь
                         </button>
                         <ul id='footer-ul' class="dropdown-menu">
                         <Link id='Link11'>
                                  <li id='footer-li'>Blog</li>
                                </Link>
                                <Link id='Link11'>
                                  <li id='footer-li'>Yetkazib berish va to’lov</li>
                                </Link>
                                <Link id='Link11'>
                                  <li id='footer-li'>Bizning kontaktlarimiz</li>
                                </Link>
                                <Link id='Link11'>
                                  <li id='footer-li'>Kredit shartlari</li>
                                </Link>
                         </ul>
                       </div>
                        <div className='footer-div1'>
                          <Link to="https://www.facebook.com/www.nout.uz/">
                             <i id='i3' class="fa-brands fa-facebook"></i>
                          </Link>
                          <Link to="https://www.instagram.com/noutuz/">
                             <i id='i1' class="fa-brands fa-instagram"></i>
                          </Link>
                          <Link to="https://www.youtube.com/channel/UCi4ZcVi58O-CVKRvdYJ_VYg">
                             <i id='i2' class="fa-brands fa-youtube"></i>
                          </Link>
                          <Link to="https://t.me/nout_uz">
                             <i id='i2' class="fa-brands fa-telegram"></i>
                          </Link>
                        </div>
                       <div className='footer_div2'>
                          <div className='footer_div3'>
                              <div className='footer_div5'> 
                                 <img id='img12' src="https://nout.uz/wp-content/uploads/2021/03/logotype-nout.svg" alt="" />
                              </div>
                              <div className='footer_div5'>
                                <i id='i' class="fa-solid fa-headphones"></i>
                                 <span>Savollar bormi? Biz bilan bog'laning!</span>
                                 <br />
                                 <Link id='Link12' to= "telephone">+998 (93) 399-22-72</Link>
                              </div>
                              <div className='footer_div5'>
                                 <h6 >Bizning kontaktlarimiz</h6>
                                   
                                 <p>Du - Yak: soat 10:00dan 18:30gacha</p>
                              </div>
                          </div>
                          <div className='footer_div4'>
                              <h6>Brendlar</h6>
                                <br />
                              <ul>
                                <Link to="/asus" id='Link11'>
                                  <li>Asus</li>
                                </Link>
                                <Link to="/msi" id='Link11'>
                                  <li>MSI</li>
                                </Link>
                                <Link to="/lenovo" id='Link11'>
                                  <li>Lenovo</li>
                                </Link>
                                <Link to="/hp" id='Link11'>
                                  <li>HP</li>
                                </Link>
                                <Link to="/dell" id='Link11'>
                                  <li>Dell</li>
                                </Link>
                                <Link to="/razer" id='Link11'>
                                  <li>Razer</li>
                                </Link>
                                <Link to="/samsung" id='Link11'>
                                  <li>Samsung</li>
                                </Link>
                                <Link to="/microsoft" id='Link11'>
                                  <li>Microsoft Surface</li>
                                </Link>
                                <Link to="/acer" id='Link11'>
                                  <li>Acer</li>
                                </Link>
                                <Link to="/lg" id='Link11'>
                                  <li>LG</li>
                                </Link>
                                <Link to="/" id='Link11'>
                                  <li>Русский (Russian)</li>
                                </Link>
                              </ul>
                          </div>
                          <div className='footer_div4'><h6>Магазин</h6>
                                <br />
                              <ul>
                                <Link id='Link11'>
                                  <li>Noutbuklar</li>
                                </Link>
                                <Link id='Link11'>
                                  <li>Ультрабуки</li>
                                </Link>
                                <Link id='Link11'>
                                  <li>Трансформеры</li>
                                </Link>
                                <Link id='Link11'>
                                  <li>Biznes uchun noutbuklar</li>
                                </Link>
                                <Link id='Link11'>
                                  <li>O’yin noutbuklari</li>
                                </Link>
                                <Link id='Link11'>
                                  <li>PC</li>
                                </Link>
                                
                              </ul>
                           </div>
                          <div className='footer_div4'>
                            <h6>Помощь</h6>
                            <br />
                              <ul>
                                <Link id='Link11'>
                                  <li>Blog</li>
                                </Link>
                                <Link id='Link11'>
                                  <li>Yetkazib berish va to’lov</li>
                                </Link>
                                <Link id='Link11'>
                                  <li>Bizning kontaktlarimiz</li>
                                </Link>
                                <Link id='Link11'>
                                  <li>Kredit shartlari</li>
                                </Link>
                                
                                
                              </ul>
                          </div>
                       </div>
                    </div>
                    <div className='footer_div1'>
                        <div className='footer_div01'>
                           <h6>© Nout.uz - Noutbuklar Toshkentda birinchi qoldan. O’zbekistonda eng zo’r narxlar! | Sayt yaratish QWERTY</h6>
                        </div>
                        <div className='footer_div02'>
                            <img src="https://nout.uz/wp-content/uploads/2021/03/payments.jpg" alt="" />
                        </div>
                    </div>

                    <div className='footerdiv'>
                       <div className='footerdiv1'>
                         <div className='footerdiv01'>
                            <img src="https://nout.uz/wp-content/uploads/2021/03/logotype-nout.svg" alt="" />
                         </div>
                       </div>
                       <div className='footerdiv2'>
                          <div className='footerdiv02'>
                                 <span>Savollar bormi? Biz bilan bog'laning!</span>
                                 <br />
                                 <Link id='footerLink' to= "telephone">+998 (93) 399-22-72</Link>
                          </div>
                       </div>
                    </div>





                 </footer> 
        </div>
    );
}

export default Msicrosshair15;
