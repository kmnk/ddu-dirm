export type DirmJson = {
  version: string;
  group: DirmGroup;
};

export type DirmGroup = {
}

export async function parse(jsonPath: string): Promise<DirmJson> {
  const jsonString = await Deno.readTextFile(
    jsonPath,
  );
  return JSON.parse(jsonString);
}

export async function load(): Promise<DirmJson> {
  return await parse("/Users/kmnk/.cache/denite-dirm/dirm.json");
}
