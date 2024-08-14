/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Tune, Search, LocalGasStation, People } from "@mui/icons-material";

type FigmaProps = unknown;

function Mapper(props: FigmaProps) {
  const figmaIconToIcon: Record<string, JSX.Element> = {
    "vuesax/linear/filter": <Tune />,
    "search-normal": <Search />,
    "vuesax/bold/gas-station": <LocalGasStation />,
    "vuesax/bold/profile-2user": <People />,
  };
  return figmaIconToIcon[props.$name] ?? <></>;
}
