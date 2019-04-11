import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

import '../styles/component/pricing__page.scss'

export default ({ data }) => (
    <Layout themeColor='white'>
        <div id='pricing-wrapper' className="page-wrapper">
            <div className="page-title">
                <h2 className="title">PRICING</h2>
            </div>
            <div className='price-blocks__container'>
                <div className="price-block">
                    <div>
                        <h3 className="block-title">BASIC</h3>
                        <div className="block-body">
                            <ul className="plan-list">
                                <li className="plan-list__item">6 hours coverage</li>
                                <li className="plan-list__item">1 photographer</li>
                                <li className="plan-list__item">200 edited pictures</li>
                                <li className="plan-list__item">~ 500 total pictures</li>
                                <li className="plan-list__item">flash drive delivery</li>
                            </ul>
                        </div>
                    </div>
                    <a className="plan-price">$ 999</a>
                </div>
                <div className="price-block special">
                    <p className="special-tag">Most Popular</p>
                    <div>
                        <h3 className="block-title">PREMIUM</h3>
                        <div className="block-body">
                            <ul className="plan-list">
                                <li className="plan-list__item">8 hours coverage</li>
                                <li className="plan-list__item">1 photographer</li>
                                <li className="plan-list__item">400 edited pictures</li>
                                <li className="plan-list__item">~ 800 total pictures</li>
                                <li className="plan-list__item">flash drive delivery</li>
                                <li className="plan-list__item">online gallery</li>
                            </ul>
                        </div>
                    </div>
                    <a className="plan-price">$ 1,400</a>
                </div>
                <div className="price-block">
                    <div>
                        <h3 className="block-title">GOLDEN</h3>
                        <div className="block-body">
                            <ul className="plan-list">
                                <li className="plan-list__item">8 hours coverage</li>
                                <li className="plan-list__item">2 photographers</li>
                                <li className="plan-list__item">600 edited pictures</li>
                                <li className="plan-list__item">~ 1100 total pictures</li>
                                <li className="plan-list__item">flash drive delivery</li>
                                <li className="plan-list__item">online gallery</li>
                                <li className="plan-list__item">photo Album</li>
                            </ul>
                        </div>
                    </div>
                    <a className="plan-price">$ 2,100</a>
                </div>
            </div>
        </div>
    </Layout>
)