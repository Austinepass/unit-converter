import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import convert from "convert-units";
import { Picker } from "@react-native-community/picker";
import colors from "../config/colors";

const MeasureView = ({ measure}) => {
	const units = convert().possibilities(measure);
	const [fromUnit, setFromUnit] = useState(units[0]);
	const [toUnit, setToUnit] = useState(units[1]);
    const [value, setValue] = useState('0');
	const [valueConverted, setValueConverted] = useState(0);

	useEffect(() => {
		setValueConverted(
			convert(+value)
				.from(fromUnit)
				.to(toUnit)
				.toFixed(2)
		);
	}, [value, fromUnit, toUnit]);

	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Picker
					style={styles.column}
					selectedValue={fromUnit}
					onValueChange={setFromUnit}>
					{units.map((unit, i) => (
						<Picker.Item label={unit} value={unit} key={i} />
					))}
				</Picker>
				<View style={styles.column}>
					<TextInput
						value={value}
						onChangeText={setValue}
						keyboardType='numeric'
						style={styles.input}
					/>
				</View>
			</View>

			<View style={styles.row}>
				<Picker
					style={styles.column}
					selectedValue={toUnit}
					onValueChange={setToUnit}>
					{units.map((unit, i) => (
						<Picker.Item label={unit} value={unit} key={i} />
					))}
				</Picker>
				<View style={styles.column}>
					<Text style={styles.text}>{valueConverted}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	column: {
		flex: 1,
		marginHorizontal: 20,
	},
	input: {
		height: 40,
		borderColor: colors.mainColor,
		borderBottomWidth: 1,
		fontSize: 30,
		textAlign: "center",
	},
	row: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	text: {
		height: 40,
		textAlign: "center",
		fontSize: 40,
		fontWeight: "bold",
	},
	title: {
		padding: 15,
		fontWeight: "bold",
		fontSize: 20,
		textAlign: "center",
		textTransform: "uppercase",
	},
});

export default MeasureView;
