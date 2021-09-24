import React, { FC, useEffect, useState } from "react";
import { View, Image } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import axios, { AxiosResponse } from "axios";
import * as WebBrowser from "expo-web-browser";

import CenteredPage from "../../components/Layout/CenteredPage";
import SafeArea from "../../components/Layout/SafeArea";

import { styles } from "./styles";
import { CompanyInfo } from "../../@types/companyInfos";
import Spacer from "../../components/Layout/Spacer";

const CompanyScreen: FC = () => {
  const { colors } = useTheme();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [companyInfos, setCompanyInfos] = useState<CompanyInfo | null>(null);

  useEffect(() => {
    const getInfos = async () => {
      setError(false);
      setLoading(true);

      try {
        const response: AxiosResponse = await axios.get(
          "https://api.spacexdata.com/v4/company"
        );

        setCompanyInfos(response.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    getInfos();
  }, []);

  if (loading || !companyInfos) {
    return (
      <CenteredPage>
        <ActivityIndicator size="large" />
      </CenteredPage>
    );
  }

  return (
    <SafeArea>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          source={require("../../../assets/spacex.png")}
          style={styles.logo}
        />

        <Text style={styles.underLogoText}>
          {companyInfos?.founder}, {companyInfos?.founded}
        </Text>

        <Spacer y={10} />

        <Text
          style={[styles.linkText, { color: colors.primary }]}
          onPress={() => {
            WebBrowser.openBrowserAsync(companyInfos?.links.website);
          }}
        >
          {companyInfos?.links.website}
        </Text>

        <Spacer y={30} />

        <Text style={styles.summaryText}>{companyInfos?.summary}</Text>

        <Spacer y={30} />

        <View style={styles.labelValueRow}>
          <Text style={styles.labelText}>CEO</Text>
          <Text style={styles.valueText}>{companyInfos?.ceo}</Text>
        </View>

        <Spacer y={10} />

        <View style={styles.labelValueRow}>
          <Text style={styles.labelText}>COO</Text>
          <Text style={styles.valueText}>{companyInfos?.coo}</Text>
        </View>

        <Spacer y={10} />

        <View style={styles.labelValueRow}>
          <Text style={styles.labelText}>CTO</Text>
          <Text style={styles.valueText}>{companyInfos?.cto}</Text>
        </View>

        <Spacer y={10} />

        <View style={styles.labelValueRow}>
          <Text style={styles.labelText}>CTO Propulsion</Text>
          <Text style={styles.valueText}>{companyInfos?.cto_propulsion}</Text>
        </View>

        <Spacer y={30} />

        <View style={styles.labelValueRow}>
          <Text style={styles.labelText}>Valuation</Text>
          <Text style={styles.valueText}>${companyInfos?.valuation}</Text>
        </View>

        <Spacer y={10} />

        <View style={styles.labelValueRow}>
          <Text style={styles.labelText}>Employees</Text>
          <Text style={styles.valueText}>{companyInfos?.employees}</Text>
        </View>

        <Spacer y={10} />

        <View style={styles.labelValueRow}>
          <Text style={styles.labelText}>Launch Sites</Text>
          <Text style={styles.valueText}>{companyInfos?.launch_sites}</Text>
        </View>

        <Spacer y={10} />

        <View style={styles.labelValueRow}>
          <Text style={styles.labelText}>Test Sites </Text>
          <Text style={styles.valueText}>{companyInfos?.test_sites}</Text>
        </View>
      </View>
    </SafeArea>
  );
};

export default CompanyScreen;
