import React, { PureComponent } from 'react'
import JKPodcastChild from './children/JKPodcastChild'

const podcastArray = [
  {
    link: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/371570048&ampcolor=%2380c4e8&ampauto_play=false&amphide_related=false&ampshow_comments=true&ampshow_user=true&ampshow_reposts=false&ampshow_teaser=true',
    description: 'The first episode of JK with Jon and Kate.',
    title: 'Episode 1',
  },
  {
    link: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/371570036&ampcolor=%2380c4e8&ampauto_play=false&amphide_related=false&ampshow_comments=true&ampshow_user=true&ampshow_reposts=false&ampshow_teaser=true',
    description: 'The second episode of JK with Jon and Kate.',
    title: 'Episode 2',
  },
  {
    link: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/376370906&ampcolor=%2380c4e8&ampauto_play=false&amphide_related=false&ampshow_comments=true&ampshow_user=true&ampshow_reposts=false&ampshow_teaser=true',
    description: 'The third episode of JK with Jon and Kate.',
    title: 'Episode 3',
  },
]

export default class JKPodcastContent extends PureComponent {
  render() {
    let podcastContainerStyle = 'podcastContainerStyle'
    if (MobileCheck()) {
      podcastContainerStyle = 'podcastContainerStyleMobile'
    }

    const { onHome, title } = this.props
    const podcasts = []
    let count = 0

    for (const array of podcastArray) {
      podcasts.push(
        <JKPodcastChild data={array} count={count++} />
      )
    }

    if (onHome) {
      podcasts.splice(0, 1)
    }

    return (
      <div
        className={podcastContainerStyle}
        id='podcasts-container-podcast-list'
      >
        <a href='/podcasts' style={{ textAlign: 'center' }}>
          <h1>{title}</h1>
        </a>

        <br />
        {podcasts.reverse()}
      </div>
    )
  }
}
