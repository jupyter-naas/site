import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.landing}>
      <div className={styles.heroBanner}>
        {/* <div className="container"> */}
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <p className={styles.tagline}>{siteConfig.tagline}</p>
        <div className={styles.buttonContainer}>
          <Link
            className={styles.buttons}
            to="/docs/intro">
            GET STARTED
          </Link>

        </div>
        <div className={styles.siteInfo}>Start with 100 free credits/month</div>
        {/* </div> */}
      </div>
    </div>
  );
}


function HomeCommunity() {
  return <>
    <div className={styles.community}>
      <div className={styles.communityContainer}>
        <div className={styles.titleWrapper}>
          <h2>Join the community</h2>
          <p>that makes data & AI product building easy.</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <div className={styles.iconContainer} >
              <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="#fff" height="32" width="32"
                viewBox="0 0 448 512">
                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
              </svg>
            </div>
            <h3 className="gridItem__title color-1 weight-text-m">
              <strong>500+ templates</strong>
            </h3>
            <div className="gridItem__description">
              <p>to make your life easy</p>
            </div>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.iconContainer} >
              <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="#fff" height="32" width="32" viewBox="0 0 576 512">
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                </path>
              </svg>
            </div>
            <h3 className="gridItem__title color-1 weight-text-m">
              <strong>2,000+ stars</strong>
            </h3>
            <div className="gridItem__description">
              <p>on Github</p>
            </div>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.iconContainer} >
              <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="#fff" height="32" width="32" viewBox="0 0 640 512">
                <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z">
                </path>
              </svg>
            </div>
            <h3 className="gridItem__title color-1 weight-text-m">
              <strong>5,000+ accounts</strong>
            </h3>
            <div className="gridItem__description">
              <p>in 75 countries</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </>
}

const supportLogos = [
  {
    link: "https://www.naas.ai/lib_JcijubPjTQrGWzas/3o6ioht0sr9gilpe.png?w=100&h=80",
    name: 'redhat'
  },
  {
    link: "https://www.naas.ai/lib_JcijubPjTQrGWzas/9j7v3f6iseusggfg.png?w=100&h=80",
    name: 'amazon'
  },
  {
    link: "https://www.naas.ai/lib_JcijubPjTQrGWzas/dqmvu1vrh1w1d17b.png?w=100&h=80",
    name: 'netflix'
  },
  {
    link: "https://www.naas.ai/lib_JcijubPjTQrGWzas/q0l2f8i6hys5ryj6.png?w=100&h=80",
    name: 'stanford'
  },
  {
    link: "https://www.naas.ai/lib_JcijubPjTQrGWzas/qi2o0ezjjnbb0ft8.png?w=100&h=80",
    name: 'tesla'
  },
]

function HomeTestimonialQuote() {
  return <div className={styles.testimonials}>
    <div className={styles.testimonial}>
      <div className={styles.testimonialQuotes}>
        <img src={"https://www.naas.ai/lib_NtadlqPncrCtPifD/go0yg1eqng1lmk51.jpg?w=100&h=100"} alt='jupyter.jpeg' />
        <div className={styles.rating}></div>
        <div className={styles.testimonialQuote}>
          <p>Naas is using Jupyter, the most popular data science interface, to create a frictionless data product building experience.</p>
        </div>
        <Link
          // className={styles.buttons}
          to="https://docs.naas.ai/">
          Read the documentation
        </Link>
      </div>
    </div>
    <div className={styles.hw}>
      <div className={styles.support}>
        <p>
          We have already received support from amazing organizations, <br />
          and we are just getting started.
        </p>
      </div>
      <div className={styles.supportLogos}>
        {supportLogos.map(logo => <div key={logo.name}><img src={logo.link} alt={logo.name} /></div>)}
      </div>
    </div>
  </div>
}

