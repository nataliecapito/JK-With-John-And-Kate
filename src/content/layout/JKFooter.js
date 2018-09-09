import React, { PureComponent } from 'react'

// inline styles
let bottomStyle = {
  display: 'flex',
}

const bottomStyleMobile = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}
//

export default class JKFooter extends PureComponent {
  render() {
    if (MobileCheck()) {
      bottomStyle = bottomStyleMobile
    }

    const twitterIcon = IconController.svgToImage(SVG.ICOMOON_TWITTER)
    const facebookIcon = IconController.svgToImage(SVG.ICOMOON_FACEBOOK)

    return (
      <div className='footerContainerStyle' id='footer-container-footer'>
        <br />
        <h3 style={{ fontSize: '12px' }}>
          For even more JK content find us on
        </h3>

        <br />
        <span
          style={{ display: 'flex', alignItems: 'center' }}
          id='footer-container-footer'
        >
          <a href='https://twitter.com/jandkpodcast' target='_blank'>
            <img src={twitterIcon} style={{ marginRight: '20px' }} />
          </a>
          <a href='https://www.facebook.com/JKwithJonAndKate/' target='_blank'>
            <img src={facebookIcon} />
          </a>
        </span>

        <br />
        <br />
        <div style={bottomStyle} id='bottom-container-footer'>
          &copy 2018 Jk with Jon and Kate | website created by
          <a
            style={{ fontSize: '12px' }}
            href='https://www.sleepylunadesigns.com'
            target='_blank'
          >
            &nbspSleepy Luna Designs
          </a>
        </div>

        <br />
	    </div>
    )
  }
}
