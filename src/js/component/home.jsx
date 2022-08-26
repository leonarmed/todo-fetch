import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TodoContainer from "./TodoContainer/index.jsx";

//create your first component
const Home = () => {
	const Tasks = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"]
	return (
		<div className="container-fluid text-center bg-gradient p-3" style={{height: '100vh'}}>
			<TodoContainer Tasks={Tasks}/>
		</div>
	);
};

export default Home;
