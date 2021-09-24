import React, { FC } from "react";
import { View, Image } from "react-native";
import { Card, Text } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import moment from "moment";

import { RedditPost } from "../../@types/redditPost";

import { styles } from "./styles";

interface IRedditCardProps {
  post: RedditPost;
}

const RedditCard: FC<IRedditCardProps> = ({ post }) => {
  const { colors } = useTheme();
  return (
    <Card
      style={[styles.card, { backgroundColor: colors.surface }]}
      elevation={2}
      onPress={() => {
        WebBrowser.openBrowserAsync(post?.url!);
      }}
    >
      <View style={styles.topRow}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{
            uri:
              post?.thumbnail === "self"
                ? "https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png"
                : post?.thumbnail,
          }}
        />
        <Text style={styles.title}>{post?.title}</Text>
      </View>
      <View style={styles.bottomRow}>
        <View style={styles.votesContainer}>
          <Ionicons name="thumbs-up" size={16} color={colors.text} />
          <Text style={styles.votesText}> {post?.ups}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "80%",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.textContainer}>
            <Text style={styles.detailsText}> r/{post?.subreddit}</Text>
          </View>
          <Text style={styles.detailsText}>
            {moment.unix(post?.created!).format("lll")}
          </Text>
        </View>
      </View>
    </Card>
  );
};

export default RedditCard;
