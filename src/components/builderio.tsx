import {
  Favorite,
  Settings,
  Notifications,
  Tune,
  Search,
  SwapVert,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

export {
  IconButton,
  Button,
  TextField,
  Select,
  Radio,
  Checkbox,
} from "@mui/material";
export { Tune, Search, LocalGasStation, People } from "@mui/icons-material";

export function LikeButton() {
  return (
    <IconButton>
      <Favorite />
    </IconButton>
  );
}

export function SettingsButton() {
  return (
    <IconButton>
      <Settings />
    </IconButton>
  );
}

export function NotificationButton() {
  return (
    <IconButton>
      <Notifications />
    </IconButton>
  );
}

export function SearchButton() {
  return (
    <IconButton>
      <Search />
    </IconButton>
  );
}

export function TuneButton() {
  return (
    <IconButton>
      <Tune />
    </IconButton>
  );
}

export function SwapButton() {
  return (
    <Button variant="contained">
      <SwapVert />
    </Button>
  );
}
