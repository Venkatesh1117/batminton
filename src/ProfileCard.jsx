import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#ff3d00", // Red color like Hong Kong flag
    color: "#fff",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    width: 24,
    height: 24,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
  },
}));

export default function ProfileCard() {
  return (
    <Stack alignItems="center" spacing={1}>
      {/* Profile with Badge */}
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={"🇭🇰"} // Hong Kong Flag as Badge
      >
        <Avatar
          alt="Leung Yuet Yee"
          src="/static/images/avatar/2.jpg"
          sx={{ width: 80, height: 80 }}
        />
      </StyledBadge>

      {/* User Name */}
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        LEUNG
      </Typography>
      <Typography variant="body2">Yuet Yee</Typography>
    </Stack>
  );
}