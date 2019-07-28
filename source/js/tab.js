(function() {
  var tabBlock = document.querySelector('.tab');
  var currentTitle = tabBlock.querySelector('.tab__current-title');
  var currentTitleText = tabBlock.querySelector('.tab__title-text');
  var titlesList = tabBlock.querySelector('.tab__titles-list');
  var titlesListItems = titlesList.querySelectorAll('.tab__titles-item');
  var tabContent = tabBlock.querySelector('.tab__content');
  var tabContentItems = tabBlock.querySelectorAll('.tab__content-item');
  var firstElement = 0;

  currentTitle.addEventListener('click', function () {
    titlesList.classList.toggle('hidden');
  });

  titlesListItems.forEach(function(item, index) {
    item.addEventListener('click', function() {
      titlesList.classList.add('hidden');
      openContent(index);
      addTitleInCurrentTitle(index);
    });
  });

  var openContent = function(index) {
    tabContentItems.forEach(function(contentItem) {
      contentItem.classList.add('hidden');
    });
    tabContentItems[index].classList.remove('hidden');
  }

  var addTitleInCurrentTitle = function(index) {
    var titleText = titlesListItems[index].textContent;
    currentTitle.textContent = titleText;
  }

  var addFirstTitleInCurrentTitle = function() {
    currentTitle.textContent = titlesListItems[firstElement].textContent;
  }

  addFirstTitleInCurrentTitle();

  var removeCurrentClass = function() {
    titlesListItems.forEach(function(item) {
      item.classList.remove('current');
    });
  }

  var addFirstCurrentTitle = function () {
    titlesListItems[firstElement].classList.add('current');
  }

  if (document.body.clientWidth >= 768) {
    titlesListItems.forEach(function(item, index) {
      item.addEventListener('click', function() {
        titlesList.classList.add('hidden');
        removeCurrentClass();
        item.classList.add('current');
        openContent(index);
      });
    });

    addFirstCurrentTitle();
  }
})();
