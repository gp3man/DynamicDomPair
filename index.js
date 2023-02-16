const inputLink = document.getElementById('inputLink')
const inputName = document.getElementById('inputName')
const bookMarkList = document.getElementById('bookMarkList')
const addBtn = document.getElementById('addBtn')

class BookMark {
        constructor() {
        this.bookmarks = []
    }
    addBookMarks = function (linkName){
        this.bookmarks.push(linkName)
    }
    removeBookMarks = function (linkName) {
        this.bookmarks.map(index => {
            if (index === linkName) {
                
            }
        })
    }
}

const myBookMark = new BookMark()

// Function adds bookmarks to BookMark class and creates elements
addBtn.addEventListener('click', function() {
    const delBtn = document.createElement('button')
    delBtn.innerText = '-'

    const list = document.createElement('li')
    list.classList.add(`${inputName.value}`)
    list.innerHTML = `<a href="${inputLink.value}">${inputName.value}</a>`

    list.prepend(delBtn)
    bookMarkList.appendChild(list)
    myBookMark.addBookMarks(inputName.value)
    
    // Function that deletes bookmarks
    delBtn.addEventListener('click', function(){
        myBookMark.removeBookMarks(inputName.value)
    })
})

