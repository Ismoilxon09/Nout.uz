import React from 'react';
import { Link } from 'react-router-dom';
import '../css/acer.css';
import '../css/firstpage.css';

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

function savatqush() {
  var  span1 = document.getElementById('span1');
  span1.innerText = span1.innerText * 1 + 1;
}
const HP = () => {
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
                   <div className='div_main01'>
                           <div className='div_main2'>
                              <Link id='main-link' to="/">Bosh sahifa</Link>
                              <span><i class="fa-solid fa-chevron-right"></i></span>
                              <div className='divmain'>
                                <Link to="/brendlar" id='main-link1'>Brendlar</Link>
                              </div>
                              <span><i class="fa-solid fa-chevron-right"></i></span>
                              <span>hp</span>

                           </div>
                   </div>
             </header>
             <main>
                <div className='acer'>
                    <div className='acer_nout'>
                        <h1>HP Noutbuklari</h1>
                    </div>
                    <div className='acer_nitro'>
                        <Link >
                        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                              <div class="carousel-item active">
                                <img src="https://nout.uz/wp-content/uploads/2023/10/HP-ENVY-1970x650-1-1536x507.jpg" class="d-block w-100" alt="..."/>
                              </div>
                              <div class="carousel-item">
                                <img src="https://nout.uz/wp-content/uploads/2024/02/HP-Pavilion-Banner-1-1536x507.jpg" class="d-block w-100" alt="..."/>
                              </div>
                              <div class="carousel-item">
                                <img src="https://nout.uz/wp-content/uploads/2023/10/HP-ENVY-1970x650-1-1536x507.jpg" class="d-block w-100" alt="..."/>
                              </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Next</span>
                            </button>
                          </div>
                        </Link>
                    </div>
                </div>
                <div className='acer_aspire'>
                    <div className='acer_aspire1'>
                       <Link to="/hpenvy">
                          <img id='nitro_img' src="https://nout.uz/wp-content/uploads/2023/03/ENVY-Banner-1-1536x507.jpg" alt="" />
                       </Link>
                    </div>
                </div>
                <div className='acer_aspire'>
                    <div className='acer_aspire1'>
                       <Link to="/hpvictus">
                          <img id='nitro_img' src="https://nout.uz/wp-content/uploads/2023/03/Victus-Banner-1536x507.jpg" alt="" />
                       </Link>
                    </div>
                </div>
                <div className='acer_aspire'>
                    <div className='acer_aspire1'>
                       <Link to="/hplaptop">
                          <img id='nitro_img' src="https://nout.uz/wp-content/uploads/2023/03/HP-Laptop-Banner-1536x507.jpg" alt="" />
                       </Link>
                    </div>
                </div>
                <div className='acer_aspire'>
                    <div className='acer_aspire1'>
                       <Link to="/hppavilion">
                          <img id='nitro_img' src="https://nout.uz/wp-content/uploads/2023/03/HP-Pavilion-Banner-1536x507.jpg" alt="" />
                       </Link>
                    </div>
                </div>
                <div className='acer_aspire'>
                    <div className='acer_aspire1'>
                       <Link to="/hpspectre">
                          <img id='nitro_img' src="https://nout.uz/wp-content/uploads/2023/03/HP-Spectre-Banner-1536x499.jpg" alt="" />
                       </Link>
                    </div>
                </div>
                <div className='acer_aspire'>
                    <div className='acer_aspire1'>
                       <Link to="/hpomen">
                          <img id='nitro_img' src="https://nout.uz/wp-content/uploads/2022/06/hp-omen-16-2-1536x507.jpg" alt="" />
                       </Link>
                    </div>
                </div>
                  <hr id='hr1'/>
                <div className='div_main012 row '>
                       <div class="card main16 col-xl-4 lg-4 md-4 sm-12  ">
                         <a id='a1' href="/hppavilionsilver">
                           <span id='span'>HP Pavilion 15 Silver (R3-5300U/4GB)</span>
                            <img id='img1' src="https://nout.uz/wp-content/uploads/2023/02/80-300x300.png" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <br />
                              <span>15.6</span>
                                 <br />
                                 <br />
                              <p class="card-text">AMD Ryzen™ 3-5300u (2.6 GHz - 3.8 GHz) (4 yadro - 8 ip)</p>
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
                          </a>
                             <hr id='tg_hr'/>
                             <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                          </div>
                          <div className='div_main16 col-xl-4 lg-4 md-4 sm-12 '>
                          <a id='a1' href="/hppaviliongold">
                           <span id='span'>HP Pavilion 15 Gold (R3-5300U)</span>
                            <img id='img1' src="https://nout.uz/wp-content/uploads/2023/02/80-300x300.png" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <br />
                              <span>15.6</span>
                                <br />
                                <br />
                              <p class="card-text">AMD Ryzen™ 3-5300u (2.6 GHz - 3.8 GHz) (4 yadro - 8 ip)</p>
                              <span>AMD® Radeon Graphics</span>
                                <br />
                                <br />
                              <span>256GB PCIe® NVMe™ M.2 SSD (512GB SSD=+40 у.е)</span>
                                <br />
                                <br />                          
                              <span id='span01'>4 883 000 so'm</span>
                                <br />
                              <span id='span1'>380</span>
                              
                              <button id='a2' class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                          </a>
                              <hr id='tg_hr'/>
                              <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                          </div>
                          <div className='div_main16 col-xl-4 lg-4 md-4 sm-12 '>
                          <a id='a1' href="/hppavilionsilver">
                           <span id='span'>HP Pavilion 15 (i3-1315U/GOLD)</span>
                            <img id='img1' src="https://nout.uz/wp-content/uploads/2023/02/80-300x300.png" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <br />
                              <span>15.6</span>
                                <br />
                                <br />
                              <p class="card-text">Intel® Core™ i3-1315U (1,2 gigagerts - 4,5 gigagerts) (6 yadro - 8 ta ip)</p>
                              <span>Intel UHD Graphics</span>
                                <br />
                                <br />
                              <span>512GB PCIe® NVMe™ M.2 SSD    (1TB SSD=+50 у.е)</span>
                                <br />
                                <br />
                              <span id='span01'>5 127 150 so'm</span>
                                <br />
                              <span id='span1'>399</span>
                              
                              <button id='a2' class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                          </a>
                              <hr id='tg_hr'/>
                              <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                          </div>
                          <div className='main16 col-xl-4 lg-4 md-4 sm-12 '>
                          <a id='a1' href="/hpvictus15">
                           <span id='span'>HP Victus 15 (i5-12450H/RTX3050) Uzb</span>
                            <img id='img1' src="https://nout.uz/wp-content/uploads/2021/11/victus2-300x300.jpg" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <br />
                              <span>15.6'' FullHD IPS 144Hz</span>
                                <br />
                                <br />
                              <p class="card-text">Intel® Core™ i5-12450h (3.3 GHz – 4.4 GHz) (8 yadroli; 12 ip;)</p>
                              <span>GeForce RTX™ 3050 NVIDIA® 4GB/128Bit/GDDR6</span>
                                <br />
                                <br />
                              <span>8GB DDR4 (16GB=+40 у.е)</span>
                                <br />
                                <br />
                              <span>256GB PCIe® NVMe™ M.2 SSD (512GB SSD=+40 у.е)</span>
                                <br />
                                <br />
                              <span id='span01'>7 453 000 so'm</span>
                                <br />
                              <span id='span1'>580</span>
                              
                              <button id='a2' class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                          </a>
                              <hr id='tg_hr'/>
                              <a id='tg' href="https://t.me/noutuz"><i class="fa-brands fa-telegram"></i> TG orqali buyurma</a>
                          </div>
                          <div className='div_main16 col-xl-4 lg-4 md-4 sm-12 '>
                          <a id='a1' href="/hpspectrex360">
                           <span id='span'>HP Spectre x360 16 (i7-13700H)</span>
                            <img id='img1' src="https://nout.uz/wp-content/uploads/2023/07/Spectre-GOLD-16-4-300x300.jpg" class="card-img-top" alt="..." />
                            <div class="cardbody">
                              <br />
                              <span>16" 3K+ (3072 x 1920) IPS TS Corning® Gorilla® Glass NBT™ 400 nits, 100% sRGB</span>
                                <br />
                                <br />
                              <p class="card-text">Intel® Core™ i7-13700H (3,7 gigagertsli - 5,0 gigagertsli) (14 yadroli; 20 ta ip)</p>
                              <span>Intel Iris Xe Graphics</span>
                                <br />
                                <br />
                              <span>16GB DDR4</span>
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
                  <div className='div_about_hp'>
                      <div className='div_about1'>
                          <h2 id='h2'>Nout.uz saytida Toshkentda HP noutbuklarini xarid qiling: Ishonchlilik va innovatsiya uchun sizning tanlovingiz</h2>
                          <p>Noutbuklar haqida gap ketganda, HP elektronika olamidagi eng ishonchli va innovatsion brendlardan biri hisoblanadi. Agar siz Toshkentda bo’lsangiz va noutbuk sotib olish imkoniyatlarini ko’rib chiqayotgan bo’lsangiz, Nout.uz saytidagi Acer noutbuklari sizning eng yaxshi tanlovingizdir. Ushbu maqolada Acer noutbuklarining afzalliklari va nima uchun Nout.uz Toshkentda ushbu brendni xarid qilishda ishonchli hamkoringiz ekanligi haqida gapirib beramiz.</p>
                          <h4>HP: Ishonchlilik va innovatsiya</h4>
                          <p>HP innovatsion funksiyalar va texnologiyalarni taklif qiluvchi ishonchli va yuqori sifatli noutbuklari bilan mashhur. Acer noutbuklariga e’tibor berishingizning asosiy sabablaridan ba’zilari:</p>
                        <div className='span'> 
                          <span id='span1'>1.  Ishonchlilik: HP noutbuklari yuqori sifatli komponentlar yordamida ishlab chiqariladi va chidamlilik va ishonchlilik uchun jiddiy sinovlardan o’tgan. Ular uzoq muddatli foydalanish uchun mo’ljallangan.</span>                          
                             <br />
                             <br />
                          <span id='span1'>2.   Innovatsiyalar: HP doimiy ravishda foydalanuvchilarga noutbuklar dunyosidagi eng ilg‘or yechimlarni taqdim etish uchun yangi texnologiyalarni ishlab chiqishga sarmoya kiritadi. Siz innovatsion xususiyatlar va yuqori unumdorlikka ega bo’lasiz.</span>
                             <br />
                             <br />
                          <span id='span1'>3.  Modellarning xilma-xilligi: HP turli ehtiyojlar va byudjetlarga mos keladigan noutbuklarning keng assortimentini taklif etadi. Sizning talablaringizga mos keladigan mukammal noutbukni topishingiz mumkin.</span>
                             <br />
                             <br />
                          <span id='span1'>4.  Zamonaviy dizayn: HPning ko’plab modellari zamonaviy va zamonaviy dizaynga ega bo’lib, ularni ish va o’yin uchun jozibador qiladi.</span>
                        </div> 
                          <h4>Nega Nout.uz Toshkentda HP noutbuklarini xarid qilishda ishonchli tanlovdir?</h4>
                          <p>Nout.uz — Toshkentda elektronika, jumladan, HP noutbuklarini sotishga ixtisoslashgan internet-do‘kon. Nout.uz sizning ideal hamkoringiz bo’lishining sabablari:</p>
                          <div className='span'> 
                          <span id='span1'>1.Keng assortiment: Biz har bir mijoz o’z ehtiyojlari uchun mukammal variantni topishi uchun Acer noutbuklarining turli modellarini taklif etamiz.</span>                          
                             <br />
                          <span id='span1'>2.Kafolatlangan sifat: Biz faqat rasmiy etkazib beruvchilar bilan hamkorlik qilamiz va mahsulotlarning o’ziga xosligini kafolatlaymiz. Nout.uz saytidagi Acer noutbuklari ishonchli qurilmalardir.</span>
                             <br />
                          <span id='span1'>3.Tez yetkazib berish: Biz sizning vaqtingizni qadrlaymiz va Toshkentning istalgan nuqtasiga tez va ishonchli yetkazib berishni kafolatlaymiz.
                          </span>
                            <br />
                          <span id='span1'>4.Professional xizmat: Bizning tajribali texnik xodimlarimiz sizga to’g’ri modelni tanlashda yordam berishga va savollaringizga javob berishga doimo tayyor.</span>
                        </div> 
                            <br />
                           <h4>Nout.uz saytida qanday buyurtma berish mumkin?</h4>
                           <span>Nout.uz saytida HP noutbukini xarid qilish oddiy va qulay:</span>
                                <div className='span'> 
                                   <span id='span1'>1.<Link to="/">Nout.uz</Link> saytimizga tashrif buyuring.</span>                          
                                      <br />
                                   <span id='span1'>2.Sizni qiziqtirgan Acer modelini tanlang.</span>
                                      <br />
                                   <span id='span1'>3.Buyumni savatga qo’shing va buyurtma bering.</span>
                                     <br />
                                   <span id='span1'>4.Qulay to’lov va yetkazib berish usulini tanlang.</span>
                                     <br />
                                   <span id='span1'>5.Buyurtma kelishini kuting va Acer sifatidan bahramand bo’ling.</span>
                                </div> 
                                 <br />
                          <h4>Xulosa</h4>
                            <span>Nout.uz saytida Acer noutbukini xarid qilish sizning ishonchlilik va innovatsiyalar sari qadamdir. Sifatli va ishonchli noutbuk olish imkoniyatini boy bermang. Bizning veb-saytimizga tashrif buyuring va bugun buyurtma bering!</span>
                      
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

export default HP;

