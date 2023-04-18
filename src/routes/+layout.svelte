<script>
  import "../app.css";
</script>

<svelte:head>
  <title>title</title>
</svelte:head>

<div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <slot />
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden"
      >Open drawer</label
    >
  </div>
  <div class="drawer-side border border-red-400">
    <label for="my-drawer-2" class="drawer-overlay" />
    <ul class="menu p-4 w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a href="/explain">Explain Code</a></li>
      <li><a href="/explain">Time Complexity</a></li>
      <li><a href="/explain">Translate Code</a></li>
    </ul>
  </div>
</div>
