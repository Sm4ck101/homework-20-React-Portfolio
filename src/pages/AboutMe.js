import React from 'react'

const AboutMe = () => {
  return (
    <div className="page">
      <h1>About Me</h1>
      <div className="about-details">
        <img src={`${process.env.PUBLIC_URL}/images/headshot.jpg`} alt="headshot"/>
        <p>We don’t serve their kind here! What? Your droids. They’ll have to wait outside. We don’t want them here. Listen, why don’t you wait out by the speeder. We don’t want any trouble. I heartily agree with you sir. Negola dewaghi wooldugger?!? He doesn’t like you. I’m sorry. I don’t like you either You just watch yourself. We’re wanted men. I have the death sentence in twelve systems. I’ll be careful than. You’ll be dead. This little one isn’t worth the effort. Come let me buy you something…</p>
      </div>
    </div>
  )
}

export default AboutMe