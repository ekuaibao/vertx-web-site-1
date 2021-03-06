import "./Logos.scss";
import Button from "../Button";
import { Mail } from "react-feather";
import shuffle from "lodash.shuffle";
import { useEffect, useRef } from "react";

const LOGOS = [{
  name: "Deutsche Börse Group",
  src: "deutsche-boerse-group.svg",
  url: "https://deutsche-boerse.com/dbg-en/"
}, {
  name: "EF Education First",
  src: "education-first.svg",
  url: "https://www.ef.edu/"
}, {
  name: "Fraunhofer",
  src: "fraunhofer.svg",
  url: "https://www.fraunhofer.de/"
}, {
  name: "Groupon",
  src: "groupon.svg",
  url: "https://www.groupon.com/"
}, {
  name: "Hulu",
  src: "hulu.svg",
  url: "https://www.hulu.com/"
}, {
  name: "Instana",
  src: "instana.svg",
  url: "https://www.instana.com/"
}, {
  name: "RBS",
  src: "rbs.svg",
  url: "https://www.rbs.com/"
}, {
  name: "Red Hat",
  src: "redhat.svg",
  url: "https://www.redhat.com/"
}, {
  name: "Swiss Post",
  src: "swiss-post.svg",
  url: "https://www.post.ch/"
}, {
  name: "Taringa!",
  src: "taringa.svg",
  url: "https://www.taringa.net/"
}, {
  name: "Tesco",
  src: "tesco.svg",
  url: "http://www.tesco.com/"
}, {
  name: "Ticketmaster",
  src: "ticketmaster.svg",
  url: "https://www.ticketmaster.com/"
}, {
  name: "Zalando Tech",
  src: "zalando.svg",
  url: "https://tech.zalando.com/"
}].map(logo => Object.assign({ logo: require(`../../assets/logos/${logo.src}`) }, logo));

// Each logo should have a dummy height so the browser correctly calculates
// the size of the surrounding div. Note that the width will be overriden
// with the max-width attribute in the logo's CSS.
const DUMMY_IMAGE_HEIGHT = "300";

const LOGO_ELEMENTS = LOGOS.map(logo => (
  <a key={logo.src} href={logo.url} target="_blank" rel="noopener">
    <img height={DUMMY_IMAGE_HEIGHT} className="logos-logo" src={logo.logo} alt={logo.name} />
  </a>
));

function shuffleChildren(node) {
  let result = [];
  for (let c of node.children) {
    result.push(c);
  }
  return shuffle(result);
}

export default () => {
  const refRow1a = useRef();
  const refRow1b = useRef();
  const refRow2a = useRef();
  const refRow2b = useRef();

  useEffect(() => {
    let newChildren1 = shuffleChildren(refRow1a.current);
    refRow1a.current.innerHTML = "";
    refRow1b.current.innerHTML = "";
    for (let c of newChildren1) {
      refRow1a.current.appendChild(c);
      refRow1b.current.appendChild(c.cloneNode(true));
    }

    let newChildren2 = shuffleChildren(refRow2a.current);
    refRow2a.current.innerHTML = "";
    refRow2b.current.innerHTML = "";
    for (let c of newChildren2) {
      refRow2a.current.appendChild(c);
      refRow2b.current.appendChild(c.cloneNode(true));
    }
  }, []);

  return (
    <div className="logos">
      <hr/>
      <h3>Who's using Eclipse Vert.x?</h3>
      <div className="logos-row">
        <div className="logos-row-half" ref={refRow1a}>{LOGO_ELEMENTS}</div>
        <div className="logos-row-half" ref={refRow1b}>{LOGO_ELEMENTS}</div>
      </div>
      <div className="logos-row-divider"></div>
      <div className="logos-row">
        <div className="logos-row-half" ref={refRow2a}>{LOGO_ELEMENTS}</div>
        <div className="logos-row-half" ref={refRow2b}>{LOGO_ELEMENTS}</div>
      </div>
      <div className="logos-contact-us">
        <span className="logos-contact-us-question">Want to be listed here?</span>
        <a href="mailto:vertx-enquiries@googlegroups.com"><Button primary>
          <Mail className="feather" /> Contact us!
        </Button></a>
      </div>
    </div>
  );
};
