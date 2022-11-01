let importSaveEl = document.getElementById("import-save-el")
let importCountEl = document.getElementById("import-count-el")
let countImp = 0

function increment() {
    countImp += 1
    importCountEl.textContent = countImp
}

function saveImp() {
    let countImpStr = countImp + " - "
    importSaveEl.textContent += countImpStr
    importCountEl.textContent = 0
    countImp = 0
}

let exportSaveEl = document.getElementById("export-save-el")
let exportCountEl = document.getElementById("export-count-el")
let countExp = 0

function decrement() {
    countExp += 1
    exportCountEl.textContent = countExp
}

function saveExp() {
    let countExpStr = countExp + " - "
    exportSaveEl.textContent += countExpStr
    exportCountEl.textContent = 0
    countExp = 0
}