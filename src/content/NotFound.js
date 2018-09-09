import React, { Component } from 'react'
import { Link } from 'react-router'
import JKHeader from './layout/JKHeader'
import JKFooter from './layout/JKFooter'

// inline styles
const reportStyle = {
  marginLeft: '10px',
  fontSize: '16px',
  color: '#108ee9',
  cursor: 'pointer',
}
//

export default class NotFound extends Component {
  constructor(props) {
    super(props)
    this.state = {
      report: false,
    }
  }

  render() {
    let errorStyle = 'mainBodyStyle'
    let bitmojiIconStyle = 'bitmojiIconStyle'
    let errorPageStyle = 'errorPageStyle'

    const { report } = this.state
    let checkIcon = null
    let homeText = 'Home'

    if (MobileCheck()) {
      errorStyle = 'mainBodyStyleMobile'
      bitmojiIconStyle = 'bitmojiIconStyleMobile'
      errorPageStyle = 'errorPageStyleMobile'
    }

    if (report === true) {
      reportStyle.display = 'none'
      checkIcon = IconController.svgToImage(SVG.MATERIAL_CHECK_MARK)
    }

    return (
      <div className={errorStyle} id='container-error'>
        <JKHeader />

        <br />
        <br />
        <div className={errorPageStyle} id='body-container-error'>
          <div style={{ textAlign: 'center' }} id='image-container-error'>
            <h2>Oh no! This page is not avaliable.</h2>
            <span className='imageContainerErrorStyle'>
              <img
                className={bitmojiIconStyle}
                src='/images/natalie_idk.png'
              />
              <img
                className={bitmojiIconStyle}
                src='/images/emily_idk.png'
              />
            </span>
            <h3>Perhaps the page is missing, or the link is broken?</h3>
          </div>

          <div className='bottomLinkStyle' id='bottom-body-container-error'>
            <a
              href={'javascript:history.back()'}
              style={{ fontSize: '16px' }}
              id='link-back-container-error'
            >
              Back
            </a>
            <a
              href='/'
              style={{ marginLeft: '10px', fontSize: '16px' }}
              id='link-home-container-error'
            >
              {homeText}
            </a>
            <button
              href='#'
              onClick={() => {
                this.setState({ report: true, })
              }}
              className='removeButtonDefaultStyle'
              style={reportStyle}
              id='link-report-container-error'
            >
              Report
            </button>
            <img style={{ marginLeft: '10px' }} src={checkIcon} />
          </div>
        </div>

        <br />
        <br />
        <br />
        <JKFooter />
      </div>
    )
  }
}
