<form
  class="flex flex-col border h-5/6 w-4/5 p-2 gap-2 items-center md:h-80 max-w-3xl"
>
  <div class="flex flex-col w-full h-full md:flex-row">
    <div class="flex flex-col w-full h-full md:w-1/2">
      <span class="label-text">Code</span>
      <select class="select select-bordered w-full">
        <option disabled selected>Select Programming Language</option>
        <option>C++</option>
        <option>Python</option>
        <option>Javascript</option>
        <option>Typescript</option>
      </select>
      <textarea class="border resize-none w-full h-full p-2" />
    </div>
    <div class="flex flex-col w-full h-full md:w-1/2">
      <span class="label-text">Explanation</span>
      <select class="select select-bordered w-full">
        <option selected>English</option>
      </select>
      <textarea class="border resize-none w-full h-full p-2" />
    </div>
  </div>
  <button class="btn btn-wide">Submit</button>
</form>
