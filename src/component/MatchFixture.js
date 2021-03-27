import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";

import Navbar from "./navigation/Navbar";
import MatchCard from "./Match/MatchCard";

import baseUri from "../../src/config/baseUri";
import axios from "axios";

export default function MatchFixture() {
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [responseData, setResponseData] = useState([]);

  const fetchData = React.useCallback(() => {
    setIsloading(true);
    axios
      .get(baseUri.api + "/match/matchfixtures", {
        params: {
          date: "20210327",
          utc: "+7",
        },
        headers: {
          "X-API-Key": "24578cdb-fc01-4794-9bb0-865dd8ac405c",
        },
      })
      .then((response) => {
        setResponseData(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  function renderCardMatch() {
    if (!isLoading) {
      return responseData.map((item) => {
        return (
          <MatchCard
            name={item.eventName}
            matchTimeStamp={item.matchTimeStamp}
            homeName={item.homeTeamEvent.name}
            awayName={item.awayTeamEvent.name}
            homeImage={item.homeTeamEvent.logoUrl}
            awayImage={item.awayTeamEvent.logoUrl}
          />
        );
      });
    } else {
      return <CircularProgress />;
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="sm">
        <Grid container direction="column" justify="center" alignItems="center">
          {renderCardMatch()}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
