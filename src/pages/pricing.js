import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

import '../styles/component/pricing__page.scss'

export default ({ data }) => (
    <Layout themeColor='white'>
        <div id='pricing-wrapper'>
            <div className="page-title">
                <h2 className="title">PRICING</h2>
            </div>
            <div className='price-blocks__container'>
                <div className="price-block">
                    <h3 className="block-title">BASIC</h3>
                    <div className="block-body"></div>
                    <a></a>
                </div>
                <div className="price-block">
                    <h3 className="block-title">PREMIUM</h3>
                    <div className="block-body"></div>
                    <a></a>
                </div>
                <div className="price-block">
                    <h3 className="block-title">GOLDEN</h3>
                    <div className="block-body"></div>
                    <a></a>
                </div>
            </div>
        </div>
    </Layout>
)