import React, { useState} from 'react'
import {TextInput , StyleSheet , Button , Text , View ,FlatList , Alert} from 'react-native'

const Todo = ()=> {
const [name , setName] = useState('')
const [tasks , setTasks] = useState<string[]>([])
const handleGetData=()=>{
if(name.length>0){
setTasks([...tasks , name])
}else{
Alert.alert('Warning hai bhai ','field should not be empty please fill the input field')
}
setName('')
}
const handleDelete =(id :number)=>{
setTasks(tasks.filter((_ , i) => i !== id))
}
return (
<View style={styles.container}>
<TextInput
        placeholder="Enter your Task"
        style={styles.input}
        onChangeText={(e)=>setName(e)}
        value={name}
      />
      <View style={styles.buttonContainer}>
      <View style={styles.buttonFlex}>
<Button title='Add task' onPress={handleGetData} />
<Button title='Clear all tasks' color='orange' onPress={()=>setTasks([])} />
</View>
</View>
<FlatList
  data={tasks}
  renderItem={({ item, index }) => (
    <View style={{ borderWidth: 1, borderColor:'grey', borderRadius: 10, margin: 5, height: 50 }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15 }}>
        <Text style={{ color: 'red' }}>{index + 1}. {item}</Text>
        <Button title='Delete Task' color='red' onPress={() => handleDelete(index)} />
      </View>
    </View>
  )}
  keyExtractor={(item, index) => index.toString()} // Convert index to string
/>
          {/* map function  */}
  {/* {tasks.length>0 && tasks.map((e, i)=>(
  <View style={{borderWidth:1 ,borderRadius:10, margin:5, height:50 }}>
  <View style={{flex:1 ,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center' , paddingHorizontal:15}}>
      <Text style={{color:'red'}}>{i+1}. {e}</Text>
      <Button title='Delete Task' color='red' onPress={()=>handleDelete(i)}/>
      </View>
      </View>
   ))} */}

      </View>
      )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'lightgreen',
        // height:'100%'
        padding:10
    },
input:{
    margin:10,
    borderWidth:1,
    borderRadius:10
},

buttonFlex:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

},

buttonContainer:{
height:60,
}
})

export default Todo