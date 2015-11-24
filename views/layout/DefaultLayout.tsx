import * as React from 'react';

export interface DefaultLayoutProps {
	title: string,
	pageName: string,
	html: string,
	initialState: any
}

export default class DefaultLayout extends React.Component<DefaultLayoutProps, any>
{
	render() {
		
		let stateJson = JSON.stringify(this.props.initialState);
		return <html>
			<head>
				<title>{this.props.title}</title>
				<link rel="stylesheet" href="/stylesheets/style.css" />
				</head>
			<body>
				<header>
					<a href="/" className="title">Redux</a>
					</header>
				<h1>{this.props.title}</h1>
				<div id="root" dangerouslySetInnerHTML={{ __html: this.props.html }} data-initialstate={stateJson}></div>
				<script>
					</script>
				<script type="text/javascript" src={"/scripts/pages/built/" + this.props.pageName + ".debug.js"} />
				</body>
			</html>;
	}
}

module.exports = DefaultLayout;