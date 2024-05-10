function dialogs() {
    const dialogBtns = document.querySelectorAll("[data-dialog]");
    const dialogs = document.querySelectorAll(".dialog");
    dialogBtns.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            toggleDialog();
        });
    });
    dialogs.forEach((dialog)=>{
        dialog.addEventListener("click", ()=>{
            toggleDialog();
        });
    });
    function toggleDialog() {
        const dialog = document.querySelector(".dialog");
        dialog.classList.toggle("hidden");
        dialog.classList.toggle("open");
        dialogBtns.forEach((btn)=>{
            btn.classList.toggle("hidden");
        });
    }
}
dialogs();
const returnTopBtn = document.querySelector(".return-top");
returnTopBtn.addEventListener("click", ()=>{
    window.scrollTo(0, 0);
});

//# sourceMappingURL=index.042ba815.js.map