const toolLogos = [
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/k4n2vn7rvd9zb4iq.png?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/yb7hkkgr0nt76uzf.png?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/n7nbxh4i6er562d9.png?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/of5kikai6h6ngxyq.png?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/noqby55davij93ru.png?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/glkbx5cooudq8ysi.png?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/sfxdhw7pl0b8fxf7.png?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/s8v0zvy7b9fyi4pt.png?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/v4tt1le5rljom0cf.png?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/pgeepir3hi6z1a3e.png?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/abhk3j9xx2pnxca0.png?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/7g5te5dwu4qoq9wr.png?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/qqmnlxmczk7wxcck.png?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/gmm9cghwdvosuwpb.png?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/8vp4gwoyn8vj8ut4.png?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/bfhg82o7vpzg560m.png?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/4gk07asmcwyfunzj.png?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://landen.imgix.net/jtci2pxwjczr/assets/qbuop9ih.png?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/0wmblhco4758ga3z.png?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/e21e2croxgz2zjs2.png?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/bmp810teq595g9ju.png?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://landen.imgix.net/jtci2pxwjczr/assets/gxan7c8n.png?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/z48ixele4ifaur3a.png?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/ed7wnaabbup9pzgo.jpg?w=100&h=80",
    name: "logo"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/kwi15ykx1z81m6uu.png?w=100&h=80",
    name: "logo"
  },
]

function HomeToolCatalog() {
  return <div className={clsx(styles.flex, styles.flexCol, styles.itemsCenter, styles.bgLight)}>
    <div className={styles.h_w}>
      <div className={styles.catalog}>
        <div className={styles.catalogHead}>
          <h2>A catalog of templates<br /> on the tools you love to use</h2>
          <p>made by the Naas contributors, and following the <br />IMO (input, model, output) framework.</p>
        </div>
        <div className={styles.toolLogos}>
          {toolLogos.map((tool, index) => (<div className={styles.toolImageContainer} key={`tools-${index}`}><img src={tool.link} alt={tool.name} /></div>))}
        </div>
      </div>
      <div className={clsx(styles.flex, styles.flexWrap, styles.justifyCenter, styles.itemsCenter, styles.explore)}>
        <Link className={styles.btnWhite} to={"https://github.com/jupyter-naas/awesome-notebooks"}>
          EXPLORE TEMPLATES
        </Link>
        <Link className={styles.btnGreen} to={"https://www.naas.ai/free-forever"}>
          GET STARTED
        </Link>
      </div>
    </div>
  </div>
}

