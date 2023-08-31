import React, { useState } from 'react'
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';


export default function Pricing() {
    const { siteConfig } = useDocusaurusContext();
    const [isAnnual, setIsAnnual] = useState(false);
    return (
        <Layout
            title={`Naas - ${siteConfig.title}`}
            description="The Universal Data Platform">
            <main>
                <div className={clsx(styles.pricingContainer, styles.flex, styles.flexCol, styles.itemsCenter)}>
                    <h2 className={styles.h2textCenter}>Free to start.<br />Pay as you grow.</h2>
                    <p className={styles.ptextCenter}>
                        Our Community plan enables you to explore for free.
                        <br />
                        Paid plans offer additional credits and dedicated features.
                    </p>
                    <div className={clsx(styles.flex, styles.pricingCycle, isAnnual ? styles.activeB : styles.activeA, styles.itemsCenter)}>
                        <div className={styles.cycleA}>
                            <span>Billed Monthly</span>
                        </div>
                        <div className={clsx(styles.switch)} onClick={() => setIsAnnual(!isAnnual)}>

                        </div>
                        <div className={styles.cycleB}>
                            <span>Billed Annualy (20% off)</span>
                        </div>
                    </div>
                    <div className={styles.grid}>
                        <div className={clsx(styles.gridItem, styles.pricingTier)}>
                            <h3>Community</h3>
                            <p>$5 credits/month for free.</p>
                            <div className={styles.price}><span>$0</span>/month</div>
                            <ul className={clsx(styles.pricingTier, styles.features)}>
                            <li>
                                Free features:
                                </li>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    Access to Search, Chat, Lab
                                </li>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    100 credits
                                </li>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    Limited availability
                                </li>
                            </ul>
                            <Link className={clsx(styles.btnGreen, styles.btn)} to="https://www.naas.ai/auth/signin">Start free
                            </Link>
                        </div>
                        <div className={clsx(styles.gridItem, styles.pricingTier)}>
                            <h3>Sponsor</h3>
                            <p>Become a Naas V.I.P.</p>
                            <div className={styles.price}><span>{isAnnual ? '$8' : '$10'}</span>/month</div>
                            <ul className={clsx(styles.pricingTier, styles.features)}>
                            <li>
                                Everything in Community, plus:
                                </li>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    100 credits
                                </li>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    Guaranteed availability
                                </li>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    Access to gold features
                                </li>
                            </ul>
                            <Link className={clsx(styles.btnWhite, styles.btn)} to="https://form.typeform.com/to/GjbalQ7R?typeform-source=www.naas.ai">Get more credits</Link>
                        </div>
                        <div className={clsx(styles.gridItem, styles.pricingTier)}>
                            <h3>Professional</h3>
                            <p>Build meaningful data & AI experiences</p>
                            <div className={styles.price}><span>{isAnnual ? '$39' : '$50'}</span>/month</div>
                            <ul className={clsx(styles.pricingTier, styles.features)}>
                            <li>
                                Everything in Sponsor, plus:
                                </li>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    1 600 credits
                                </li>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    Top up options
                                </li>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    Dedicated support
                                </li>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    Earn affiliate commissions
                                </li>
                            </ul>
                            <Link className={clsx(styles.btnWhite, styles.btn)} to="https://form.typeform.com/to/GjbalQ7R?typeform-source=www.naas.ai">Upgrade</Link>
                        </div>
                        <div className={clsx(styles.gridItem, styles.pricingTier)}>
                            <h3>Enterprise</h3>
                            <p>Completely transform your organization</p>
                            <div className={styles.price}><span>{isAnnual ? 'Quotation' : 'Quotation'}</span></div>
                            <ul className={clsx(styles.features)}>
                            <li>
                                Everything in Pro, plus:
                                </li>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    Advanced customization
                                </li>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    Advanced security
                                </li>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    Expert acceleration program
                                </li>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    Dedicated resources
                                </li>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    Multiple users
                                </li>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    Custom SLAs
                                </li>
                            </ul>
                            <Link className={clsx(styles.btnWhite, styles.btn)} to="https://form.typeform.com/to/GjbalQ7R?typeform-source=www.naas.ai">Contact Sales</Link>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}



