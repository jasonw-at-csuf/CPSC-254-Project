<script lang="ts">
  let gptResponse = "";
  let loading = false;
  let promise: Promise<Response> | null = null;

  async function onSubmit(e: any) {
    loading = true;
    const formData = new FormData(e.target);

    const data: any = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }

    const rawResponse = fetch("", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    promise = rawResponse;
    const content = await rawResponse;

    gptResponse = await content.text();
    console.log(gptResponse);
    console.log(data);
  }
</script>

<form
  method="POST"
  on:submit|preventDefault={onSubmit}
  class="flex flex-col border shadow-md h-5/6 w-4/5 p-5 gap-2 items-center rounded-md bg-white md:h-1/2 max-w-5xl"
>
  <div class="flex flex-col w-full h-full gap-2 md:flex-row">
    <div class="flex flex-col w-full h-full gap-2 md:w-1/2">
      <span class="label-text">Code</span>
      <textarea
        required
        name="code"
        class="text-xs border resize-none w-full h-full p-2 font-mono"
      />
    </div>
    <div class="flex flex-col w-full h-full gap-2 md:w-1/2">
      <span class="label-text">Time Complexity</span>
      <div
        class="flex justify-center items-center text-5xl border resize-none w-full h-full p-2 font-mono"
      >
        {gptResponse}
      </div>
    </div>
  </div>

  {#if !loading}
    <button class="btn btn-wide">Submit</button>
  {:else}
    {#await promise}
      <button class="btn loading">loading</button>
    {:then}
      <button class="btn btn-wide">Submit</button>
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  {/if}
</form>
