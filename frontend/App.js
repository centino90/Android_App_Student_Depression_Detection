import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { PaperProvider} from 'react-native-paper'
import {
  QueryClient,
  QueryClientProvider
} from 'react-query'
import AppStackNavigator from './src/navigation/AppStackNavigator'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    }
  }
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NavigationContainer>
          <AppStackNavigator />
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  )
}

export default App
