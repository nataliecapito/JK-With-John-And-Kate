import React from 'react'
import _ from 'lodash'
import Meta from '../meta'

const HTML = ( props ) => {
    const body = props.body

    const vendor = _.find( props.manifest, (file) => { return _.includes(file, 'vendor') })
    const bundle = _.find( props.manifest, (file) => { return _.includes(file, 'bundle') })
    const manifest = _.find( props.manifest, (file) => { return _.includes( file, 'manifest' ) })

    let url = ''
    let urls = props.reactStaticCompilation.renderProps.location.pathname
        urls = urls.split('/')

        if ( urls.length == 2 && urls[1] == '' ) {
            url = 'home'
        } else {
            if ( urls.length == 2 ) {
                url = urls[1]
            } else {
                url = urls[2]
            }
        }


    let content = _.find( Meta, { url: url } )
    if ( ! content ) {
        content = _.find( Meta, { url: 'default' } )
    }

    return (
        <html lang='en'>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <title>{ content.title }</title>
                <meta name="description" content={ content.description } data-react-helmet="true" />
                <meta name="keywords" content={ content.keywords } data-react-helmet="true" />
                <link rel="icon" href="/images/favicon.ico" />
                <link href="/styles.css" rel="stylesheet" />
            </head>
            <body>
                <div id='root'>
                    <div dangerouslySetInnerHTML={{ __html: body }} />
                </div>
                <script defer src={`/${ manifest }`} />
                <script defer src={`/${ vendor }`} />
                <script defer src={`/${ bundle }`} />
            </body>
        </html>
    )
}

export default HTML
