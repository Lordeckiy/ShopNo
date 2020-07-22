
window.addEventListener('load', function () {

    const imgs = document.querySelectorAll('.img')

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener('click', function () {
            let btn = this.querySelector('.arrow');
            let moreText = this.querySelector('.more');
            let changeMain = this.querySelector('.text');
            let changeSpan = this.querySelector('.text-span');
            btn.classList.toggle('arrow-for');
            changeMain.classList.toggle('for-main',);
            changeSpan.classList.toggle('for-main');

            if (moreText.style.display === 'none') {
                moreText.style.display = 'block';
                btn.innerHTML = '<i class="fa fa-times" style="color: black"></i>';
            }
            else {
                moreText.style.display = 'none';
                btn.innerHTML = 'Know more <i class="fa fa-arrow-right"></i>';
            }
        })
    }


    const image = document.querySelectorAll('.images-team');

    for (let i = 0; i < image.length; i++) {
        image[i].addEventListener('click', function () {
            let inside = this.querySelector('.inside');

            if (inside.style.display === 'none') {
                inside.style.display = 'block';
            }
            else {
                inside.style.display = 'none';
            }
        })
    }
})
