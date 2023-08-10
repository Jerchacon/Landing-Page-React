import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Footer from "./footer"
import Images from "./images";

//include images into your bundle

//create your first component
const Home = () => {
	let imgs = [
		{
			src: "https://picsum.photos/id/237/300/325",
			title: "Card Title",
			description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			label: "Find out more"
		},
		{
			src: "https://picsum.photos/id/777/300/325",
			title: "Card Title",
			description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			label: "Find out more"
		},
		{
			src: "https://picsum.photos/id/222/300/325",
			title: "Card Title",
			description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			label: "Find out more"
		},
		{
			src: "https://picsum.photos/id/111/300/325",
			title: "Card Title",
			description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			label: "Find out more"
		}
	];
	return (
		<>
			<Navbar />
			<Jumbotron
				title={"A Warm Welcome!"}
				description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor eros, dapibus eget sapien eget, blandit consectetur elit. Sed rutrum, nunc ac tempor pretium, ex nisl sollicitudin eros, ac facilisis orci augue et dui."}
				label={"Call to action!"} />
			<Images
				imgs={imgs} />
			<Footer
				footerInfo={"Copyright Jermain chacón 2023"}
			/>
		</>
	)
}

export default Home;
