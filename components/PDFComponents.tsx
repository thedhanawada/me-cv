'use client';

import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 40
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  headerText: {
    marginLeft: 20
  },
  section: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  item: {
    marginBottom: 10
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  itemSubtitle: {
    fontSize: 10,
    color: '#666666'
  },
  itemDescription: {
    fontSize: 10,
    marginTop: 5
  }
});

export function PDFHeader({ name, title, image }) {
  return (
    <View style={styles.header}>
      {image && (
        <Image
          src={image}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
      )}
      <View style={styles.headerText}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
        <Text style={{ fontSize: 12, color: '#666666' }}>{title}</Text>
      </View>
    </View>
  );
}

export function PDFSection({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

export function PDFItem({ title, subtitle, description }) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{title}</Text>
      {subtitle && <Text style={styles.itemSubtitle}>{subtitle}</Text>}
      {description && <Text style={styles.itemDescription}>{description}</Text>}
    </View>
  );
}
