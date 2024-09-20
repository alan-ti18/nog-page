const btnTopo = document.querySelector(".btn-topo");
    function handleBtnTopo() {
      window.addEventListener("scroll", () => {
        console.log(window.scrollY);
        window.scrollY > 100
          ? (btnTopo.style.display = "flex")
          : (btnTopo.style.display = "none");
      });
    }
    handleBtnTopo();