(function () {

  let field = document.querySelector('.row');
  let li = Array.from(field.children);
  function SortProduct() {
    let select = document.getElementById('select2');
    let ar = [];
    for (let i of li) {
      const last = i.lastElementChild.firstElementChild;
      const x = last.textContent.trim();
      const y = Number(x.substring(0, 1));
      i.setAttribute("data-category", y);
      ar.push(i);
    }
    this.run = () => {
      addevent();
    }
    function addevent() {
      select.onchange = sortingValue;
    }
    function sortingValue() {

      if (this.value === 'default') {
        while (field.firstChild) { field.removeChild(field.firstChild); }
        field.append(...ar);
      }
      if (this.value === 'rating') {
        SortElem(field, li, true)
      }
    }
    function SortElem(field, li, asc) {
      let dm, sortli;
      dm = asc ? 1 : -1;
      sortli = li.sort((a, b) => {
        const ax = a.getAttribute('data-category');
        const bx = b.getAttribute('data-category');
        return ax > bx ? (1 * dm) : (-1 * dm);
      });
      while (field.firstChild) { field.removeChild(field.firstChild); }
      field.append(...sortli);
    }
  }
  new SortProduct().run();
})();