<script>
  export let name = 'bhaskar'
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<div>
  Your name is {name}
</div>

<button on:click={increment}>
  count is {count}
</button>
