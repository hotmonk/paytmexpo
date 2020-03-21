import React, {Component} from "react";
import { Text, View, TouchableOpacity, Modal} from "react-native";
 import { WebView } from 'react-native-webview';


export default class App extends React.Component {
  constructor(props) {
    //this.webViewRef = null;
    this.state = {
      showModal: false,
      ack: "",
      ORDER_ID: "6",
      TXN_AMOUNT: "200",
      CUST_ID: "ABCD",
      currentUrl: 'http://192.168.31.13:3001/api/paytm/request'
    };
    
  }
  

  componentDidMount() {
    this.setState({ currentUrl: "http://192.168.31.13:3001/api/paytm/request" })
    }
  

    onNavigationStateChange = (data) => {
      const { url } = data;
      this.setState({ currentUrl: url })
      
      }
  render() {

    // console.log(this.state.showModal);
    let { showModal, ack, ORDER_ID, TXN_AMOUNT, CUST_ID } = this.state;
    // let jscode= 'document.getElementById("ORDER_ID").value="${ORDER_ID}"; document.getElementById("TXN_AMOUNT"").value="${TXN_AMOUNT}"; document.getElementById('CUST_ID').value="${CUST_ID}"; document.f1.submit()';
    return (
      <View>
        <Text/><Text/><Text/><Text/>
        <Text>Hello world</Text>
        <TouchableOpacity onPress={() => this.setState({ showModal: true })}>
          <Text>Pay with paytm</Text>
        </TouchableOpacity>
        <Modal
          visible={showModal}
          onRequestClose={() => this.setState({ showModal: false })}
        >
          <Text>erdtyuijkjbh</Text>
          <WebView
         
            
            // source={{ uri: "https://github.com/facebook/react-native.com" }}
            // injectedJavaScript={`document.f1.submit();`}
            
            // injectedJavaScript={`document.getElementById("ORDER_ID").value = "${ORDER_ID}";document.getElementById("CUST_ID").value = "${CUST_ID}";document.getElementById("TXN_AMOUNT").value = "${TXN_AMOUNT}"; document.f1.submit();`}
              
              source={{ uri: this.state.currentUrl }}
              onNavigationStateChange={this.onNavigationStateChange.bind(this)}
              scalesPageToFit={true}
              automaticallyAdjustContentInsets={true}
              useWebKit={false}
              startInLoadingState={true}
              onError={(err)=>console.warn(err)}
              onLoadStart={() => console.warn('started')}
              onLoadEnd={() => console.warn('ended')}
              scrollEnabled={true}
              domStorageEnabled={true}
              javaScriptEnabled={true}
              style={{marginTop: 20}}
              // source={{ uri: "http://192.168.31.13:3001/api/paytm/request" }}
              onShouldStartLoadWithRequest={request => {
                console.log(request.url);
                // Only allow navigating within this website
                return request.url.startsWith(request.url);
              }}
          />
        </Modal>
      </View>
    );
  }
}
