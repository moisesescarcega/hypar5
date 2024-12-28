<script lang="ts">
    let navItems = ['Intro', 'Visualization', 'About'];
    let activeItem = 'Visualization';
  </script>
  
  <header>
    <nav>
      <ul>
        {#each navItems as item}
          <li>
            <button 
              class:active={activeItem === item}
              on:click={() => activeItem = item}
            >
              {item}
            </button>
          </li>
        {/each}
      </ul>
    </nav>
  </header>
  
  <style>
    header {
      font-size: 0.8rem;
      width: 100%;
      padding: 0.1rem 1rem;
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
    }
  
    nav {
      max-width: 1200px;
      margin: 0 auto;
    }
  
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      gap: 2rem;
      justify-content: center;
    }
  
    button {
      background: none;
      border: none;
      color: #2c3e50;
      font-size: 0.8rem;
      cursor: pointer;
      padding: 0.5rem 1rem;
      transition: all 0.3s ease;
    }
  
    button:hover {
      color: #1a252f;
      transform: translateY(-2px);
    }
  
    button.active {
      color: #1a252f;
      font-weight: bold;
      border-bottom: 1px solid #1a252f;
    }
  </style>
  