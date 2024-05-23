import React from 'react';
import Todo from './components/Todo.tsx'
import ApiDataCalling from './components/ApiDataCalling.tsx';
import { ScrollView } from 'react-native';

function App(): React.JSX.Element {
 return (
  <ScrollView>
<Todo />
<ApiDataCalling />
  </ScrollView>
  );
}

export default App;
