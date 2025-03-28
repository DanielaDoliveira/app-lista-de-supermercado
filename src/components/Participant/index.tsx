import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";

type Props = {
    name: string,
    onRemove: () => void,
    onAdd: () => void,
}
export function Participant({ name,onRemove,onAdd,...rest }:Props) {

    return<View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
        <TouchableOpacity style={styles.button} onPress={onRemove}>
            <Text style={ styles.buttonText}>
                -
            </Text>
        </TouchableOpacity>
    </View>
}
