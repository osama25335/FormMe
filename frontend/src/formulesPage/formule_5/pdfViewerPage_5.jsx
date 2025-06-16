import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 35,
    fontSize: 11,
    fontFamily: "Helvetica",
    backgroundColor: "#fff",
    lineHeight: 1.6,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#1e3a8a",
  },
  section: {
    marginBottom: 12,
  },
  sectionHeader: {
    fontSize: 13,
    marginBottom: 8,
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#000",
  },
  label: {
    fontWeight: "bold",
  },
  text: {
    marginBottom: 4,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    width: "32%",
  },
});

const PdfViewerPage_5 = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Room Reservation Form</Text>

      {/* Personal Information */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Personal Information</Text>

        <Text style={styles.text}>
          <Text style={styles.label}>Name: </Text>
          {formData.name}
        </Text>

        <View style={styles.row}>
          <Text style={[styles.text, styles.column]}>
            <Text style={styles.label}>Country: </Text>
            {formData.country}
          </Text>
          <Text style={[styles.text, styles.column]}>
            <Text style={styles.label}>State: </Text>
            {formData.state}
          </Text>
          <Text style={[styles.text, styles.column]}>
            <Text style={styles.label}>City: </Text>
            {formData.city}
          </Text>
        </View>

        <Text style={styles.text}>
          <Text style={styles.label}>Mailing Address: </Text>
          {formData.address}
        </Text>

        <View style={styles.row}>
          <Text style={[styles.text, styles.column]}>
            <Text style={styles.label}>Phone: </Text>
            {formData.phone}
          </Text>
          <Text style={[styles.text, styles.column]}>
            <Text style={styles.label}>Email: </Text>
            {formData.email}
          </Text>
        </View>
      </View>

      {/* Reservation Details */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Reservation Details</Text>

        <Text style={styles.text}>
          <Text style={styles.label}>Rooms Required: </Text>
          {formData.rooms}
        </Text>

        <Text style={styles.text}>
          <Text style={styles.label}>Room Type Selected: </Text>
          {formData.roomType}
        </Text>

        <Text style={styles.text}>
          <Text style={styles.label}>Purpose of Booking: </Text>
          {formData.purpose}
        </Text>
      </View>
    </Page>
  </Document>
);


export default PdfViewerPage_5;
