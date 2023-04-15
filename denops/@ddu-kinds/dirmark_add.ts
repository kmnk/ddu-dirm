import {
  ActionFlags,
  Actions,
  BaseKind,
  DduItem,
  SourceOptions,
} from "https://deno.land/x/ddu_vim@v1.13.0/types.ts";

export class Kind extends BaseKind<Params> {
  actions: Actions<Params> = {
    add: async (
//      args: {
//        denops: Denops;
//        items: DduItem[];
//        sourceOptions: SourceOptions;
//      },
    ) => {
      const jsonString = await Deno.readTextFile(
        "~/.cache/denite-dirmark/dirmark.json",
      );
      console.log(jsonString);
      const json = JSON.parse(jsonString);
      console.log(json);

      return ActionFlags.None;
    },
    open: async (
      args: {
        denops: Denops;
        items: DduItem[];
        sourceOptions: SourceOptions;
      },
    ) => {
      const jsonString = await Deno.readTextFile(
        "~/.cache/denite-dirmark/dirmark.json",
      );
      console.log(jsonString);
      const json = JSON.parse(jsonString);
      console.log(json);

      return ActionFlags.None;
    },
  };
}
