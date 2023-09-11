import React from "react";
import { StyleSheet } from "react-native";

import AppText from "./AppText";
import defaultStyles from "../config/styles";

function ErrorMessage({ errorMsg, visible }) {
  if (!visible || !errorMsg) return null;
  return <AppText style={styles.error}>{errorMsg}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: defaultStyles.colors.error,
  },
});
export default ErrorMessage;
