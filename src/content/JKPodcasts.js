import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import SEO from '../components/SEO'
import JKPodcastContent from './components/JKPodcastContainers'
import JKHeader from './layout/JKHeader'
import JKFooter from './layout/JKFooter'

export default class JKPodcast extends PureComponent {
  render() {
    let mainBodyStyle = 'mainBodyStyle'
    if (MobileCheck()) {
      mainBodyStyle = 'mainBodyStyleMobile'
    }

    return (
      <div className={mainBodyStyle} id='container-podcasts'>
        <JKHeader />

        <br />
        <br />
        <JKPodcastContent onHome={false} title='episodes' />

        <br />
        <br />
        <br />
        <JKFooter />
        <SEO url='podcasts' />
      </div>
    )
  }
}
