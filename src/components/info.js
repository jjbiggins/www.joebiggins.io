import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaInstagram as Insta,
  FaEnvelope as Mail,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style = {{color : "white"}}>Hello, I'm</span> <br />
        Joe Biggins.
      </div>
      <div className="h1 code mt-4 mb-3">async {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
		  Hi, currently located in Chicago, but open to relocating. I'm a software engineer, full-stack developer, and data scientist looking
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://twitter.com/_joebiggins">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://github.com/jjbiggins">
          <Github />
        </a>
        <a
          className="mr-5 icon"
          href="https://linkedin.com/in/josephbiggins"
        >
          <Linkedin />
        </a>
        <a className="mr-5 icon" href="mailto:jjbiggins@joebiggins.io">
          <Mail />
        </a>
      </div>
    </div>
  )
}
