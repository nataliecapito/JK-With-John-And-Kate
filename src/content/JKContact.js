import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import SEO from '../components/SEO'
import JKHeader from './layout/JKHeader'
import JKFooter from './layout/JKFooter'

export default class JKContact extends PureComponent {
  render() {
    let mainBodyStyle = 'mainBodyStyle'
    let flexRowStyle = 'flexRowStyle'
    let aboutPeopleStyle = 'aboutPeopleStyle'
    let aboutPeopleContainerStyle = 'aboutPeopleContainerStyle'
    let bitmojiIconStyle = 'bitmojiIconStyle'
    if (MobileCheck()) {
      mainBodyStyle = 'mainBodyStyleMobile'
      flexRowStyle = 'flexColumnStyle'
      aboutPeopleStyle = 'aboutPeopleStyleMobile'
      aboutPeopleContainerStyle = 'aboutPeopleContainerStyleMobile'
      bitmojiIconStyle = 'bitmojiIconStyleMobile'
    }

    const twitterIcon = IconController.svgToImage(SVG.ICOMOON_TWITTER)

    return (
      <div className={mainBodyStyle} id='body-container-contact'>
        <JKHeader />

        <br />
        <br />
        <h1 style={{ textAlign: 'center' }}>
          CONTACT US
        </h1>

        <br />
        <div
          className={aboutPeopleStyle + ' ' + flexRowStyle}
          id='people-container-contact'
        >
          <div className={aboutPeopleContainerStyle} id='Jon-container-contact'>
            <img
              className={bitmojiIconStyle}
              src='/images/jon.jpg'
            />

            <br />
            <h3>JON</h3>

            <br />
            <h3>
              Hi I am Jon and you can contact me here, through Twitter!
            </h3>
            <a href='https://twitter.com/JonStreet' target='_blank'>
              <img src={twitterIcon} />
            </a>
          </div>

          <div className={aboutPeopleContainerStyle} id='Kate-container-contact'>
            <img
              className={bitmojiIconStyle}
              src='/images/kate.jpg'
            />

            <br />
            <h3>KATE</h3>

            <br />
            <h3>
              Hi I am Kate and you can contact me here, through Twitter!
            </h3>
            <a href='https://twitter.com/kgscanlon?lang=en' target='_blank'>
              <img src={twitterIcon} />
            </a>
          </div>
        </div>

        <br />
        <br />
        <br />
        <JKFooter />
        <SEO url='contact-us' />
      </div>
    )
  }
}
