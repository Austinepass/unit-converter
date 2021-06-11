import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import convert from "convert-units";
import colors from "./app/config/colors";
import Screen from "./app/components/Screen";
import MeasureView from "./app/components/MeasureView";

const measures = convert().measures();

function unCamelCase(value) {
	return value.replace(/([A-Z])/g, " $1");
}

export default function App() {
	const [index, setIndex] = useState(0);
	const [routes] = useState(
		measures.map((m) => ({ key: m, title: unCamelCase(m) }))
	);

	return (
		<Screen>
			<Text style={styles.title}>Unit Converter</Text>
			<TabView
				navigationState={{ index, routes }}
				renderScene={({ route }) => (
					<MeasureView measure={route.key} />
				)}
				onIndexChange={setIndex}
				initialLayout={{ width: Dimensions.get("window").width }}
				renderTabBar={(props) => (
					<TabBar
						{...props}
						indicatorStyle={{ backgroundColor: "white" }}
						scrollEnabled
						tabStyle={{ width: "auto" }}
						style={{ backgroundColor: colors.mainColor }}
					/>
				)}></TabView>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	input: {
		height: 40,
		borderColor: colors.mainColor,
		borderBottomWidth: 1,
		fontSize: 30,
		textAlign: "center",
	},
	title: {
		padding: 15,
		fontWeight: "bold",
		color: colors.mainColor,
		fontSize: 20,
		textAlign: "center",
		textTransform: "uppercase",
	},
});
