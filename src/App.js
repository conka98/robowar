import React,{Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll'


class App extends Component{
	
	constructor(){
		super();
		this.state={
			robots:[],
			searchField:'',
		}

	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({robots:users}))
	}


	onSearchChange=(event)=>{
		this.setState({searchField:event.target.value})
		
		
		// console.log(this.state.searchField);
		// console.log(filteredRobots);
	}

	render(){
		const filteredRobots=this.state.robots.filter(robots=>{
			return robots.name.toString().toLowerCase().includes(this.state.searchField.toString().toLowerCase());
		});

		return(
			<div className="tc">
				<h1 >RoboWar</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);	
	}
	
}


export default App

