import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [person,setPerson]=useState({name: 'Ghayas', enrol: "02235172003", reg: 51225});
const clickHandler=() =>{
  setPerson({name:"Hamza Zafar",enrol: "02-235-172-004", reg: 51226});
}
  return (
   
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}> React Developer</Text>
<View style={styles.body}>
  <Text>Name:{person.name}</Text>
  <Text>Enrol:{person.enrol}</Text>
  <Text>RegNo:{person.reg}</Text>
</View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Show More" onPress={clickHandler}/>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor: 'yellow',
    padding:20,
  },
  boldText:{
fontWeight: "bold",
textAlign:"center"

  },
  body:{
backgroundColor:"lightgreen",
padding:20
  },
  buttonContainer:{
    color:"black"

  },
});
