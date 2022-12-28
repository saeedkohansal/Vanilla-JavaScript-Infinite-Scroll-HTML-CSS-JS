// Display scroll postion info | `.scroll-position`
function scrollPosition() {
    /* ---------------- */
    /* Getting elements */
    /* ---------------- */
    const startOfThePageElem = document.querySelector(".start-of-the-page");
    const endOfThePageElem = document.querySelector(".end-of-the-page");
    const innerHeightElem = document.querySelector(".inner-height");
    const ipageYOffsetElem = document.querySelector(".page-y-offset");
    const offsetHeightElem = document.querySelector(".offset-height");
    const scrolledPercentageElem = document.querySelector(".scrolled-percentage");
    const scrolledPercentageCalc = window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;

    /* ---------------------------- */
    /* Display scroll position data */
    /* ---------------------------- */
    if (window.pageYOffset == 0) {
        startOfThePageElem.innerHTML = 'Start Of The Page: <span class="true">true</span>';
    } else {
        startOfThePageElem.innerHTML = 'Start Of The Page: <span class="false">false</span>';
    }
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        endOfThePageElem.innerHTML = 'End Of The Page: <span class="true">true</span>';
    } else {
        endOfThePageElem.innerHTML = 'End Of The Page: <span class="false">false</span>';
    }

    innerHeightElem.innerHTML = 'window.innerHeight: <span class="integer">' + window.innerHeight + '</span>';
    ipageYOffsetElem.innerHTML = 'window.pageYOffset: <span class="integer">' + window.pageYOffset + '</span>';
    offsetHeightElem.innerHTML = 'document.body.offsetHeight: <span class="integer">' + document.body.offsetHeight + '</span>';
    scrolledPercentageElem.innerHTML = 'Scroll Percentage: <span class="percentage">' + parseInt(scrolledPercentageCalc) + '%</span>';
}


// Run when page is loaded
scrollPosition();


// Run when page is being scrolled
window.addEventListener("scroll", scrollPosition);