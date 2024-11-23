import React from 'react';
import '../css/acer.css';
import '../css/samsung.css';
import { Link } from 'react-router-dom';
import '../css/firstpage.css';
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

function savatqush() {
  var  span1 = document.getElementById('span1');
  span1.innerText = span1.innerText * 1 + 1;
}
const Apple = () => {
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
                                <Link to="/brendlar" id='main-link1'>Brendlar</Link>
                              </div>
                              <span><i class="fa-solid fa-chevron-right"></i></span>                              
                              <span>Apple</span>

                           </div>
                   </div>
             </header>
             <main>
                <div className='carusel_div'>
                    <div className='samsung_progres'>
                        <h1>Apple</h1>
                    </div>
                    <div className='samsung_progres1 '>
                       <h4>Noutbuklar</h4>
                       <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                         <div class="progress-bar" ></div>
                       </div>
                      
                    </div>
                 </div>
                <div className='div_main012 row '>
                       <div class="card main16 col-xl-4 lg-4 md-4 sm-12  ">
                         <a id='a1' href="">
                           <span id='span'>MacBook PRO 13 M2 (16GB/512SSD)</span>
                            <img id='img1' src="https://nout.uz/wp-content/uploads/2021/11/macbook-m11-300x300.jpg" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <br />
                              <span>13.3</span>
                                 <br />
                                 <br />
                              <p class="card-text">Apple M2 8 yadroli</p>
                              <span>Apple M2 10 yadroli</span>
                                <br />
                                <br />
                              <span>16 GB</span>
                                <br />
                                <br />
                              <span>512GB PCIe® NVMe™ M.2 SSD</span>
                                <br />
                                <br />
                              <span id='span01'>23 772 500 so'm</span>
                                <br />
                              <span id='span1'>1850</span>
                              
                              <button id='a2' class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                          </a>
                             <hr id='tg_hr'/>
                             <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                          </div>
                          <div className='div_main16 col-xl-4 lg-4 md-4 sm-12 '>
                          <a id='a1' href="">
                           <span id='span'>MacBook PRO 13 M1 (16GB/256SSD)</span>
                            <img id='img1' src="https://nout.uz/wp-content/uploads/2021/11/macbook-m11-300x300.jpg" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <br />
                              <span>13.3</span>
                                <br />
                                <br />
                              <p class="card-text">Apple M1 8 yadrolari</p>
                              <span>Apple M1 8 Yadrolari</span>
                                <br />
                                <br />
                                <span>16GB DDR4</span>
                                <br />
                                <br /> 
                              <span>256GB PCIe® NVMe™ M.2 SSD</span>
                                <br />
                                <br />                          
                              <span id='span01'>19 917 500 so'm</span>
                                <br />
                              <span id='span1'>1550</span>
                              
                              <button id='a2' class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                          </a>
                              <hr id='tg_hr'/>
                              <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                          </div>
                          <div className='div_main16 col-xl-4 lg-4 md-4 sm-12 '>
                          <a id='a1' href="">
                           <span id='span'>MacBook PRO 13 M1 (8GB/512SSD)</span>
                            <img id='img1' src="https://nout.uz/wp-content/uploads/2021/11/macbook-m11-300x300.jpg" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <br />
                              <span>13.3</span>
                                <br />
                                <br />
                              <p class="card-text">Apple M1 8 yadrolari</p>
                              <span>Apple M1 8 Yadrolari</span>
                                <br />
                                <br />
                                <span>8GB DDR4</span>
                                <br />
                                <br />
                              <span>512GB PCIe® NVMe™ M.2 SSD</span>
                                <br />
                                <br />
                              <span id='span01'>17 347 500 so'm</span>
                                <br />
                              <span id='span1'>1350</span>
                              
                              <button id='a2' class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                          </a>
                              <hr id='tg_hr'/>
                              <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                          </div>
                          
                </div>
                <div className='div_main012 row '>
                       <div class="card main16 col-xl-4 lg-4 md-4 sm-12  ">
                         <a id='a1' href="">
                           <span id='span'>Macbook Air M1 (16GB/256SSD)</span>
                            <img id='img1' src="https://nout.uz/wp-content/uploads/2021/12/macbook-air1-300x300.jpg" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <br />
                              <span>13.3</span>
                                 <br />
                                 <br />
                              <p class="card-text">Apple M1 8 yadroli</p>
                              <span>Apple M1 8 yadroli</span>
                                <br />
                                <br />
                              <span>16 GB</span>
                                <br />
                                <br />
                              <span>256GB PCIe® NVMe™ M.2 SSD</span>
                                <br />
                                <br />
                              <span id='span01'>18 375 500 so'm</span>
                                <br />
                              <span id='span1'>1430</span>
                              
                              <button id='a2' class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                          </a>
                             <hr id='tg_hr'/>
                             <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                          </div>
                          <div className='div_main16 col-xl-4 lg-4 md-4 sm-12 '>
                          <a id='a1' href="">
                           <span id='span'>Macbook Air M1 (16GB/512SD)</span>
                            <img id='img1' src="https://nout.uz/wp-content/uploads/2021/12/macbook-air1-300x300.jpg" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <br />
                              <span>13.3</span>
                                <br />
                                <br />
                              <p class="card-text">Apple M1 8 yadrolari</p>
                              <span>Apple M1 8 Yadrolari</span>
                                <br />
                                <br />
                                <span>16GB DDR4</span>
                                <br />
                                <br /> 
                              <span>512GB PCIe® NVMe™ M.2 SSD</span>
                                <br />
                                <br />                          
                              <span id='span01'>19 917 500 so'm</span>
                                <br />
                              <span id='span1'>1550</span>
                              
                              <button id='a2' class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                          </a>
                              <hr id='tg_hr'/>
                              <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                          </div>
                          <div className='div_main16 col-xl-4 lg-4 md-4 sm-12 '>
                          <a id='a1' href="">
                           <span id='span'>Macbook Air M1 (8GB/512SD)</span>
                            <img id='img1' src="https://nout.uz/wp-content/uploads/2021/11/macbook-m11-300x300.jpg" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <br />
                              <span>13.3</span>
                                <br />
                                <br />
                              <p class="card-text">Apple M1 8 yadrolari</p>
                              <span>Apple M1 8 Yadrolari</span>
                                <br />
                                <br />
                                <span>8GB DDR4</span>
                                <br />
                                <br />
                              <span>512GB PCIe® NVMe™ M.2 SSD</span>
                                <br />
                                <br />
                              <span id='span01'>14 777 500 so'm</span>
                                <br />
                              <span id='span1'>1150</span>
                              
                              <button id='a2' class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                          </a>
                              <hr id='tg_hr'/>
                              <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                          </div>
                          
                </div>
                <div className='div_main012 row '>
                       <div class="card main16 col-xl-4 lg-4 md-4 sm-12  ">
                         <a id='a1' href="">
                           <span id='span'>Macbook Air M1 (8GB/256SSD)</span>
                            <img id='img1' src="https://nout.uz/wp-content/uploads/2021/11/macbook-m11-300x300.jpg" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <br />
                              <span>13.3</span>
                                 <br />
                                 <br />
                              <p class="card-text">Apple M1 8 yadroli</p>
                              <span>Apple M1 8 yadroli</span>
                                <br />
                                <br />
                              <span>8 GB</span>
                                <br />
                                <br />
                              <span>256GB PCIe® NVMe™ M.2 SSD</span>
                                <br />
                                <br />
                              <span id='span01'>12 593 000 so'm</span>
                                <br />
                              <span id='span1'>980</span>
                              
                              <button id='a2' class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                          </a>
                             <hr id='tg_hr'/>
                             <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                          </div>
                          <div className='div_main16 col-xl-4 lg-4 md-4 sm-12 '>
                          <a id='a1' href="">
                           <span id='span'>MacBook PRO 14 M1 (16GB/1TB)</span>
                            <img id='img1' src="https://nout.uz/wp-content/uploads/2021/12/m1-macbook-1-300x300.jpg" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <br />
                              <span>14,2 dyuymli suyuq Retina xdr displeyi 1; standart o'lchamlari 3024=1964 piksel (dyuym uchun 254 piksel)</span>
                                <br />
                                <br />
                              <p class="card-text">Apple M1 Pro 10 yadrolari</p>
                              <span>Apple M1 Pro 16 Yadrolari</span>
                                <br />
                                <br />
                                <span>1TB PCIe® NVMe™ M.2 SSD</span>
                                <br />
                                <br />                         
                              <span id='span01'>28 270 000 so'm</span>
                                <br />
                              <span id='span1'>2200</span>
                              
                              <button id='a2' class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                          </a>
                              <hr id='tg_hr'/>
                              <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                          </div>
                          <div className='div_main16 col-xl-4 lg-4 md-4 sm-12 '>
                          <a id='a1' href="">
                           <span id='span'>MacBook Pro 14 M1 (16GB/512SSD)</span>
                            <img id='img1' src="https://nout.uz/wp-content/uploads/2021/12/m1-macbook-1-300x300.jpg" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <br />
                              <span>14,2 dyuymli suyuq Retina xdr displeyi 1; standart o'lchamlari 3024=1964 piksel (dyuym uchun 254 piksel)</span>
                                <br />
                                <br />
                              <p class="card-text">Apple M1 Pro 8 yadrolari</p>
                              <span>Apple M1 Pro 14 Yadrolari</span>
                                <br />
                                <br />
                                <span>512GB PCIe® NVMe™ M.2 SSD</span>
                                <br />
                                <br />
                              <span id='span01'>24 415 000 so'm</span>
                                <br />
                              <span id='span1'>1900</span>
                              
                              <button id='a2' class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                          </a>
                              <hr id='tg_hr'/>
                              <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                          </div>
                          
                </div>
                <hr id='hr2'/>
                <div className='div_about'>
                      <div className='div_about1'>
                          <h1 id='h2'>Apple noutbuklarini (Macbook) Toshkentdan sotib oling</h1>
                          <p>Agar siz <Link to="/apple">Apple</Link> ishqibozi bo’lsangiz va Toshkentda yashasangiz, unda siz, albatta, qayerdan original Apple noutbuklarini arzon narxlarda sotib olishingiz mumkinligini bilishni xohlaysiz. Shu yerda biz sizga Nout.uz – Toshkentdagi yetakchi elektronika do‘konini taqdim etishdan mamnunmiz, u yerda Apple noutbuklarining eng so‘nggi modellarini xarid qilishingiz mumkin.</p>
                          <p>Nima uchun Apple noutbuklarini tanlash juda muhim? Birinchidan, Apple dunyodagi eng mashhur va ishonchli kompyuter ishlab chiqaruvchilardan biridir. Ularning noutbuklari beqiyos ishlashi, zamonaviy dizayni va innovatsion xususiyatlari bilan mashhur. MacOS operatsion tizimi bilan Apple noutbuklari uzluksiz tajriba taqdim etadi va ishlarni osonlik bilan bajarishga imkon beradi.</p>
                          <p>Ikkinchidan, Apple noutbuklari qimmat, lekin ularning sifati va funksionalligi bu narxni to’liq oqlaydi. Apple noutbukini sotib olish – bu sizning unumdorligingizga va ilg’or texnologiyalarga bo’lgan ehtiyojingizga sarmoyadir.</p>
                          <p>Endi siz Apple noutbuklari nima uchun bunchalik mashhurligini tushunganingizdan so’ng, keling, nima uchun Nout.uz Toshkentda Apple noutbuklarini xarid qilish uchun eng yaxshi variant ekanligini ko’rib chiqamiz.</p>
                          <p>1. Keng assortiment: Nout.uz MacBook Air va MacBook Pro kabi eng mashhur modellardan tortib, Retina displeyli MacBook Pro kabi ixtisoslashgan modellargacha bo’lgan Apple noutbuklarining katta tanlovini taklif etadi. Siz har doim ehtiyojlaringiz va byudjetingizga mos keladigan mukammal noutbukni topasiz.</p>
                          <p>2. Sifat kafolati: Nout.uz – Toshkentdagi Apple kompaniyasining rasmiy dileri, shuning uchun ular taklif qilayotgan barcha noutbuklar 100% original va ishlab chiqaruvchining to‘liq kafolatiga ega. Ko’p yillar davomida sizga xizmat qiladigan ishonchli qurilmaga ega ekanligingizga amin bo’lishingiz mumkin.</p>
                          <p>3. Raqobatbardosh narxlar: Nout.uz sayti Apple noutbuklarini Toshkentdagi eng raqobatbardosh narxlarda taqdim etadi. Sizga eng yaxshi takliflarni taqdim etish uchun ular doimiy ravishda narxlarni yangilaydilar. Apple noutbukini tanlaganingiz uchun eng yaxshi narxga ega bo’lishingizga amin bo’lishingiz mumkin.</p>
                          <p>4. Xarid qilish qulayligi: Nout.uz uyingizdan turib Apple noutbukini osongina tanlash va buyurtma qilish imkonini beruvchi qulay onlayn-do‘konni taklif etadi. O’zingizga kerakli modelni tanlang, uni savatga qo’shing, kerakli ma’lumotlarni to’ldiring va qisqa vaqt ichida Apple noutbukingizni oling.</p>
                          <p>5. Professional xizmat: Nout.uz’da Apple noutbukingiz bilan bog‘liq har qanday savol va muammolar bo‘yicha sizga yordam berishga tayyor professionallar jamoasi mavjud. Ular sizning xaridingizdan eng yaxshi tajriba va qoniqishga ega bo’lishingizni ta’minlash uchun yuqori darajadagi xizmat va yordamni taklif qilishadi.</p>
                          <p>Endi siz <Link to="/">Nout.uz</Link> dan Apple noutbuklarini xarid qilishning barcha afzalliklarini bilganingizdan so’ng, vaqtingizni behuda sarflamang va hoziroq ularning veb-saytiga tashrif buyuring. Sizning kutganingizdan yuqori bo’lgan Apple noutbukini oling va har kuni ilg’or texnologiyalardan bahramand bo’ling!</p>

                            
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

export default Apple;
