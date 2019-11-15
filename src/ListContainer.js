import React from 'react';
import ListItem from './ListItem';
export default class ListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.id = 0;
        this.state = { Arr: [] }
    }
    render() {
        let Items = [...this.props.arr];
        return (
            <div style={{ width: "30%", display: "flex", flexDirection: "column" }}>
                {
                    Items.map((item, i) => {
                        return <ListItem
                            changeinput={this.props.changeinput}
                            makeDone={this.props.makeDone}
                            item={item}
                            index={i}
                            onDelete={this.props.onDelete}
                            key={i} />
                    })
                }
            </div>)
    }
}