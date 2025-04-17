import { Text, View, FlatList, ActivityIndicator, Image } from "react-native";
import { useState, useEffect } from "react";
import { getPosts } from "@/api/api";
import PostCard from "@/src/componenets/PostCard";
import { useNavigation } from "expo-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation ();

  // Set header options
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Image
          source={{ uri: "https://smakidnia.pl/wp-content/uploads/2025/02/Add-a-heading-5.png" }} // Remplacez par l'URL de votre image
          style={{ width: 120, height: 40, resizeMode: "contain" }}
        />
        </View>
       )
      //  ,
      // headerStyle: {
      //   backgroundColor: "white", // Couleur de fond du header
      // },
    });
  }, [navigation]);

  // Call posts
  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    
      <FlatList
            data={posts}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            columnWrapperStyle={{
              justifyContent: "space-between", // Espace entre les colonnes
              marginBottom: 10,
            }}
            renderItem={({ item }) => (
              <PostCard
                title={item.title.rendered}
                image={item.yoast_head_json.og_image[0].url || "https://via.placeholder.com/150"}
              />
            )}
          />
    
  );
}