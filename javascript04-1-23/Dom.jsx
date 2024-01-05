// document.addEventListener("DOMContetnLoaded", ready);

// <script>
//     function ready() {
//         alert('Dom is ready')
        
//         alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
//     }
// </script>
// /* <img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0"> */}
{/* <script>
  function ready() {
    alert('DOM is ready');

    // image is not yet loaded (unless it was cached), so the size is 0x0
    alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
  }

  document.addEventListener("DOMContentLoaded", ready);
</script>

<img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0"></img> */}
<script>
  document.addEventListener("DOMContentLoaded", () => {
    alert("DOM ready!");
  });
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js"></script>

<script>
  alert("Library loaded, inline script executed");
</script>