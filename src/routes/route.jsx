import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Firstpage from '../pages/firstpage';
import Lenovo from '../pages/lenovo';
import Asus from '../pages/asus';
import Asustufgamin from '../mahsulotlar/asustufgamin';
import Asusrogstrixg35 from '../mahsulotlar/asusrogstrixg35';
import Asusrogstrixg35i7 from '../mahsulotlar/asusrogstrixg35i7';
import Asusrogstrixga15 from '../mahsulotlar/asusrogstrixga15';
import Asusrogstrixg15dk from '../mahsulotlar/asusrogstrixg15dk';
import Asusrogstrixg16 from '../mahsulotlar/asusrogstrixg16';
import Asusvivobook17 from '../mahsulotlar/asusvivobook17';
import Asustufgamingf17 from '../mahsulotlar/asustufgamingf17';
import Msi from '../pages/msi';
import Hp from '../pages/hp';
import Hpenvy from '../pages/hpenvy';
import Hpvictus from '../pages/hpvictus';
import Hplaptop from '../pages/hplaptop';
import Hppavilion from '../pages/hppavilion';
import Hpspectre from '../pages/hpspectre';
import Hpomen from '../pages/hpomen';
import Hppaviliongold from '../mahsulotlar/hppaviliongold';
import Hppavilionsilver from '../mahsulotlar/hppavilionsilver';
import Hpspectrex360 from '../mahsulotlar/hpspectex360';
import Hpvictus15 from '../mahsulotlar/hpvictus15';
import Dell from '../pages/dell';
import Dellxps from '../pages/dellxps';
import Dellinspiron from '../pages/dellinspiron';
import Dellgamingsumka from '../mahsulotlar/dellgamingsumka';
import Dellxps15 from '../mahsulotlar/dellxps15';
import Razer from '../pages/razer';
import Samsung from '../pages/samsung';
import Microsoft from '../pages/microsoft';
import Acer from '../pages/acer';
import Acernitro from '../pages/acernitro';
import Lg from '../pages/lg';
import Lggram14 from '../mahsulotlar/lggram14';
import Brendlar from '../pages/brendlar';
import Aceraspire from '../pages/aceraspire';
import Acerpredator from '../pages/acerpredator';
import Acerswift from '../pages/acerswift';
import Lenovoideapad from '../pages/lenovoideapad';
import Lenovothinkpad from '../pages/lenovothinkpad';
import Lenovoyoga from '../pages/lenovoyoga';
import Lenovothinkbook from '../pages/lenovothinkbook';
import Lenovolegion5t5 from '../mahsulotlar/lenovolegion5t5';
import Lenovoideacentre from '../mahsulotlar/lenovoideacentre';
import Lenovolegions7 from '../mahsulotlar/lenovolegions7';
import Lenovolegion5pro from '../mahsulotlar/lenovolegion5pro';
import Apple from '../pages/apple'
import Msistelath17studio from '../mahsulotlar/msistelath17studio';
import Msiairsumka from '../mahsulotlar/msiairsumka';
import Msibattlepackbag from '../mahsulotlar/msibattlepackbag';
import Msiurbanraider from '../mahsulotlar/msiurbanraider';
import Msicrosshair15 from '../mahsulotlar/msicrosshair15';
import Gatewayl31 from '../mahsulotlar/gatewayl31';
import Rogdelta from '../mahsulotlar/rogdelta';
import Savat from '../pages/savat';
export default function routes() {
  return (
    <BrowserRouter>
        <Routes>
              <Route path='/' element={<Firstpage/>}/>
              <Route path='/lenovo' element={<Lenovo/>}/>
              <Route path='/asus' element={<Asus/>}/>
              <Route path='/asusrogstrixg35' element={<Asusrogstrixg35/>}/>
              <Route path='/asusrogstrixg35i7' element={<Asusrogstrixg35i7/>}/>
              <Route path='/asusrogstrixga15' element={<Asusrogstrixga15/>}/>
              <Route path='/asusrogstrixg15dk' element={<Asusrogstrixg15dk/>}/>
              <Route path='/asustufgamin' element={<Asustufgamin/>}/>
              <Route path='/asusrogstrixg16' element={<Asusrogstrixg16/>}/>
              <Route path='/asusvivobook17' element={<Asusvivobook17/>}/>
              <Route path='/asustufgamingf17' element={<Asustufgamingf17/>}/>
              <Route path='/msi' element={<Msi/>}/>
              <Route path='/msistelath17studio' element={<Msistelath17studio/>}/>
              <Route path='/msiairsumka' element={<Msiairsumka/>}/>
              <Route path='/msibattlepackbag' element={<Msibattlepackbag/>}/>
              <Route path='/msiurbanraider' element={<Msiurbanraider/>}/>
              <Route path='/msicrosshair15' element={<Msicrosshair15/>}/>
              <Route path='/hp' element={<Hp/>}/>
              <Route path='/hpenvy' element={<Hpenvy/>}/>
              <Route path='/hpvictus' element={<Hpvictus/>}/>
              <Route path='/hplaptop' element={<Hplaptop/>}/>
              <Route path='/hppavilion' element={<Hppavilion/>}/>
              <Route path='/hpspectre' element={<Hpspectre/>}/>
              <Route path='/hpomen' element={<Hpomen/>}/>
              <Route path='/hppaviliongold' element={<Hppaviliongold/>}/>
              <Route path='/hppavilionsilver' element={<Hppavilionsilver/>}/>
              <Route path='/hpspectrex360' element={<Hpspectrex360/>}/>
              <Route path='/hpvictus15' element={<Hpvictus15/>}/>
              <Route path='/dell' element={<Dell/>}/>
              <Route path='/dellxps' element={<Dellxps/>}/>
              <Route path='/dellxps15' element={<Dellxps15/>}/>
              <Route path='/dellinspiron' element={<Dellinspiron/>}/>
              <Route path='/dellgamingsumka' element={<Dellgamingsumka/>}/>
              <Route path='/razer' element={<Razer/>}/>
              <Route path='/samsung' element={<Samsung/>}/>
              <Route path='/microsoft' element={<Microsoft/>}/>
              <Route path='/acer' element={<Acer/>}/>
              <Route path='/lg' element={<Lg/>}/>
              <Route path='/lggram14' element={<Lggram14/>}/>
              <Route path='/brendlar' element={<Brendlar/>}/>
              <Route path='/acernitro' element={<Acernitro/>}/>
              <Route path='/aceraspire' element={<Aceraspire/>}/>
              <Route path='/acerpredator' element={<Acerpredator/>}/>
              <Route path='/acerswift' element={<Acerswift/>}/>
              <Route path='/lenovoideapad' element={<Lenovoideapad/>}/>
              <Route path='/lenovothinkpad' element={<Lenovothinkpad/>}/>
              <Route path='/lenovoyoga' element={<Lenovoyoga/>}/>
              <Route path='/lenovothinkbook' element={<Lenovothinkbook/>}/>
              <Route path='/lenovolegion5t5' element={<Lenovolegion5t5/>}/>
              <Route path='/lenovoideacentre' element={<Lenovoideacentre/>}/>
              <Route path='/lenovolegions7' element={<Lenovolegions7/>}/>
              <Route path='/lenovolegion5pro' element={<Lenovolegion5pro/>}/>
              <Route path='/Apple' element={<Apple/>}/>
              <Route path='/gatewayl31' element={<Gatewayl31/>}/>
              <Route path='/rogdelta' element={<Rogdelta/>}/>
              <Route path='/savat' element={<Savat/>}/>
        </Routes>
    </BrowserRouter>
  )
}