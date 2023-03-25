// <!-- -----------------------------------------------------------------
// @copyright    (C) 2023 SoAS
// @file         Card.jsx
// @author       Daniel Alvarez <josamogax@gmail.com>
// @brief        Component to structure the tech card information.
// @details      Mobile only
// ------------------------------------------------------------------ -->

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const iconCards = [
  { id: 1, title: "Card 1", img: "/icons/icon1.png" },
  { id: 2, title: "Card 2", img: "/icons/icon2.png" },
  { id: 3, title: "Card 3", img: "/icons/icon3.png" },
  { id: 4, title: "Card 4", img: "/icons/icon4.png" },
];

export default function IconCards() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {iconCards.map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.id}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={card.img}
                title={card.title}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
