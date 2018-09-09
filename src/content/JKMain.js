import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import SEO from '../components/SEO'
import JKPodcastContent from './components/JKPodcastContainers'
import JKHeader from './layout/JKHeader'
import JKFooter from './layout/JKFooter'

export default class JKMain extends PureComponent {
  render() {
    let mainBodyStyle = 'mainBodyStyle'
    let mainDescriptionStyle = 'mainDescriptionStyle'

    let breakLines = (
      <span id='breaklines-container-main'>
        <br /><br />
      </span>
    )

    if (MobileCheck()) {
      mainBodyStyle = 'mainBodyStyleMobile'
      mainDescriptionStyle = 'mainDescriptionStyleMobile'
      breakLines = <br />
    }

    return (
      <div className={mainBodyStyle} id='container-main'>
        <JKHeader />
        {breakLines}

        <div className='flexColumnStyle' id='body-container-main'>
          <img src='/images/JKIcon.jpg' />

          <br /><br />
          <div style={{ borderBottom: '2px solid #eee', width: '65%', marginBottom: '25px' }} />
          <h2>Jk with Jon and Kate</h2>

          <br />
          <h3 className={mainDescriptionStyle} id='description-container-main'>
            Politics is ridiculous so we might as well make it fun. A podcast with
            Jon Street and Kate Scanlon.
          </h3>

          <div style={{ borderBottom: '2px solid #eee', width: '65%', margin: '25px auto' }} />

          <JKPodcastContent onHome={true} title='lastest episodes' />
        </div>

        <br />
        <br />
        <br />
        <JKFooter />
        <SEO url='home' />
      </div>
    )
  }
}
