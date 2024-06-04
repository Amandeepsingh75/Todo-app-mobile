import React from 'react';
import Todo from './components/Todo.tsx'
import { ScrollView, SafeAreaView } from 'react-native';

function App(): React.JSX.Element {
  return (
    <ScrollView>
      <SafeAreaView>
        <Todo />
      </SafeAreaView>
    </ScrollView>
  );
}

export default App;
