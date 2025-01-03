import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { colorScheme, theme } from "./_layout";
import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";

export default function MenuScreen() {
  const styles = createStyles(theme, colorScheme);

  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  return (
    <Container>
      <FlatList
        data={MENU_ITEMS} // list data
        keyExtractor={(item) => item.id.toString()} // key of items (same as key props)
        showsVerticalScrollIndicator={false} // show or hide scroll indicator
        contentContainerStyle={styles.contentContainer} // style parent container
        ItemSeparatorComponent={() => <View style={styles.separator} />} // component separator for each item
        ListFooterComponent={() => (
          <Text style={{ color: theme.text }}>End of Menu</Text>
        )} // component for the end of the list
        ListFooterComponentStyle={{ marginHorizontal: "auto" }} // styles for ListFooterComponent
        ListEmptyComponent={() => <Text>Menu is empty</Text>} // component for empty list
        // render item
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.itemTextContainer}>
              <Text style={[styles.itemTitle, styles.itemText]}>
                {item.title}
              </Text>
              <Text style={styles.itemText}>{item.description}</Text>
            </View>
            <Image source={MENU_IMAGES[item.id - 1]} style={styles.itemImage} />
          </View>
        )}
      />
    </Container>
  );
}

function createStyles(theme: any, colorScheme: any) {
  return StyleSheet.create({
    contentContainer: {
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 12,
      backgroundColor: theme.background,
    },
    separator: {
      height: 1,
      backgroundColor: colorScheme === "dark" ? "papayawhip" : "#000",
      width: "50%",
      maxWidth: 300,
      marginHorizontal: "auto",
      marginBottom: 10,
    },
    item: {
      flexDirection: "row",
      width: "100%",
      maxWidth: 600,
      height: 100,
      marginBottom: 10,
      borderStyle: "solid",
      borderColor: colorScheme === "dark" ? "papayawhip" : "#000",
      borderWidth: 1,
      borderRadius: 20,
      overflow: "hidden",
      marginHorizontal: "auto",
    },
    itemTextContainer: {
      width: "65%",
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 5,
      flexGrow: 1,
    },
    itemTitle: {
      fontSize: 18,
      textDecorationLine: "underline",
    },
    itemText: {
      color: theme.text,
    },
    itemImage: {
      width: 100,
      height: 100,
    },
  });
}
