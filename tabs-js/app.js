const tabsNavBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');

// tabsNavBtn.forEach((item) => { // вешаем обработчик событий "клик" на кнопки табов
//   item.addEventListener('click', () => {
//     let currentBtn = item; // присваиваем переменной currenBtn наш обработчик который сидит в item
//     let tabId = currentBtn.getAttribute('data-tab'); // получить атрибут каждого id куда мы нажали
//     let currentTab = document.querySelector(tabId); // Селектор по Id кнопки на которую мы нажали
    
//     if(!currentBtn.classList.contains('active')) { // если у кнопки класса актив нет, то делаем эти действия
//       tabsNavBtn.forEach((item) => {
//         item.classList.remove('active'); // удаляем класс актив у кнопок
//       });
  
//       tabsItems.forEach((item) => {
//         item.classList.remove('active'); // удаляем класс актив у табов
//       });
  
//       currentBtn.classList.add('active'); // добавляем новый класс
//       currentTab.classList.add('active'); // добавляем класс в табы
//     }

   
//   });
// });



const onTabClick = (item) => {
  item.addEventListener('click', () => {
    let currentBtn = item; // присваиваем переменной currenBtn наш обработчик который сидит в item
    let tabId = currentBtn.getAttribute('data-tab'); // получить атрибут каждого id куда мы нажали
    let currentTab = document.querySelector(tabId); // Селектор по Id кнопки на которую мы нажали
    
    if(!currentBtn.classList.contains('active')) { // если у кнопки класса актив нет, то делаем эти действия
      tabsNavBtn.forEach((item) => {
        item.classList.remove('active'); // удаляем класс актив у кнопок
      });
  
      tabsItems.forEach((item) => {
        item.classList.remove('active'); // удаляем класс актив у табов
      });
  
      currentBtn.classList.add('active'); // добавляем новый класс
      currentTab.classList.add('active'); // добавляем класс в табы
    }

   
  });
}
tabsNavBtn.forEach(onTabClick);
document.querySelector('.tabs__nav-btn').click();