function HomeFeatureImages() {
  return <div>
    <div className={clsx(styles.flex, styles.flexWrap, styles.bgLight, styles.featureImage)}>
      <div className={styles.half}>
        <div className={styles.imageContainer}>
          <div className={styles.relative}>
            <svg viewBox="0 0 940 623" xmlns="http://www.w3.org/2000/svg" className="pdxBrowser">
              <g fill="none" fillRule="evenodd"><rect fill="#FFF" width="940" height="623" rx="9"></rect>
                <path d="M0 36h940V9a9 9 0 0 0-9-9H9a9 9 0 0 0-9 9v27z" fill="#DFE1E6"></path>
                <circle fill="#FD6157" cx="18" cy="18" r="6"></circle>
                <circle fill="#FDBD04" cx="38" cy="18" r="6"></circle>
                <circle fill="#30CA2E" cx="58" cy="18" r="6"></circle>
              </g></svg>
            <div className={clsx(styles.absolute, styles.jupyterImage)}>
              <img src='https://www.naas.ai/lib_KbmqUogQbiRJQoGw/4ikcr39udlxt3tai.gif' alt='jupyter' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.half}>
        <div className={clsx(styles.textContainer, styles.flex, styles.flexCol, styles.justifyCenter, styles.itemsCenter, styles.hFull)}>
          <h2>Assemble templates to create your data products</h2>
          <p>Incorporate your own unique intelligence with the help of Naas' low-code integration and production capabilities.</p>
        </div>
      </div>
    </div>
    <div className={clsx(styles.flex, styles.bgDark, styles.scalling, styles.featureImage)}>
      <div className={styles.half}>
        <div className={clsx(styles.flex, styles.justifyFlexEnd, styles.itemsCenter, styles.hFull)}>
          <div className={clsx(styles.textContainer, styles.flex, styles.flexCol, styles.itemsCenter)}>
            <h2>Scale your data products with Naas platform</h2>
            <p>Take your data product from its initial development stage to a fully-fledged, enterprise-level.</p>
          </div>
        </div>
      </div>
      <div className={styles.half}>
        <div className={styles.imageContainer}>
          <img src='https://www.naas.ai/lib_sluGpRGQOLtkyEpz/el8e4upmz1cy1hne.png?w=1200&h=900&fit=max' alt='features' />
        </div>

      </div>
    </div>
    <div className={clsx(styles.flex, styles.bgLightGrey, styles.scalling, styles.featureImage)}>
      <div className={styles.half}>
        <div className={styles.imageContainer}>
          <div className={styles.relative}>
            <svg viewBox="0 0 940 623" xmlns="http://www.w3.org/2000/svg" className="pdxBrowser">
              <g fill="none" fillRule="evenodd"><rect fill="#FFF" width="940" height="623" rx="9"></rect>
                <path d="M0 36h940V9a9 9 0 0 0-9-9H9a9 9 0 0 0-9 9v27z" fill="#DFE1E6"></path>
                <circle fill="#FD6157" cx="18" cy="18" r="6"></circle>
                <circle fill="#FDBD04" cx="38" cy="18" r="6"></circle>
                <circle fill="#30CA2E" cx="58" cy="18" r="6"></circle>
              </g></svg>
            <div className={clsx(styles.absolute, styles.jupyterImage)}>
              <img src='https://www.naas.ai/lib_sluGpRGQOLtkyEpz/k3x3qdvcocd6pq3w.png?w=800&h=500&fit=crop' alt='jupyter' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.half}>
        <div className={clsx(styles.textContainer, styles.flex, styles.flexCol, styles.justifyCenter, styles.itemsCenter, styles.hFull)}>
          <h2>Always know how your data products work, no hidden surprises.</h2>
          <div>
            <div className={clsx(styles.flex, styles.flexWrap)}>
              <div className={styles.featDescription}>
                <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66">
                      <polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon>
                    </g>
                  </g>
                </svg>
                Transparent pricing
              </div>
              <div className={styles.featDescription}>
                <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66">
                      <polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon>
                    </g>
                  </g>
                </svg>
                Automated versioning</div>
              <div className={styles.featDescription}>
                <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66">
                      <polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon>
                    </g>
                  </g>
                </svg>
                Keep track and maintain ownership</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={clsx(styles.bgLightGrey, styles.flex, styles.justifyCenter, styles.robust)}>
      <div className={styles.h_w}>
        <div className={clsx(styles.flex, styles.flexCol, styles.itemsCenter)}>
          <h2 className={styles.textCenter}>Robust, scalable & <br />secured infrastructure</h2>
          <p className={styles.textCenter}>Naas handles deployment and hosting for you.</p>
        </div>
        <div className={styles.gallery}>
          <div className={styles.galleryItem}>
            <div>
              <div className={styles.media}>
                <img src="https://landen.imgix.net/jtci2pxwjczr/assets/0rpysqq7.png?w=400&h=200&fit=crop" alt="amazon" />
              </div>
              <div className={styles.galleryMeta}>
                <h3>99.99% uptime.</h3>
                <div className={styles.galleryDescription}>
                  <p>We are hosted on the only provider that guarantees it.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <div>
              <div className={styles.media}>
                <img src="https://landen.imgix.net/jtci2pxwjczr/assets/juzyoew8.png?w=400&h=200&fit=crop" alt="kubernetes" />
              </div>
              <div className={styles.galleryMeta}>
                <h3>Never run out of memory.</h3>
                <div className={styles.galleryDescription}>
                  <p>We handle your kernels through Kubernetes.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <div>
              <div className={styles.media}>
                <img src="https://landen.imgix.net/jtci2pxwjczr/assets/3gxnllrj.png?w=400&h=200&fit=crop" alt="docker" />
              </div>
              <div className={styles.galleryMeta}>
                <h3>Keep your data safe.</h3>
                <div className={styles.galleryDescription}>
                  <p>Each user has its own virtual machine with Docker.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={clsx(styles.flex, styles.justifyCenter, styles.bgDark)}>
      <div className={clsx(styles.content, styles.ptXL)}>
        <h2>Keep your data secure and under your control</h2>
        <p>Our platform is built on top of the most secure APIs and data platforms, ensuring that your data stays with you at all times.</p>
      </div>
    </div>
    <div className={clsx(styles.flex, styles.justifyCenter, styles.bgDark)}>
      <div className={clsx(styles.content, styles.ptXL)}>
        <h2>"Naas templates are the next generation of documents to create impact with data"</h2>
        <p>Just change a few parameters <br />in the templates and you have the power.</p>
      </div>
    </div>
    <div className={clsx(styles.flex, styles.justifyCenter, styles.bgDark)}>
      <div className={clsx(styles.content, styles.ptXL)}>
        <h2>Why they love Naas</h2>
        <p>Follow us on Twitter: <Link className={styles.link} to={"https://twitter.com/JupyterNaas"}>@JupyterNaas</Link> for updates.</p>
      </div>
    </div>
    <div className={clsx(styles.flex, styles.justifyCenter, styles.bgDark)}>
      <div className={clsx(styles.h_w, styles.flex, styles.flexWrap)}>
        <div className={clsx(styles.testimonialAvatar)}>
          <img src='https://landen.imgix.net/jtci2pxwjczr/assets/jiloyo81.jpg?w=100&h=100' alt='testimonial' />
          <div className={clsx(styles.rating)} style={{ "--rating": 5, color: '#F6BA10' }}>
            <div className={styles.starRating}>

            </div>
            <div className={styles.numericRating}>5 / 5</div>
          </div>
          <div className={styles.testimonialQuotes}>
            <p>I was using Jupyter Notebooks for exploratory analysis but with Naas I can run them as a safe production environment, pretty awesome!</p>
          </div>
          <span className={styles.testimonialAbout}>
            Hugo - Data scientist
          </span>
        </div>
        <div className={clsx(styles.testimonialAvatar)}>
          <img src='https://landen.imgix.net/jtci2pxwjczr/assets/nsmdf8zo.jpg?w=100&h=100' alt='testimonial2' />
          <div className={clsx(styles.rating)} style={{ "--rating": 4.5, color: '#F6BA10' }}>
            <div className={styles.starRating}>

            </div>
            <div className={styles.numericRating}>4.5 / 5</div>
          </div>
          <div className={styles.testimonialQuotes}>
            <p>I have the power to run my analysis on schedule and trigger it remotely. Pretty useful compared to Excel. </p>
          </div>
          <span className={styles.testimonialAbout}>
            Mathilde - Freelance Financial Analyst
          </span>
        </div>
        <div className={clsx(styles.testimonialAvatar)}>
          <img src='https://www.naas.ai/lib_NyEjrHzRfXIFhSRL/qmcgk523nkypwng6.png?w=100&h=100' alt='testimonial3' />
          <div className={clsx(styles.rating)} style={{ "--rating": 5, color: '#F6BA10' }}>
            <div className={styles.starRating}>

            </div>
            <div className={styles.numericRating}>5 / 5</div>
          </div>
          <div className={styles.testimonialQuotes}>
            <p>“Naas really changed my way of working with PowerBI. my reports lighter, faster and more auditable.”</p>
          </div>
          <span className={styles.testimonialAbout}>
            Alexandre - Freelance Financial Data
          </span>
        </div>
        <div className={clsx(styles.testimonialAvatar)}>
          <img src='https://www.naas.ai/lib_NyEjrHzRfXIFhSRL/vzsvyu62jnwosi9c.jpg?w=100&h=100' alt='testimonial4' />
          <div className={clsx(styles.rating)} style={{ "--rating": 5, color: '#F6BA10' }}>
            <div className={styles.starRating}>

            </div>
            <div className={styles.numericRating}>5 / 5</div>
          </div>
          <div className={styles.testimonialQuotes}>
            <p>“I start with an idea, build an MVP, send it to customers and understand what’s working or not. Just awesome.</p>
          </div>
          <span className={styles.testimonialAbout}>
            Mark - Data Scientist
          </span>
        </div>
        <div className={clsx(styles.testimonialAvatar)}>
          <img src='https://www.naas.ai/lib_NyEjrHzRfXIFhSRL/i5ve28o7shgp43d1.jpg?w=100&h=100' alt='testimonial5' />
          <div className={clsx(styles.rating)} style={{ "--rating": 5, color: '#F6BA10' }}>
            <div className={styles.starRating}>

            </div>
            <div className={styles.numericRating}>5 / 5</div>
          </div>
          <div className={styles.testimonialQuotes}>
            <p>I can automate every reporting work and create valuable data assets for my investors, like never before.”</p>
          </div>
          <span className={styles.testimonialAbout}>
            Romain - Investment Director
          </span>
        </div>
        <div className={clsx(styles.testimonialAvatar)}>
          <img src='https://www.naas.ai/lib_NyEjrHzRfXIFhSRL/nzfihc1lseat118c.jpg?w=100&h=100' alt='testimonial6' />
          <div className={clsx(styles.rating)} style={{ "--rating": 5, color: '#F6BA10' }}>
            <div className={styles.starRating}>

            </div>
            <div className={styles.numericRating}>5 / 5</div>
          </div>
          <div className={styles.testimonialQuotes}>
            <p>Naas provides a great way to easily integrate with our tools. Their ready-to-use templates make us save a lot of time.</p>
          </div>
          <span className={styles.testimonialAbout}>
            Evandro - Software Engineering Manager
          </span>
        </div>
      </div>
    </div>
    <div className={clsx(styles.scalling, styles.flex, styles.justifyCenter, styles.bgLight)}>
      <div className={styles.h_w_lg}>
        <div className={clsx(styles.flex, styles.flexWrap, styles.justifyBetween, styles.itemsCenter)}>
          <div className={styles.mobCenter}>
            <div>
            <h2>Free & Open-source forever.</h2>
            <p>Discover our community roadmap on GitHub</p>
            </div>
          </div>
          <div className={styles.mobCenter}>
          <Link to={'https://github.com/jupyter-naas/'} className={styles.btnWhite}>
            GO TO OUR GITHUB
            <svg width="1em" viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" fill="currentColor">
              </path>
            </svg>
          </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
}

