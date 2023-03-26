// <!-- -----------------------------------------------------------------
// @copyright    (C) 2023 SoAS
// @file         Card.jsx
// @author       Daniel Alvarez <josamogax@gmail.com>
// @brief        Component to structure the tech card information.
// @details      Mobile only
// ------------------------------------------------------------------ -->

import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { technologies } from "../constants";

const TechCard = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-12">
      {technologies.map((technology) => (
        <Card
          key={technology.name}
          className="w-20 border-white border-2 rounded-lg"
        >
          <div className="flex items-center justify-center">
            <CardMedia
              component="img"
              image={technology.icon}
              alt={technology.name}
              className="w-15 h-15 object-contain"
            />
          </div>

          <CardContent className="text-center">
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className="lg:text-sm"
            >
              {technology.detail}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TechCard;
