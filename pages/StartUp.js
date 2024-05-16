import { Layout, Spinner } from "@ui-kitten/components"
import { StatusBar } from "expo-status-bar"
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";


export default function StartUp() {
    const [page, setPage] = useState("gettingstarted");
    const navigation = useNavigation();
  
    useEffect(() => {
      if (page == "gettingstarted") {
        navigation.navigate("gettingstarted");
      }
    });

    return(<Layout style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }}><Spinner style={{
        borderColor: "#ed0101"
    }}/></Layout>)
}