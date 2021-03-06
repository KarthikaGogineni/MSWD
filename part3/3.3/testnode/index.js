const express=require('express')
const app=express()

   const  persons= [
      {
        "content": "Arto Hellas",
        "number": "040-123456",
        "id": 1
      },
      {
        "content": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
      },
      {
        "content": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
      },
      {
        "content": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
      }
    ]

app.get('/api/persons',(request,response)=>{
    response.json(persons)
})

app.get('/info',(request,response)=>{
  const date=new Date()
  response.send(`<p>PhoneBook has info for ${persons.length} people</p>
                  <p>${date}</p>`)
})
app.get('/api/persons/:id',(request,response)=>{
  const id=Number(request.params.id)
  const person=persons.find(person=>person.id===id)
  if(person)
  response.json(person)
  else
  response.status(404).send(`<h1>${response.statusCode} The requested resource was not found.</h1>`)
})

const PORT=3001
app.listen(PORT)
console.log(`Server is running on port ${PORT}`)