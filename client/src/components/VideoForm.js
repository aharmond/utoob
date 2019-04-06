import React from 'react'
import {AuthConsumer} from '../providers/AuthProvider'
import {Form, Container, } from 'semantic-ui-react'
import axios from 'axios';


class VideoForm extends React.Component {
    state = { video: { title: '', duration: '', genre: '', description:'', trailer:''},}

    componentDidMount() {
        if (this.props.match.params.id) {
            axios.get(`/api/videos/${this.props.match.params.id}`)
            .then( res => {
                this.setState({ video: res.data})
            })
            
        } 
    }
    
    handleChange = (e) => {
        const {
            target: { name, value }
          } = e;
          this.setState({editing: false, video: { ...this.state.video, [name]: value } });
    }

    handleSubmit = (e) => {
        e.preventDefault()
            if (this.props.match.params.id) {
                axios.put(`/api/videos/${this.props.match.params.id}`)
                .then( res => {
                    this.setState({ video: res.data})
                })
            }
        }
    }

    render() { 
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input 
                    label="title of video here"
                    name="title"
                    value="title"
                    autoFocus
                    onChange={this.handleChange}
                    />
                    <Form.Input 
                    label="duration of video"
                    name="duration"
                    value="duration"
                    onChange={this.handleChange}
                    />
                    <Form.Input 
                    label="genre"
                    name='genre'
                    value='genre'
                    onChange={this.handleChange} 
                    />
                    <Form.Input 
                    label="description of video"
                    name='description'
                    value="description" 
                    onChange={this.handleChange}
                    />
                    <Form.Input 
                    label="trailer"
                    name='trailer'
                    value='trailer'
                    onChange={this.handleChange}
                    />
                </Form>
                <Form id="edit">
                    <Form.Input 
                    label="title of video here"
                    name="title"
                    value={title}
                    autoFocus
                    required
                    onChange={this.handleChange}
                    />
                    <Form.Input 
                    label="duration of video"
                    name="duration"
                    value={duration}
                    required
                    onChange={this.handleChange}
                    />
                    <Form.Input 
                    label="genre"
                    name='genre'
                    value={genre}
                    required
                    onChange={this.handleChange} 
                    />
                    <Form.Input 
                    label="description of video"
                    name='description'
                    value={description}
                    required 
                    onChange={this.handleChange}
                    />
                    <Form.Input 
                    label="trailer"
                    name='trailer'
                    value={trailer}
                    onChange={this.handleChange}
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

