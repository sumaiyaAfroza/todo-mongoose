import express from "express";
import Crud from '../schemas/todoSchema.js'

const router = express.Router()
// get all item
router.get('/', async (req, res) => {
  try{
   const data = await Crud.find({status: "active"}).select('-__v -date').limit(2)
    res.json({
      message: 'success',
      result: data
    })
  }
  catch(error){
    console.error(error)
  }
})

// get single item
router.get('/:id', async (req, res) => {
  try{
   const data = await Crud.findById(req.params.id)
   // const data = await Crud.findOne({_id: req.params.id})
    res.json({
      message: 'get docs',
      result: data
    })
  }
  catch(error){
    console.error(error)
  }
})

//
router.post('/', async (req, res) => {
  try{
    await Crud.create(req.body)
    res.json({
      message: 'todo inserted'
    })
  }
  catch(error){
    console.error(error)
  }
})

router.post('/all', async (req, res) => {

  try{
    await Crud.insertMany(req.body)
    res.json({
      message: 'todo inserted'
    })
  }
  catch(error){
    console.error(error)
  }
})


router.put('/:id', async (req, res) => {

  try{
   const updateTodo =  await Crud.findByIdAndUpdate(
     req.params.id,
     {$set: req.body},
     {new: true, runValidators: true}
     )
    res.json({
      message: 'todo update',
      result:  updateTodo
    })
  }
  catch(error){
    console.error(error)
  }
})








router.delete('/:id', async (req, res) => {
  try{
    const data = await Crud.findByIdAndDelete(req.params.id)
    res.json({
      message: 'deleted',
      result: data
    })
  }
  catch(error){
    console.error(error)
  }
})

export default router
