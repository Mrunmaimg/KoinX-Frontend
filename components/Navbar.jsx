<div className="flex gap-2 items-center">
  <Image 
    src="/images/logo.png"
    alt="Logo"
    width={24}
    height={24}
    className="object-contain"
  />
  // ... rest of flex content ...
</div> 

const API_KEY = process.env.NEXT_PUBLIC_COINGECKO_API_KEY;

// Example fetch call
const fetchData = async () => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/endpoint?x_cg_demo_api_key=${API_KEY}`
  );
  // ... rest of the code
}; 