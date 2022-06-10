import React, { useState } from "react";

//create your first component
const Home = () => {
	const [task, setTask] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12 col-md-6">
					<h1 className="text-center"> My ToDo List</h1>
					<form>
						<input
							type="text"
							placeholder="add your task"
							className="form-control"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Home;
