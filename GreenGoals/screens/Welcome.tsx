import * as React from "react";
import { useEffect } from "react";
import { Image, StyleSheet, View, SafeAreaView, Alert } from "react-native";
import { Color, Padding, FontFamily } from "../GlobalStyles";
import ContinueButton from "../components/ContinueButton";
 

const Welcome = () => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.colorWhite }}>
            <View style={styles.container}>
                <View style={styles.iconLayout}>
                    <Image
                        style={styles.iconLogo10}
                        source={require("../assets/greenlogo.png")}
                    />
                </View>

                <View style={styles.bottomContainer}>
                    <ContinueButton
                        destination="Login"
                        buttonText="Get Started"
                        textStyle={{
                            fontWeight: "700",
                            fontFamily: FontFamily.montserratBold,
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Padding.p_11xl,
        backgroundColor: Color.colorWhite,
    },
    iconLayout: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    iconLogo10: {
        width: "70%",
        aspectRatio: 1,
        resizeMode: "contain",
    },
    bottomContainer: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 20,
    },
});

export default Welcome;
