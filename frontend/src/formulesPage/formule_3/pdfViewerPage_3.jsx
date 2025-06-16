import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: "Helvetica",
    lineHeight: 1.5,
  },
  section: {
    marginBottom: 10,
    paddingBottom: 6,
    borderBottom: "1px solid #ccc",
  },
  label: {
    fontWeight: "bold",
    color: "#333",
  },
  value: {
    marginTop: 2,
    color: "#000",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "bold",
  },
});

const PdfViewerPage_3 = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Workshop Evaluation Summary</Text>

      {[
        ["Name of the Workshop", formData.workshopName],
        ["Subject of the Workshop", formData.subject],
        ["Location", formData.location],
        ["Date", formData.date],
        ["Instructor Name", formData.instructor],
        ["Signed by", formData.signedBy],
      ].map(([label, value], idx) => (
        <View key={idx} style={styles.section}>
          <Text style={styles.label}>{label}:</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      ))}

      {[
        ["Presentation Clarity", formData.presentationClarity],
        ["Session Organization", formData.sessionOrganization],
        ["Material Sufficiency", formData.materialSufficiency],
        ["Instructor Capability", formData.instructorCapability],
        ["Attendance", formData.attendance],
        ["Future Interest", formData.futureInterest],
      ].map(([label, value], idx) => (
        <View key={idx + 100} style={styles.section}>
          <Text style={styles.label}>{label}:</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      ))}

      <View style={styles.section}>
        <Text style={styles.label}>What did you like the most of this workshop?</Text>
        <Text style={styles.value}>{formData.likedMost}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Areas needing improvement:</Text>
        <Text style={styles.value}>{formData.improvementAreas}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Signature of the Institutional Authority:</Text>
        <Text style={styles.value}>{formData.authoritySignature}</Text>
      </View>
    </Page>
  </Document>
);

export default PdfViewerPage_3;
