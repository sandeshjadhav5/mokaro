// src/components/PdfDocument.tsx

import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    padding: 0,
    width: "100%",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    width: "100%",
  },
  content: {
    fontSize: 12,
    textAlign: "justify",
    width: "100%",
  },
});

const PDFDocument: React.FC = () => (
  <Document>
    <Page style={styles.page} orientation="portrait">
      <Text style={styles.title}>Invoice Details</Text>
      <View style={styles.content}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
          eleifend tellus.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nullam id eleifend tellus.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam id eleifend tellus.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nullam id eleifend
          tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          id eleifend tellus.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nullam id eleifend tellus.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam id eleifend tellus.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nullam id eleifend
          tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          id eleifend tellus.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nullam id eleifend tellus.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam id eleifend tellus.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nullam id eleifend
          tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          id eleifend tellus.
        </Text>
        {/* Add more content here */}
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
