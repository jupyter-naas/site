import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Naas`}
      description="A new way to build data & AI experiences"
    >
      <HomepageHeader />
      <main>
        <HomeTLDR />
        <h2 className={styles.h2textCenter} style={{marginTop: '2rem'}}>Everything you need to integrate AI in your daily operations</h2>
        <HomeFeatures />
        <h2 className={styles.h2textCenter}>How It Works?</h2>
        <Steps />
        <HomeApproach />
        <HomeSolutions />
        {/* <HomeFeatures /> */}
        <HomeTechFeatures />
        <HomeTestimonials />
        {/* <HomeGitHub /> */}
        <HomeContributors />
        {/* <HomeFooter /> */}
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.landing}>
      <div className={styles.heroBanner}>
        {/* <div className="container"> */}
        <h1 className={styles.title}>️ ⚡Creating ABI, the AI System for your everyday business</h1>
        <p className={clsx(styles.tagline, styles.textCenter)}>
          Naas is an open alternative to ChatGPT and its plugins store that you can
           customize to your own needs. It integrates analytics, automation an AI into your
            workflows thanks to low-code templates
             and the best generative AI models.</p>
        <div className={styles.buttonContainer}>
          <a
            className={styles.cta}
            href="https://bit.ly/3CFSumN"
            target="_blank"
          >
            Join Alpha
          </a>
        </div>
        <div className={styles.siteInfo}>
          Naas.ai is currently in limited alpha.<br></br>Start with 100 free
          credits/month for free.
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

function HomeTLDR() {
  return (
    <div className={clsx(styles.featureContainer, styles.bgDark)}>
      <div className={styles.community}>
        <div>
          <div className={styles.half}>
              <ImageFrame imageUrl={"https://user-images.githubusercontent.com/81156510/277124949-2926d01f-6152-41a7-a0ca-24a7ce25946e.png"} />
          </div>
          <div className={styles.textCenter}>
            <h2>
              We are building the infrastructure for a truly
              
              Universal Data & AI Platform
            </h2>
            <p>
              People at incredible organizations already supports us, and we are
              just getting started.
            </p>
            <div style={{ textAlign: "center"}}>
              <a href="#">Learn about their stories →</a>
            </div>
          </div>

          <div className={styles.organizations}>
            <img
              src="https://user-images.githubusercontent.com/81156510/277126407-4b404d46-0a12-4082-b89c-d4ae972e0652.png"
              alt="companies"
              style={{ height: "217px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const supportLogos = [
  {
    link: "./img/redhat.png",
    name: "redhat",
  },
  {
    link: "./img/amazon.png",
    name: "amazon",
  },
  {
    link: "./img/netflix.png",
    name: "netflix",
  },
  {
    link: "./img/stanford.png",
    name: "stanford",
  },
  {
    link: "./img/tesla.png",
    name: "tesla",
  },
];

function HomeSupport() {
  return (
    <div className={styles.testimonials}>
      <div className={styles.hw}>
        <div className={styles.titleWrapper}>
          <h2>Thanks to our amazing supports</h2>
        </div>
        <div className={styles.support}>
          <p>
            We have already received support from people at amazing
            organizations, 
            and we are just getting started.
          </p>
        </div>
        <div className={styles.supportLogos}>
          {supportLogos.map((logo) => (
            <div key={logo.name}>
              <img src={logo.link} alt={logo.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const toolImages = [
  {
    link: "https://jtci2pxwjczr.landen.co/lib_NtadlqPncrCtPifD/k4n2vn7rvd9zb4iq.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://jtci2pxwjczr.landen.co/search?q=LinkedIn",
  },
  {
    link: "https://jtci2pxwjczr.landen.co/lib_NtadlqPncrCtPifD/yb7hkkgr0nt76uzf.png?w=100&h=80",
    name: "Twitter",
    href: "https://jtci2pxwjczr.landen.co/search?q=Twitter",
  },
  {
    link: "https://jtci2pxwjczr.landen.co/lib_NtadlqPncrCtPifD/n7nbxh4i6er562d9.png?w=100&h=80",
    name: "Youtube",
    href: "https://jtci2pxwjczr.landen.co/search?q=Youtube",
  },
  {
    link: "https://jtci2pxwjczr.landen.co/lib_NtadlqPncrCtPifD/of5kikai6h6ngxyq.png?w=100&h=80",
    name: "Tiktok",
    href: "https://jtci2pxwjczr.landen.co/search?q=Tiktok",
  },
  {
    link: "https://jtci2pxwjczr.landen.co/lib_NtadlqPncrCtPifD/noqby55davij93ru.png?w=100&h=80",
    name: "Instagram",
    href: "https://jtci2pxwjczr.landen.co/search?q=Instagram",
  },
  {
    link: "https://jtci2pxwjczr.landen.co/lib_NtadlqPncrCtPifD/abhk3j9xx2pnxca0.png?w=100&h=80",
    name: "HubSpot",
    href: "https://jtci2pxwjczr.landen.co/search?q=HubSpot",
  },
  {
    link: "https://jtci2pxwjczr.landen.co/lib_NtadlqPncrCtPifD/7g5te5dwu4qoq9wr.png?w=100&h=80",
    name: "Airtable",
    href: "https://jtci2pxwjczr.landen.co/search?q=Airtable",
  },
  {
    link: "https://jtci2pxwjczr.landen.co/lib_NtadlqPncrCtPifD/qqmnlxmczk7wxcck.png?w=100&h=80",
    name: "Google Sheets",
    href: "https://jtci2pxwjczr.landen.co/search?q=Google%20Sheets",
  },
  {
    link: "https://jtci2pxwjczr.landen.co/lib_NtadlqPncrCtPifD/gmm9cghwdvosuwpb.png?w=100&h=80",
    name: "Excel",
    href: "https://jtci2pxwjczr.landen.co/search?q=Excel",
  },
  {
    link: "https://jtci2pxwjczr.landen.co/lib_NtadlqPncrCtPifD/8vp4gwoyn8vj8ut4.png?w=100&h=80",
    name: "Microsoft Teams",
    href: "https://jtci2pxwjczr.landen.co/search?q=Teams",
  },
  {
    link: "https://user-images.githubusercontent.com/81156510/277146565-665aac91-d672-4509-a4a8-9781dc1ba7dd.png",
    name: "Trello",
    href: "https://jtci2pxwjczr.landen.co/search?q=OpenAI",
  },
  {
    link: "https://jtci2pxwjczr.landen.co/lib_NtadlqPncrCtPifD/sfxdhw7pl0b8fxf7.png?w=100&h=80",
    name: "GitHub",
    href: "https://jtci2pxwjczr.landen.co/search?q=GitHub",
  },
  {
    link: "https://jtci2pxwjczr.landen.co/lib_NtadlqPncrCtPifD/s8v0zvy7b9fyi4pt.png?w=100&h=80",
    name: "Notion",
    href: "https://jtci2pxwjczr.landen.co/search?q=Notion",
  },
  {
    link: "https://jtci2pxwjczr.landen.co/lib_NtadlqPncrCtPifD/v4tt1le5rljom0cf.png?w=100&h=80",
    name: "Google Analytics",
    href: "https://jtci2pxwjczr.landen.co/search?q=Google%20Analytics",
  },
  {
    link: "https://jtci2pxwjczr.landen.co/lib_NtadlqPncrCtPifD/pgeepir3hi6z1a3e.png?w=100&h=80",
    name: "Slack",
    href: "https://jtci2pxwjczr.landen.co/search?q=Slack",
  },
  {
    link: "https://jtci2pxwjczr.landen.co/lib_NtadlqPncrCtPifD/bfhg82o7vpzg560m.png?w=100&h=80",
    name: "AWS",
    href: "https://jtci2pxwjczr.landen.co/search?q=AWS",
  },
  {
    link: "https://jtci2pxwjczr.landen.co/lib_NtadlqPncrCtPifD/4gk07asmcwyfunzj.png?w=100&h=80",
    name: "MongoDB",
    href: "https://jtci2pxwjczr.landen.co/search?q=MongoDB",
  },
  {
    link: "https://landen.imgix.net/jtci2pxwjczr/assets/qbuop9ih.png?w=100&h=80",
    name: "MySQL",
    href: "https://jtci2pxwjczr.landen.co/search?q=MySQL",
  },
  {
    link: "https://jtci2pxwjczr.landen.co/lib_NtadlqPncrCtPifD/0wmblhco4758ga3z.png?w=100&h=80",
    name: "Snowflake",
    href: "https://jtci2pxwjczr.landen.co/search?q=Snowflake",
  },
  {
    link: "https://jtci2pxwjczr.landen.co/lib_NtadlqPncrCtPifD/e21e2croxgz2zjs2.png?w=100&h=80",
    name: "Google Drive",
    href: "https://jtci2pxwjczr.landen.co/search?q=Google%20Drive",
  },
  {
    link: "https://jtci2pxwjczr.landen.co/lib_NtadlqPncrCtPifD/bmp810teq595g9ju.png?w=100&h=80",
    name: "PowerBI",
    href: "https://jtci2pxwjczr.landen.co/search?q=PowerBI",
  },
  {
    link: "https://landen.imgix.net/jtci2pxwjczr/assets/gxan7c8n.png?w=100&h=80",
    name: "Plotly",
    href: "https://jtci2pxwjczr.landen.co/search?q=Plotly",
  },
  {
    link: "https://jtci2pxwjczr.landen.co/lib_NtadlqPncrCtPifD/z48ixele4ifaur3a.png?w=100&h=80",
    name: "Gmail",
    href: "https://jtci2pxwjczr.landen.co/search?q=Gmail",
  },
  {
    link: "https://jtci2pxwjczr.landen.co/lib_NtadlqPncrCtPifD/ed7wnaabbup9pzgo.jpg?w=100&h=80",
    name: "Telegram",
    href: "https://jtci2pxwjczr.landen.co/search?q=Telegram",
  },
  {
    link: "https://user-images.githubusercontent.com/81156510/277146767-d05065a0-1a7b-4a35-bdf8-be87e592c103.png",
    name: "Whatsapp",
    href: "https://jtci2pxwjczr.landen.co/search?q=HuggingFace",
  },
];


function ImageFrame({imageUrl}) {
  return <div className={styles.imageContainer}>
        <img className="iostoolbar" src="./img/ios_toolbar.png" alt="ios toolbar" />
        <img
          className="jupyterImage"
          src={imageUrl}
          alt="jupyter"
        />
  </div>
}

function Step1() {
  return (
    <div className={styles.stepContainer}>
        <div className={clsx(styles.featureGrid, styles.rowImageLeft)}>
          <ImageFrame imageUrl={"https://user-images.githubusercontent.com/81156510/277158958-90ab4e1d-ea6d-48db-b60c-47804cfe6a86.png"} />
            
            <div className={styles.featureGroup}>
              <h4>STEP 1</h4>
              <h2>Set your custom AI Chat instructions</h2>
                <p className={styles.sectionp}>
                  Instruct the AI models to understand
                  your unique needs and preferences,
                  paving the way for more personalized responses.
                </p>
                <a className={styles.cta} href="">Join Aplha</a>
            </div>
          <div>

          </div>
        </div>
      </div>
  );
}

function Step2() {
  return (
    <div className={styles.featureContainer}>
        <div>
            <h4 className={clsx(styles.sectionh4, styles.textCenter)}>STEP 2</h4>
            <h2 className={clsx(styles.sectionh2, styles.textCenter)}>
              Integrate your tools
            </h2>
            <p className={clsx(styles.sectionp, styles.textCenter, styles.textGrey)}>
              Use templates to connect your existing tools and
              
              integrate necessary data to your system
            </p>
          <div className={styles.toolLogos}>
            {toolImages.map((tool, index) => (
              <div className={styles.toolImageContainer} key={`tools-${index}`}>
                <a href={tool.href} target="_blank" rel="noopener noreferrer">
                  <img src={tool.link} alt={tool.name} />
                </a>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

function Step3() {
  return <div className={clsx(styles.bgDark, styles.stepContainer)}>
  <div className={clsx(styles.featureGrid, styles.rowImageRight)}>
      <div className={styles.featureGroup}>
        <h4 className={styles.sectionh4} style={{ color: "white" }}>STEP 3</h4>
        <h2 className={styles.sectionh2}>Configure jobs & trigger workflows</h2>
        <p className={styles.sectionp}>
          Use slash commands to set up and trigger workflows, ensuring you
          maintain full control over your AI system.
        </p>
      </div>
      <ImageFrame imageUrl={"https://user-images.githubusercontent.com/81156510/277148527-e7957855-2eb8-4a1b-a86a-a36ddfecc5bc.png"} />
  </div>
</div>
}

function Step4() {
  return <div className={styles.stepContainer}>
    <div className={clsx(styles.featureGrid, styles.rowImageLeft)}>
        <ImageFrame imageUrl={"https://user-images.githubusercontent.com/81156510/277148596-518dc49a-35dd-475b-9361-525efd1ea350.gif"} />
        <div className={styles.featureGroup}>
          <h4 className={styles.sectionh4}>STEP 4</h4>
          <h2 className={styles.sectionh2}>Customize to fit the specific needs of your business</h2>
          <p className={styles.sectionp}>
              Access your private server at any time to further personalize your
              experience and maintain control over your AI System.
          </p>
        </div>
    </div>
  </div>
}

function Step5() {
  return <div className={clsx(styles.bgDark, styles.stepContainer)}>
    <div className={clsx(styles.featureGrid, styles.rowImageRight)}>
        <div className={styles.featureGroup}>
          <h4 className={styles.sectionh4} style={{ color: "white" }}>STEP 5</h4>
          <h2 className={styles.sectionh2}>Monetize your mostpowerful assets </h2>
          <p className={styles.sectionp}>
            Build and scale data & AI products effortlessly, to generate new
            opportunities.
          </p>
        </div>
        <ImageFrame imageUrl={"https://user-images.githubusercontent.com/81156510/277148739-d83bf56c-c979-431f-b199-60be3d1b2d7d.png"} />
    </div>
  </div>
}

function Steps() {
  return (
    <>
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
    </>
  );
}

function Feature({children, imageUrl}) {
  return <div className={styles.featureContainer}>
    <div className={clsx(styles.featureGrid, styles.rowImageRight)}>
      <div className={styles.featureGroup}>
        {children}
      </div>
      <ImageFrame imageUrl={imageUrl} />
    </div>
  </div>
}

function HomeFeatures() {
  return (
    <>
      <Feature imageUrl={"https://user-images.githubusercontent.com/81156510/277158801-51e5c09d-bd5b-43fd-a845-af693ee8f4ef.png"}>
          <img className={styles.titleImage} src="./img/site_features/chat.svg" alt="chat" />
          <p style={{marginTop: '1rem'}}>
          Simple. Powerful. Empowering.
          Communicate more efficiently
          with next generation AI Language
          models in a single interface.
          </p>
          <a className={styles.link} href="">Learn more →</a>
          <div className={styles.featureAILogos}>
            <img src="./img/openai.svg" alt="openai" />
            <img src="./img/metaai.svg" alt="metaai" />
            <img src="./img/stabilityai.svg" alt="stabilityai" />
            <img src="./img/claudeai.svg" alt="claudeai" />
            <img src="./img/hugginfaceai.svg" alt="hugginfaceai" />
            <img src="./img/midjourneyai.svg" alt="midjourneyai" />
          </div>
            <a className={styles.cta} href="https://bit.ly/3CFSumN" target="_blank">Join Alpha</a>
      </Feature>
      <Feature imageUrl={"https://user-images.githubusercontent.com/81156510/277158958-90ab4e1d-ea6d-48db-b60c-47804cfe6a86.png"}>
          <img className={styles.titleImage} src="./img/site_features/search.svg" alt="search" />
          <p style={{marginTop: '1rem'}}>
            Search across thousands of
            notebook templates, made by
            community, to jumpstart your
            data projects in no time
          </p>
          <a className={styles.link} href="">Learn more →</a>
      </Feature>
      <Feature imageUrl={"https://user-images.githubusercontent.com/81156510/277159499-3ad84b9e-5df7-4dd8-a5c7-25d93230cf35.png"}>
          <img className={styles.titleImage} src="./img/site_features/lab.svg" alt="lab" />
          <p style={{marginTop: '1rem'}}>
          Build and manage any type of
          data & AI project more efficiently.
          No separated, clunky systems
          needed.
          </p>
          <a className={styles.link} href="">Learn more →</a>
      </Feature>
      <Feature imageUrl={"https://user-images.githubusercontent.com/81156510/277159611-1868ba9e-b2a8-431b-b384-ddd6a9d3426f.png"}>
          <img className={styles.titleImage} src="./img/site_features/admin.svg" alt="admin" />
          <p style={{marginTop: '1rem'}}>
          Efficient. Secure. Unified. Manage
          users, system performance, and
          enjoy consolidated billing with
          our prepaid credit-based system
          from one central dashboard
          </p>
          <a className={styles.link} href="">Learn more →</a>
      </Feature>
    </>
  );
}

function HomeApproach() {
  return (
    <>
      <div
        className={styles.featureContainer}
      >
        <div>
          <div className={styles.catalog}>
            <div className={styles.catalogHead}>
              <h2 className={styles.textCenter}>
                Naas all-in-one approach covers every data & AI related tasks
              </h2>
              <p>
                The All-in-One Experience is a key philosophical engagement of
                the Naas platform, 
                designed to provide users with a comprehensive and streamlined
                approach to data and AI.
              </p>
            </div>
            <img
              src="https://user-images.githubusercontent.com/81156510/277151454-ff4929c1-3f64-405c-8139-d8a7f6b58510.png"
              alt="list of available approaches"
            />
          </div>
          <div
            className={clsx(
              styles.flex,
              styles.flexWrap,
              styles.justifyCenter,
              styles.itemsCenter,
              // styles.explore
            )}
          >
            <div className={styles.buttonContainer}>
              <a
                className={styles.cta}
                href="https://bit.ly/3CFSumN"
                target="_blank"
              >
                Join Alpha
              </a>
              <a
                className={styles.btnWhite}
                href="https://calendly.com/jeremyravenel"
                target="_blank"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.featureContainer}
      >
          <div>
            <div className={styles.catalogHead}>
              <h2 className={styles.textCenter}>
                We aim at enabling businesses to create  their own
                Artificial Business Intelligence (ABI)  rather than
                pursuing Artificial General Intelligence (AGI)
              </h2>
              <p>
                With or without an Enterprise-level Data Stack, Naas will do the
                job
              </p>
            </div>
            <img
              src="https://user-images.githubusercontent.com/81156510/277151648-7e576545-2d9a-4e1a-b527-354bdb96502e.png"
              alt="naas enterprise level data stack"
            />
          </div>
      </div>
    </>
  );
}

function HomeTechFeatures() {
  return (
    <div>
      <div className={styles.featureContainer}>
        <div>
          <div className={styles.catalogHead}>
            <h2>
              Robust, scalable & 
              secured infrastructure
            </h2>
            <p>
              Naas handles deployment and hosting for you. For on premise
              installation, better to contact us.
            </p>
          </div>
          <div className={styles.gallery}>
            <div className={styles.galleryItem}>
              <div>
                <div className={styles.media}>
                  <img
                    src="https://landen.imgix.net/jtci2pxwjczr/assets/0rpysqq7.png?w=400&h=200&fit=crop"
                    alt="amazon"
                  />
                </div>
                <div className={styles.galleryMeta}>
                  <h3 className={styles.textCenter}>99.99% uptime.</h3>
                  <div className={styles.galleryDescription}>
                    <p className={styles.textCenter}>
                      We are hosted on the only provider that guarantees it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.galleryItem}>
              <div>
                <div className={styles.media}>
                  <img
                    src="https://landen.imgix.net/jtci2pxwjczr/assets/juzyoew8.png?w=400&h=200&fit=crop"
                    alt="kubernetes"
                  />
                </div>
                <div className={styles.galleryMeta}>
                  <h3 className={styles.textCenter}>Never run out of memory.</h3>
                  <div className={styles.galleryDescription}>
                    <p className={styles.textCenter}>We handle your kernels through Kubernetes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.galleryItem}>
              <div>
                <div className={styles.media}>
                  <img
                    src="https://landen.imgix.net/jtci2pxwjczr/assets/3gxnllrj.png?w=400&h=200&fit=crop"
                    alt="docker"
                  />
                </div>
                <div className={styles.galleryMeta}>
                  <h3 className={styles.textCenter}>Keep your data safe.</h3>
                  <div className={styles.galleryDescription}>
                    <p className={styles.textCenter}>Each user has its own virtual machine with Docker.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.testimonial}>
        <div className={styles.testimonialQuotes}>
          <img
            src={
              "https://jtci2pxwjczr.landen.co/lib_NtadlqPncrCtPifD/go0yg1eqng1lmk51.jpg?w=100&h=100"
            }
            alt="jupyter.jpeg"
          />
          <div className={styles.testimonialQuote}>
            <p>
              Naas is leveraging Jupyter Notebooks and Jupyter Lab, the most
              popular medium and interface in data science.
            </p>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          styles.featureContainer,
          styles.flex,
          styles.justifyCenter,
          styles.bgDark
        )}
      >
        <div className={clsx(styles.content)}>
          <h2>
            Make Your Business & Tech Teams
            
            Work Together More Efficiently than Ever
          </h2>
          <p>
            Data Consumers navigate across search, chat, and dashboards to
            manage their business. Their feedback, whether they view content or
            report issues, guides Producers in refining and creating data and AI
            experiences.
          </p>
          <div className={styles.FlowContainer}>
            <img src="./img/how-it-works.png" alt="how it works" />
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeTestimonials() {
  return (
    <div>
      <div
        className={clsx(
          styles.titleWrapper,
          styles.flex,
          styles.justifyCenter,
          styles.bgDark
        )}
      >
        <div className={clsx(styles.content)}>
          <h2>Why they love Naas</h2>
          <p>
            Naas adapts to your needs. It is as minimal <br></br>or as powerful
            as you need it to be.
          </p>
        </div>
      </div>
      <div className={clsx(styles.flex, styles.justifyCenter, styles.bgDark)}>
        <div className={clsx(styles.h_w, styles.flex, styles.flexWrap)}>
          <div className={clsx(styles.testimonialAvatar)}>
            <img src="./img/travis3.png" alt="testimonial" />
            <div>
              <div className={styles.starRating}></div>
            </div>
            <div className={styles.testimonialQuotes}>
              <p>
                "I've been looking for a business-focus framework like Naas for
                a long time, they are enabling a new category of data & AI tools
                to emerge!"
              </p>
            </div>
            <span className={styles.testimonialAbout}>
              Travis - Creator of NumPy, SciPy, and Anaconda, CEO of OpenTeams,
              Naas lead investor
            </span>
          </div>
          <div className={clsx(styles.testimonialAvatar)}>
            <img src="/img/vidula.png" alt="testimonial2" />
            <div>
              <div className={styles.starRating}></div>
            </div>
            <div className={styles.testimonialQuotes}>
              <p>
                “The ability to automate scheduled queries inside notebooks and
                generate real-time insights from cross-platform datasets is a
                game changer for our team.”
              </p>
            </div>
            <span className={styles.testimonialAbout}>
              Vidula - Director of Product at Clue, leading data analytics and
              media solution
            </span>
          </div>
          <div className={clsx(styles.testimonialAvatar)}>
            <img src="./img/vincent.jpeg" alt="testimonial3" />
            <div>
              <div className={styles.starRating}></div>
            </div>
            <div className={styles.testimonialQuotes}>
              <p>
                “Naas really changed my way of working with Jupyter Notebooks.
                My reports are now automated, lighter, faster and more
                auditable. I save hours every week. ”
              </p>
            </div>
            <span className={styles.testimonialAbout}>
              Vincent - A&R Research Consultant, Sony Music Entertainment
            </span>
          </div>
          <div className={clsx(styles.testimonialAvatar)}>
            <img
              src="https://jtci2pxwjczr.landen.co/lib_NyEjrHzRfXIFhSRL/vzsvyu62jnwosi9c.jpg?w=100&h=100"
              alt="testimonial4"
            />
            <div>
              <div className={styles.starRating}></div>
            </div>
            <div className={styles.testimonialQuotes}>
              <p>
                “I start with an idea, build an MVP, send it to customers and
                understand what’s working or not. Just awesome. Naas is a silver
                bullet for our business."
              </p>
            </div>
            <span className={styles.testimonialAbout}>
              Mark - Data Engineer at a data startup
            </span>
          </div>
          <div className={clsx(styles.testimonialAvatar)}>
            <img
              src="https://jtci2pxwjczr.landen.co/lib_NyEjrHzRfXIFhSRL/i5ve28o7shgp43d1.jpg?w=100&h=100"
              alt="testimonial5"
            />
            <div>
              <div className={styles.starRating}></div>
            </div>
            <div className={styles.testimonialQuotes}>
              <p>
                "Naas gather all our key metrics inside Notion, our company's
                source of truth work. This enables us to easily create reports
                for my collaborators and investors.”
              </p>
            </div>
            <span className={styles.testimonialAbout}>
              Romain - Asset Management Firm Director
            </span>
          </div>
          <div className={clsx(styles.testimonialAvatar)}>
            <img src="./img/alex.jpeg" alt="testimonial6" />
            <div>
              <div className={styles.starRating}></div>
            </div>
            <div className={styles.testimonialQuotes}>
              <p>
                "Naas provides a great way to easily integrate with any tools.
                Their ready-to-use templates make me save a lot of time, I'm
                excited about what's coming next!"
              </p>
            </div>
            <span className={styles.testimonialAbout}>
              Alexandre - Financial Data Consultant
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeSolutions() {
  return (
    <div>
      <div className={styles.featureContainer}>
        <div>
          <div className={styles.catalogHead}>
            <h2 className={styles.textCenter}>
              Leverage data & AI through practical applications
              
              and domain-specific solutions
            </h2>
            <p>
              Discover the power of Naas foundation data engines
              
              to address your critical business needs.
            </p>
          </div>
          <div className={styles.gallery}>
            <div className={styles.galleryItem}>
              <div>
                <div className={styles.media}>
                  <img
                    src="https://media.discordapp.net/attachments/1084579666175729694/1107794337745604670/jeymassa_a_futurist_cover_for_naas_content_engine_universal_dat_fbf44c7c-1a4a-4cf1-9edf-465dbce0911b.png?width=2180&height=1246"
                    alt="amazon"
                  />
                </div>
                <div className={styles.galleryMeta}>
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.91732 6.75016H23.084V26.2502H7.91732V6.75016ZM20.9173 1.3335H10.084C8.28971 1.3335 6.83398 2.78922 6.83398 4.5835V28.4168C6.83398 30.2111 8.28971 31.6668 10.084 31.6668H20.9173C22.7116 31.6668 24.1673 30.2111 24.1673 28.4168V4.5835C24.1673 2.78922 22.7116 1.3335 20.9173 1.3335ZM16.0421 28.4168H14.9588V29.5002H16.0421V28.4168ZM17.6671 3.50016H13.3338V4.5835H17.6671V3.50016Z"
                      fill="#181a1c"
                    />
                  </svg>
                  <h3>Content Creation</h3>
                  <div className={styles.galleryDescription}>
                    <p>Increase Reach & Engagement</p>
                    <Link to="/docs/solutions/content-engine">Explore →</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.galleryItem}>
              <div>
                <div className={styles.media}>
                  <img
                    src="https://media.discordapp.net/attachments/1084579666175729694/1107795724667728012/jeymassa_a_futurist_cover_for_naas_content_engine_universal_dat_82fc3ef4-d86a-4d2b-bc5e-7126b97e2e45.png?width=2180&height=1246"
                    alt="growth"
                  />
                </div>
                <div className={styles.galleryMeta}>
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M28.0652 3.4347C28.8645 3.54191 29.5046 4.15388 29.6107 4.98027C29.8772 7.05772 29.9833 12.4668 25.4287 17.984C25.0822 18.3836 24.9489 18.9165 25.0291 19.3963C25.3746 21.4205 24.8417 23.2596 23.5366 24.5648L21.3249 26.8024C20.9523 27.2021 20.3924 27.3884 19.8595 27.2823C19.3266 27.175 18.8728 26.8284 18.6335 26.3226L17.4616 23.7914L16.2095 24.6969C15.1437 25.4692 13.7314 25.3359 12.7988 24.4305L8.69617 20.3278C7.7907 19.3952 7.65748 17.9828 8.42973 16.9171L9.3352 15.665L6.80402 14.5191C6.29715 14.2787 5.95058 13.8259 5.84441 13.293C5.7372 12.7602 5.92456 12.2273 6.29715 11.8276L8.53482 9.58993C9.86702 8.25771 11.705 7.72484 13.7304 8.09743C14.2102 8.17757 14.716 8.01728 15.1157 7.69777C20.5777 3.11518 25.9867 3.19532 28.0652 3.4347ZM20.2582 9.40259C21.1647 9.40259 22.0442 9.77625 22.6832 10.4153C24.0154 11.7475 24.0154 13.932 22.6821 15.2643C21.3499 16.5965 19.1653 16.5965 17.8331 15.2643C16.5009 13.932 16.5009 11.7475 17.8331 10.4153C18.4732 9.77518 19.3527 9.40259 20.2582 9.40259ZM19.1404 13.9592C19.7524 14.5723 20.7651 14.5723 21.3781 13.9592C21.9901 13.3462 21.9901 12.3335 21.3781 11.6945C21.0856 11.402 20.686 11.2417 20.2593 11.2417C19.8336 11.2688 19.4339 11.428 19.1404 11.7215C18.5274 12.3335 18.5274 13.3462 19.1404 13.9592Z"
                      fill="#181a1c"
                    />
                    <path
                      d="M7.49603 22.1915C7.86862 21.8189 7.86862 21.259 7.49603 20.8864C7.12344 20.5138 6.56348 20.5138 6.19089 20.8864L4.69839 22.3789C4.3258 22.7515 4.3258 23.3114 4.69839 23.684C5.07098 24.0566 5.63094 24.0566 6.00353 23.684L7.49603 22.1915Z"
                      fill="#181a1c"
                    />
                    <path
                      d="M9.86664 23.2575C9.49405 22.8849 8.9341 22.8849 8.5615 23.2575L6.26968 25.5493C5.89709 25.9219 5.89709 26.4818 6.26968 26.8544C6.64227 27.227 7.20222 27.227 7.57482 26.8544L9.86664 24.5626C10.2403 24.19 10.2403 23.604 9.86664 23.2575Z"
                      fill="#181a1c"
                    />
                    <path
                      d="M10.9331 25.6023L9.44058 27.0948C9.06798 27.4674 9.06798 28.0273 9.44058 28.3999C9.81317 28.7725 10.3731 28.7725 10.7457 28.3999L12.2382 26.9074C12.6108 26.5348 12.6108 25.9749 12.2382 25.6023C11.8656 25.2297 11.3067 25.2557 10.9331 25.6023Z"
                      fill="#181a1c"
                    />
                  </svg>
                  <h3>Growth Marketing</h3>
                  <div className={styles.galleryDescription}>
                    <p>Generate Qualified Contacts</p>
                    <Link to="/docs/solutions/growth-engine">Explore →</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.galleryItem}>
              <div>
                <div className={styles.media}>
                  <img
                    src="https://media.discordapp.net/attachments/1084579666175729694/1107797414041108600/jeymassa_a_futurist_cover_for_naas_sales_engine_universal_data__6e3cf29d-93bf-4211-b768-425f5cb5e7ad.png?width=2180&height=1246"
                    alt="sales"
                  />
                </div>
                <div className={styles.galleryMeta}>
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.61776 19.637L13.1378 19.4605C13.548 19.4307 13.8711 19.7836 13.8127 20.1938L13.0209 27.8205C12.8158 29.7856 15.3974 30.724 16.4825 29.0821L25.7225 15.2954C26.6025 14.0052 25.6056 12.2738 24.0508 12.3322L20.5308 12.5086C20.1206 12.5384 19.7974 12.1855 19.8559 11.8051L20.6476 4.17842C20.8527 2.21332 18.2712 1.27489 17.186 2.91685L7.94599 16.7035C7.06599 17.9949 8.06401 19.7253 9.61776 19.637Z"
                      fill="#181a1c"
                    />
                  </svg>
                  <h3>Sales Conversion</h3>
                  <div className={styles.galleryDescription}>
                    <p>Transform Interest in Revenue</p>
                    <Link to="/docs/solutions/sales-engine">Explore →</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.gallery}>
            <div className={styles.galleryItem}>
              <div>
                <div className={styles.media}>
                  <img
                    src="https://media.discordapp.net/attachments/1084579666175729694/1107804138768715857/jeymassa_a_futurist_cover_for_naas_operations_engine_universal__fee85024-5b7b-4ac6-894b-6ac813d985f2.png?width=2180&height=1246"
                    alt="ops"
                  />
                </div>
                <div className={styles.galleryMeta}>
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.553 30.0136H17.8055C18.8818 29.9973 19.8081 29.2486 20.0468 28.1999L20.433 26.6661C20.4468 26.5623 20.5193 26.4736 20.6193 26.4398C20.7168 26.3936 20.8293 26.3936 20.9255 26.4398L22.2593 27.2661C23.1805 27.8111 24.3555 27.6636 25.113 26.9062L25.1131 26.9061L27.4056 24.6136C28.1631 23.8561 28.3106 22.6811 27.7656 21.7598L26.9393 20.4261C26.8931 20.3298 26.8931 20.2173 26.9393 20.1198C26.9731 20.0198 27.0618 19.9461 27.1656 19.9323L28.6993 19.5461C29.7418 19.2886 30.4731 18.3536 30.4731 17.2798V14.0261C30.4731 12.9536 29.7418 12.0173 28.6993 11.7598L27.1656 11.3736C27.0618 11.3586 26.9731 11.2861 26.9393 11.1861C26.8931 11.0898 26.8931 10.9773 26.9393 10.8798L27.7656 9.54606C28.3106 8.62481 28.1643 7.45105 27.4068 6.69355L25.1131 4.39978C24.3556 3.64228 23.1806 3.49479 22.2593 4.03978L20.9255 4.86602C20.8293 4.91227 20.7168 4.91227 20.6193 4.86602C20.5193 4.83227 20.4455 4.74477 20.4318 4.63977L20.0456 3.10601C19.7881 2.06476 18.8531 1.33225 17.7793 1.3335H14.5256C13.4531 1.33225 12.5168 2.06476 12.2593 3.10601L11.8731 4.63977C11.8581 4.74477 11.7856 4.83227 11.6856 4.86602C11.5893 4.91227 11.4768 4.91227 11.3793 4.86602L10.0456 4.03978C9.12432 3.49479 7.95056 3.64228 7.19305 4.39978L4.89929 6.71979C4.14179 7.47729 3.9943 8.6498 4.53929 9.5723L5.36553 10.9061C5.41178 11.0036 5.41178 11.1161 5.36553 11.2136C5.33178 11.3136 5.24428 11.3848 5.13928 11.3998L3.60552 11.7861C2.56427 12.0436 1.83176 12.9798 1.83301 14.0535V17.3335C1.83176 18.406 2.56427 19.3423 3.60552 19.5998L5.13928 19.986C5.24428 20.001 5.33178 20.0735 5.36553 20.1735C5.41178 20.2698 5.41178 20.3823 5.36553 20.4798L4.53929 21.8135C3.9943 22.7348 4.14179 23.9086 4.89929 24.6661L7.21929 26.9461C7.9768 27.7036 9.14931 27.8511 10.0718 27.3061L11.4056 26.4798C11.5031 26.4336 11.6156 26.4336 11.7131 26.4798C11.8131 26.5136 11.8843 26.6023 11.8993 26.7061L12.2856 28.2398C12.5431 29.2823 13.4793 30.0136 14.553 30.0136ZM16.4997 22.3335C19.9975 22.3335 22.833 19.498 22.833 16.0002C22.833 12.5024 19.9975 9.66683 16.4997 9.66683C13.0019 9.66683 10.1663 12.5024 10.1663 16.0002C10.1663 19.498 13.0019 22.3335 16.4997 22.3335Z"
                      fill="#181a1c"
                    />
                  </svg>
                  <h3>Operations Efficiency</h3>
                  <div className={styles.galleryDescription}>
                    <p>Create a Single Source of Truth</p>
                    <Link to="/docs/solutions/operations-engine">
                      Explore →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.galleryItem}>
              <div>
                <div className={styles.media}>
                  <img
                    src="https://media.discordapp.net/attachments/1084579666175729694/1107805121603190874/jeymassa_a_futurist_cover_for_naas_finance_engine_universal_dat_1c5b881f-bdda-462a-b923-c80e15531923.png?width=2180&height=1246"
                    alt="finance"
                  />
                </div>
                <div className={styles.galleryMeta}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M29.3337 15.9998C29.3337 23.3636 23.3641 29.3332 16.0003 29.3332C8.63653 29.3332 2.66699 23.3636 2.66699 15.9998C2.66699 8.63604 8.63653 2.6665 16.0003 2.6665C23.3641 2.6665 29.3337 8.63604 29.3337 15.9998ZM16.0003 15.2498C14.9418 15.2498 14.0837 14.3917 14.0837 13.3332C14.0837 12.2746 14.9418 11.4165 16.0003 11.4165C17.0589 11.4165 17.917 12.2746 17.917 13.3332C17.917 13.7474 18.2528 14.0832 18.667 14.0832C19.0812 14.0832 19.417 13.7474 19.417 13.3332C19.417 11.7039 18.2765 10.3409 16.7503 9.99908V8.6665C16.7503 8.25229 16.4145 7.9165 16.0003 7.9165C15.5861 7.9165 15.2503 8.25229 15.2503 8.6665V9.99908C13.7241 10.3409 12.5837 11.7039 12.5837 13.3332C12.5837 15.2197 14.1126 16.7491 15.999 16.7498H16.0003C17.0589 16.7498 17.917 17.608 17.917 18.6665C17.917 19.7251 17.0589 20.5832 16.0003 20.5832C14.9418 20.5832 14.0837 19.7251 14.0837 18.6665C14.0837 18.2523 13.7479 17.9165 13.3337 17.9165C12.9194 17.9165 12.5837 18.2523 12.5837 18.6665C12.5837 20.2958 13.7241 21.6588 15.2503 22.0006V23.3332C15.2503 23.7474 15.5861 24.0832 16.0003 24.0832C16.4145 24.0832 16.7503 23.7474 16.7503 23.3332V22.0006C18.2765 21.6588 19.417 20.2958 19.417 18.6665C19.417 16.7803 17.8886 15.2512 16.0028 15.2498L16.0003 15.2498Z"
                      fill="#181a1c"
                    />
                  </svg>
                  <h3>Finance Management</h3>
                  <div className={styles.galleryDescription}>
                    <p>Get Financial Insights in Real-Time</p>
                    <Link to="/docs/solutions/finance-engine">Explore →</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.galleryItem}>
              <div>
                <div className={styles.media}>
                  <img
                    src="https://media.discordapp.net/attachments/1084579666175729694/1107807756645302373/jeymassa_a_futurist_cover_for_naas_open_data_engine_universal_d_7da347fe-e221-4275-ae35-52df52ecad21.png?width=2180&height=1246"
                    alt="opendata"
                  />
                </div>
                <div className={styles.galleryMeta}>
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.6205 6.74988C13.1413 7.95773 12.7512 9.42491 12.4877 11.072C13.7629 10.9552 15.1101 10.8931 16.5004 10.8931C17.8906 10.8931 19.2379 10.9552 20.513 11.072C20.2495 9.42491 19.8594 7.95773 19.3802 6.74988C18.9196 5.58894 18.3965 4.71798 17.8674 4.15396C17.3403 3.5921 16.878 3.40339 16.5004 3.40339C16.1227 3.40339 15.6604 3.5921 15.1333 4.15396C14.6043 4.71798 14.0811 5.58894 13.6205 6.74988ZM11.7393 5.99126C11.1414 7.49836 10.6825 9.31383 10.4013 11.3209C9.01706 11.5267 7.7538 11.8013 6.65815 12.1327C5.38331 12.5183 4.27783 12.9977 3.46845 13.5764C3.36619 13.6496 3.26526 13.7268 3.16705 13.8083C4.06045 8.24099 8.30185 3.80463 13.7415 2.66651C13.7145 2.69419 13.6878 2.72217 13.6613 2.75045C12.8975 3.5646 12.2564 4.6879 11.7393 5.99126ZM19.2592 2.6665C19.2862 2.69418 19.3129 2.72217 19.3395 2.75045C20.1032 3.5646 20.7443 4.6879 21.2614 5.99126C21.8593 7.49836 22.3182 9.31383 22.5994 11.3209C23.9836 11.5267 25.2469 11.8013 26.3426 12.1327C27.6174 12.5183 28.7229 12.9977 29.5323 13.5764C29.6345 13.6496 29.7355 13.7268 29.8337 13.8083C28.9403 8.24099 24.6989 3.80463 19.2592 2.6665ZM29.8337 18.1909C29.7355 18.2724 29.6345 18.3497 29.5323 18.4229C28.7229 19.0016 27.6174 19.4811 26.3426 19.8666C25.2469 20.198 23.9836 20.4726 22.5994 20.6784C22.3182 22.6855 21.8593 24.501 21.2614 26.0081C20.7443 27.3114 20.1032 28.4347 19.3395 29.2489C19.3128 29.2773 19.2859 29.3054 19.2588 29.3332C24.6988 28.1952 28.9404 23.7586 29.8337 18.1909ZM13.7419 29.3332C13.7148 29.3054 13.6879 29.2773 13.6613 29.2489C12.8975 28.4347 12.2564 27.3114 11.7393 26.0081C11.1414 24.501 10.6825 22.6855 10.4013 20.6784C9.01706 20.4726 7.7538 20.198 6.65815 19.8666C5.38331 19.4811 4.27783 19.0016 3.46845 18.4229C3.36617 18.3497 3.26522 18.2724 3.16699 18.191C4.06028 23.7586 8.30193 28.1952 13.7419 29.3332ZM7.24035 17.9101C8.09966 18.17 9.08836 18.3953 10.1781 18.5761C10.1164 17.7385 10.0844 16.8773 10.0844 15.9997C10.0844 15.122 10.1164 14.2608 10.1781 13.4232C9.08836 13.604 8.09966 13.8293 7.24035 14.0892C6.07085 14.4429 5.19824 14.8438 4.6406 15.2425C4.05666 15.6601 4.0061 15.9307 4.0061 15.9997C4.0061 16.0686 4.05666 16.3392 4.6406 16.7568C5.19824 17.1555 6.07085 17.5564 7.24035 17.9101ZM12.1105 15.9997C12.1105 16.9818 12.153 17.9356 12.2328 18.8503C13.5647 18.988 15.0001 19.0636 16.5004 19.0636C18.0006 19.0636 19.436 18.988 20.7679 18.8503C20.8478 17.9356 20.8902 16.9818 20.8902 15.9997C20.8902 15.0175 20.8478 14.0637 20.7679 13.149C19.436 13.0113 18.0006 12.9357 16.5004 12.9357C15.0001 12.9357 13.5647 13.0113 12.2328 13.149C12.153 14.0637 12.1105 15.0175 12.1105 15.9997ZM13.6205 25.2494C13.1413 24.0416 12.7512 22.5744 12.4877 20.9273C13.7629 21.0441 15.1101 21.1063 16.5004 21.1063C17.8906 21.1063 19.2379 21.0441 20.513 20.9273C20.2495 22.5744 19.8594 24.0416 19.3802 25.2494C18.9196 26.4104 18.3965 27.2813 17.8674 27.8454C17.3403 28.4072 16.878 28.5959 16.5004 28.5959C16.1227 28.5959 15.6604 28.4072 15.1333 27.8454C14.6043 27.2813 14.0811 26.4104 13.6205 25.2494ZM25.7604 17.9101C24.901 18.17 23.9123 18.3953 22.8226 18.5761C22.8843 17.7385 22.9163 16.8773 22.9163 15.9997C22.9163 15.122 22.8843 14.2608 22.8226 13.4232C23.9123 13.604 24.901 13.8293 25.7604 14.0892C26.9299 14.4429 27.8025 14.8438 28.3601 15.2425C28.944 15.6601 28.9946 15.9307 28.9946 15.9997C28.9946 16.0686 28.944 16.3392 28.3601 16.7568C27.8025 17.1555 26.9299 17.5564 25.7604 17.9101Z"
                      fill="#181a1c"
                    />
                  </svg>
                  <h3>Open Data Intelligence</h3>
                  <div className={styles.galleryDescription}>
                    <p>Better Understand the World Around</p>
                    <Link to="/docs/solutions/opendata-engine">Explore →</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeContributors() {
  return <div className={styles.stepContainer}>
    <div className={clsx(styles.featureGrid, styles.rowImageRight)}>
      <div className={styles.featureGroup}>
        <div  style={{alignItems: 'start'}}>
        <h2>
            🌍 Build on-demand elite teams to accelerate your data & AI roadmap
            execution{" "}</h2>
        <p style={{textAlign: "start"}}>
            Our community of data entrepreneurs are
            creating the open source templates that will
            enable any organizations to power their
            proprietary data products & AI systems. They
            excel in a lot of different domains, and provide
            premium support anywhere around the
            globe.
        </p>
        </div>
        
        <div className={styles.buttonContainer}>
            <a
              className={styles.cta}
              href="https://bit.ly/3CFSumN"
              target="_blank"
            >
              Join Alpha
            </a>
            <a
              className={styles.btnWhite}
              href="https://calendly.com/jeremyravenel"
              target="_blank"
            >
              Book a Call
            </a>
          </div>
        </div>
    {/* </div> */}
    <div className={styles.imageContainer}>
    <img
              // style={{ padding: "50px 50px" }}
              src="https://user-images.githubusercontent.com/81156510/277149720-969ba4b5-c94a-443c-b2d8-2e9659e3229d.png"
              alt="list of contributors"
            />
    </div>
      
  </div>
</div>
}
