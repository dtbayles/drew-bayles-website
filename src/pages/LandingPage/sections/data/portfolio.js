import musiclight from "assets/images/portfolio/musiclight.png";
import flappyRafleeki from "assets/images/portfolio/flappy-rafleeki.png";
import tradingBot from "assets/images/portfolio/trading-bot.png";
import dreamtech from "assets/images/portfolio/dreamtech.png";
import oc4d from "assets/images/portfolio/oc4d.png";

const portfolio = [
	{
		title: "Open Content for Development (OC4D)",
		image: oc4d,
		description: "OC4D is an educational platform designed to expand access to learning resources. Leveraging AWS CDK, I built a robust backend infrastructure utilizing Lambda-backed APIs to fetch content and generate reports. DynamoDB was used for efficient data management, and S3 served as the storage solution for hosting static educational websites. The project combines the power of cloud computing with a user-friendly frontend, built with ReactJS and Material-UI, to provide a seamless educational experience for learners of all backgrounds and ages.",
		links: [
			{
				type: "demo",
				url: "https://www.oc4d.org/",
			},
		],
	},
	{
		title: "React Nonprofit Website",
		image: musiclight,
		description: "MusicLight's website was developed as a frontend project, showcasing my skills in ReactJS and front-end design. Using the Material-UI library, I created a series of visually stunning and responsive UI components, optimized for all screen sizes. The end result is a user-friendly, aesthetically pleasing website that highlights the client's music services in the best possible light.",
		links: [
			{
				type: "demo",
				url: "https://www.musiclight.org/",
			},
		],
	},
	{
		title: "Swift SpriteKit 2D Game",
		image: flappyRafleeki,
		description: "My rendition of the game Flappy Bird using Swift and SpriteKit. I aimed to recreate the addictive gameplay and infinite graphics of the original while adding my own personal touches.",
		links: [
			{
				type: "github",
				url: "https://github.com/dtbayles/Flappy-Rafleeki",
			},
		],
	},
	{
		title: "Python Options Trading Bot",
		image: tradingBot,
		description: "I built a Python trading bot that integrates with TD Ameritrade's APIs to automatically execute trades based on real-time market data. The bot is able to monitor multiple stocks simultaneously, analyze historical trends and make predictions about future market movements. It can place buy and sell orders, set stop loss and take profit levels, and even send out email notifications when certain conditions are met. With this bot, I was able to automate my trading strategy and achieve more consistent returns.",
		links: [
			{
				type: "github",
				url: "https://github.com/dtbayles/td-ameritrade-bot",
			},
		],
	},
	{
		title: "React Dev Shop React Website",
		image: dreamtech,
		description: "I built a stunning website using React for Dream Tech LLC. As a developer, I'm proud to showcase my skills and creativity through this beautifully designed and fully responsive website that highlights the services of the dev shop. With its clean layout, eye-catching graphics, and user-friendly interface, it's a perfect example of how I can help businesses establish a strong online presence.",
		links: [
			{
				type: "demo",
				url: "https://www.dreamtechlab.com/",
			},
		],
	},
]

export default portfolio;