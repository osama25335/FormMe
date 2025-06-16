import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Define custom styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
    lineHeight: 1.6,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    marginBottom: 4,
  },
});


const PdfViewerPage_1 = ({ formData }) => (
    <Document>
    <Page size="A4" style={styles.page}>
      {/* Profile */}
      <View style={styles.section}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.item}>
          <Text style={styles.label}>Username: </Text>
          {formData.username}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.label}>About: </Text>
          {formData.about}
        </Text>
      </View>

      {/* Personal Info */}
      <View style={styles.section}>
        <Text style={styles.title}>Personal Information</Text>
        <View style={styles.row}>
          <Text style={styles.item}>
            <Text style={styles.label}>First Name: </Text>
            {formData.firstName}
          </Text>
          <Text style={styles.item}>
            <Text style={styles.label}>Last Name: </Text>
            {formData.lastName}
          </Text>
        </View>
        <Text style={styles.item}>
          <Text style={styles.label}>Email: </Text>
          {formData.email}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.label}>Country: </Text>
          {formData.country}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.label}>Street Address: </Text>
          {formData.street}
        </Text>
        <View style={styles.row}>
          <Text style={styles.item}>
            <Text style={styles.label}>City: </Text>
            {formData.city}
          </Text>
          <Text style={styles.item}>
            <Text style={styles.label}>State: </Text>
            {formData.state}
          </Text>
          <Text style={styles.item}>
            <Text style={styles.label}>ZIP: </Text>
            {formData.zip}
          </Text>
        </View>
      </View>

      {/* Notifications */}
      <View style={styles.section}>
        <Text style={styles.title}>Notifications</Text>
        <Text style={styles.item}>
          <Text style={styles.label}>By Email: </Text>
          {Object.entries(formData.byEmail)
            .filter(([_, val]) => val)
            .map(([key]) => key)
            .join(", ") || "None"}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.label}>Push Notification: </Text>
          {formData.pushNotification || "None"}
        </Text>
      </View>
    </Page>
  </Document>

);


export default PdfViewerPage_1;