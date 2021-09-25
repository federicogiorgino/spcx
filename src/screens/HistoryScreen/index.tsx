import React, { FC, useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import axios, { AxiosResponse } from "axios";

import { HistoricEvent } from "../../@types/historicEvent";
import CenteredPage from "../../components/Layout/CenteredPage";
import SafeArea from "../../components/Layout/SafeArea";

const HistoryScreen: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [history, setHistory] = useState<HistoricEvent[] | null>(null);

  useEffect(() => {
    const getHistory = async () => {
      setError(false);
      setLoading(true);

      try {
        const response: AxiosResponse = await axios.get(
          "https://api.spacexdata.com/v4/history"
        );

        setHistory(response.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    getHistory();
  }, []);

  if (!history) {
    return (
      <CenteredPage>
        <ActivityIndicator size="large" />
      </CenteredPage>
    );
  }

  return (
    <SafeArea>
      <FlatList
        data={history}
        keyExtractor={(item) => item?.id.toString()!}
        renderItem={({ item }) => <Text>Lol</Text>}
      />
    </SafeArea>
  );
};

export default HistoryScreen;
