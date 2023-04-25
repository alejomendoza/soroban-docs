import React from "react";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";

import "./landing.scss";

export default function Landing() {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Soroban is a smart contracts platform that is designed with purpose and built to perform. The Futurenet has launched! Start experimenting now!"
        />
        <meta
          property="og:description"
          content="Soroban is a smart contracts platform that is designed with purpose and built to perform. The Futurenet has launched! Start experimenting now!"
        />
        <meta
          name="twitter:description"
          content="Soroban is a smart contracts platform that is designed with purpose and built to perform. The Futurenet has launched! Start experimenting now!"
        />
      </Head>

      <main>
        <Hero />
        <Designed />
        <Learn />
        <GettingStarted />
        <Earn />
        <SCF />
        <Footer />
      </main>
    </Layout>
  );
}

const Hero = () => (
  <div className="Hero">
    <div className="Hero__wrapper hp-center">
      <div>
        <div className="Hero__logo">Soroban</div>

        <div className="Hero__title">
          <div>Introducing</div>
          <div>Soroban</div>
        </div>
      </div>

      <div className="Hero__right">
        <p>
          A developer-friendly, Rust-based smart contracts platform sensibly
          designed with scalability in mind. Currently live on the test network
          dubbed Futurenet, Soroban seamlessly integrates with and works
          alongside the existing Stellar blockchain.
        </p>

        <p>
          Start building on Soroban today with the help of established tools and
          documentation, or explore earning opportunities with the Soroban
          Adoption Fund programs.
        </p>

        <div className="Hero__btn-group">
          <a href="/" className="hp-btn hp-btn-secondary">
            Earn
          </a>

          <a href="/" className="hp-btn hp-btn-primary">
            Docs
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Designed = () => (
  <div className="Designed">
    <div className="Designed__wrapper hp-center hp-center--sm">
      <h2 className="Designed__title">Designed For</h2>

      <div className="Designed__cards">
        <DesignedCard title="Batteries-Included Developer Experience">
          With tools such as plug-and-play SDKs, Soroban CLI, RPC server, and
          local sandbox, Soroban provides a user-friendly experience that gets
          developers up and running on the platform quickly. Start building with
          flexible, reusable functions and ready-to-use contracts.
        </DesignedCard>

        <DesignedCard title="Scale">
          Soroban is designed with scalability in mind. Boost performance with
          multi-core scaling, eliminated serialization loops, and an optimized
          fee model. We’re also tackling the elephant in the room head-on by
          addressing the solution to state bloat.
        </DesignedCard>

        <DesignedCard title="Real-World Utility">
          Connect to Stellar’s unparalleled interoperability by accessing its
          wide variety of on-chain assets and worldwide on and off-ramps. Also,
          benefit from five-second contract finality on a proven and mature
          network boasting 150 TPS.
        </DesignedCard>
      </div>
    </div>
  </div>
);

const DesignedCard = ({ title, children }) => (
  <div className="DesignedCard">
    <div className="DesignedCard__title">
      <p>{title}</p>
    </div>

    <div className="DesignedCard__wrapper">
      <div>Icon</div>
      <p>{children}</p>
    </div>
  </div>
);

const Learn = () => (
  <div className="Learn">
    <div className="Learn__wrapper hp-center">
      <div className="Learn__left">
        <h2 className="Learn__title">Learn</h2>

        <p>
          Getting started with Soroban is easy! Just install the Rust toolchain
          and Soroban CLI to begin writing your first Soroban smart contract.
          Learn more and continue building by catching up on Soroban
          documentation.
        </p>
      </div>

      <div className="Learn__right">
        <div className="Learn__code">{"<helloworld>..."}</div>

        <div className="Learn__btn-group">
          <a href="/" className="hp-btn hp-btn-secondary">
            Go to Docs
          </a>
          <a href="/" className="hp-btn hp-btn-primary">
            Earn
          </a>
        </div>
      </div>
    </div>
  </div>
);

const GettingStarted = () => (
  <div className="GettingStarted">
    <div className="hp-center">
      <h2 className="GettingStarted__title">Getting Started</h2>

      <div className="GettingStarted__cards">
        <GettingStartedCard
          title="Setup"
          subtitle="Install and configure Rust and the Soroban CLI."
        />

        <GettingStartedCard
          index="1."
          title="Hello World"
          subtitle="Create your first Soroban contract."
        />

        <GettingStartedCard
          index="2."
          title="Storing Data"
          subtitle="Write simple Soroban contract that stores and retrieves data."
        />

        <GettingStartedCard
          index="3."
          title="Deploy to a local network"
          subtitle="Use docker and the Stellar Quickstart image to run a local network."
        />

        <GettingStartedCard
          index="4."
          title="Connect Freighter wallet"
          subtitle="Freighter is a browser extension that can sign Soroban transactions."
        />
      </div>
    </div>
  </div>
);

const GettingStartedCard = ({ index, title, subtitle }) => (
  <div className="GettingStartedCard">
    {index && <p className="GettingStartedCard__index">{index}</p>}

    <p className="GettingStartedCard__title">{title}</p>

    <p className="GettingStartedCard__subtitle">{subtitle}</p>

    <div className="GettingStartedCard__icon">icon</div>
  </div>
);

const Earn = () => (
  <div className="Earn">
    <div className="Earn__wrapper hp-center hp-center--md">
      <h2 className="Earn__title">Earn</h2>

      <div className="Earn__right">
        <p>
          The Stellar Development Foundation (SDF)’s $100M Soroban Adoption Fund
          encourages and supports developers as they learn, experiment, build,
          and scale projects on Soroban. The fund is an umbrella for many
          programs that support all levels of Soroban adoption, some of which
          have launched and some of which have yet to launch.
        </p>

        <p>
          These programs open doors for developers to become pioneers of the
          Soroban ecosystem by encouraging them to build the vital tools and
          projects that will make the platform successful.
        </p>

        <a href="/" className="hp-link">
          Read More
        </a>
      </div>
    </div>
  </div>
);

const SCF = () => (
  <div className="SCF">
    <div className="SCF__wrapper hp-center hp-center--md">
      <div className="SCF__left">image</div>

      <div className="SCF__right">
        <h2 className="SCF__title">
          <span>Stellar</span>
          <span>Community</span>
          <span>Fund</span>
        </h2>

        <p className="SCF__subtitle">
          Submit your Soroban project to the Stellar Community Fund and receive
          up to $150K worth of XLM in awards. This is your chance to play a
          fundamental role in bootstrapping the Soroban ecosystem by creating
          the tools, protocols, dApps, and resources necessary for it to thrive.
        </p>
      </div>
    </div>
  </div>
);

const SocialLinks = [
  {
    title: "Discord",
    imgSrc: "./img/landing/discord-1.svg",
    link: "",
  },
  {
    title: "Youtube",
    imgSrc: "./img/landing/youtube-1.svg",
    link: "",
  },
  { title: "Twitter", imgSrc: "./img/landing/twitter-1.svg", link: "" },
];

const SocialCard = ({ title, imgSrc, link }) => (
  <a key={link} href={link} target="_blank" rel="noreferrer">
    <div className="SocialCard__wrapper">
      <img className="social-icon" alt="" src={imgSrc} />
      <p className="SocialCard__title">{title}</p>
    </div>
  </a>
);

const Footer = ({ title = "Get Connected" }) => (
  <div className="Footer">
    <div className="hp-center">
      <div className="Footer__title">
        <p>{title}</p>
      </div>

      <div className="Footer__wrapper">
        {SocialLinks.map(({ link, title: social, imgSrc }) => (
          <SocialCard title={social} imgSrc={imgSrc} link={link} />
        ))}
      </div>
    </div>
  </div>
);