import express, { Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes'

const app: Express = express()
const PORT: string | number = process.env.PORT || 4001

app.use(cors())
app.use(router)

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.ztiki.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
// mongodb+srv://dev:<password>@cluster0.ztiki.mongodb.net/<dbname>?retryWrites=true&w=majority
const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.set('useFindAndModify', false)
mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })
