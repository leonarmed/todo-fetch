import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TodoContainer from "./TodoContainer/index.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid text-center bg-gradient p-3" style={{height: '100vh'}}>
			<TodoContainer />
		</div>
	);
};

export default Home;
