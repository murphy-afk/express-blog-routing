import express from 'express';
import { posts } from '../data.js'

const router = express.Router();

// INDEX
router.get('/', (req, res) => {
  const result = {
    info: {
      count: posts.length,
    },
    result: posts,
  }
  res.json(result)
})

// SINGLE POST (SHOW)
router.get('/:id', (req, res) => {
  res.send('single post route')
})

// CREATE
router.post('/', (req, res) => {
  res.send('create new post route')
})

// UPDATE POST
router.put('/:id', (req, res) => {
  res.send('update existing post route')
})

// MODIFY 
router.patch('/:id', (req, res) => {
  res.send('modify existing post route')
})

// DELETE POST 
router.delete('/:id', (req, res) => {
  res.send('delete existing post')
})



export default router