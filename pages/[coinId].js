import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function CoinPage() {
  const router = useRouter()
  const { coinId } = router.query
  const [coinData, setCoinData] = useState(null)
  const [symbol, setSymbol] = useState('')

  useEffect(() => {
    if (!coinId) return

    // Fetch coin data from Coingecko
    const fetchCoinData = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
        const data = await response.json()
        setCoinData(data)
        // Get the symbol and convert to uppercase for TradingView
        setSymbol(data.symbol.toUpperCase())
      } catch (error) {
        console.error('Error fetching coin data:', error)
      }
    }

    fetchCoinData()
  }, [coinId])

  if (!coinData) return <div>Loading...</div>

  return (
    <div>
      <h1>{coinData.name} ({symbol})</h1>
      
      {/* Price and other coin data */}
      <div>
        <p>Current Price: ${coinData.market_data?.current_price?.usd}</p>
        {/* Add other coin data you want to display */}
      </div>

      {/* TradingView Widget */}
      {symbol && (
        <div className="tradingview-widget-container">
          <div id="tradingview_chart"></div>
          <script type="text/javascript" dangerouslySetInnerHTML={{
            __html: `
              new TradingView.widget({
                "width": "100%",
                "height": 500,
                "symbol": "BINANCE:${symbol}USDT",
                "interval": "D",
                "timezone": "Etc/UTC",
                "theme": "dark",
                "style": "1",
                "locale": "en",
                "toolbar_bg": "#f1f3f6",
                "enable_publishing": false,
                "allow_symbol_change": true,
                "container_id": "tradingview_chart"
              });
            `
          }} />
        </div>
      )}
    </div>
  )
} 