/*
 ************************************
 * 1. Writing effect - Hero Animation
 ************************************
 */
document.addEventListener('DOMContentLoaded', function () {
  const elms1 = document.getElementById("myname").getElementsByTagName("path");
  const elms2 = document.getElementById("myarea").getElementsByTagName("path");
  const elms = Array.from(elms1).concat(Array.from(elms2));
  let array = [];
  for (let i = 0; i <= elms.length - 1; i++) {
    array.push(elms[i].id);
  }
  lineDrawingEffect(array);
  function lineDrawingEffect(objIdArray) {
    const arrayLength = objIdArray.length;
    for (let i = 0; i < arrayLength; i++) {
      let svgPath = document.getElementById(objIdArray[i]);
      if (svgPath != null) {
        let svgPathLength = svgPath.getTotalLength();
        let dy = i;
        if (dy != 0) dy = dy * 1000 / 4;
        let dy2 = i;
        if (dy2 != 0) dy2 = dy2 * 1000 / 3;
        setTimeout(function () {
          gsap.fromTo(svgPath, 3, { strokeDashoffset: svgPathLength, strokeDasharray: svgPathLength, strokeOpacity: 1 }, { strokeDashoffset: 0 });
        }, (dy));
        setTimeout(function () {
          gsap.fromTo(svgPath, 10, { fillOpacity: 0, strokeOpacity: 1 }, { fillOpacity: 1, strokeOpacity: 0 });
        }, (dy2));
      }
    }
  }
});




/*
 ************************************************************
 * 2. The sequence of appearance of elements - Hero Animation
 ************************************************************
 */
document.addEventListener('DOMContentLoaded', function () {

  gsap.fromTo(".hero-col-img", { opacity: 0 }, { opacity: 1, duration: 1, delay: 10 });
  gsap.fromTo(".hero-buttons", { opacity: 0 }, { opacity: 1, duration: 6, delay: 4 });

});