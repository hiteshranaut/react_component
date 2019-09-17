import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';


const App = () => {
	return (
		<div className="ui container comments">
		 	<ApprovalCard>
				<CommentDetail 
					author="Hitesh" 
					timeAgo="Today at 4:45PM" 
					content="first comment "
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail 
					author="Sam" 
					timeAgo="Today at 5:45PM" 
					content="second comemnt " 
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			
		
		</div>
		);
}

ReactDOM.render(<App />, document.querySelector('#root'))