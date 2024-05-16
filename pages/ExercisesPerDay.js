import { useNavigation } from "@react-navigation/native";
import { Layout, Text, Select, SelectItem, IndexPath } from "@ui-kitten/components";
import { Pressable } from "react-native";
import { Image } from "react-native";
import { useState } from "react";







export default function ExercisesPerDay() {
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
           
            <Text category="h5" style={{
                marginBottom: 100
            }}>How Many Exercises Per Day?</Text>
            <Text style={{
                marginBottom: 100
            }}>{"(this can be changed for the individual day later)"}</Text>
            <Select
            selectedIndex={selectedIndex}
            onSelect={index => setSelectedIndex(index)}
            value={displayValue}
            style={{
                width: 100,
                marginBottom: 200,
            }}
            
            >
                    <SelectItem title='1' />
                    <SelectItem title='2' />
                    <SelectItem title='3' />
                    <SelectItem title='4' />
                    <SelectItem title='5' />
                    <SelectItem title='6' />
                    <SelectItem title='7' />
                    <SelectItem title='8' />
                    <SelectItem title='9' />
                    <SelectItem title='10' />
            </Select>
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
        ]} onPressOut={() => {navigation.push("daysettings", {
            daynumber: 1,
        })}}>
            <Image source={nextarrow} style={{
                    width: 60,
                    height: 60,
                }}/>
            </Pressable>
            </Layout>
        </Layout>
    );

}