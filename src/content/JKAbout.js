import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import SEO from '../components/SEO'
import JKHeader from './layout/JKHeader'
import JKFooter from './layout/JKFooter'

export default class JKAbout extends PureComponent {
  render() {
    let mainBodyStyle = 'mainBodyStyle'
    let mainDescriptionStyle = 'mainDescriptionStyle'
    let flexRowStyle = 'flexRowStyle'
    let aboutPeopleStyle = 'aboutPeopleStyle'
    let aboutPeopleContainerStyle = 'aboutPeopleContainerStyle'
    let bitmojiIconStyle = 'bitmojiIconStyle'
    if (MobileCheck()) {
      mainBodyStyle = 'mainBodyStyleMobile'
      mainDescriptionStyle = 'mainDescriptionStyleMobile'
      flexRowStyle = 'flexColumnStyle'
      aboutPeopleStyle = 'aboutPeopleStyleMobile'
      aboutPeopleContainerStyle = 'aboutPeopleContainerStyleMobile'
      bitmojiIconStyle = 'bitmojiIconStyleMobile'
    }

    return (
      <div
        className={mainBodyStyle + ' ' + 'flexColumnStyle'}
        id='container-about'
      >
        <JKHeader />

        <br />
        <br />
        <h1 style={{ textAlign: 'center' }}>
          ABOUT JK WITH JON AND KATE
        </h1>

        <br />
        <h3 className={mainDescriptionStyle} id='description-container-about'>
          Politics is ridiculous so we might as well make it fun. A podcast with Jon Street and Kate Scanlon.
        </h3>
        <div style={{ borderBottom: '2px solid #eee', width: '65%', margin: '25px auto' }} />
        <h2>MEET J AND K</h2>

        <br />
        <div
          className={aboutPeopleStyle + ' ' + flexRowStyle}
          id='people-container-about'
        >
          <div className={aboutPeopleContainerStyle} id='Jon-container-about'>
            <img
              className={bitmojiIconStyle}
              src='/images/jon.jpg'
            />

            <br />
            <h3>JON</h3>

            <br />
            <h3>
              Jon is a politics reporter living and working in Washington, DC.
            </h3>
          </div>
          <div className={aboutPeopleContainerStyle} id='Kate-container-about'>
            <img
              className={bitmojiIconStyle}
              src='/images/kate.jpg'
            />

            <br />
            <h3>KATE</h3>

            <br />
            <h3>
              Kate is a graduate of Saint Vincent College in Latrobe, PA. She has worked as a reporter, living in
              Washington, DC for the past 3-4years. She focuses on politics, and has been employed with more conservative
              news outlets, such as, the Blaze and the Heritage Foundation.
            </h3>
          </div>
        </div>

        <br />
        <br />
        <br />
        <JKFooter />
        <SEO url='about' />
      </div>
    )
  }
}
