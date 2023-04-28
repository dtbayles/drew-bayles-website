import musiclight from "../../../../assets/images/portfolio/musiclight.png";
import flappyRafleeki from "../../../../assets/images/portfolio/flappy-rafleeki.png";
import tradingBot from "../../../../assets/images/portfolio/trading-bot.png";

const portfolio = [
	{
		title: "React Website",
		image: musiclight,
		description: "MusicLight's website was added to my portfolio site as a full stack development project. The site was built using ReactJS for the frontend, with various UI components from Material-UI library. The backend was developed using Node.js and Express.js, with data stored in a MySQL database. The website includes features such as user authentication, a dynamic blog with CRUD functionality, and a responsive design that adjusts to different screen sizes.",
		githubLink: "",
		links: [
			{
				type: "github",
				url: "https://github.com/user/project1",
			},
			{
				type: "demo",
				url: "https://project1.demo.com",
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
				url: "https://github.com/user/project1",
			},
			{
				type: "demo",
				url: "https://project1.demo.com",
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
				url: "https://github.com/user/project1",
			},
			{
				type: "demo",
				url: "https://project1.demo.com",
			},
		],
	},
	{
		title: "Project title",
		image: musiclight,
		description: "MusicLight's website was added to my portfolio site as a full stack development project. The site was built using ReactJS for the frontend, with various UI components from Material-UI library. The backend was developed using Node.js and Express.js, with data stored in a MySQL database. The website includes features such as user authentication, a dynamic blog with CRUD functionality, and a responsive design that adjusts to different screen sizes.",
		links: [
		],
	},
]

export default portfolio;