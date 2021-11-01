import React from "react";

export default class FetchUser extends React.Component {

    state = {
        blockchain_btc_buy: null,
        blockchain_btc_sell: null,
        blockchain_eth_buy: null,
        blockchain_eth_sell: null,
        bitmap_btc_buy: null,
        bitmap_btc_sell: null,
        bitmap_eth_buy: null,
        bitmap_eth_sell: null,

    }
   
    async componentDidMount() {
        try {
            const response = await fetch('http://localhost:8091/first/');
            
            const data = await response.json();
            this.setState({blockchain_btc_buy: data[0].btcbuy, blockchain_btc_sell: data[0].btcsell, blockchain_eth_buy: data[0].ethbuy, blockchain_eth_sell: data[0].ethsell, bitmap_btc_buy: data[1].btcbuy, bitmap_btc_sell: data[1].btcsell, bitmap_eth_buy: data[1].ethbuy, bitmap_eth_sell: data[1].ethsell});
            
            console.log(data[1].btcbuy);
            setInterval(async() => {
                const response = await fetch('http://localhost:8091/first/');
                const data = await response.json();
                this.setState({blockchain_btc_buy: data[0].btcbuy, blockchain_btc_sell: data[0].btcsell, blockchain_eth_buy: data[0].ethbuy, blockchain_eth_sell: data[0].ethsell, bitmap_btc_buy: data[1].btcbuy, bitmap_btc_sell: data[1].btcsell, bitmap_eth_buy: data[1].ethbuy, bitmap_eth_sell: data[1].ethsell});
                
                console.log(data[1].btcbuy)
            }, 10000);
        } catch(e) {
            console.log(e)
        }
        
    }
    render() {
        return (
            <div>
                <div>
                    <h2>Blockchain</h2>
                    <div>Blockchain BTC buy: {this.state.blockchain_btc_buy}</div>
                    <div>Blockchain BTC sell: {this.state.blockchain_btc_sell}</div>
                    <div>Blockchain ETH buy: {this.state.blockchain_eth_buy}</div>
                    <div>Blockchain ETH sell: {this.state.blockchain_eth_sell}</div>
                </div>
                <div>
                    <h2>Bitmap</h2>
                    <div>Bitmap BTC buy: {this.state.bitmap_btc_buy}</div>
                    <div>Bitmap BTC sell: {this.state.bitmap_btc_sell}</div>
                    <div>Bitmap ETH buy: {this.state.bitmap_eth_buy}</div>
                    <div>Bitmap ETH sell: {this.state.bitmap_eth_sell}</div>
                </div>
                <div>
                    <h2>Exchange Platforms</h2>
                    <div>BTC buy: {this.state.bitmap_btc_buy > this.state.blockchain_btc_buy ? "Blockchain" : "Bitmap"}</div>
                    <div>BTC sell: {this.state.bitmap_btc_sell > this.state.blockchain_btc_sell ? "Bitmap" : "Blockchain"}</div>
                    <div>ETH buy: {this.state.bitmap_eth_buy > this.state.blockchain_eth_buy ? "Blockchain" : "Bitmap"}</div>
                    <div>ETH sell: {this.state.bitmap_eth_sell > this.state.blockchain_eth_sell ? "Bitmap" : "Blockchain"}</div>
                </div>
            </div>
            
        );
                
    }
    

}