import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    backgroundColor: "#f7f7f7",
  },
  section: {
    marginBottom: 10,
    paddingBottom: 4,
    borderBottom: "1px solid #ccc",
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  label: {
    fontSize: 12,
    fontWeight: 600,
  },
  value: {
    marginTop: 2,
    fontSize: 12,
    color: "#333",
  },
});

const PdfViewerPage_2 = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Green Card Application</Text>

      {[
        ["Name", formData.Name],
        ["Country of Birth", formData["Country of Birth"]],
        ["Sex", formData.Sex],
        ["Email Address", formData["Email Address"]],
        ["Confirm Email Address", formData["Confirm Email Address"]],
        ["Telephone", formData.Telephone],
        ["Home", formData.Home],
        ["Office", formData.Office],
        ["Marital Status", formData["Marital Status"]],
        ["List of unmarried children under 21", formData["Children under 21"]],
        ["No children", formData["No children"] ? "Yes" : "No"],
        ["Employment Status", formData["Employment Status"]],
        ["Service and Payment", formData["Service and Payment"]?.join(", ")],
        ["Submission Date", formData["Submission Date"]],
      ].map(([label, value], idx) => (
        <View style={styles.section} key={idx}>
          <Text style={styles.label}>{label}:</Text>
          <Text style={styles.value}>{value || "—"}</Text>
        </View>
      ))}
    </Page>
  </Document>
);


export default PdfViewerPage_2;