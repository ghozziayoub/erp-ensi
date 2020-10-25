import React from "react"

import {
  createAppContainer,
  createSwitchNavigator,
} from "react-navigation"

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { setNavigator } from "./src/navigationRef"

import Icon from 'react-native-vector-icons/FontAwesome';

//context
import { AuthProvider } from "./src/context/AuthContext"
import { MemberProvider } from "./src/context/MemberContext"

//controller
import AuthControllerScreen from "./src/controllers/AuthControllerScreen"

//public screens
import SigninScreen from "./src/screens/public/SigninScreen"

//private screens
//Members
import MembersListScreen from "./src/screens/private/members/MembersListScreen"
import MemberDetailScreen from "./src/screens/private/members/MemberDetailScreen"
import MemberCreateScreen from "./src/screens/private/members/MemberCreateScreen"
import MemberEditScreen from "./src/screens/private/members/MemberEditScreen"

//Tasks
import TasksListScreen from "./src/screens/private/tasks/TasksListScreen"
import TaskDetailScreen from "./src/screens/private/tasks/TaskDetailScreen"
import TaskCreateScreen from "./src/screens/private/tasks/TaskCreateScreen"
import TaskEditScreen from "./src/screens/private/tasks/TaskEditScreen"

//Account
import AccountScreen from "./src/screens/private/AccountScreen"

const switchNavigator = createSwitchNavigator(
  {
    AuthController: AuthControllerScreen,

    loginFlow: createStackNavigator({
      Signin: SigninScreen,
    }),

    mainFlow: createBottomTabNavigator(
      {
        membersManagementFlow: {
          screen: createStackNavigator({
            MembersList: MembersListScreen,
            MemberDetail: MemberDetailScreen,
            MemberCreate: MemberCreateScreen,
            MemberEdit: MemberEditScreen,
          }),
          navigationOptions: {
            tabBarLabel: "Members",
            tabBarIcon: ({ tintColor }) => (
              <Icon name="users" size={24} color={tintColor} />
            )
          },
      
        },

        tasksManagementFlow: {
          screen: createStackNavigator({
            TasksList: TasksListScreen,
            TaskDetail: TaskDetailScreen,
            TaskCreate: TaskCreateScreen,
            TaskEdit: TaskEditScreen,
          }),
          navigationOptions: {
            tabBarLabel: "Tasks",
            tabBarIcon: ({ tintColor }) => (
              <Icon name="tasks" size={24} color={tintColor} />
            )
          },

        },
        Account: {
          screen: AccountScreen,
          navigationOptions: {
            tabBarLabel: "Account",
            tabBarIcon: ({ tintColor }) => (
              <Icon name="cog" size={24} color={tintColor} />
            )
          },
        }
      },
      {
        // order: ['HomePage', 'ProfilePage'],
        tabBarOptions: {
          showLabel: false,
          activeTintColor: '#105d89',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: 'white',
          }
        },
      },
    )

  },
  {
    initialRouteName: 'AuthController'
  }
)

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <MemberProvider>
      <AuthProvider>
        <App ref={(navigator) => { setNavigator(navigator) }} />
      </AuthProvider>
    </MemberProvider>

  )
}