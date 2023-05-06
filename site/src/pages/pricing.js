import React, { useState } from 'react'
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function PricingTable() {
    return <table className={styles.pricingTable} style={{"--pricing-border-color": "rgba(155.248, 150.396, 150.396, 0.2)"}}>
        <tr>
            <th></th>
            <th className={clsx(styles.color1, styles.weightTextM)}>Free</th>
            <th className={clsx(styles.color1, styles.weightTextM)}>Professional</th>
            <th className={clsx(styles.color1, styles.weightTextM)}>Company</th>
        </tr>
        <tr className={styles.description}>
            <th></th>
            <th className={styles.weightText}></th>
            <th className={styles.weightText}></th>
            <th className={styles.weightText}></th>
        </tr>
        <tr className={clsx(styles.price, styles.color1)}>
            <td></td>
            <td><span className={styles.a}></span></td>
            <td><span className={styles.a}></span></td>
            <td><span className={styles.a}></span></td>
        </tr>
        <tr className={styles.interval}>
            <td></td>
            <td><span className={styles.a}></span></td>
            <td><span className={styles.a}></span></td>
            <td><span className={styles.a}></span></td>
        </tr>
        <tr>
            <td>Price per credit
                <span className={clsx(styles.tooltip, styles.tooltipRight)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="8"></line>
                    </svg><span>A credit is equivalent to 1 min of server time when your product is launched.</span>
                </span>
            </td>
            <td>0.050$</td>
            <td>0.024$</td>
            <td>0.02$</td>
        </tr>
        <tr>
            <td>Jupyter Notebooks uptime
                <span className={clsx(styles.tooltip, styles.tooltipRight)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="8"></line>
                    </svg><span>Time you spend to build.</span>
                </span>
            </td>
            <td>Unlimited</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
        </tr>
        <tr>
            <td>Accounts</td>
            <td>1</td>
            <td>1</td>
            <td>7</td>
        </tr>
        <tr>
            <td>Credits
                <span className={clsx(styles.tooltip, styles.tooltipRight)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="8"></line>
                    </svg><span>Consumption depends on the tasks you need to perform. See FAQ below.</span>
                </span>
            </td>
            <td>100</td>
            <td>1 600</td>
            <td>30 000</td>
        </tr>
        <tr>
            <td>Storage</td>
            <td>5 Gb</td>
            <td>20 Gb</td>
            <td>20 Gb - 1 Tb</td>
        </tr>
        <tr>
            <td>Processor</td>
            <td>1 vCPU</td>
            <td>1 vCPU</td>
            <td>2vCPU<br /><small>(GPU on demand)</small> </td>
        </tr>
        <tr>
            <td>RAM
                <span className={clsx(styles.tooltip, styles.tooltipRight)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="8"></line>
                    </svg><span>Guarantee → Free: 300Mo, Starter: 500Mo, Pro: 750Mo, Enterprise: 8Go</span>
                </span>
            </td>
            <td>2 Gb</td>
            <td>4 Gb</td>
            <td>8 Gb</td>
        </tr>
        <tr>
            <td>Unlimited Features
                <span className={clsx(styles.tooltip, styles.tooltipRight)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="8"></line>
                    </svg><span>Scheduler, Asset, Notification, Dependency, Callback, Secret keys</span>
                </span>
            </td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
            </td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
            </td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
            </td>
        </tr>
        <tr>
            <td>Unlimited Drivers
                <span className={clsx(styles.tooltip, styles.tooltipRight)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="8"></line>
                    </svg><span>Restricted when Free due to R&D and maintenance costs.</span>
                </span>
            </td>
            <td></td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
            </td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
            </td>
        </tr>
        <tr>
            <td>Priority Email support</td>
            <td></td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
            </td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
            </td>
        </tr>
        <tr>
            <td>Premium support
                <span className={clsx(styles.tooltip, styles.tooltipRight)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="8"></line>
                    </svg><span>Dedicated account manager, fixed office hours.</span>
                </span>
            </td>
            <td></td>
            <td></td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
            </td>
        </tr>
        <tr>
            <td>Account consolidation</td>
            <td></td>
            <td></td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
            </td>
        </tr>
        <tr>
            <td>Custom Data Retention</td>
            <td></td>
            <td></td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
            </td>
        </tr>
        <tr>
            <td>Custom Security
                <span className={clsx(styles.tooltip, styles.tooltipRight)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="8"></line>
                    </svg><span>SSO, SSH tunnel, advanced connectivity</span>
                </span>
            </td>
            <td></td>
            <td></td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
            </td>
        </tr>
    </table>
}

export default function Pricing() {
    const { siteConfig } = useDocusaurusContext();
    const [isAnnual, setIsAnnual] = useState(false);
    return (
        <Layout
            title={`Naas - ${siteConfig.title}`}
            description="The Universal Data Platform">
            <main>
                <div className={clsx(styles.pricingContainer, styles.flex, styles.flexCol, styles.itemsCenter)}>
                    <h2 className={styles.textCenter}>Free to learn and build.<br />Pay as you grow.</h2>
                    <p className={styles.textCenter}>
                        Our Free plan enables you to learn and build your first data products.
                        <br />
                        Paid plans offer additional credits and dedicated server capacity.

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
                            <h3>Free</h3>
                            <p>$5 credits</p>
                            <div className={styles.price}><span>$0</span>/month</div>
                            <ul className={clsx(styles.pricingTier, styles.features)}>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    100 credits
                                </li>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    Shared resources
                                </li>
                            </ul>
                            <Link className={clsx(styles.btnGreen, styles.btn)} to="https://www.naas.ai/free-forever">CREATE ACCOUNT
                            <svg width="1em" viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg"><path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" fill="currentColor"></path></svg>
                            </Link>
                        </div>
                        <div className={clsx(styles.gridItem, styles.pricingTier)}>
                            <h3>Professional</h3>
                            <p>For individuals in need of a powerful data & AI platform</p>
                            <div className={styles.price}><span>{isAnnual ? '$39' : '$49'}</span>/month</div>
                            <ul className={clsx(styles.pricingTier, styles.features)}>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    1 600 credits
                                </li>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    Shared resources
                                </li>

                            </ul>
                            <Link className={clsx(styles.btnWhite, styles.btn)} to="https://form.typeform.com/to/GjbalQ7R?typeform-source=www.naas.ai">CONTACT US</Link>
                        </div>
                        <div className={clsx(styles.gridItem, styles.pricingTier)}>
                            <h3>Company</h3>
                            <p>Advanced security and capabilities for organizations</p>
                            <div className={styles.price}><span>{isAnnual ? '$479' : '$599'}</span>/month</div>
                            <ul className={clsx(styles.features)}>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    30 000 credits
                                </li>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    Dedicated  resources
                                </li>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    Multiple users
                                </li>
                                <li>
                                    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g></svg>
                                    Premium support
                                </li>
                            </ul>
                            <Link className={clsx(styles.btnWhite, styles.btn)} to="https://form.typeform.com/to/GjbalQ7R?typeform-source=www.naas.ai">CONTACT US</Link>
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.pricingContainer, styles.flex, styles.flexCol, styles.itemsCenter)}>
                    <h2 className={styles.textCenter}>Compare plans</h2>
                    <p className={styles.textCenter}>
                        From solo makers to established companies,
                        <br />
                        we are here to make you scale.
                    </p>
                    <div className={styles.pricingTableWrapper}>
                    <PricingTable />
                    </div>
                </div>
                
            </main>
        </Layout>
    )
}
