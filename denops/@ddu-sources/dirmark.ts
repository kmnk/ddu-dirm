import {
  BaseSource,
  Item,
  SourceOptions,
  Denops,
  fn,
  ActionData,
  ensureArray,
  isString,
  relative,
} from "../deps.ts"
import {
  load,
} from "../@dirmark/dirmark_json.ts"

type Params = {};

export class Source extends BaseSource<Params> {
  kind = "file";

  gather(
    args: {
      denops: Denops;
      sourceOptions: SourceOptions;
      sourceParams: Params;
    },
  ): ReadableStream<Item<ActionData>[]> {
    const { denops, sourceOptiions, sourceParams } = args;

    return new ReadableStream({
      async start(controller) {
        const json = await load();
        console.log(json);
        controller.enqueue(
          json.group.default.dirmarks.map((dirmark) => (
            {
              word: dirmark.name,
              action: {
                path: dirmark.path,
              },
            }
          )),
        );
        controller.close();
      },
    });
  }

  params(): Params {
    return {};
  }
}