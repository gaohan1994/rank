import * as React from 'react';

export interface Props {
    test: number;
}

export default class DemoClass extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        const { test } = this.props;
        return (
            <span>{test}</span>
        );
    }
}