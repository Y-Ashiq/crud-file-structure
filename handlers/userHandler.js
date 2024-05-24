import fs from 'fs'

const users = JSON.parse(fs.readFileSync('./models/users.json'))



const getUser = (req, res) => {

    res.status(200).json(users)
}


const postUser = (req, res) => {

    users.push(req.body);
    fs.writeFileSync('./models/users.json', JSON.stringify(users));

    res.status(201).json({
        "message": "user added succefully"
    })



}

const updateUser = (req, res) => {

    const id = req.params.id * 1;
    const result = users.find(el => el.id == id)

    if (result === undefined) {

        res.status(404).json({
            "message": "sorryt user not found"
        })
    } else {
        const {
            name,
            email
        } = req.body;

        result.name = name;
        result.email = email;

        fs.writeFileSync('./models/users.json', JSON.stringify(users));
        res.status(201).json({

            message: "user updated succesfully"
        })
    }
}

const getAllUsers = (req, res) => {

    const id = req.params.id * 1;
    const result = users.find(el => el.id == id)

    if (result === undefined) {

        res.status(404).json({
            "message": "sorryt user not found"
        })
    } else {

        res.status(201).send(result)
    }
}

const deleteUser = (req, res) => {

    const id = req.params.id * 1;
    const index = users.findIndex(el => el.id == id)

    if (index != -1) {
        users.splice(index, 1);
        fs.writeFileSync('./models/users.json', JSON.stringify(users));
        res.status(200).json({
            message: 'user  deleted'
        });

    } else {



        res.status(404).json({
            "message": "sorry user not found"
        })
    }





}
export default {
    getUser,
    postUser,
    updateUser,
    getAllUsers,
    deleteUser
}