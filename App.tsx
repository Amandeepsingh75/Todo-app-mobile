import React from 'react';
import Todo from './components/Todo.tsx'
import { ScrollView , SafeAreaView} from 'react-native';

function App(): React.JSX.Element {
 return (
  <SafeAreaView>
  <ScrollView>
<Todo />
  </ScrollView>
  </SafeAreaView>
  );
}

export default App;
