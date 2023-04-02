
function toggleMenu(){

    document.getElementById('linkList').classList.toggle('linkListVisible')
    document.getElementById('burger').classList.toggle('burgerInXForm')

}

document.getElementById('burger').addEventListener('click', toggleMenu)
