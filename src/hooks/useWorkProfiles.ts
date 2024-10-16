import dayjs from "dayjs";
import type { WorkCardProps } from "src/models/WorkCardProps";

const workProfiles: Array<WorkCardProps & { illustrationUrl: string }> = [
  {
    iconUrl: "/images/synapse.svg",
    title: "Synapse Network",
    description:
      "Build crucial interfaces, ensure proper communication between dapp and Ethereum contracts. Build customized vestings and stakings for other projects",
    startDate: dayjs("2022-03-15"),
    endDate: "present",
    tags: ["React", "Typescript", "Web3", "Wagmi"],
    illustrationUrl: "/images/ethereum_undraw.svg",
  },
];

export const useWorkProfiles = () => {
  return {
    profiles: workProfiles,
  };
};
