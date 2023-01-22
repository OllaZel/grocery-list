import { Component } from "react";
import bag from './bag.png'

export class GroceryList extends Component {
    state = {
            userInput: '',
            groceryList: []
        }
    

    onChangeEvent(e) {
        this.setState({userInput: e})    
    }

    addItem(input) {
        if (input === '') {
            alert("Please enter an item")
        }
        else {
        let listArraw = this.state.groceryList;
        listArraw.push(input);
        this.setState({groceryList: listArraw, userInput: ''})}
    }

    deleteItem() {
        let listArraw = this.state.groceryList;
        listArraw = [];
        this.setState({groceryList: listArraw})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed')
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input
                type="text"
                placeholder="What do you buy today?"
                value={this.state.userInput}
                onChange={(e) => {this.onChangeEvent(e.target.value)}}/>
            </div>
            <div className="container">
                <button className="btn btn-add" onClick={ () => this.addItem(this.state.userInput)} >ADD</button>
            </div>

            <ul className="containerTwo">
                {this.state.groceryList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}> 
                    <img src={ bag } width="50px" alt="check box" />
                    {item} 
                    </li>
                ))}
            </ul>

            <div className="container">
                <button className="btn btn-delete" onClick={ () => this.deleteItem()}>DELETE</button>
            </div>
            </form>
            </div>
        )
    }
}
