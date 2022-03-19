export const myaccordion = () => {
    const el = document.querySelectorAll('.faq__listItemQuestionPlus');

    el.forEach(item => {
        item.addEventListener('click', function () {
            let parent = this.parentElement.parentElement;
            let content = parent.querySelector('.faq__listItemContent');
            $(content).slideToggle();
            $(parent).toggleClass("is-active");
        })
    });
}