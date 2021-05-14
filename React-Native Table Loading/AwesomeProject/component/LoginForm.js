import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button ,Text} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LoginForm extends Component {
   
    storeData = async (value) => {
        try {
          await AsyncStorage.setItem('name', "Dilshan")
          console.log("Save....!"+value)
        } catch (e) {
          console.log("Save Fail!")
        }
      }
      
 getData = async () => {
    
    try {
      const value = await AsyncStorage.getItem('name')
      if(value !== null) {
        console.log(value)
       
      }
    } catch(e) {
        console.log("Reading Fail!")
    }
  }
  removeValue = async () => {
    try {
      await AsyncStorage.removeItem('name')
      console.log("Removed...")
    } catch(e) {
        console.log("Remove Fail!")
    }
  
   
  }
   loadAllData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))   
        
}
  constructor(props) {
    super(props);
    this.getData()
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
      tableData: [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '456\n789'],
        ['a', 'b', 'c', 'd']
      ]
    };
  }
  render() {
    
    return (
      <Container>
        <Header />
        <Content>
          <Form style={{
              position:"relative"
          }}>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
            <Button block rounded
            onPress={
                this.storeData.bind(this)
            }
           
            style={{
                margin:5
            }} 
                
            ><Text>Save Data</Text></Button>
          
          <Button block rounded
            onPress={
                this.getData.bind(this)
            }
           
            style={{
                margin:5
            }} 
                
            ><Text>Reade Data</Text></Button>

            <Button block rounded
            onPress={
                this.removeValue.bind(this)
            }
           
            style={{
               margin:5
            }} 
                
            ><Text>Remove Data</Text></Button>
          </Form>
    
        </Content>
      </Container>
    );
  }
}
