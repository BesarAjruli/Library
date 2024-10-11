let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

function display () {
    document.querySelector("#libraryContainer").textContent = ""
    for (let i = 0; i < myLibrary.length; i++) {

        if (myLibrary[i] && typeof myLibrary[i] === 'object'){
        const container = document.createElement("div")
        const title = document.createElement("h3")
        const description = document.createElement("p")
        const cover = document.createElement("img")
        const pages = document.createElement("p")
        const remove = document.createElement("button")
        const stateShow = document.createElement("label")
        const state = document.createElement("input")

        
        cover.src = myLibrary[i].Cover
        title.textContent = myLibrary[i].Title
        description.textContent = myLibrary[i].Description
        pages.textContent = myLibrary[i].Pages
        remove.textContent = "Remove Book"
        stateShow.textContent = "Not Red"

        remove.addEventListener("click", () => {
            delete myLibrary[i]

            display()
        })

        container.setAttribute("class", "bookContainer")
        state.setAttribute("type", "checkbox")

        state.addEventListener("change", () => {
            if(state.checked){
                stateShow.textContent = "Readed"
            }
            else{
                stateShow.textContent = "Not Red"
            }
        })

        container.appendChild(cover)
        container.appendChild(title)
        container.appendChild(description)
        container.appendChild(pages)
        container.appendChild(remove)
        container.appendChild(stateShow)
        container.appendChild(state)

        document.querySelector("#libraryContainer").appendChild(container)
    }
    }
}

document.querySelector("#addBook").addEventListener("click", () => {
    document.querySelector("form").style.display = "block"
})

document.querySelector("#submit").addEventListener("click", (event) => {

    const coverImg = document.querySelector("#coverImg");
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const pages = document.querySelector("#pages")

    myLibrary.push({
        "Cover": coverImg.value,
        "Title": title.value,
        "Description": description.value,
        "Pages": pages.value,
        "Status": "not readed"
    });

    console.log(myLibrary)

    display()

    event.preventDefault()
})