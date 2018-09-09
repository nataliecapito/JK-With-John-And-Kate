import React, { PureComponent } from 'react'
import JKBottomHeader from './components/JKBottomHeader'
import JKStyleCSS from '../../../public/styles/style.css'

export default class JKHeader extends PureComponent {
  render() {
    let flexWrapperHeader = 'flexWrapperHeader'
    let headerIconImgStyle = 'headerIconImgStyle'

    let headerRight = (
      <div
        className='headerRightStyle'
        id='links-container-header'
      >
        <a
          href='/'
          className='linkStyles'
          style={{ marginRight: '20px' }}
        >
          Home
        </a>
        <a href='/podcasts' className='linkStyles'>
          Episodes
        </a>
      </div>
    )

    if (MobileCheck()) {
      flexWrapperHeader = 'flexWrapperHeaderMobile'
      headerIconImgStyle = 'headerIconImgStyleMobile'

      headerRight = (
        <div style={{ opacity: '0' }}>HIDDEN</div>
      )
    }

    return (
      <span id='header-container-header'>
        <div className={flexWrapperHeader} id='body-container-header'>
          <a href='/'>
            <img className={headerIconImgStyle} src='/images/JKIcon.jpg' />
          </a>
          <a href='/'>
            <h2 id='title-container-header'>
              JK with Jon & Kate
            </h2>
          </a>

          {headerRight}
        </div>

        <JKBottomHeader />
      </span>
    )
  }
}
