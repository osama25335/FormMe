// WorkerRegistrationPDF.jsx
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12 },
  section: { marginBottom: 10 },
  label: { fontWeight: "bold" },
  row: { marginBottom: 4 },
});

const PdfViewerPage_4 = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>Worker Registration Form</Text>

      {Object.entries(formData).map(([key, value], idx) => (
        <View key={idx} style={styles.row}>
          <Text>
            <Text style={styles.label}>{key}:</Text> {value || "N/A"}
          </Text>
        </View>
      ))}
    </Page>
  </Document>
);

export default PdfViewerPage_4;
