import { useNavigation } from "@react-navigation/native";
import { Layout, Text, Select, SelectItem, IndexPath } from "@ui-kitten/components";
import { Pressable } from "react-native";
import { Image } from "react-native";
import { useState } from "react";







export default function DaySettings(props) {
    const nextarrow = require("../images/nextarrow.png")
    const backarrow = require("../images/backarrow.png")
    const navigation = useNavigation();
    const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0))
    const data = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"
    ];
    const displayValue = data[selectedIndex.row]
    return (
        <Layout style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
           
            <Text>DaySettings</Text>
            <Layout style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: 300
            }}>
            <Pressable  style={({pressed}) => [
          {
            backgroundColor: pressed ? 'gray' : 'white',
          }, {
            borderRadius: 20
          }
        ]} onPressOut={() => {navigation.goBack()}}>
            <Image source={backarrow} style={{
                    width: 60,
                    height: 60,
                }}/>
            </Pressable>
            <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'gray' : 'white',
          }, {
            borderRadius: 20
          }
        ]} onPressOut={() => {
            navigation.goBack();
        }}>
            <Image source={nextarrow} style={{
                    width: 60,
                    height: 60,
                }}/>
            </Pressable>
            </Layout>
        </Layout>
    );

}