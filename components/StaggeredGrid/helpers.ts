import { AnimeParams } from "animejs";
import { CoolerAnimationConfig, SimpleAnimationConfig } from "./constants";

export function getAnimationConfig(isCooler: boolean): AnimeParams {
  if (isCooler) {
    return CoolerAnimationConfig;
  }

  return SimpleAnimationConfig;
}
