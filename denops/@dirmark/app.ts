export async function main(denops: Denops) {
  denops.dispatcher = {
    async redrawTree(
      jsonPath: string,
    ): Promise<void> {
      console.log(jsonPath);
    },
  };
}
