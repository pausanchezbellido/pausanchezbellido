import { animate, scroll, hover } from "motion";


document.querySelectorAll(".snap-page").forEach((section) => {
    const header = section.querySelector(".detector")
    scroll(animate(header, { y: [-400, 400]}, { ease: "linear" }), {
        target: header,
    })
})


hover(".enlace-menu", (element) => {
    animate(element, { scale: 1.3 })

    return () => animate(element, { scale: 1 })
})



hover(".proyecto", (element) => {
    element.style.zIndex = "10";
    animate(element, { scale: 1.1 })

    return () => {animate(element, { scale: 1 }); element.style.zIndex = "1";}
})