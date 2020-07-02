import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#488286",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 15
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})

export default props => {
    return (
        <TouchableHighlight style={styles.appButtonContainer} onPress={() => props.onClick()}>
            <Text style={styles.appButtonText}>{props.label}</Text>
        </TouchableHighlight>
    )
}