import React from 'react'
import { Route, IndexRoute } from 'react-router'
import JKMain from '../content/JKMain'
import JKPodcasts from '../content/JKPodcasts'
import JKAbout from '../content/JKAbout'
import JKContact from '../content/JKContact'
import NotFound from '../content/NotFound'

const routes = (
  <Route path='/'>
    <IndexRoute component={JKMain} />
    <Route path='features' component={JKPodcasts} />
    <Route path='about' component={JKAbout} />
    <Route path='contact-us' component={JKContact} />
    <Route path='*' component={NotFound} />
  </Route>
)
