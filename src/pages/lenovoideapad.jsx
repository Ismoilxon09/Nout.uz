import React from 'react';
import { Link } from 'react-router-dom';
import '../css/lenovo.css';
import '../css/firstpage.css';

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const Lenovoideapad = () => {
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
                              <span>Lenovo</span>

                           </div>
                   </div>
             </header>
             <main>
                 <div className='div404'>
                      <div className='div_404'>
                          <h1>404!</h1>
                      </div>
                      <div className='div_h4'>
                          <h5>Nothing was found at this location. Try searching, or check out the links below.</h5>
                      </div>
                      <hr id='hr12'/>
                      <div className='inp_div'>
                          <input placeholder='Mahsulot qidirish...' type="text" />
                          <input type="button" value="Qidirish" />
                      </div>
                 </div>
             </main>
        </div>
    );
}

export default Lenovoideapad;
