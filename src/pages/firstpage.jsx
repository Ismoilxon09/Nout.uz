import React, { Component } from 'react';
import '../css/firstpage.css';
import Header from '../components/header';
import Main1 from '../components/main1';
import Footer from '../components/footer';
import { productType } from '../constants/data';


class Firstpage extends Component {
   
    render() {
        return (
            <div>
                
                <Header data={productType}/>
                <Main1 data={productType}/>
                <Footer data={productType}/>

            </div>
        );
    }
}

export default Firstpage;