function HomeFooter() {
  return <div className={clsx(styles.bgDark)}>
    <div className={clsx(styles.footerTop, styles.flex, styles.justifyCenter)}>
      <div className={clsx(styles.flex, styles.flexCol, styles.itemsCenter)}>
        <h2>Try Naas Cloud today</h2>
        <p>Get started for free, add more credits as you grow.</p>
        <Link to={"https://www.naas.ai/free-forever"} className={styles.btnGreen}>GET STARTED</Link>
      </div>
    </div>
    <div className={clsx(styles.footer, styles.flex, styles.justifyCenter)}>
      <div className={clsx(styles.h_w, styles.flex, styles.flexWrap, styles.footerContent)}>
        <div className={styles.half}>
          <span>Powered by NaasAI Inc. © 2023</span>
          <ul className={clsx(styles.flex, styles.flexWrap)}>
            <li>
              <Link to={"https://www.youtube.com/channel/UCKKG5hzjXXU_rRdHHWQ8JHQ"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" fill="currentColor">
                  </path>
                </svg>
              </Link>
            </li>
            <li>
              <Link to={"https://github.com/jupyter-naas/naas"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" fill="currentColor"></path></svg>
              </Link>
            </li>
            <li>
              <Link to={"https://join.slack.com/t/naas-club/shared_invite/zt-1970s5rie-8udGv9TsAw9StcI8SB8eqw"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M244.2 217.5l19.3 57.7-59.8 20-19.3-57.7 59.8-20zm41.4 243.7C131.6 507.4 65 471.6 18.8 317.6S8.4 97 162.4 50.8C316.4 4.6 383 40.4 429.2 194.4c46.2 154 10.4 220.6-143.6 266.8zM366.2 265c-3.9-12.2-17.2-18.6-29.4-14.7l-29 9.7-19.3-57.7 29-9.7c12.2-3.9 18.6-17.2 14.7-29.4-3.9-12.2-17.2-18.6-29.4-14.7l-29 9.7-10-30.1c-3.9-12.2-17.2-18.6-29.4-14.7-12.2 3.9-18.6 17.2-14.7 29.4l10 30.1-59.8 20.1-10-30.1c-3.9-12.2-17.2-18.6-29.4-14.7-12.2 3.9-18.6 17.2-14.7 29.4l10 30.1-29 9.7c-12.2 3.9-18.6 17.2-14.7 29.4 3.2 9.3 12.2 15.4 21.5 15.8 4.3.6 7.7-1 36.9-10.7l19.3 57.7-29 9.7c-12.2 3.9-18.6 17.2-14.7 29.4 3.2 9.3 12.2 15.4 21.5 15.8 4.3.6 7.7-1 36.9-10.7l10 30.1c3.7 10.8 15.8 18.6 29.4 14.7 12.2-3.9 18.6-17.2 14.7-29.4l-10-30.1 59.8-20.1 10 30.1c3.7 10.8 15.8 18.6 29.4 14.7 12.2-3.9 18.6-17.2 14.7-29.4l-10-30.1 29-9.7c12.2-4.2 18.6-17.5 14.7-29.6z" fill="currentColor"></path></svg>
              </Link>
            </li>
            <li>
              <Link to={"https://www.linkedin.com/company/naas-ai/"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" fill="currentColor"></path></svg>
              </Link>
            </li>
            <li>
              <Link to={"https://www.producthunt.com/posts/naas-3/"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z" fill="currentColor"></path></svg>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.half}>
          <div className={clsx(styles.flex, styles.flexWrap)}>
            <ul>
              <li><strong>Product</strong></li>
              <li><Link to="https://www.naas.ai/free-forever">Templates</Link></li>
              <li><Link to="https://docs.naas.ai/">Documentation</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="https://github.com/orgs/jupyter-naas/projects/10/views/13">Roadmap</Link></li>
            </ul>
            <ul>
              <li><strong>Community</strong></li>
              <li><Link to="https://naas-club.slack.com/?redir=%2Fgantry%2Fclient">Slack community</Link></li>
              <li><Link to="https://github.com/jupyter-naas">GitHub</Link></li>
              <li><Link to="https://form.typeform.com/to/jdls9qZf">Contribute</Link></li>
              <li><Link to="https://github.com/sponsors/jupyter-naas">Sponsor us</Link></li>
            </ul>
            <ul>
              <li><strong>Company</strong></li>
              <li><Link to="https://www.naas.ai/company">About us</Link></li>
              <li><Link to="https://naas-official.notion.site/Press-Kit-0226d57da0c54a2a8e4c14ebf902121e">Media kit</Link></li>
              <li><Link to="https://www.naas.ai/terms">Terms & conditions</Link></li>
              <li><Link to="https://form.typeform.com/to/GjbalQ7R">Contact Sales</Link></li>
              <li><Link to="https://form.typeform.com/to/aH1v5ync">Contact Support</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Naas - ${siteConfig.title}`}
      description="The Universal Data Platform">
      <HomepageHeader />
      <main>
        <HomeCommunity />
        <HomeTestimonialQuote />
        <HomeToolCatalog />
        <HomeFeatureImages />
        <HomeFooter />
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
