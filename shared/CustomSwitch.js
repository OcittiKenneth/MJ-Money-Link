import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export const CustomSwtich = ({ selectionMode, option1, option2, onSelectSwitch }) => {

    const [getSelectedMode, setGetSelectedMode] = useState(selectionMode);

    const updateSwitchData = (value) => {
        setGetSelectedMode(value);
        onSelectSwitch(value)
    }

    return (
        <View style={{ height: 44, width: "100%", backgroundColor: "#e4e4e4", borderRadius: 10, borderColor: "#AD40AF", flexDirection: "row", justifyContent: "center", marginVertical: 20 }}>
            <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(1)}
                style={{
                    flex: 1,
                    backgroundColor: getSelectedMode == 1 ? "#AD40AF" : "#e4e4e4",
                    borderRadius: 10,
                    alignItems: "center"
                }}
            >
                <Text style={{
                    color: getSelectedMode == 1 ? 'white' : "#AD40AF",
                    fontSize: 19,
                    fontWeight: "700",
                    paddingTop: 5
                }}
                >{option1}</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(2)}
                style={{
                    flex: 1,
                    backgroundColor: getSelectedMode == 2 ? "#AD40AF" : "#e4e4e4",
                    borderRadius: 10,
                    alignItems: "center"
                }}
            >
                <Text style={{
                    color: getSelectedMode == 2 ? 'white' : "#AD40AF",
                    fontSize: 19,
                    fontWeight: "700",
                    paddingTop: 5
                }}
                >{option2}</Text>
            </TouchableOpacity>
        </View>
    )

}