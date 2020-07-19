const router = require('express').Router();
const JobRouter = require('./formSchema');


//Creat Job
router.post("/add", async (req, res) => {
    var data = new JobRouter({
        position: req.body.position,
        industry: req.body.industry,
        description: req.body.description,
        requirements: req.body.requirements,
        deadline: req.body.deadline
    });

    await data.save();
    res.json(data);
})

//Get Jop
router.get("/", async (req, res) => {
    var findData = await JobRouter.find();
    res.json(findData);
})

//Edit Jop
router.put("/edit", async (req, res) => {
    var edit = await JobRouter.update({ _id: req.body._id }, {
        $set: {
            position: req.body.position,
            industry: req.body.industry,
            description: req.body.description,
            requirements: req.body.requirements,
            deadline: req.body.deadline
        }
    });
    res.json(edit);
})

//Delete Job
router.delete("/del/:id", async (req, res) => {
    var delData = await JobRouter.findByIdAndRemove(req.params.id).then(e => {
        res.json({ message: "Deleted SucceessFully" })
    })
})


module.exports = router;