let clear =document.getElementById('clear')
let search = document.getElementById('search')
let word = document.getElementById('word')
let wClass = document.getElementById('word-class')
let example = document.getElementById('example')
let syno = document.getElementById('synonym')
let define = document.getElementById('define')
let box = document.getElementById('box')



let dictionary = [
{

    word:"Happy",
    meaning:"Feeling or showing pleasure or contentment",
    adj:"hapi",
    examp:"prakash came in looking happy and excited",
    syn:"Glad, Contented, Delighted, Cheerful",
},
{

    word:"Big",
    meaning:"Something Huge",
    adj:"huge",
    examp:"prakash came in looking for the big plate",
    syn:"Huge, Large, bogos, Opor",
},
{

    word:"Female",
    meaning:"They don't have sense",
    adj:"women",
    examp:"prakash came in looking for Trouble",
    syn:"Jackcactus, paula, Delight, precious",
},
{

    word:"Goal",
    meaning:"Agender, plan or motive",
    adj:"go-al",
    examp:"i have my goals for the year",
    syn:"plan, motives,agender",
},

]

search.addEventListener('keyup', (e)=>{

    if(e.key == 'Enter'){
        search.setAttribute('type', 'password', 'src', 'img')

      if(search.value == ''){
        alert('Input cant be empty')
      }  

      else{
        let result = dictionary.find((item)=> item.word.toLocaleLowerCase() == search.value.toLocaleLowerCase().trim())
        if(result){
        word.textContent = result.word
        wClass.textContent = result.adj
        define.textContent = result.meaning
        example.textContent = result.examp
        syno.textContent = result.syn
        search.value = ''
        box.style.display = 'block'
      }
      else{

        word.textContent = 'word not found'
        box.style.display = 'none'
      }
    }
}}
)