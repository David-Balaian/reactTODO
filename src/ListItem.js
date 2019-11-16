import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { Button, TextField } from "@material-ui/core";
import ButtonGroup from '@material-ui/core/ButtonGroup';


class AddButtons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Edit"
        }
    }
    changeinput = () => {
        if (this.state.name === "Edit") {
            this.setState({ name: "Done" });
            this.props.changeable(true);
        } else {
            console.log(this.props.value)
            if(this.props.value.trim()){
            this.setState({ name: "Edit" });
            this.props.changeable(false);
            }
        }
    }
    render() {
        if (this.props.mouseEntered) {
            return (
                <ButtonGroup
                    variant="contained"
                    color="default"
                    fullWidth
                >
                    <Button onClick={this.changeinput}>{this.state.name}</Button>
                    <Button onClick={() => { this.props.onDelete(this.props.index) }}>Delete</Button>
                </ButtonGroup>
            )
        } else {
            return (null)
        }
    }
}
export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseEntered: false,
            done: false,
            changeable: false,
            inputValue: this.props.item.value,
        }
    }
    changeType = (bool) => {
        this.setState({
            changeable: bool,
        })
    }    
    render() {
        return (
            <span style={{ width: "100%", marginTop: "20px", display: "flex", flexDirection: "column" }}  onMouseEnter={() => { this.setState({ mouseEntered: true }) }} onMouseLeave={() => { this.setState({ mouseEntered: false }) }}>
                {
                    this.state.changeable ?
                        <TextField
                            fullWidth
                            color="primary"
                            variant="outlined"
                            value={this.props.item.value}
                            onChange={(e)=>{this.props.changeinput(e,this.props.index)}} />
                        :
                        <Button
                            fullWidth
                            variant="contained"
                            color={this.props.item.done ? "primary" : "secondary"}
                            onClick={()=>{this.props.makeDone(this.props.index)}}
                        >{this.props.item.value}</Button>}
                <span>
                    <AddButtons 
                        value={this.state.inputValue} 
                        onDelete={this.props.onDelete} 
                        index={this.props.index} 
                        changeable={this.changeType} 
                        mouseEntered={this.state.mouseEntered} />
                </span>
            </span>
        )
    }
}


