import axios, { AxiosResponse } from "axios";
import React, { FC, useEffect, useState } from "react";
import { View, FlatList, RefreshControl } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useTheme } from "@react-navigation/native";

import CenteredPage from "../../components/Layout/CenteredPage";
import SafeArea from "../../components/Layout/SafeArea";
import RedditCard from "../../components/RedditCard";

import { RedditPost } from "../../@types/redditPost";
import { DashboardStackNavProps } from "../../navigation/Dashboard.stack";

const DashboardScreen = ({
  navigation,
}: DashboardStackNavProps<"DashboardScreen">) => {
  const { colors } = useTheme();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [redditPosts, setRedditPosts] = useState<RedditPost[] | null>(null);
  const getRedditPosts = async () => {
    setLoading(true);
    setError(false);

    try {
      const response: AxiosResponse = await axios.get(
        `https://reddit.com/r/spacex.json`
      );

      setRedditPosts(
        response.data.data.children
          .map((post: any) => {
            const {
              data: { thumbnail, title, ups, created, author, url, subreddit },
            } = post;
            return {
              thumbnail,
              title,
              ups,
              created,
              author,
              url,
              subreddit,
            };
          })
          .splice(2)
      );
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    getRedditPosts();
  }, []);

  if (!redditPosts) {
    return (
      <CenteredPage>
        <ActivityIndicator size="large" />
      </CenteredPage>
    );
  }

  return (
    <SafeArea>
      <FlatList
        data={redditPosts}
        keyExtractor={(item) => item?.created.toString()!}
        renderItem={({ item }) => <RedditCard post={item} />}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            tintColor={colors.primary}
            refreshing={loading}
            onRefresh={() => {
              getRedditPosts();
            }}
          />
        }
      />
    </SafeArea>
  );
};

export default DashboardScreen;
