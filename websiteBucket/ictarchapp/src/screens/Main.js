import React, { Component } from 'react'
import { Container, Col, Form, FormGroup, Label, Input } from 'reactstrap'
import FileUploaded from './FileUploader';
import axios from 'axios';
import fileDownload from 'js-file-download'
  
export default class Main extends Component {  
  
  constructor(props) {  
    super(props)
    this.state =  { username: '', password: '', name: '', selectedFile: '', uuid: '', outputData: false, ETag: '' } 

    this.handleInputChange = this.handleInputChange.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.downloadFile = this.downloadFile.bind(this);
    this.checkLogin = this.checkLogin.bind(this);

  }



handleInputChange(event) {
  this.setState({ [event.target.name]: event.target.value })
}


    //filetype
    //contenttype

uploadFile() {
  //console.log(this.state.outputData);
  if (this.state.outputData) {
    //const formData = new FormData();
    //formData.append("file", this.state.selectedFile);


    console.log(this.state.selectedFile);


    let filetype = this.state.selectedFile
    //console.log(formData);


    let filetypeName = filetype.name.split('.');
    console.log(filetypeName[1]);

    let putFileUrl;


    var file = document.getElementById('input').files[0];
    console.log(file);
    

    axios
      .get("https://bwpz5hqni4.execute-api.us-east-1.amazonaws.com/putsignedurl?filetype="+filetypeName[1]+"&contenttype="+filetype.type)
      .then((res) => {
        console.log(res.data);
        putFileUrl = res.data.url;
        console.log(putFileUrl);
        this.setState({uuid: res.data.uuid});
        console.log(this.state.uuid);


        var xhr = new XMLHttpRequest();
        xhr.open('PUT', putFileUrl, true);
        //xhr.setRequestHeader('Content-Type', 'image/jpeg');
        xhr.onload = () => {
          if (xhr.status === 200) {
            console.log('Uploaded data successfully');
          }
        };
        xhr.onerror = () => {
          console.log('Nope')
        };
        xhr.send(file); // `file` is a File object here 
        /*axios
          .put(putFileUrl, formData)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log("Put error")
          })*/
      })
      .catch((err) => {
        this.setState({outputData: false})
        console.log("Login Error")});
    
  } else {
    alert("Login failed");
  }
}

downloadFile() {

  let putFileUrl;

  if (this.state.outputData) {
    axios
      .get("https://bwpz5hqni4.execute-api.us-east-1.amazonaws.com/getsignedurl?fileid="+this.state.uuid+"&user="+this.state.username)
      .then((res) => {
        putFileUrl = res.data.url;
        console.log(res.data.data);
        this.setState({ETag: res.data.data})

        axios({
          url: putFileUrl,
          method: 'GET',
          responseType: 'blob', // Important
        }).then((response) => {
            fileDownload(response.data, this.state.uuid);
        });
      })
      .catch((err) => {
        this.setState({outputData: false})
        console.log("Login Error")});
  } else {
    alert("Login failed");
  }
}

checkLogin() {
  let data = {
    key1: this.state.username,
    key2: this.state.password
  }
  data = JSON.stringify(data);

  axios
      .post("https://lt0pfk4vh0.execute-api.us-east-1.amazonaws.com/lambdaAuthLogin", data)
      .then((res) => {
        console.log(res.data);
        this.setState({outputData: true});
        if(this.state.outputData) {
          alert("Logged in");
        }
      })
      .catch((err) => {
        this.setState({outputData: false})
        console.log("Login Error")});
  
  
}



render() { 
    return (  
      <Container className='App'>  
      <Form className='form-group w-50'>  
      <Col>  
            <FormGroup row>  
              <Label for='name'>Name</Label>  
                <Input type='text' className='form-control' name='username' value={ this.state.username } 
                      onChange={ this.handleInputChange } placeholder='Enter username' />  
            </FormGroup>
            <FormGroup row>  
              <Label for='name'>Password</Label>  
                <Input type='password' className='form-control' name='password' value={ this.state.password } 
                      onChange={ this.handleInputChange } placeholder='Enter password' />  
            </FormGroup> 
          </Col> 
        <Col>
        <Col>  
          <FormGroup row>  
            <button type='button'  onClick={this.checkLogin}  className='btn btn-outline-primary'>Verify user</button>  
           </FormGroup>  
        </Col>    
        <h1 className='display-4'>Upload file</h1>
      <br/>
          <FormGroup row>  
            <Label for='name'>File</Label>  
          </FormGroup>
          <FormGroup row>  
          <FileUploaded
                    onFileSelectSuccess={(file) => this.setState({selectedFile: file})}
                    onFileSelectError={({ error }) => alert(error)}
            />
          </FormGroup>
          
        </Col>  
        <Col>  
          <FormGroup row>  
            <button type='button'  onClick={this.uploadFile}  className='btn btn-outline-primary'>Upload</button>  
           </FormGroup>  
        </Col>  
      </Form>
      <h1 className='display-4'>Download file</h1>
      <br/>
      <Form className='form-group w-50'>  
        <Col>  
        <FormGroup row>  
            <Label for='name'>UUID</Label>  
              <Input type='text' className='form-control' name='uuid' value={ this.state.uuid } 
                    onChange={ this.handleInputChange } placeholder='Enter UUID' />  
          </FormGroup>
        </Col>  
        <Col>  
          <FormGroup row>  
            <button type='button' onClick={ this.downloadFile }  className='btn btn-outline-primary'>Download</button>  
           </FormGroup>  
        </Col>  
        <Col>
        <FormGroup row>  
              <Label for='ETag'>ETag</Label>  
              <Label for='ETag'>: {this.state.ETag}</Label>  
        </FormGroup>
        </Col>
      </Form>
    </Container> 
    )
  } 
}

