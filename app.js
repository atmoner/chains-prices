import axios from 'axios'
import { writeFile } from 'fs' 
import cosmosConfig from './cosmos.config.js'

function run() {
    cosmosConfig.forEach(async (item) => {      
        // const coin_info = await axios('https://api.coingecko.com/api/v3/coins/' + item.coingeckoId)
        const market_chart = await axios('https://api.coingecko.com/api/v3/coins/' + item.coingeckoId + '/market_chart?vs_currency=usd&days=7')
        console.log(item)

        const path = './'+item.coingeckoId+'/coin_info.json';
        const path_market_chart = './'+item.coingeckoId+'/market_chart.json';
        
        /*writeFile(path, JSON.stringify(coin_info.data, null, 2), (error) => {
        if (error) {
            console.log('An error has occurred ', error);
            return;
        }
        console.log('Data written successfully to disk');
        }); */
        writeFile(path_market_chart, JSON.stringify(market_chart.data, null, 2), (error) => {
        if (error) {
            console.log('An error has occurred ', error);
            return;
        }
        console.log('Data written successfully to disk');
        });        
    })
}

run() 
