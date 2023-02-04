const circle = document.getElementsByClassName("point__progress__circle");
const circleBox = document.querySelector(".point__progress__ring");

if (circle) {
    for(let i = 0; i < circle.length; i++) {

    
  
    const radius = circle[i].r.baseVal.value;
    const circumference = radius * 2 * Math.PI;

    circle[i].style.strokeDasharray = `${circumference} ${circumference}`;
    circle[i].style.strokeDashoffset = `${circumference}`;

    function setProgress(percent) {
      const offset = circumference - (percent / 100) * circumference;
      circle[i].style.strokeDashoffset = offset;
    }

    //set initial progress value to zero
    setProgress(0);

    //use intersection observer to detect when in view
    function handleIntersection(entries) {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          setProgress(100);
          observer.unobserve(entry.target);
        }
      });
    }

    const observer = new IntersectionObserver(handleIntersection);

    observer.observe(circleBox[i]);
  
}
}
