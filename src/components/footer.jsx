import { Link } from 'react-router-dom';
import '../css/firstpage.css';
import  React, { useState, useEffect } from 'react';
export default function footer(props) {
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
            
                <footer>
                    <div className='footer_div'>
                    <div className="dropdown1">
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
                                  <li  id='footer-li'>{props.data[0].allkategory}</li>
                                </Link>
                                <Link id='Link11'>
                                  <li id='footer-li'>{props.data[0].kategory}</li>
                                </Link>
                                <Link id='Link11'>
                                  <li id='footer-li'> {props.data[0].kategory1}</li>
                                </Link>
                                <Link id='Link11'>
                                  <li id='footer-li'>{props.data[0].kategory2}</li>
                                </Link>
                                <Link id='Link11'>
                                  <li id='footer-li'>{props.data[0].kategory3}</li>
                                </Link>
                                <Link id='Link11'>
                                  <li id='footer-li'>{props.data[0].kategory4}</li>
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
                                  <li>{props.data[0].allkategory}</li>
                                </Link>
                                <Link id='Link11'>
                                  <li>{props.data[0].kategory}</li>
                                </Link>
                                <Link id='Link11'>
                                  <li>{props.data[0].kategory1}</li>
                                </Link>
                                <Link id='Link11'>
                                  <li>{props.data[0].kategory2}</li>
                                </Link>
                                <Link id='Link11'>
                                  <li>{props.data[0].kategory3}</li>
                                </Link>
                                <Link id='Link11'>
                                  <li>{props.data[0].kategory4}</li>
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
            
        );
    }

