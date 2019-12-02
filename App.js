import * as React from 'react'
import { Text, View, WebView } from 'react-native'
import styles from './components/styles'
import * as FileSystem from 'expo-file-system'
import { modelAssets, baseUrl, uri } from './components/constants'
import { Asset } from 'expo-asset'

const svfUrl = 'https://dukedhx.github.io/Forge-Workshop/shaver/0.svf' // uncoment this line and specify URL to load model SVF

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { html: '' }
    const html = Asset.fromModule(require('./assets/viewer.html'))
    html.downloadAsync().then(async () => this.setState({ html: (await FileSystem.readAsStringAsync(html.localUri)).replace('svfUrl', svfUrl) }))
  }

  	render () {
    return (
      <View style={styles.webContainer}>

        <WebView
          // source={{html:this.state.html,baseUrl}} //uncomment this line to load local HTML
          source={{ uri: 'https://dukedhx.github.io/viewer-expo-react-native/?svfUrl=' + encodeURIComponent(svfUrl)}} // comment out this line if the previous line is uncommented
          ref={webview => this.webView = webview}
          style={styles.webview}
          javaScriptEnabled
          originWhitelist={['*']}
          useWebKit
          onMessage={event => {
            const path = event.nativeEvent.data
            if (path.startsWith('assets/')) {
              const prefix = 'data://' + new String(path.length).padStart(3, '0') + path
              if (modelAssets[path]) {
                const asset = Asset.fromModule(modelAssets[path])
                asset.downloadAsync().then(async () => this.webView.postMessage(prefix + await FileSystem.readAsStringAsync(asset.localUri, { encoding: 'base64' })))
              } else this.webView.postMessage(prefix)
            }
          }
          }
        />
      </View>
    )
  }
}
