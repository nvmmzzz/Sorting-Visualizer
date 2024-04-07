async function heapify(ele, n, i, delay) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && parseInt(ele[l].style.height) > parseInt(ele[largest].style.height)) {
        largest = l;
    }

    if (r < n && parseInt(ele[r].style.height) > parseInt(ele[largest].style.height)) {
        largest = r;
    }

    if (largest !== i) {
        ele[i].style.background = 'blue';
        ele[largest].style.background = 'blue';
        await waitforme(delay);

        swap(ele[i], ele[largest]);

        ele[i].style.background = 'cyan';
        ele[largest].style.background = 'cyan';

        await heapify(ele, n, largest, delay);
    }
}

async function heapSort() {
    console.log('In heapSort()');
    const ele = document.querySelectorAll(".bar");
    const n = ele.length;
    const delay = 200;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(ele, n, i, delay);
    }

    // Heap sort
    for (let i = n - 1; i > 0; i--) {
        ele[i].style.background = 'blue';
        ele[0].style.background = 'blue';
        await waitforme(delay);

        swap(ele[0], ele[i]);

        ele[i].style.background = 'green';
        ele[0].style.background = 'green';

        await heapify(ele, i, 0, delay);
    }

    ele[0].style.background = 'green';
}

const heapSortbtn = document.querySelector(".heapSort");
heapSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await heapSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
