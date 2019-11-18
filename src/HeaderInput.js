import React from 'react';
import { Typography, TextField, Button } from "@material-ui/core";


export default class HeaderInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: "",
        }
    }
    handleChange = (e) => {
        this.setState({
            item: e.value,
        })
    }
    render() {
        const { onAdd } = this.props;
        return (
            <span style={{ width: "30%", display: "flex", flexDirection: "column", alignItems: "center",marginBottom: "20px" }}>
                <Typography variant="h3" color="primary" component="h2" >
                TO DO LIST
                </Typography>
                <TextField autoFocus margin = "normal" color="primary" variant="outlined" fullWidth label="Add Item" value={this.state.item} onChange={(e) => { this.handleChange(e.target) }} />
                <Button variant="contained" color="primary"  fullWidth onClick={() => {this.setState({item: ""}); return onAdd(this.state.item) }}>Add</Button>
            </span>
        )
    }
}
