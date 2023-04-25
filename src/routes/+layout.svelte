<script>
  import "../app.css";
  import { BarsSolid } from "svelte-awesome-icons";
</script>

<svelte:head>
  <title>title</title>
</svelte:head>

<div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <div class="flex flex-col w-full h-full justify-between items-end">
      <nav
        class="flex justify-end bg-base-100 text-base-content w-full border shadow-md p-4 lg:hidden"
      >
        <label for="my-drawer-2" class="drawer-button hover:cursor-pointer"
          ><BarsSolid /></label
        >
      </nav>
      <!-- <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden"
        >Open drawer</label
      > -->
      <div class="flex flex-col h-full w-full items-center justify-center">
        <slot />
      </div>
      <div class="flex flex-col m-4 text-right text-xs text-gray-400">
        <span>open source under <span class="underline">MIT license</span></span
        >
        <a
          class="hover:underline"
          href="https://github.com/jasonw-at-csuf/CPSC-254-Project"
          >view source on github</a
        >
      </div>
    </div>
  </div>
  <div class="drawer-side border shadow-md">
    <label for="my-drawer-2" class="drawer-overlay" />
    <div class="menu p-4 w-80 bg-base-100 text-base-content gap-20">
      <div class="p-4 font-bold">twofivefour</div>
      <ul>
        <li><a href="./explain">Explain Code</a></li>
        <li><a href="./time_complexity">Time Complexity</a></li>
        <li><a href="./translate">Translate Code</a></li>
        <li><a href="./documentation">Write Documentation</a></li>
        <li><a href="./unit_test">Write Unit Tests</a></li>
      </ul>
    </div>
  </div>
</div>
