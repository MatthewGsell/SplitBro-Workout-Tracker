import { useNavigation } from "@react-navigation/native";
import { Layout, Text, Button } from "@ui-kitten/components";
import { Image } from "react-native";







export default function GettingStarted() {
    const navigation = useNavigation();
    const muscle = require("../images/muscle.png")

    return (
        <Layout style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Layout style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 150
            }}>
                <Text category="h1" style={{
                    color: "#ed0101",
                    textAlign: "center",
                    marginBottom: 20
                }}>SplitBro Workout Tracker</Text>
                <Image source={muscle} style={{
                    width: 80,
                    height: 80,
                }}/>
            </Layout>
            <Text category="h5" style={{textAlign: "center"}}>A Seemless Way to Track Workouts</Text>
            <Button style={{
                backgroundColor: "#ed0101", 
                borderRadius: 10,
                marginTop: 150
                
            }} size="giant" onPressOut={() => {
                navigation.push("howmanydays")
            }}>Get Started</Button>
        </Layout>
    )

}