import React from 'react'
import { BackHandler } from 'react-native'
import AppContainer from '../components/AppContainer'
import AdminDepressedStudentsPage from '../components/AdminDepressedStudentsPage'

const AdminDashboard = ({ navigation }) => {
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
        HeaderTitle: 'Admin Dashboard',
        isNestedPage: false
    }

    const NavigationProps = {
        backRoute: '',
        navigation: navigation
    }

    const ContentProps = {
        questionnaire: {}
    }

    const MessageProps = {
        message: 'Answers are successfully saved'
    }

    return (
        <AppContainer 
            HeaderProps={HeaderProps} 
            NavigationProps={NavigationProps} 
            ContentProps={ContentProps} 
            MessageProps={MessageProps}
            AppContent={() => <AdminDepressedStudentsPage /> }
        />
    )
}

export default AdminDashboard