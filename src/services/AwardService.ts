import type { Award } from "@interfaces/IAward";
import { Http } from "@utils/HTTP";
const AwardService = {
  GetAwards: async (): Promise<Award[]> => {
    const response = await Http.GET("/bounties");
    return response.data;
  },
};
export default AwardService;
