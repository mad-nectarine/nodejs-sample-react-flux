import * as React from 'react';

export default class Todo extends React.Component<any,any>
{
	render(){
		return <html>
			<head>
				<title>{this.props.title}</title>
			</head>
			<body>
				<div id="root" />
				<script type="text/javascript" src={"/scripts/pages/TodoIndex.debug.js"} />
			</body>		
		</html>;		
	}
} 

module.exports = Todo;