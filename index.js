import { Navigation } from "react-native-navigation";
import App from "./App";

Navigation.registerComponent('com.startup.home', () => App);
Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'com.startup.home'
             }
          }  
         ]
       }
     }
  });
});