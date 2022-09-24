import { SafeAreaView } from "react-native";
import { RootStack } from "./modules/navigation/rootStack";

export default function App() {
  return (
    <SafeAreaView style ={{flex: 1}}>
      <RootStack/> 
    </SafeAreaView>
  );
}