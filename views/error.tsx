import * as React from 'react';

class error extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <html>
            <body>
                <h1>{this.props.message}</h1>
                <h1>{this.props.message}</h1>
                <h2>{this.props.error.status}</h2>
                <pre>{this.props.error.stack}</pre>
                </body>
                </html>);
    }
    props: {
        title: string,
        message: string,
        error: any,
    }
}

export default error;
