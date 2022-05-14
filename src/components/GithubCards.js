//copied from https://jsdrops.com/rgs2.7
// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn

import './GithubCard.scss';
import React, { useEffect, useState } from "react";
import axios from "axios";
const CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
	</div>
);

class CardNotUsed extends React.Component {
	render() {
  	const profile = this.props;
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
  }
}

const Card = (profile) => (
  <div className="github-profile">
    <img src={profile.avatar_url} />
    <div className="info">
      <div className="name">{profile.name}</div>
      <div className="company">{profile.company}</div>
      <div >{profile.company}</div>
    </div>
  </div>
);

class FormNotUsed extends React.Component {
	state = { userName: '' };
	handleSubmit = async (event) => {
  	event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    this.setState({ userName: '' });
  };
	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <input 
          type="text" 
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username" 
          required 
        />
        <button>Add card</button>
    	</form>
    );
  }
}

const Form = (props) => {
  const [userName, setUserName] = useState('');
	const handleSubmit = async (event) => {
  	event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${userName}`);
    props.onSubmit(resp.data);
    setUserName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={userName}
        onChange={event => setUserName(event.target.value)}
        placeholder="GitHub username" 
        required 
      />
      <button>Add card</button>
    </form>
  );
}

export default class GithubCards extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
    	</div>
    );
  }	
}