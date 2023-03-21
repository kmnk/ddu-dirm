export async function main(denops: Denops) {
  denops.dispatcher = {
    async setJsonPath(
      jsonPath: string,
    ): Promise<void> {
      console.log(jsonPath);
    },
  };
}
