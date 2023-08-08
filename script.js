const input = document.querySelector('#input')
const submit = document.querySelector('#submit')
const list = document.querySelector('#root')

const LISTITEM = []


const printUI = () => {

  list.innerHTML = LISTITEM.map(v => {
    return `<li>${v}</li>`
  }).join('')
  input.value = '';
}


const addToList = () => {
  console.log('here')
  const text = input.value;
  LISTITEM.push(text)
  printUI()

}

input.addEventListener('keydown', (e)=> {
  console.log(e)
  if(e.keyCode === 13){
    addToList()
  }
})
submit.addEventListener('click', addToList)
