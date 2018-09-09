import React, { PureComponent } from 'react'

export default class JKPodcastChild extends PureComponent {
  render() {
    let mainDescriptionStyle = 'mainDescriptionStyle'
    if (MobileCheck()) {
      mainDescriptionStyle = 'mainDescriptionStyleMobile'
    }

    const { data, count } = this.props
    const { link, title, description } = data

    return (
      <div
        id={`${count}-podcasts-child-container-podcast-list`}
        key={count}
      >
        <br />
        <h2 style={{ textAlign: 'center' }}>{title}</h2>

        <br />
        <h3 className={mainDescriptionStyle}>
          {description}
        </h3>

        <br />
        <iframe
          width='100%'
          height='166'
          scrolling='no'
          frameborder='no'
          src={link}
        />
      </div>
    )
  }
}
