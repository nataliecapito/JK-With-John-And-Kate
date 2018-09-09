import React, { PureComponent } from 'react'

export default class JKBottomHeader extends PureComponent {
  render() {
    let headerBottomStyle = 'headerBottomStyle'
    let listContainerStyle = 'listContainerStyle'
    if (MobileCheck()) {
      listContainerStyle = 'listContainerStyleMobile'
      headerBottomStyle = 'headerBottomStyleMobile'
    }

    return (
      <div className={headerBottomStyle} id='bottom-header-container-header'>
        <div className='headerBottomImgContainerStyle'>
          <img
            src='/images/JKBanner.jpeg'
            style={{ width: '100%', height: '100%' }}
            id='bottom-img-container-header'
          />
        </div>

        <div
          className={listContainerStyle}
          id='bottom-header-list-container-header'
        >
          <a
            href='/'
            className='linkListContainerStyle'
            id='bottom-header-home-container-header'
          >
            Home
          </a>
          <a
            href='/podcasts'
            className='linkListContainerStyle'
            id='bottom-header-home-container-header'
          >
            Episodes
          </a>
          <a
            href='/about'
            className='linkListContainerStyle'
            id='bottom-header-home-container-header'
          >
            About
          </a>
          <a
            href='/contact-us'
            className='linkListContainerStyle'
            id='bottom-header-home-container-header'
          >
            Contact
          </a>
        </div>
      </div>
    )
  }
}
