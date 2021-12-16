const express = require('express')
const Sequelize = require('sequelize');

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const sequelize = new Sequelize('sequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const {Hewan} = require('./models')

sequelize
    .authenticate()
    .then(() => {
    console.log("Connection has been established successfully.");
    })
    .then(() => {
    Hewan.sync().then(() => console.log("table hewan created"));
    })
    .catch((err) => {
    console.error("Unable to connect to the database:", err);
    });


app.get('/hewan', async (req, res) =>{
    try {
        const hewans = await Hewan.findAll()
        res.status(200).json(hewans)
    } catch (error) {
        res.status(500).json({
            message: error.message || `internal server error`
        })
    }
})

app.get('/hewan/:id', async (req, res) =>{
    try {
        let {id} = req.params
        const findHewan = await Hewan.findOne({where: {id:parseInt(id)}})
        res.status(200).json(findHewan)
    } catch (error) {
        res.status(500).json({
            message: error.message || `internal server error`
        })
    }
})

app.post('/hewan', async (req, res) =>{
    try {
        const {id, nama, namaSpesies, umur} = req.body
        const newHewanData = {
            id: parseInt(id),
            nama: nama,
            namaSpesies: namaSpesies,
            umur: parseInt(umur)
        }
        const addHewan = await Hewan.create(newHewanData)
        res.status(200).json({
            addHewan
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || `internal server error`
        })
    }
})

app.patch('/hewan/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const {nama, namaSpesies, umur} = req.body;
        const dataHewan = {
          nama: nama,
          namaSpesies: namaSpesies,
          umur: parseInt(umur)
        };
        await Hewan.update(dataHewan, { where: { id: parseInt(id) } });
        res.status(200).json({
          message: "Updated",
          data: dataHewan,
        });
      } catch (error) {
        res.status(500).send({
          message: error.message,
        });
      }
})

app.delete('/hewan/:id', async (req, res) =>{
    try {
        const {id} = req.params;
        await Hewan.destroy({ where: { id: parseInt(id) } });
        res.status(200).json({
          message: "Deleted",
        });
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
})

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})