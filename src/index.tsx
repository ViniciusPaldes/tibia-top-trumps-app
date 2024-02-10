import * as React from 'react';
import MainNavigation from './navigation';
import {Provider as PaperProvider} from 'react-native-paper';

function App() {
  return (
    <PaperProvider>
      <MainNavigation />
    </PaperProvider>
  );
}

export default App;
