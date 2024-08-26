/*#region Card Services */

function ShowLongDescription(event)
{
    let target = event.target;
    
    if (!target.matches('.card-services__btn')) return;

    let card = target.parentElement;
    card.classList.toggle('card-services_long-description-open');
    
    let showMoreBtn = card.querySelector('.card-services__btn_show-more');
    showMoreBtn.classList.toggle('_display-none');

    let showLessBtn = card.querySelector('.card-services__btn_show-less');
    showLessBtn.classList.toggle('_display-none');

}

document.addEventListener('click', ShowLongDescription);

/*#endregion */


/*#region Hamburger Button */

function toggleOpenMenu(event)
{
    let target = event.target;

    if (!target.matches(".hamburger-btn")) return;

    target.classList.toggle('hamburger-btn_open');

};

document.addEventListener('click', toggleOpenMenu);

/*#endregion */