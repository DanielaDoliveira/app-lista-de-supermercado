import {Home} from "./src/Home";
import {StatusBar } from "react-native";
export default function App(){
  return(
    
    <>
      <StatusBar barStyle="light-content" backgroundColor= "transparent" translucent/>
      <Home/>
    </>
  );
}
