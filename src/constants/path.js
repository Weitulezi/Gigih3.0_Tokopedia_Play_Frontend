const isProduction = false

const serverDomain = isProduction
    ? "https://gigih30tokopediaplaybackend-production.up.railway.app"
    : "http://localhost:5000"

export { serverDomain }
