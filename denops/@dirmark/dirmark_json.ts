export type DirmarkJson = {
  version: string;
  group: DirmarkGroup;
};

export type DirmarkGroup = {
};

export async function parse(jsonPath: string): Promise<DirmarkJson> {
  const jsonString = await Deno.readTextFile(
    jsonPath,
  );
  return JSON.parse(jsonString);
}

export async function load(): Promise<DirmarkJson> {
  return await parse("/Users/kmnk/.cache/denite-dirmark/dirmark.json");
}
