
import '../css/firstpage.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function header(props) {
  const [user, setUser] = useState()

  useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json()) 
    .then(json => {
       console.log(json);
       setUser(json[0].title)
    });
  }, [])
  
function tolov(){
  window.open('/savat', '_self')
}






const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


        return (
            <div>
                <header>
                  <div className='header-div'>
                      <div className='header-div1'>
                        
                            <span id='span01'>Noutbuklar Toshkentda birinchi qoldan. O’zbekistonda eng zo’r narxlar!</span>
                       <div className='header-div2'>
                          <div className='header-div3'>
                          <Link to="tel:909613853" id='Link01'>(90) 961-38-53
                          Музаффар</Link>
                          <Link to="tel:909957640" id='Link01'>(90) 995-76-40
                          Кирилл</Link>
                          <Link id='Link01'>(94) 661-95-13
                           Рустам</Link>
                          <Link id='Link01'>(99) 815-50-15 
                          Отабек</Link>
                          <Link id='Link01'>(93) 399-22-72 
                          Николай</Link>
                          <Link to="tel:977350119" id='Link01'>(97) 735-01-19 
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
                            <a href="https://nout.uz/uz/mening-akkauntim/">
                              <i class="fa-regular fa-user"></i>
                            </a>
                            <div className='div_5'>
                               
                             <div className='div_05 ' type="button"  data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Savat">                      
                             <button  class="btn btn-primary position-relative"   data-bs-toggle="modal" data-bs-target="#exampleModal" id='btn_buy01'  type="button"  data-bs-container="body"  data-bs-placement="bottom"  data-bs-content="Savatchada mahsulotlar yo'q">
                                  <i class="fa-solid fa-bag-shopping"></i>
                                   <span id='spanqush' class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                     0
                                     
                                   </span>
                                </button>
                                
                               
                             
                               
                             </div>
                         </div>
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
                   
                   <div className='div1'>
                      <div className='div2'>
                         <div className='div3'>
                             <Link>
                                <img id='id1' src="https://nout.uz/wp-content/uploads/2021/03/logotype-nout.svg" alt="" />
                             </Link>
                         </div>
                         <div className='div4'>
                          
                            <div className='inpdiv'>
                              <input placeholder='Mahsulotlar boyicha qidirish Barcha bolimlar'  id='inp' type="text" />
                            
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
                                <button id='inp1'><i class="fa-solid fa-magnifying-glass"></i></button>
                          </div>
                         </div>
                         <div className='div5'>
                             <Link to="https://nout.uz/uz/mening-akkauntim/">
                               <i class="fa-regular fa-user"></i>
                             </Link>  
                             <div className='div05 ' type="button"  data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Savat">                      
                             

                                <button  class="btn btn-primary position-relative"   data-bs-toggle="modal" data-bs-target="#exampleModal" id='btn_buy'  type="button"  data-bs-container="body"  data-bs-placement="bottom"  data-bs-content="Savatchada mahsulotlar yo'q">
                                  <i class="fa-solid fa-bag-shopping"></i>
                                   <span id='spanqush1' class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                     0
                                     
                                   </span>
                                </button>
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                      <div class="modal-content">
                                        <div class="modal-header">
                                          <h1 class="modal-title fs-5" id="exampleModalLabel">Savatcha</h1>
                                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div id='modal' class="modal-body">
                                          
                                        </div>
                                        <div class="modal-footer">
                                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                          <button onClick={tolov} type="button" class="btn btn-primary">To'lov</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                
                             </div>
                             
                              
                              
                              
                         </div>
                      </div>
                      <div className='o1'>
                         
                            <ul id='it'>
                              <li>
                                <Link to="/asus" id='link'>Asus</Link>
                              </li>
                              <li>
                                <Link to="/msi" id='link'>MSI</Link>
                              </li>
                              <li>
                                <Link to="/lenovo" id='link'>Lenovo</Link>
                              </li>
                              <li>
                                <Link to="/hp" id='link'>HP</Link>
                              </li>
                              <li>
                                <Link to="/dell" id='link'>Dell</Link>
                              </li>
                              <li>
                                <Link to="/razer" id='link'>Razer</Link>
                              </li>
                              <li>
                                <Link to="/samsung" id='link'>Samsung</Link>
                              </li>
                              <li>
                                <Link to="/microsoft" id='link'>Microsoft Surface</Link>
                              </li>
                              <li>
                                <Link to="/acer" id='link'>Acer</Link>
                              </li>
                              <li>
                                <Link to="/lg" id='link'>LG</Link>
                              </li>
                              <li>
                                <Link to="/" id='link'> Русский (Russian)</Link>
                                
                              </li>
                            </ul>
                        
                      </div>
                   </div>
                   
                   <div className='div7  animate__fadeIn animate__animated'>
                    <div id="carouselExampleAutoplaying" class="carousel slide animate__fadeIn animate__animated" data-bs-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <Link >
                              <img src="https://nout.uz/wp-content/uploads/2024/08/predator-16-ban-1536x520.jpg" class="d-block w-100" alt=""/>
                            </Link>
                          </div>
                          <div class="carousel-item">
                            <a href="">
                              <img src="https://nout.uz/wp-content/uploads/2023/11/HP-Laptop-15-i5-1335U-1970x650-1-1536x507.jpg" class="d-block w-100" alt=""/>
                            </a>
                          </div>
                          <div class="carousel-item active">
                            <Link >
                              <img src="https://nout.uz/wp-content/uploads/2024/07/banner.png" class="d-block w-100" alt=""/>
                            </Link>
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
                      </div></div>
                </header>
            </div>
        );
    
      }


