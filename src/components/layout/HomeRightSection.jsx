export default function HomeRightSection() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"  fill="none">
            <defs>
                <linearGradient id="animatedGradient" x1="499.75" y1="0" x2="499.75" y2="1080" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="white" stopOpacity="1">
                    <animate attributeName="stop-color" values="white; blue; purple; white" dur="10s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="aqua" stopOpacity="1">
                    <animate attributeName="stop-color" values="blue; purple; white; blue" dur="10s" repeatCount="indefinite" />
                </stop>
                </linearGradient>
            </defs>
            <path d="M51.5 0H999.5V1080H0L51.5 0Z" fill="url(#animatedGradient)" fillOpacity="0.9"/>
            </svg>
    )
}