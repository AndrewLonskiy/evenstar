const main = document.getElementById('main');

getData('https://jsonplaceholder.typicode.com/photos')
    .then((json) => {
        console.log(json);
        console.log('WWWWWWWWW');
        console.log('WWWWWWWWW');
        console.log('WWWWWWWWW');
        console.log('WWWWWWWWW');
        let list = new Blabla(json, main, 9);
        list.render();
    });


class Blabla {

    /**
     * @param arr Array of data elements;
     * @param pageElem html tag where we want our element to be placed in;
     * @param itemsOnPage number of elem that we want to be placed in one iteration;
     */
    constructor(arr, pageElem, itemsOnPage) {
        this.arr = arr;
        this.pageElem = pageElem;
        this.itemsOnPage = itemsOnPage;
        this.count = 1;
    }

    /**
     * function that puts elems from array to our html page according to counter;
     */
    renderArrToPage() {

        let start = (this.count - 1) * this.itemsOnPage;
        let end = (this.count * this.itemsOnPage);

        this.arr.forEach((item, index) => {
            if (index >= start && index < end) {

                let img = document.createElement('img');
                img.style.width = "100%";
                img.src = item.url;
                this.pageElem.appendChild(img);

            }
        });
        this.count++;
    }

    /**
     * this func upload first elems from array & add next elems by scrolling the page;
     */
    render() {
        this.renderArrToPage();
        window.addEventListener('scroll', () => {

            if (document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight) {
                this.renderArrToPage();
            }
        });

    }
}


function getData(url) {
    return fetch(url)
        .then(response => response.json())
}


