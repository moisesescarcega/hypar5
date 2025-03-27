<script lang="ts">
  import { page } from '$app/stores';
  import { Modal, DarkMode, Button } from 'flowbite-svelte';
  let navItems = ['Visualization', 'About'];
  let activeItem = 'Visualization';
  function routePage(item: string) {
    if (item === 'Visualization') {
      return '/';
    } else {
      return `/${item.toLowerCase()}`;
    }
  }
  let scrollingModal = false;
</script>

<header class="bg-gradient-to-b from-blue-50 to-blue-100 dark:bg-gradient-to-b dark:from-gray-600 dark:to-gray-800 dark:text-white">
  <nav class="flex flex-row items-center">
    <ul class="flex-grow">
      <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
        <button class="button" id="introButton" onclick={() => scrollingModal = true}>
          Intro
        </button>
      </li>
      {#each navItems as item}
        <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
          <a class="button" href={routePage(item)}
            class:active={activeItem === item}
            onclick={() => activeItem = item}
          >
            <button class="button">{item}</button>
          </a>
        </li>
      {/each}
    </ul>
    <DarkMode class="flex-none" />
  </nav>
</header>
<Modal title="Intro" bind:open={scrollingModal} autoclose outsideclose>
  <h2 slot="header">Hypar Geometry of Concrete Shells</h2>
  <div class="h-[400px] overflow-y-auto p-4">
    <p>
      Félix Candela made a profound impact on modern architecture with his innovative thin-shell concrete structures. 
      Built during the 1950s and 1960s, these remarkable structures applied a European-derived construction technique 
      that flourished spectacularly in Mexico. 
      Through his work, Candela redefined structural design by masterfully utilizing the hyperbolic paraboloid, a geometric 
      form that maximized structural efficiency, simplified construction, and offered striking aesthetic possibilities.
    </p>
    <p>
      Born in Madrid on January 27, 1910, Candela graduated from the Madrid School of Architecture in 1935. A participant 
      in the Spanish Civil War (1936–1939) as a volunteer in the Republican Army, he sought exile in Mexico in 1939 and 
      became a Mexican citizen in 1941. In 1949, he built his first experimental shell structure and founded Cubiertas Ala, 
      a company through which he designed and constructed the groundbreaking works that gained him worldwide recognition. 
      From 1953 to 1971, he was a professor at the National School of Architecture at the National Autonomous University 
      of Mexico (UNAM). In 1971, he moved to the United States, where he continued his professional career until his 
      passing in Raleigh, North Carolina, on December 7, 1997.
    </p>
  </div>
  <svelte:fragment slot="footer">
    <Button outline onclick={() => scrollingModal = false}>Close</Button>
  </svelte:fragment>
</Modal>

<style>
  header {
    font-size: 0.8rem;
    width: 100%;
    padding: 0.2rem 1rem;
    backdrop-filter: blur(10px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
  }

  nav {
    /* max-width: 1200px; */
    margin: 0 auto;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .button {
    background: none;
    border: none;
    font-size: 0.8rem;
    cursor: pointer;
    padding: 0.5rem;
    transition: all 0.3s ease;
  }

  .button:hover {
    transform: translateY(-2px);
  }

  .button.active {
    font-weight: bold;
    border-bottom: 1px solid #1a252f;
  }
  :global(.dark) .button.active {
    border-color: #e5e7eb;
  }
</style>
  