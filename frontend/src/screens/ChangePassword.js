import React from 'react'
import { BackHandler, View } from 'react-native'
import AppContainer from '../components/AppContainer'
import _TextInput from '../components/TextInput'

const ChangePassword = ({ navigation }) => {
  React.useEffect(() => {
    const handleBackButton = () => true;
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButton
      )
    }
  }, [])

  const HeaderProps = {
    HeaderTitle: 'Change Password',
    isNestedPage: true
  }

  const NavigationProps = {
    backRoute: 'StudentDashboard',
    navigation: navigation
  }

  const ContentProps = {
    questionnaire: {}
  }

  const MessageProps = {
    message: ''
  }  


  return (
    <AppContainer HeaderProps={HeaderProps} NavigationProps={NavigationProps} MessageProps={MessageProps}
      AppContent={() => {
        return (
          <View>
            <_TextInput label='new password' />
            <_TextInput label='confirm new password' />
          </View>
        )
      }}
    />
  )
}
export default ChangePassword