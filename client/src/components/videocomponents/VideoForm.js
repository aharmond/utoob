import React from 'react'
import {AuthConsumer} from '../../providers/AuthProvider'
import {Form, Container, } from 'semantic-ui-react'
import axios from 'axios';


class VideoForm extends React.Component {
    state = { title: '', duration: '', genre: '', description:'', trailer:'',}

    componentDidMount() {
        if (this.props.match.params.id) {
            axios.get(`/api/videos/${this.props.match.params.id}`)
            .then( res => {
                this.setState( res.data )
            })
            
        } 
    }
    
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        const video = this.state
        e.preventDefault()
        if (this.props.match.params.id) {
            axios.put(`/api/videos/${this.props.match.params.id}`, video)
                .then( res => {
                    this.props.history.push(`/videos/${res.data.id}`)
                })
        } else {
            axios.post(`/api/videos`, video)
                .then( res => {
                    this.props.history.push(`/videos/${res.data.id}`)
                })
            }
    }

    render() { 
        const { title, duration, genre, description, trailer, } = this.state
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input 
                        label="Title"
                        name="title"
                        value={title}
                        autoFocus
                        onChange={this.handleChange}
                    />
                    <Form.Input 
                        label="Length"
                        name="duration"
                        value={duration}
                        onChange={this.handleChange}
                    />
                    <Form.Input 
                        label="Genre"
                        name='genre'
                        value={genre}
                        onChange={this.handleChange} 
                    />
                    <Form.Input 
                        label="Description"
                        name='description'
                        value={description} 
                        onChange={this.handleChange}
                    />
                    <Form.Input 
                        label="Source"
                        name='trailer'
                        value={trailer}
                        onChange={this.handleChange}
                    />
                    <Form.Button
                        content="Submit"
                    />
                </Form>
            </Container>
        )
    }
}

export default class ConnectedVideoForm extends React.Component {
    render() {
      return (
        <AuthConsumer>
          {auth => <VideoForm {...this.props} auth={auth} />}
        </AuthConsumer>
      );
    }
}

