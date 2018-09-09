import DynamicImport from 'app/components/DynamicImport'
const WebsiteRoutes = {
	childRoutes: [
		{
			path: '/',
			indexRoute: {
				getComponent(location, cb) {
					DynamicImport(
						import(/* webpackChunkName: "home" */'app/content/JKMain'),
						cb,
						'home'
					)
				}
			},
		},
		{
			path: 'podcasts',
			indexRoute: {
				getComponent(location, cb) {
					DynamicImport(
						import(/* webpackChunkName: "podcasts" */'app/content/JKPodcasts'),
						cb,
						'podcasts'
					)
				}
			},
		},
		{
			path: 'about',
			indexRoute: {
				getComponent(location, cb) {
					DynamicImport(
						import(/* webpackChunkName: "about" */'app/content/JKAbout'),
						cb,
						'about'
					)
				}
			},
		},
		{
			path: 'contact-us',
			indexRoute: {
				getComponent(location, cb) {
					DynamicImport(
						import(/* webpackChunkName: "contact-us" */'app/content/JKContact'),
						cb,
						'contact-us'
					)
				}
			},
		},
		{
			path: '*',
			getComponent(location, cb) {
				DynamicImport(
					import(/* webpackChunkName: "page-not-found" */'app/content/NotFound'),
					cb,
					'page-not-found'
				)
			}
		},
	],
}

export default WebsiteRoutes
