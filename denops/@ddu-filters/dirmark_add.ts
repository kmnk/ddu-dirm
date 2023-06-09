import {
  BaseFilter,
  DduItem,
  SourceOptions,
} from "https://deno.land/x/ddu_vim@v1.13.0/types.ts";
import { Denops } from "https://deno.land/x/ddu_vim@v1.11.0/deps.ts";

type Params = Record<never, never>;

export class Filter extends BaseFilter<Params> {
  async filter(args: {
    denops: Denops;
    sourceOptions: SourceOptions;
    input: string;
    items: DduItem[];
  }): Promise<DduItem[]> {
    for (const item of args.items) {
      item.kind = "ddu-dirmark_add";
      if (item.display) {
        item.matcherKey = item.display;
        await console.log(item);
      }
    }
    return Promise.resolve(args.items);
  }

  params(): Params {
    return {};
  }
}
